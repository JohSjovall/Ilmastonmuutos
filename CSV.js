var fs = require('fs');
var csv = require('fast-csv');

const data = "";
function read(){
    var lista = ['moikka'];
    var list = [];
    var read = fs.createReadStream('API_EN.ATM.CO2E.KT_DS2_en_csv_v2_10473877.csv')
    .pipe(csv(read)).on('data',function(data){
        list.push(data);
        //console.log(data[1]);
    }).on('end', function(){
        console.log('Read finished');
        for (var i = 0; i < list.length; i++){
            console.log(list[i][10]);
        }
        return list
    });
}

var list = read();
console.log("test");
/*console.log(list.length);
for (var i = 0; i < list.length; i++){
    console.log("list:"+list[i]);
}*/
/*setTimeout(function(){
    }
}, 10000);*/