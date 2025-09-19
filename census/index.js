// import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

// Census: Race Data
// year slider
let censusSlider = document.getElementById("census-year");
let censusYearDisp = document.getElementById("census-year-ind");

censusYearDisp.innerHTML = censusSlider.value;

// Define country, states, and counties
const nation = topojson.feature(us, us.objects.nation)
const statemap = new Map(topojson.feature(us, us.objects.states).features.map(d => [d.id, d]))
const countymap = new Map(topojson.feature(us, us.objects.counties).features.map(d => [d.id, d]))

// Construct a path generator
const path = d3.geoPath();

// Construct the radius scale
const radius = d3.scaleSqrt().domain([0, 50000]).range([0, 50]);
const format = d3.format(",.0f");
let legend;

// SVG map
var svg = d3.select("#census-geo")
	.attr("width", 975)
	.attr("height", 610)
	.attr("viewBox", [0, 0, 975, 610])
	.attr("style", "width: 100%; height: auto; margin: auto;");

	// Create the cartographic background layers.
svg.append("path")
	.datum(topojson.feature(us, us.objects.nation))
	.attr("fill", "#ddd")
	.attr("d", path);

svg.append("path")
	.datum(topojson.mesh(us, us.objects.states, (a, b) => a !== b))
	.attr("fill", "none")
	.attr("stroke", "white")
	.attr("stroke-linejoin", "round")
	.attr("d", path);

let svgCircles = document.querySelectorAll("svg circle");

let censusYear = censusSlider.value;
let population = censusPopulationExtractor();
let data = obtainPopulationData();
plotCircles();

censusSlider.oninput = function() {
  censusYearDisp.innerHTML = this.value;
  censusYear = this.value;
  population = censusPopulationExtractor();
  data = obtainPopulationData();
  document.querySelectorAll("svg g circle").forEach(e => e.remove());
  plotCircles();
}

function centroid(feature) {
	const path = d3.geoPath();
	return feature => path.centroid(feature);
}

function censusPopulationExtractor() {
  if (censusYear == 1990){
    return census1990race
		.slice(1) // removes a header line
		.map(([p, state, county]) => ({
			state,
			fips: `${state}${county}`,
			population: +p
		}))
  }

  else if (censusYear == 2000){
    return census2000race
		.slice(1) // removes a header line
		.map(([p, state, county]) => ({
			state,
			fips: `${state}${county}`,
			population: +p
		}))
  }

  else if (censusYear == 2010){
    return census2010race
		.slice(1) // removes a header line
		.map(([p, state, county]) => ({
			state,
			fips: `${state}${county}`,
			population: +p
		}))
  }

  else if (censusYear == 2020){
    return census2020race
		.slice(1) // removes a header line
		.map(([p, state, county]) => ({
			state,
			fips: `${state}${county}`,
			population: +p
		}))
  }
}

function obtainPopulationData() {
	// Join the geographic shapes and the population data.
	var data = population.map((d) => ({
		...d,
		county: countymap.get(d.fips),
		state: statemap.get(d.state)
	}))
		.filter(d => d.county)
		.sort((a, b) => d3.descending(a.population, b.population));

	return data;
}

function plotCircles() {
	svg.append("g")
		.attr("fill", "#085C4C")
		.attr("fill-opacity", 0.3)
		.attr("stroke", "#fff")
		.attr("stroke-width", 0.5)
		.selectAll()
		.data(data)
		.enter().append("circle")
			.attr("transform", d => `translate(${d3.geoPath().centroid(d.county)})`)
			.attr("r", d => radius(d.population))
			.append("title")
			.text(d => `${d.county.properties.name} County, ${d.state.properties.name}
${format(d.population)}`);

	legend = svg.append("g")
			.attr("fill", "#777")
			.attr("transform", "translate(900,600)")
			.attr("text-anchor", "middle")
			.style("font", "10px Raleway")
		.selectAll()
			.data(radius.ticks(4).slice(1))
		.enter().append("g");

	legend.append("circle")
		.attr("fill", "none")
		.attr("stroke", "#ccc")
		.attr("cy", d => -radius(d))
		.attr("r", radius);

	legend.append("text")
		.attr("y", d => -2 * radius(d))
		.attr("dy", "0.85em")
		.text(radius.tickFormat(4, "s"))
		.style("font", "10px Raleway");
}


function animateNumber(elementId, startValue, endValue, duration) {
    const targetElement = document.getElementById('count-2024');
    let currentValue = startValue;
    const intervalTime = 40; // milliseconds
    const totalSteps = duration / intervalTime;
    const increment = (endValue - startValue) / totalSteps;

    const interval = setInterval(() => {
        currentValue += increment;
        if (currentValue >= endValue) {
            currentValue = endValue; // Ensure it ends exactly at endValue
            clearInterval(interval);
        }
        targetElement.innerHTML = Math.round(currentValue).toLocaleString('en-US'); // Display rounded number
    }, intervalTime);
}

// Example usage:
// Assuming you have an HTML element like: <span id="myNumber">0</span>
animateNumber('myNumber', 350915, 380382, 1000); // Animate from 0 to 100 over 2 seconds