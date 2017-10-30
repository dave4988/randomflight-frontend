
function getRandomAirport(originAirport, maxMilesFromOrigin) {
    $.ajax({
        method: 'POST',
        url: airportUrl,
        headers: {
            'x-api-key': apiKey
        },
        data: JSON.stringify({
            origin: originAirport,
            maxMilesFromOrigin: maxMilesFromOrigin
        }),
        contentType: 'application/json',
        success: completeRequest,
        error: function ajaxError(jqXHR, textStatus, errorThrown) {
            console.error('Error getting destination: ', textStatus, ', Details: ', errorThrown);
            console.error('Response: ', jqXHR.responseText);
            alert('An error occured when finding your destination:\n' + jqXHR.responseText);
        }
    });
}

function completeRequest(result) {
    console.log('result: ', result);
    $("#result").removeClass("hidden");
    $("#destination").val(result.City + ", " + result.State + ", " + result.Country + "!!!!!");
    $("#airport-name").val(result.AirportName);
    $("#airport-code").val(result.AirportCode);
    $("#airport-classification").val(result.Classification);
    $("#airport-country").val(result.Classification);
    //alert('Response received from API: ' + result.AirportName);
}