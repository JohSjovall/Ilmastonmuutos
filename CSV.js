var fs = require('fs');
var csv = require('fast-csv');

//const data = "";

const list = [];
var red = fs.createReadStream('API_EN.ATM.CO2E.KT_DS2_en_csv_v2_10473877.csv')
.pipe(csv()).on('data',function(data){
    list.push(data);
    //console.log(data[1]);
}).on('end', function(listaa){
    console.log('Read finished');
    for (var i = 0; i < list.length; i++){
        console.log(i+": "+list[i]);
    }
});
console.log("stream");