// JSON with predictions for presidential race
const pres_pred = {"all": {English: "Nationwide", Chinese: "全國", Class: "county", DPP: 36.6941428571429, KMT: 24.7408047619048, TPP: 28.4322333333333, IND: 10.132819047619, Rating: "Likely DPP", Chance: 75.4428641682028, Fill: "rgb(145,203,155)", Hover: "rgb(109,182,122)"},
	"taipei": {English: "Taipei City", Chinese: "臺北市", Class: "taipei", DPP: 29.445247948478, KMT: 28.9160566839562, TPP: 29.8058763199468, IND: 11.832819047619, Rating: "Tossup", Chance: 51.1987354328063, Fill: "rgb(218,245,245)", Hover: "rgb(192,227,227)"},
	"new_taipei": {English: "New Taipei City", Chinese: "新北市", Class: "new-taipei", DPP: 32.2643422068437, KMT: 25.9325034202519, TPP: 27.5703353252853, IND: 14.232819047619, Rating: "Lean DPP", Chance: 65.2163189214558, Fill: "rgb(175,217,182)", Hover: "rgb(142,197,153)"},
	"taoyuan": {English: "Taoyuan City", Chinese: "桃園市", Class: "taoyuan", DPP: 32.2006697727599, KMT: 23.7985374239811, TPP: 31.0679737556399, IND: 12.932819047619, Rating: "Tossup", Chance: 53.7600850533422, Fill: "rgb(208,233,212)", Hover: "rgb(181,213,187)"},
	"taichung": {English: "Taichung City", Chinese: "臺中市", Class: "taichung", DPP: 35.5531703230372, KMT: 25.3133068312688, TPP: 27.600703798075, IND: 11.532819047619, Rating: "Lean DPP", Chance: 74.6240420714902, Fill: "rgb(147,204,157)", Hover: "rgb(111,184,125)"},
	"tainan": {English: "Tainan City", Chinese: "臺南市", Class: "tainan", DPP: 50.2951611903198, KMT: 18.3716277324412, TPP: 22.00039202962, IND: 9.33281904761905, Rating: "Safe DPP", Chance: 99.0810614838359, Fill: "rgb(76,170,92)", Hover: "rgb(30,149,52)"},
	"kaohsiung": {English: "Kaohsiung City", Chinese: "高雄市", Class: "kaohsiung", DPP: 47.4196815311433, KMT: 20.0913931209451, TPP: 23.4561063002925, IND: 9.03281904761905, Rating: "Safe DPP", Chance: 97.708548580231, Fill: "rgb(80,172,96)", Hover: "rgb(35,151,56)"},
	"keelung": {English: "Keelung City", Chinese: "基隆市", Class: "keelung", DPP: 31.4371014849187, KMT: 28.3015643865044, TPP: 26.7285150809579, IND: 13.532819047619, Rating: "Lean DPP", Chance: 60.306739572434, Fill: "rgb(189,224,195)", Hover: "rgb(159,204,167)"},
	"yilan": {English: "Yilan County", Chinese: "宜蘭縣", Class: "yilan", DPP: 40.6757431600929, KMT: 22.341337005433, TPP: 29.750100786855, IND: 7.23281904761905, Rating: "Likely DPP", Chance: 81.8712704111288, Fill: "rgb(126,194,138)", Hover: "rgb(87,173,103)"},
	"hsinchu_county": {English: "Hsinchu County", Chinese: "新竹縣", Class: "hsinchu-county", DPP: 26.8533196790362, KMT: 33.1121543712288, TPP: 31.051706902116, IND: 8.98281904761905, Rating: "Tossup", Chance: 56.8164862120622, Fill: "rgb(192,192,230)", Hover: "rgb(162,162,210)"},
	"hsinchu_city": {English: "Hsinchu City", Chinese: "新竹市", Class: "hsinchu-city", DPP: 29.7060643714806, KMT: 21.5686788793717, TPP: 35.4924377015286, IND: 13.232819047619, Rating: "Lean TPP", Chance: 68.5167272240629, Fill: "rgb(170,233,233)", Hover: "rgb(138,217,217)"},
	"miaoli": {English: "Miaoli County", Chinese: "苗栗縣", Class: "miaoli", DPP: 26.0345074119341, KMT: 29.4840521187011, TPP: 30.5486214217458, IND: 13.932819047619, Rating: "Tossup", Chance: 53.5345440141695, Fill: "rgb(211,243,243)", Hover: "rgb(185,226,226)"},
	"changhua": {English: "Changhua County", Chinese: "彰化縣", Class: "changhua", DPP: 37.5131364975169, KMT: 20.7966333111241, TPP: 27.75741114374, IND: 13.932819047619, Rating: "Likely DPP", Chance: 79.1884409783041, Fill: "rgb(134,198,145)", Hover: "rgb(96,177,111)"},
	"nantou": {English: "Nantou County", Chinese: "南投縣", Class: "nantou", DPP: 30.9599966101534, KMT: 29.4202792012858, TPP: 31.0869051409418, IND: 8.53281904761905, Rating: "Tossup", Chance: 50.4219019576276, Fill: "rgb(220,246,246)", Hover: "rgb(195,228,228)"},
	"yunlin": {English: "Yunlin County", Chinese: "雲林縣", Class: "yunlin", DPP: 41.0475796820523, KMT: 19.2934627265137, TPP: 28.226138543815, IND: 11.432819047619, Rating: "Likely DPP", Chance: 85.734198627201, Fill: "rgb(115,189,128)", Hover: "rgb(74,168,92)"},
	"chiayi_county": {English: "Chiayi County", Chinese: "嘉義縣", Class: "chiayi-county", DPP: 44.810464008373, KMT: 17.8612281346924, TPP: 25.2954888093155, IND: 12.032819047619, Rating: "Likely DPP", Chance: 94.8051538482336, Fill: "rgb(88,176,104)", Hover: "rgb(44,155,64)"},
	"chiayi_city": {English: "Chiayi City", Chinese: "嘉義市", Class: "chiayi-city", DPP: 39.935013578255, KMT: 23.2910501769192, TPP: 25.9911171972068, IND: 10.782819047619, Rating: "Likely DPP", Chance: 87.7380513780656, Fill: "rgb(109,186,122)", Hover: "rgb(68,165,86)"},
	"pingtung": {English: "Pingtung County", Chinese: "屏東縣", Class: "pingtung", DPP: 46.5628263672561, KMT: 22.0407328389823, TPP: 23.3636217461426, IND: 8.03281904761905, Rating: "Safe DPP", Chance: 97.3398345768458, Fill: "rgb(81,173,97)", Hover: "rgb(36,152,57)"},
	"hualien": {English: "Hualien County", Chinese: "花蓮縣", Class: "hualien", DPP: 25.0147013701688, KMT: 42.9037943954663, TPP: 19.4986851867459, IND: 12.582819047619, Rating: "Likely KMT", Chance: 93.1987446286512, Fill: "rgb(73,73,182)", Hover: "rgb(26,26,162)"},
	"taitung": {English: "Taitung County", Chinese: "臺東縣", Class: "taitung", DPP: 25.3687067029893, KMT: 41.1518278013253, TPP: 21.1466464480664, IND: 12.332819047619, Rating: "Likely KMT", Chance: 90.5788747164613, Fill: "rgb(82,82,185)", Hover: "rgb(35,35,165)"},
	"penghu": {English: "Penghu County", Chinese: "澎湖縣", Class: "penghu", DPP: 33.412004354137, KMT: 25.8168956384263, TPP: 25.7382809598176, IND: 15.032819047619, Rating: "Lean DPP", Chance: 73.6608926551515, Fill: "rgb(150,205,160)", Hover: "rgb(114,185,127)"},
	"kinmen": {English: "Kinmen County", Chinese: "金門縣", Class: "kinmen", DPP: 11.2299524796196, KMT: 50.2932229605208, TPP: 22.2440055122406, IND: 16.232819047619, Rating: "Safe KMT", Chance: 99.0291705962471, Fill: "rgb(54,54,174)", Hover: "rgb(4,4,154)"},
	"lienchiang": {English: "Lienchiang County", Chinese: "連江縣", Class: "lienchiang", DPP: 8.60676242146802, KMT: 55.5649297215974, TPP: 19.3954888093155, IND: 16.432819047619, Rating: "Safe KMT", Chance: 99.8711371098872, Fill: "rgb(51,51,173)", Hover: "rgb(0,0,153)"}}

