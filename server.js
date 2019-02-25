var express = require('express');
var app = express();
var port = 8080;

app.listen(port, function() {
    console.log('app on port 8080')
});

app.get('/', function(req, res){
    res.send(list());
})


function list() {
    var fs = require('fs');
    var csv = require('fast-csv');

    //const data = "";

    const list = [];
    function red() {
        fs.createReadStream('API_EN.ATM.CO2E.KT_DS2_en_csv_v2_10473877.csv')
        .pipe(csv()).on('data',function(data){
            list.push(data);
            //console.log(data[1]);
        }).on('end', function(){
            var text = ""
            //console.log('Read finished');
            for (var i = 4; i < list.length; i++){
                var arr=list[i];
                //console.log(arr)
                text +="<tr>"
                //console.log(i+": "+list[i]);
                arr.forEach(y => text+="<td>"+y+"<td />");
                text +="</tr>"
                //var doc = document.getElementsByTagName('table')[0].innerHTML=text;
                //console.log(text);
            }
            //console.log(text);
            console.log('Read finished');
            return text
        }).unpipe(list);
    }
    console.log(red());
    console.log(list);
    return red();
}