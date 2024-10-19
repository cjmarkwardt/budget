$(document).ready(() => {
    gapi.load('client', () => {
        gapi.client.init({
            'apiKey': 'AIzaSyA6GNo9Kbz8ojuAq8g4pYQcNYzVVp2yCNU'
        }).then(() => {
            return gapi.client.request({
              'path': 'https://sheets.googleapis.com/v4/spreadsheets/1vKHZzgwLFO9m05j1zFCVbljER3jrc-7H_bkz6mP300c/values/Funds!A3:G',
            })
        }).then((response) => {
            console.log(response.result);
            response.result.values.forEach((row) => {
                if (row[0] == 'X')
                {
                    let style = '';
                    
                    if (row[3].includes('-')) {
                        style += 'color:red';
                    }
                    
                    $('#table').append('<tr style=\'' + style + '\'><td>' + row[1] + '</td><td>' + row[6] + '</td></tr>');
                }
            });
            $('#test').text("Tester3");
        }, (reason) => {
            console.log('Error: ' + reason.result.error.message);
        });
    });
});