// fill overall table with current average
document.getElementById("dpp-presidential-share").innerHTML = pres_pred["all"].DPP.toFixed(1).toString().concat("%");
document.getElementById("dpp-presidential-bar").setAttribute("width", pres_pred["all"].DPP*2.5);

document.getElementById("kmt-presidential-share").innerHTML = pres_pred["all"].KMT.toFixed(1).toString().concat("%");
document.getElementById("kmt-presidential-bar").setAttribute("width", pres_pred["all"].KMT*2.5);

document.getElementById("tpp-presidential-share").innerHTML = pres_pred["all"].TPP.toFixed(1).toString().concat("%");
document.getElementById("tpp-presidential-bar").setAttribute("width", pres_pred["all"].TPP*2.5);

document.getElementById("ind-presidential-share").innerHTML = pres_pred["all"].IND.toFixed(1).toString().concat("%");
document.getElementById("ind-presidential-bar").setAttribute("width", pres_pred["all"].IND*2.5);

// fill county table with national average as default
document.getElementById("dpp-presidential-county-share").innerHTML = pres_pred["all"].DPP.toFixed(1).toString().concat("%");
document.getElementById("dpp-presidential-county-bar").setAttribute("width", pres_pred["all"].DPP*2);

document.getElementById("kmt-presidential-county-share").innerHTML = pres_pred["all"].KMT.toFixed(1).toString().concat("%");
document.getElementById("kmt-presidential-county-bar").setAttribute("width", pres_pred["all"].KMT*2);

