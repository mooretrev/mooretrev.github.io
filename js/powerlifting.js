import {loadJSON} from './loadJSON.js';
import {url_load} from './url_parsing.js';

// document.getElementById("p1").innerHTML = "New text!";

var meets = document.getElementById('meets');

loadJSON((data)=>{
    var json = JSON.parse(data);
    var dates = json.dates;
    for(var i = 0; i < dates.length; i++){
        var anchor = document.createElement('a');
        console.log(url_load(dates[i]));
        anchor.href = './meet_results?date=' + url_load(dates[i]);
        anchor.innerText = dates[i];
        meets.appendChild(anchor);
    }

    // for(var i = 0; i < dates.length; i++){
    //     var form = document.createElement('form');
    //     form.action = '../html/meet_results?temp=1'
    //     form.method = 'GET';
    //     var input = document.createElement('input');
    //     var button = document.createElement('input');
    //     input.value = dates[i];
    //     input.type = 'hidden';
    //     input.name = 'date'
    //     input.id = 'date'

    //     button.type = 'submit';
    //     button.value = dates[i];

    //     form.appendChild(input);
    //     form.appendChild(button);

    //     meets.appendChild(form);
    // }
})

// var meet_ = JSON.parse(meet_data);

// console.log(meet_data.dates)



