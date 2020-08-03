import {loadJSON} from './loadJSON.js';
import {url_load} from './url_parsing.js';

var meets = document.getElementById('meets');

loadJSON((data)=>{
    var json = JSON.parse(data);
    var dates = json.dates;
    for(var i = 0; i < dates.length; i++){
        var anchor = document.createElement('a');
        anchor.href = './meet_results?date=' + url_load(dates[i]);
        anchor.innerText = dates[i];
        meets.appendChild(anchor);
    }
})