document.getElementById("tpp-presidential-county-share").innerHTML = pres_pred["all"].TPP.toFixed(1).toString().concat("%");
document.getElementById("tpp-presidential-county-bar").setAttribute("width", pres_pred["all"].TPP*2);

document.getElementById("ind-presidential-county-share").innerHTML = pres_pred["all"].IND.toFixed(1).toString().concat("%");
document.getElementById("ind-presidential-county-bar").setAttribute("width", pres_pred["all"].IND*2);

// change colors upon hovering
for (const [key, value] of Object.entries(pres_pred)) {
	if (key != "all") {
  		document.getElementById(pres_pred[key].Class).style.fill = pres_pred[key].Fill;
  		document.getElementById(pres_pred[key].Class).addEventListener("mouseenter",
  			(event) => {event.target.style.fill = pres_pred[key].Hover;
  				document.getElementById("presidential-constituency").innerHTML = pres_pred[key].Chinese;
  				document.getElementById("dpp-presidential-county-share").innerHTML = pres_pred[key].DPP.toFixed(1).toString().concat("%");
				document.getElementById("dpp-presidential-county-bar").setAttribute("width", pres_pred[key].DPP*2);
				document.getElementById("kmt-presidential-county-share").innerHTML = pres_pred[key].KMT.toFixed(1).toString().concat("%");
				document.getElementById("kmt-presidential-county-bar").setAttribute("width", pres_pred[key].KMT*2);
				document.getElementById("tpp-presidential-county-share").innerHTML = pres_pred[key].TPP.toFixed(1).toString().concat("%");
				document.getElementById("tpp-presidential-county-bar").setAttribute("width", pres_pred[key].TPP*2);
				document.getElementById("ind-presidential-county-share").innerHTML = pres_pred[key].IND.toFixed(1).toString().concat("%");
				document.getElementById("ind-presidential-county-bar").setAttribute("width", pres_pred[key].IND*2);},
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