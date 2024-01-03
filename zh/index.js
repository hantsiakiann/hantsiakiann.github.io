// JSON with predictions for presidential race
const pres_pred = {"all": {English: "Nationwide", Chinese: "全國", Class: "county", DPP: 39.3125567567568, KMT: 35.356654054054, TPP: 25.3307891891892, ENRating: "Lean DPP", ZHRating: "偏向民進黨", DPPChance: "65%", KMTChance: "34%", TPPChance: "<1%", Fill: "#a0d2a8", Hover: "#77bf83"},
	"taipei": {English: "Taipei City", Chinese: "臺北市", Class: "taipei", DPP: 32.9636618480919, KMT: 36.7319059761054, TPP: 30.3044321758027, ENRating: "Tossup", ZHRating: "不分軒輊", DPPChance: "30%", KMTChance: "55%", TPPChance: "15%", Fill: "#ebebeb", Hover: "#d7d7d7"},
	"new_taipei": {English: "New Taipei City", Chinese: "新北市", Class: "new-taipei", DPP: 36.6827561064576, KMT: 35.2483527124012, TPP: 28.0688911811411, ENRating: "Tossup", ZHRating: "不分軒輊", DPPChance: "53%", KMTChance: "42%", TPPChance: "5%", Fill: "#ebebeb", Hover: "#d7d7d7"},
	"taoyuan": {English: "Taoyuan City", Chinese: "桃園市", Class: "taoyuan", DPP: 36.1190836723738, KMT: 36.2143867161304, TPP: 27.6665296114958, ENRating: "Tossup", ZHRating: "不分軒輊", DPPChance: "48%", KMTChance: "48%", TPPChance: "4%", Fill: "#ebebeb", Hover: "#d7d7d7"},
	"taichung": {English: "Taichung City", Chinese: "臺中市", Class: "taichung", DPP: 35.4715842226511, KMT: 37.7291561234181, TPP: 26.7992596539309, ENRating: "Tossup", ZHRating: "不分軒輊", DPPChance: "40%", KMTChance: "57%", TPPChance: "2%", Fill: "#ebebeb", Hover: "#d7d7d7"},
	"tainan": {English: "Tainan City", Chinese: "臺南市", Class: "tainan", DPP: 51.0135750899337, KMT: 27.4874770245905, TPP: 21.4989478854759, ENRating: "Safe DPP", ZHRating: "穩定民進黨", DPPChance: ">99%", KMTChance: "<1%", TPPChance: "<1%", Fill: "#5fb46f", Hover: "#1B9431"},
	"kaohsiung": {English: "Kaohsiung City", Chinese: "高雄市", Class: "kaohsiung", DPP: 48.8380954307572, KMT: 30.4072424130944, TPP: 20.7546621561483, ENRating: "Safe DPP", ZHRating: "穩定民進黨", DPPChance: "97%", KMTChance: "3%", TPPChance: "<1%", Fill: "#5fb46f", Hover: "#1B9431"},
	"keelung": {English: "Keelung City", Chinese: "基隆市", Class: "keelung", DPP: 33.3555153845326, KMT: 40.7174136786537, TPP: 25.9270709368138, ENRating: "Likely KMT", ZHRating: "利於國民黨", DPPChance: "23%", KMTChance: "76%", TPPChance: "1%", Fill: "#7070c6", Hover: "#3333ad"},
	"yilan": {English: "Yilan County", Chinese: "宜蘭縣", Class: "yilan", DPP: 44.3941570597068, KMT: 30.0571862975823, TPP: 25.5486566427109, ENRating: "Likely DPP", ZHRating: "利於民進黨", DPPChance: "92%", KMTChance: "8%", TPPChance: "<1%", Fill: "#80c38c", Hover: "#49a95a"},
	"hsinchu_county": {English: "Hsinchu County", Chinese: "新竹縣", Class: "hsinchu-county", DPP: 27.6717335786501, KMT: 42.4280036633781, TPP: 29.9002627579719, ENRating: "Likely KMT", ZHRating: "利於國民黨", DPPChance: "4%", KMTChance: "86%", TPPChance: "10%", Fill: "#7070c6", Hover: "#3333ad"},
	"hsinchu_city": {English: "Hsinchu City", Chinese: "新竹市", Class: "hsinchu-city", DPP: 32.6244782710945, KMT: 30.784528171521, TPP: 36.5909935573844, ENRating: "Tossup", ZHRating: "不分軒輊", DPPChance: "28%", KMTChance: "18%", TPPChance: "54%", Fill: "#ebebeb", Hover: "#d7d7d7"},
	"miaoli": {English: "Miaoli County", Chinese: "苗栗縣", Class: "miaoli", DPP: 29.852921311548, KMT: 43.8999014108504, TPP: 26.2471772776016, ENRating: "Likely KMT", ZHRating: "利於國民黨", DPPChance: "8%", KMTChance: "90%", TPPChance: "2%", Fill: "#7070c6", Hover: "#3333ad"},
	"changhua": {English: "Changhua County", Chinese: "彰化縣", Class: "changhua", DPP: 38.9315503971308, KMT: 33.7124826032734, TPP: 27.3559669995958, ENRating: "Lean DPP", ZHRating: "偏向民進黨", DPPChance: "67%", KMTChance: "29%", TPPChance: "4%", Fill: "#a0d2a8", Hover: "#77bf83"},
	"nantou": {English: "Nantou County", Chinese: "南投縣", Class: "nantou", DPP: 34.3784105097673, KMT: 41.3361284934351, TPP: 24.2854609967977, ENRating: "Likely KMT", ZHRating: "利於國民黨", DPPChance: "24%", KMTChance: "75%", TPPChance: "<1%", Fill: "#7070c6", Hover: "#3333ad"},
	"yunlin": {English: "Yunlin County", Chinese: "雲林縣", Class: "yunlin", DPP: 43.4659935816662, KMT: 32.709312018663, TPP: 23.8246943996708, ENRating: "Likely DPP", ZHRating: "利於民進黨", DPPChance: "86%", KMTChance: "14%", TPPChance: "<1%", Fill: "#80c38c", Hover: "#49a95a"},
	"chiayi_county": {English: "Chiayi County", Chinese: "嘉義縣", Class: "chiayi-county", DPP: 46.8288779079869, KMT: 29.6770774268417, TPP: 23.4940446651714, ENRating: "Safe DPP", ZHRating: "穩定民進黨", DPPChance: "96%", KMTChance: "4%", TPPChance: "<1%", Fill: "#5fb46f", Hover: "#1B9431"},
	"chiayi_city": {English: "Chiayi City", Chinese: "嘉義市", Class: "chiayi-city", DPP: 41.7534274778689, KMT: 34.1568994690685, TPP: 24.0896730530626, ENRating: "Likely DPP", ZHRating: "利於民進黨", DPPChance: "77%", KMTChance: "22%", TPPChance: "<1%", Fill: "#80c38c", Hover: "#49a95a"},
	"pingtung": {English: "Pingtung County", Chinese: "屏東縣", Class: "pingtung", DPP: 48.38124026687, KMT: 30.7565821311316, TPP: 20.8621776019984, ENRating: "Safe DPP", ZHRating: "穩定民進黨", DPPChance: "96%", KMTChance: "4%", TPPChance: "<1%", Fill: "#5fb46f", Hover: "#1B9431"},
	"hualien": {English: "Hualien County", Chinese: "花蓮縣", Class: "hualien", DPP: 25.4831152697827, KMT: 56.3196436876156, TPP: 18.1972410426017, ENRating: "Safe KMT", ZHRating: "穩定國民黨", DPPChance: "<1%", KMTChance: ">99%", TPPChance: "<1%", Fill: "#4d4db8", Hover: "#000099"},
	"taitung": {English: "Taitung County", Chinese: "臺東縣", Class: "taitung", DPP: 27.1871206026032, KMT: 54.0676770934746, TPP: 18.7452023039222, ENRating: "Safe KMT", ZHRating: "穩定國民黨", DPPChance: "<1%", KMTChance: ">99%", TPPChance: "<1%", Fill: "#4d4db8", Hover: "#000099"},
	"penghu": {English: "Penghu County", Chinese: "澎湖縣", Class: "penghu", DPP: 37.2304182537509, KMT: 37.7327449305756, TPP: 25.0368368156735, ENRating: "Tossup", ZHRating: "不分軒輊", DPPChance: "48%", KMTChance: "52%", TPPChance: "<1%", Fill: "#ebebeb", Hover: "#d7d7d7"},
	"kinmen": {English: "Kinmen County", Chinese: "金門縣", Class: "kinmen", DPP: 13.0483663792335, KMT: 65.5090722526701, TPP: 21.4425613680965, ENRating: "Safe KMT", ZHRating: "穩定國民黨", DPPChance: "<1%", KMTChance: ">99%", TPPChance: "<1%", Fill: "#4d4db8", Hover: "#000099"},
	"lienchiang": {English: "Lienchiang County", Chinese: "連江縣", Class: "lienchiang", DPP: 10.2251763210819, KMT: 71.2807790137467, TPP: 18.4940446651714, ENRating: "Safe KMT", ZHRating: "穩定國民黨", DPPChance: "<1%", KMTChance: ">99%", TPPChance: "<1%", Fill: "#4d4db8", Hover: "#000099"}}

