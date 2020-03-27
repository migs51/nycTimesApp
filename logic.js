
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=";
var searchTerm = $("#searchTerm").val();
var apiKey = "&api-key=wDG96UJnAnivLybkePfjNNA0CNJ1dhrm";



// Start and end date must be a string in the format yyyymmdd
var startDate = "&begin_date=" + $("#startDate").val();
var endDate = "&end_date=" + $("#endDate").val();

// combine all terms into final query URL
var queryUrl = url+searchTerm+startDate+endDate+apiKey;

// Test API key, returns articles about Obama between 01/01/2008 and 06/01/2008
// var queryUrl = url + "Obama" + "&begin_date=20080101" + "&end_date=20080601" + apiKey;

$.ajax({
    url: queryUrl ,
    method: "GET"
  }).then(function(response) {
    console.log(response); 
  });