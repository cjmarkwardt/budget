$(document).ready(() => {
    gapi.load('client', () => {
        gapi.client.init({
            'apiKey': 'AIzaSyA6GNo9Kbz8ojuAq8g4pYQcNYzVVp2yCNU'
        }).then(() => {
            return gapi.client.request({
              'path': 'https://sheets.googleapis.com/v4/spreadsheets/1J7GDw2LZI2VVYNdQS5qCWouRF2krGv53ihJ6iXZYMWY/values/Funds!A3:D',
            })
        }).then((response) => {
            console.log(response.result);
            response.result.values.forEach((row) => {
                if (row.length > 0) {
                    let style = '';
                    
                    if (row[3].includes('-')) {
                        style += 'color:red';
                    }
                    
                    $('#table').append('<tr style=\'' + style + '\'><td>' + row[0] + '</td><td>' + row[3] + '</td></tr>');
                }
            });
            $('#test').text("Tester3");
        }, (reason) => {
            console.log('Error: ' + reason.result.error.message);
        });
    });
});
