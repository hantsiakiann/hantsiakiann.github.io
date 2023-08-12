// JSON with predictions for presidential race
const pres_pred = {"all": {Class: "county", DPP: 39.7858823529412, KMT: 28.0589705882353, TPP: 32.1551470588235, Rating: "Likely DPP", Chance: 77.7290227220323, Fill: "rgb(138,200,149)", Hover: "rgb(101,179,115)"},
	"taipei": {Class: "taipei", DPP: 33.4369874442763, KMT: 29.4342225102867, TPP: 37.128790045437, Rating: "Lean TPP", Chance: 64.4003315800636, Fill: "rgb(181,236,236)", Hover: "rgb(151,220,220)"},
	"new_taipei": {Class: "new-taipei", DPP: 37.1560817026421, KMT: 27.9506692465825, TPP: 34.8932490507755, Rating: "Tossup", Chance: 58.9509443348271, Fill: "rgb(193,226,198)", Hover: "rgb(163,205,171)"},
	"taoyuan": {Class: "taoyuan", DPP: 37.5924092685582, KMT: 27.4167032503117, TPP: 34.9908874811301, Rating: "Lean DPP", Chance: 60.2626804850662, Fill: "rgb(189,224,195)", Hover: "rgb(159,204,167)"},
	"taichung": {Class: "taichung", DPP: 35.9449098188355, KMT: 30.4314726575993, TPP: 33.6236175235652, Rating: "Tossup", Chance: 59.1781178520525, Fill: "rgb(192,225,198)", Hover: "rgb(163,205,171)"},
	"tainan": {Class: "tainan", DPP: 51.4869006861181, KMT: 20.1897935587717, TPP: 28.3233057551102, Rating: "Safe DPP", Chance: 98.9730675751446, Fill: "rgb(76,170,93)", Hover: "rgb(30,149,52)"},
	"kaohsiung": {Class: "kaohsiung", DPP: 49.3114210269417, KMT: 23.1095589472757, TPP: 27.5790200257827, Rating: "Safe DPP", Chance: 98.5118874425821, Fill: "rgb(77,171,94)", Hover: "rgb(32,150,53)"},
	"keelung": {Class: "keelung", DPP: 33.828840980717, KMT: 33.4197302128349, TPP: 32.7514288064481, Rating: "Tossup", Chance: 51.6316606579183, Fill: "rgb(214,236,218)", Hover: "rgb(188,216,193)"},
	"yilan": {Class: "yilan", DPP: 44.8674826558913, KMT: 22.7595028317635, TPP: 32.3730145123452, Rating: "Likely DPP", Chance: 89.4249152544788, Fill: "rgb(104,184,118)", Hover: "rgb(62,163,81)"},
	"hsinchu_county": {Class: "hsinchu-county", DPP: 28.1450591748345, KMT: 35.1303201975593, TPP: 36.7246206276062, Rating: "Tossup", Chance: 56.3334964639486, Fill: "rgb(204,241,241)", Hover: "rgb(176,224,224)"},
	"hsinchu_city": {Class: "hsinchu-city", DPP: 33.097803867279, KMT: 23.4868447057023, TPP: 43.4153514270188, Rating: "Likely TPP", Chance: 84.8906490401622, Fill: "rgb(125,221,221)", Hover: "rgb(87,208,208)"},
	"miaoli": {Class: "miaoli", DPP: 30.3262469077324, KMT: 36.6022179450316, TPP: 33.071535147236, Rating: "Lean KMT", Chance: 63.7981373748627, Fill: "rgb(169,169,221)", Hover: "rgb(136,136,201)"},
	"changhua": {Class: "changhua", DPP: 39.4048759933152, KMT: 26.4147991374546, TPP: 34.1803248692302, Rating: "Lean DPP", Chance: 69.932325397201, Fill: "rgb(161,210,169)", Hover: "rgb(127,190,139)"},
	"nantou": {Class: "nantou", DPP: 34.8517361059517, KMT: 34.0384450276163, TPP: 31.109818866432, Rating: "Tossup", Chance: 53.2409887022283, Fill: "rgb(210,234,213)", Hover: "rgb(182,213,188)"},
	"yunlin": {Class: "yunlin", DPP: 43.9393191778506, KMT: 25.4116285528442, TPP: 30.6490522693051, Rating: "Likely DPP", Chance: 90.8080417876784, Fill: "rgb(100,182,114)", Hover: "rgb(58,161,76)"},
	"chiayi_county": {Class: "chiayi-county", DPP: 47.3022035041714, KMT: 22.3793939610229, TPP: 30.3184025348057, Rating: "Safe DPP", Chance: 95.5281976953043, Fill: "rgb(86,175,102)", Hover: "rgb(42,154,62)"},
	"chiayi_city": {Class: "chiayi-city", DPP: 42.2267530740533, KMT: 26.8592160032497, TPP: 30.9140309226969, Rating: "Likely DPP", Chance: 87.1029732462165, Fill: "rgb(111,187,124)", Hover: "rgb(70,166,87)"},
	"pingtung": {Class: "pingtung", DPP: 48.8545658630544, KMT: 23.4588986653128, TPP: 27.6865354716328, Rating: "Safe DPP", Chance: 98.2861716337048, Fill: "rgb(78,171,95)", Hover: "rgb(33,150,54)"},
	"hualien": {Class: "hualien", DPP: 25.9564408659671, KMT: 49.0219602217968, TPP: 25.0215989122361, Rating: "Safe KMT", Chance: 98.9460094168037, Fill: "rgb(54,54,174)", Hover: "rgb(4,4,154)"},
	"taitung": {Class: "taitung", DPP: 27.6604461987876, KMT: 46.7699936276559, TPP: 25.5695601735566, Rating: "Safe KMT", Chance: 97.1994801440322, Fill: "rgb(60,60,177)", Hover: "rgb(11,11,157)"},
	"penghu": {Class: "penghu", DPP: 37.7037438499354, KMT: 30.4350614647568, TPP: 31.8611946853078, Rating: "Lean DPP", Chance: 72.0475590450369, Fill: "rgb(155,208,164)", Hover: "rgb(120,187,132)"},
	"kinmen": {Class: "kinmen", DPP: 13.5216919754179, KMT: 58.2113887868513, TPP: 28.2669192377308, Rating: "Safe KMT", Chance: 99.8625285706521, Fill: "rgb(51,51,173)", Hover: "rgb(1,1,153)"},
	"lienchiang": {Class: "lienchiang", DPP: 10.6985019172663, KMT: 63.983095547928, TPP: 25.3184025348057, Rating: "Safe KMT", Chance: 99.994478882189, Fill: "rgb(51,51,173)", Hover: "rgb(0,0,153)"}}