// fill overall table with current average
document.getElementById("dpp-presidential-share").innerHTML = pres_pred["all"].DPP.toFixed(1).toString().concat("%");
document.getElementById("dpp-presidential-bar").setAttribute("width", pres_pred["all"].DPP*2.5);
document.getElementById("dpp-chance").innerHTML = pres_pred["all"].DPPChance.toString();

document.getElementById("kmt-presidential-share").innerHTML = pres_pred["all"].KMT.toFixed(1).toString().concat("%");
document.getElementById("kmt-presidential-bar").setAttribute("width", pres_pred["all"].KMT*2.5);
document.getElementById("kmt-chance").innerHTML = pres_pred["all"].KMTChance.toString();

document.getElementById("tpp-presidential-share").innerHTML = pres_pred["all"].TPP.toFixed(1).toString().concat("%");
document.getElementById("tpp-presidential-bar").setAttribute("width", pres_pred["all"].TPP*2.5);
document.getElementById("tpp-chance").innerHTML = pres_pred["all"].TPPChance.toString();

// fill county table with national average as default
document.getElementById("county-rating").innerHTML = pres_pred["all"].ZHRating;
document.getElementById("county-rating").style.backgroundColor = pres_pred["all"].Hover;

document.getElementById("dpp-presidential-county-share").innerHTML = pres_pred["all"].DPP.toFixed(1).toString().concat("%");
document.getElementById("dpp-presidential-county-bar").setAttribute("width", pres_pred["all"].DPP*2);
document.getElementById("dpp-county-chance").innerHTML = pres_pred["all"].DPPChance.toString();

