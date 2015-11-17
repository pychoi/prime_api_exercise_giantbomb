$(document).ready(function() {
    gameSearch();
});

function gameSearch() {
    var apikey = "e9e619270ab9e6455ac2874ba41196b326378440";
    var baseUrl = "http://www.giantbomb.com/api";

    // construct our URL
    var gameSearchURL = baseUrl + '/search/?api_key=' + apikey + '&format=jsonp&limit=50';
    var query = 'Chuck Norris';

    var q = gameSearchURL + '&query=' + encodeURI(query);
    console.log(q);

    $.ajax({
        type: "GET",
        url: gameSearchURL + '&query=' + encodeURI(query),
        dataType: "jsonp",
        crossDomain: true,
        jsonp: 'json_callback',
        success: function(data) {
            console.log(data);
        }
    });

}

function searchCallback(data) {
    console.log(data);
}