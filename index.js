/**
 * Created by lotem on 1/23/2016.
 */

 var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 7000));

app.use(express.static(__dirname));

app.listen(app.get('port'), function() {
    console.log('Open your browser with localhost:', app.get('port'));
});
