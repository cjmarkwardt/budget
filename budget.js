$(document).ready(() => {
    gapi.load('client', () => {
        gapi.client.init({
            'apiKey': 'AIzaSyA6GNo9Kbz8ojuAq8g4pYQcNYzVVp2yCNU'
        }).then(() => {
            return gapi.client.request({
              'path': 'https://sheets.googleapis.com/v4/spreadsheets/1CIYeMN3PUTsZxMXNXkA6y0zauZj1SC-Kgrw047rnaQ0/values/Funds!A1:B',
            })
        }).then((response) => {
            console.log(response.result);
            response.result.values.forEach((row) => {
                let style = '';
                
                if (row[1].includes('-')) {
                    style += 'color:red';
                }
                
                $('#table').append('<tr style=\'' + style + '\'><td>' + row[0] + '</td><td>' + row[1] + '</td></tr>');
            });
            $('#test').text("Tester3");
        }, (reason) => {
            console.log('Error: ' + reason.result.error.message);
        });
    });
});