document.getElementById("kmt-presidential-county-share").innerHTML = pres_pred["all"].KMT.toFixed(1).toString().concat("%");
document.getElementById("kmt-presidential-county-bar").setAttribute("width", pres_pred["all"].KMT*2);
document.getElementById("kmt-county-chance").innerHTML = pres_pred["all"].KMTChance.toString();

document.getElementById("tpp-presidential-county-share").innerHTML = pres_pred["all"].TPP.toFixed(1).toString().concat("%");
document.getElementById("tpp-presidential-county-bar").setAttribute("width", pres_pred["all"].TPP*2);
document.getElementById("tpp-county-chance").innerHTML = pres_pred["all"].TPPChance.toString();

// change colors upon hovering
for (const [key, value] of Object.entries(pres_pred)) {
	if (key != "all") {
  		document.getElementById(pres_pred[key].Class).style.fill = pres_pred[key].Fill;
  		document.getElementById(pres_pred[key].Class).addEventListener("mouseenter",
  			(event) => {event.target.style.fill = pres_pred[key].Hover;
  				document.getElementById("presidential-constituency").innerHTML = pres_pred[key].Chinese.concat('<div id="county-rating"></div>');
  				document.getElementById("county-rating").innerHTML = pres_pred[key].ZHRating;
  				document.getElementById("county-rating").style.backgroundColor = pres_pred[key].Hover;
  				document.getElementById("dpp-presidential-county-share").innerHTML = pres_pred[key].DPP.toFixed(1).toString().concat("%");
				document.getElementById("dpp-presidential-county-bar").setAttribute("width", pres_pred[key].DPP*2);
				document.getElementById("dpp-county-chance").innerHTML = pres_pred[key].DPPChance.toString();
				document.getElementById("kmt-presidential-county-share").innerHTML = pres_pred[key].KMT.toFixed(1).toString().concat("%");
				document.getElementById("kmt-presidential-county-bar").setAttribute("width", pres_pred[key].KMT*2);
				document.getElementById("kmt-county-chance").innerHTML = pres_pred[key].KMTChance.toString();
				document.getElementById("tpp-presidential-county-share").innerHTML = pres_pred[key].TPP.toFixed(1).toString().concat("%");
				document.getElementById("tpp-presidential-county-bar").setAttribute("width", pres_pred[key].TPP*2);
				document.getElementById("tpp-county-chance").innerHTML = pres_pred[key].TPPChance.toString();},
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