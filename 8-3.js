var expressFunction = require('express')
var expressApp = expressFunction()
const students = [ {stdid: 'B6026042', name: 'Warachit Inkun'},
                   {stdid: 'B5222299', name: 'Jaidee Deejai'}       ];

expressApp.use(function (req, res, next) {
    console.log('Logged')
    next()
});

expressApp.use(function (req, res, next) {
    console.log('Authentication')
    next()
});

expressApp.get('/', function (req, res) {
    res.status (200).send('Hello World');
 })

expressApp.get('/api/resource/students/:stdid', function(req, res) {
    const stdid = req.params. stdid;
    if(stdid == 'B6026042') {
        res.status (200).send( students[0]);
    }else if(stdid == 'B5222299'){
        rres.status (200).send(students[1]); 
    } else {
        res.status (404).send('Error 404 not found');
    }
});

expressApp.listen(3000, function(){
    console.log('Listening on port 3000');
}); 