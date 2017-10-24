
function getRandomAirport(originAirport, maxMilesFromOrigin) {
    $.ajax({
        method: 'POST',
        url: 'https://7cmtdypzk5.execute-api.us-east-1.amazonaws.com/Dev' + '/airport',
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
    alert('Response received from API: ' + result.AirportName);
}