// presidential polling average
const national_average = [40.11, 28.41, 32.49]; // DPP, KMT, TPP

// fill overall table with current average
document.getElementById("dpp-presidential-share").innerHTML = pres_pred["all"].DPP.toFixed(1).toString().concat("%");
document.getElementById("dpp-presidential-bar").setAttribute("width", pres_pred["all"].DPP*2.5);

document.getElementById("kmt-presidential-share").innerHTML = pres_pred["all"].KMT.toFixed(1).toString().concat("%");
document.getElementById("kmt-presidential-bar").setAttribute("width", pres_pred["all"].KMT*2.5);

document.getElementById("tpp-presidential-share").innerHTML = pres_pred["all"].TPP.toFixed(1).toString().concat("%");
document.getElementById("tpp-presidential-bar").setAttribute("width", pres_pred["all"].TPP*2.5);


// change colors upon hovering
for (const [key, value] of Object.entries(pres_pred)) {
	if (key != "all") {
		console.log(pres_pred[key].Fill);
  		document.getElementById(pres_pred[key].Class).style.fill = pres_pred[key].Fill;
  		document.getElementById(pres_pred[key].Class).addEventListener("mouseenter",
  			(event) => {event.target.style.fill = pres_pred[key].Hover;},
  			false,);
  		document.getElementById(pres_pred[key].Class).addEventListener("mouseleave",
  			(event) => {event.target.style.fill = pres_pred[key].Fill;},
  			false,);
	}
}

// hovering over island boxes
document.getElementById("penghu-box").addEventListener("mouseenter",
	(event) => {document.getElementById("penghu").dispatchEvent(new Event('mouseenter'));},
	false,);
document.getElementById("penghu-box").addEventListener("mouseleave",
	(event) => {document.getElementById("penghu").dispatchEvent(new Event('mouseleave'));},
	false,);

document.getElementById("kinmen-box").addEventListener("mouseenter",
	(event) => {document.getElementById("kinmen").dispatchEvent(new Event('mouseenter'));},
	false,);
document.getElementById("kinmen-box").addEventListener("mouseleave",
	(event) => {document.getElementById("kinmen").dispatchEvent(new Event('mouseleave'));},
	false,);

document.getElementById("lienchiang-box").addEventListener("mouseenter",
	(event) => {document.getElementById("lienchiang").dispatchEvent(new Event('mouseenter'));},
	false,);
document.getElementById("lienchiang-box").addEventListener("mouseleave",
	(event) => {document.getElementById("lienchiang").dispatchEvent(new Event('mouseleave'));},
	false,);