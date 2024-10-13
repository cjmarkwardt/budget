$(document).ready(function() {
    gapi.load('client', function() {
        gapi.client.init({
            'apiKey': 'AIzaSyA6GNo9Kbz8ojuAq8g4pYQcNYzVVp2yCNU'
        }).then(function() {
        // 3. Initialize and make the API request.
            return gapi.client.request({
              'path': 'https://sheets.googleapis.com/v4/spreadsheets/1J7GDw2LZI2VVYNdQS5qCWouRF2krGv53ihJ6iXZYMWY/values/Funds!A3:D',
            })
        }).then(function(response) {
            console.log(response.result);
            $('#test').text("Tester2");
        }, function(reason) {
            console.log('Error: ' + reason.result.error.message);
        });
    });
});
