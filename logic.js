'https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=20121230&end_date=20181230&api-key=[YOUR_API_KEY]' \
  

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=";
var searchTerm = $("#searchTerm").val();
var apiKey = "&api-key=wDG96UJnAnivLybkePfjNNA0CNJ1dhrm";



// Start and end date must be a string in the format yyyymmdd
var startDate = "&begin_date=" + $("#startDate").val();
var endDate = "&end_date=" + $("#endDate").val();

// combine all terms into final query URL
// var queryUrl = url+searchTerm+startDate+endDate+apiKey;

// Test API key


$.ajax({
    url: queryUrl ,
    method: "GET"
  }).then(function(response) {
    console.log(response); 
  });