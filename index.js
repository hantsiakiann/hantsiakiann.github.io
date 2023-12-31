// JSON with predictions for presidential race
const pres_pred = {"all": {English: "Nationwide", Chinese: "全國", Class: "county", DPP: 39.56576, KMT: 35.49172, TPP: 24.94252, ENRating: "Lean DPP", ZHRating: "偏向民進黨", DPPChance: "65%", KMTChance: "34%", TPPChance: "<1%", Fill: "#a0d2a8", Hover: "#77bf83"},
	"taipei": {English: "Taipei City", Chinese: "臺北市", Class: "taipei", DPP: 33.2168650913351, KMT: 36.8669719220514, TPP: 29.9161629866135, ENRating: "Tossup", ZHRating: "不分軒輊", DPPChance: "31%", KMTChance: "56%", TPPChance: "13%", Fill: "#ebebeb", Hover: "#d7d7d7"},
	"new_taipei": {English: "New Taipei City", Chinese: "新北市", Class: "new-taipei", DPP: 36.9359593497009, KMT: 35.3834186583472, TPP: 27.6806219919519, ENRating: "Tossup", ZHRating: "不分軒輊", DPPChance: "54%", KMTChance: "42%", TPPChance: "4%", Fill: "#ebebeb", Hover: "#d7d7d7"},
	"taoyuan": {English: "Taoyuan City", Chinese: "桃園市", Class: "taoyuan", DPP: 37.372286915617, KMT: 34.8494526620764, TPP: 27.7782604223066, ENRating: "Tossup", ZHRating: "不分軒輊", DPPChance: "57%", KMTChance: "38%", TPPChance: "5%", Fill: "#ebebeb", Hover: "#d7d7d7"},
	"taichung": {English: "Taichung City", Chinese: "臺中市", Class: "taichung", DPP: 35.7247874658943, KMT: 37.864222069364, TPP: 26.4109904647417, ENRating: "Tossup", ZHRating: "不分軒輊", DPPChance: "41%", KMTChance: "57%", TPPChance: "2%", Fill: "#ebebeb", Hover: "#d7d7d7"},
	"tainan": {English: "Tainan City", Chinese: "臺南市", Class: "tainan", DPP: 51.2667783331769, KMT: 27.6225429705364, TPP: 21.1106786962867, ENRating: "Safe DPP", ZHRating: "穩定民進黨", DPPChance: ">99%", KMTChance: "<1%", TPPChance: "<1%", Fill: "#5fb46f", Hover: "#1B9431"},
	"kaohsiung": {English: "Kaohsiung City", Chinese: "高雄市", Class: "kaohsiung", DPP: 49.0912986740005, KMT: 30.5423083590404, TPP: 20.3663929669591, ENRating: "Safe DPP", ZHRating: "穩定民進黨", DPPChance: "97%", KMTChance: "3%", TPPChance: "<1%", Fill: "#5fb46f", Hover: "#1B9431"},
	"keelung": {English: "Keelung City", Chinese: "基隆市", Class: "keelung", DPP: 33.6087186277758, KMT: 40.8524796245996, TPP: 25.5388017476246, ENRating: "Likely KMT", ZHRating: "利於國民黨", DPPChance: "23%", KMTChance: "76%", TPPChance: "<1%", Fill: "#7070c6", Hover: "#3333ad"},
	"yilan": {English: "Yilan County", Chinese: "宜蘭縣", Class: "yilan", DPP: 44.6473603029501, KMT: 30.1922522435282, TPP: 25.1603874535217, ENRating: "Likely DPP", ZHRating: "利於民進黨", DPPChance: "92%", KMTChance: "7%", TPPChance: "<1%", Fill: "#80c38c", Hover: "#49a95a"},
	"hsinchu_county": {English: "Hsinchu County", Chinese: "新竹縣", Class: "hsinchu-county", DPP: 27.9249368218933, KMT: 42.563069609324, TPP: 29.5119935687827, ENRating: "Likely KMT", ZHRating: "利於國民黨", DPPChance: "5%", KMTChance: "86%", TPPChance: "9%", Fill: "#7070c6", Hover: "#3333ad"},
	"hsinchu_city": {English: "Hsinchu City", Chinese: "新竹市", Class: "hsinchu-city", DPP: 32.8776815143378, KMT: 30.919594117467, TPP: 36.2027243681952, ENRating: "Tossup", ZHRating: "不分軒輊", DPPChance: "30%", KMTChance: "19%", TPPChance: "51%", Fill: "#ebebeb", Hover: "#d7d7d7"},
	"miaoli": {English: "Miaoli County", Chinese: "苗栗縣", Class: "miaoli", DPP: 30.1061245547912, KMT: 44.0349673567963, TPP: 25.8589080884124, ENRating: "Likely KMT", ZHRating: "利於國民黨", DPPChance: "8%", KMTChance: "91%", TPPChance: "1%", Fill: "#7070c6", Hover: "#3333ad"},
	"changhua": {English: "Changhua County", Chinese: "彰化縣", Class: "changhua", DPP: 39.184753640374, KMT: 33.8475485492193, TPP: 26.9676978104066, ENRating: "Lean DPP", ZHRating: "偏向民進黨", DPPChance: "68%", KMTChance: "29%", TPPChance: "3%", Fill: "#a0d2a8", Hover: "#77bf83"},
	"nantou": {English: "Nantou County", Chinese: "南投縣", Class: "nantou", DPP: 34.6316137530105, KMT: 41.471194439381, TPP: 23.8971918076085, ENRating: "Likely KMT", ZHRating: "利於國民黨", DPPChance: "25%", KMTChance: "75%", TPPChance: "<1%", Fill: "#7070c6", Hover: "#3333ad"},
	"yunlin": {English: "Yunlin County", Chinese: "雲林縣", Class: "yunlin", DPP: 43.7191968249094, KMT: 32.8443779646089, TPP: 23.4364252104816, ENRating: "Likely DPP", ZHRating: "利於民進黨", DPPChance: "86%", KMTChance: "14%", TPPChance: "<1%", Fill: "#80c38c", Hover: "#49a95a"},
	"chiayi_county": {English: "Chiayi County", Chinese: "嘉義縣", Class: "chiayi-county", DPP: 47.0820811512302, KMT: 29.8121433727876, TPP: 23.1057754759822, ENRating: "Safe DPP", ZHRating: "穩定民進黨", DPPChance: "96%", KMTChance: "4%", TPPChance: "<1%", Fill: "#5fb46f", Hover: "#1B9431"},
	"chiayi_city": {English: "Chiayi City", Chinese: "嘉義市", Class: "chiayi-city", DPP: 42.0066307211121, KMT: 34.2919654150144, TPP: 23.7014038638734, ENRating: "Likely DPP", ZHRating: "利於民進黨", DPPChance: "78%", KMTChance: "22%", TPPChance: "<1%", Fill: "#80c38c", Hover: "#49a95a"},
	"pingtung": {English: "Pingtung County", Chinese: "屏東縣", Class: "pingtung", DPP: 48.6344435101132, KMT: 30.8916480770775, TPP: 20.4739084128092, ENRating: "Safe DPP", ZHRating: "穩定民進黨", DPPChance: "96%", KMTChance: "4%", TPPChance: "<1%", Fill: "#5fb46f", Hover: "#1B9431"},
	"hualien": {English: "Hualien County", Chinese: "花蓮縣", Class: "hualien", DPP: 25.7363185130259, KMT: 56.4547096335615, TPP: 17.8089718534126, ENRating: "Safe KMT", ZHRating: "穩定國民黨", DPPChance: "<1%", KMTChance: ">99%", TPPChance: "<1%", Fill: "#4d4db8", Hover: "#000099"},
	"taitung": {English: "Taitung County", Chinese: "臺東縣", Class: "taitung", DPP: 27.4403238458464, KMT: 54.2027430394205, TPP: 18.356933114733, ENRating: "Safe KMT", ZHRating: "穩定國民黨", DPPChance: "<1%", KMTChance: ">99%", TPPChance: "<1%", Fill: "#4d4db8", Hover: "#000099"},
	"penghu": {English: "Penghu County", Chinese: "澎湖縣", Class: "penghu", DPP: 37.4836214969942, KMT: 37.8678108765215, TPP: 24.6485676264843, ENRating: "Tossup", ZHRating: "不分軒輊", DPPChance: "48%", KMTChance: "51%", TPPChance: "<1%", Fill: "#ebebeb", Hover: "#d7d7d7"},
	"kinmen": {English: "Kinmen County", Chinese: "金門縣", Class: "kinmen", DPP: 13.3015696224767, KMT: 65.644138198616, TPP: 21.0542921789073, ENRating: "Safe KMT", ZHRating: "穩定國民黨", DPPChance: "<1%", KMTChance: ">99%", TPPChance: "<1%", Fill: "#4d4db8", Hover: "#000099"},
	"lienchiang": {English: "Lienchiang County", Chinese: "連江縣", Class: "lienchiang", DPP: 10.4783795643252, KMT: 71.4158449596927, TPP: 18.1057754759822, ENRating: "Safe KMT", ZHRating: "穩定國民黨", DPPChance: "<1%", KMTChance: ">99%", TPPChance: "<1%", Fill: "#4d4db8", Hover: "#000099"}}

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