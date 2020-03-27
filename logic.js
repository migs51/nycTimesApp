
var url = "hhttps://api.nytimes.com/svc/search/v2/articlesearch.json";
var searchTerm = $("#searchTerm").val();
var apiKey = "&api-key=wDG96UJnAnivLybkePfjNNA0CNJ1dhrm";
var createRow = function (data) {
  var topArticles = $("articles");
}


// Start and end date must be a string in the format yyyymmdd
var startDate = "&begin_date=" + $("#startYear").val() + "0101";
var endDate = "&end_date=" + $("#endYear").val() + "0101";


// combine all terms into final query URL
var queryUrl = url + searchTerm + startDate + endDate + apiKey;

// Test API key, returns articles about Obama between 01/01/2008 and 06/01/2008
// var queryUrl = url + "Obama" + "&begin_date=20080101" + "&end_date=20080601" + apiKey;

$("#search").on("click", function (event) {
    event.preventDefault();
    console.log(startDate);
    console.log(endDate);
    console.log(searchTerm);
    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function (response) {
        console.log(response);
    });
});

