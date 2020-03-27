
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
var apiKey = "&api-key=wDG96UJnAnivLybkePfjNNA0CNJ1dhrm";
var createRow = function (data) {
    var topArticles = $("articles");
}




// Test API key, returns articles about Obama between 01/01/2008 and 06/01/2008
// var queryUrl = url + "Obama" + "&begin_date=20080101" + "&end_date=20080601" + apiKey;

$("#search").on("click", function (event) {
    event.preventDefault();

    var searchTerm = $("#searchTerm").val();

    // Start and end date must be a string in the format yyyymmdd
    var start = $("#startDate").val();
    var end = $("#endDate").val();
console.log(start.typeOf());
    // removing dashes and putting date in yyyymmdd
    start = start[0] + start[1] + start[2] + start[3] + start[5] + start[6] + start[8] + start[9];
    var startDate = "&begin_date=" + start;
    
    end = end[0] + end[1] + end[2] + end[3] + end[5] + end[6] + end[8] + end[9];
    var endDate = "&end_date=" + end;

    // combine all terms into final query URL
    var queryUrl = url + searchTerm + startDate + endDate + apiKey;

    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function (response) {
        console.log(response);
    });
});

