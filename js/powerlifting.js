import {loadJSON} from './loadJSON.js';

// document.getElementById("p1").innerHTML = "New text!";

var meets = document.getElementById('meets');

loadJSON((data)=>{
    var json = JSON.parse(data);
    var dates = json.dates;
    for(var i = 0; i < dates.length; i++){
        var anchor = document.createElement('a');
        anchor.href = './meet_results.html?';
        anchor.innerText = dates[i];
        meets.appendChild(anchor);
    }
})

// var meet_ = JSON.parse(meet_data);

// console.log(meet_data.dates)



