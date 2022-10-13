var map = L.map('map').setView([50.2103978, 15.8223288], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([51.5, -0.09]).addTo(map);

function getInput(){
    var a = ($(".search").val());
    $(".stopName").text(a)
}


function request(){
    dotaz = {"search_term": "Vrch"}
    data = JSON.stringify(dotaz)
    $.ajax({
        type: "POST",
        url: "http://127.0.0.1:8000/bus_stop_search/",
        data: data,
        success: response
      });

}

var x;
var stationList;

function response(data){
    x = data.name;
    /*const obj = JSON.parse(data);
    console.log(obj.name);
    console.log(obj.ids);
    $(".response").text(data)*/
    for(i = 0; i < data.length; i++){
        stationList[i] = data[i]
    }
}

function searchHint(){
    
}

var availableTags = [
	"ActionScript",
	"AppleScript",
	"Asp",
	"BASIC",
	"C",
	"C++",
	"Clojure",
	"COBOL",
	"ColdFusion",
	"Erlang",
	"Fortran",
	"Groovy",
	"Haskell",
	"Java",
	"JavaScript",
	"Lisp",
	"Perl",
	"PHP",
	"Python",
	"Ruby",
	"Scala",
	"Scheme"
];
$( ".search" ).autocomplete({
	source: availableTags
});