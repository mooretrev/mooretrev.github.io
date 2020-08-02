import {url_parse, getQueryParams} from './url_parsing.js';
import {loadJSON} from './loadJSON.js';

var json = loadJSON((json) =>{

    var title = document.getElementById('title');
    var title_contents = title.innerHTML;

    const meet_date = url_parse(getQueryParams('date', window.location.href));
    title.innerHTML = title_contents + " " + meet_date

    let data = JSON.parse(json)[meet_date]

    // var input_div = document.getElementById('results');
    var flexcontainer = document.createElement('div');
    flexcontainer.className = 'flex-container';
    
    for(var lifter in data){
        var lifterRow = createRow();
        var lifterCell = createCell(lifter);
        lifterRow.appendChild(lifterCell);
        flexcontainer.appendChild(lifterRow);


        var squat_row = createRow();
        var squat_name = createCell('Squat');
        var sq1 = createWeightCell(data[lifter].Squat["Attempt 1"]);
        var sq2 = createWeightCell(data[lifter].Squat["Attempt 2"]);
        var sq3 = createWeightCell(data[lifter].Squat["Attempt 3"]);
        squat_row.appendChild(squat_name);
        squat_row.appendChild(sq1);
        squat_row.appendChild(sq2);
        squat_row.appendChild(sq3);
        flexcontainer.appendChild(squat_row);

        var bench_row = createRow();
        var bench_name = createCell('Bench');
        var ben1 = createWeightCell(data[lifter].Bench["Attempt 1"]);
        var ben2 = createWeightCell(data[lifter].Bench["Attempt 2"]);
        var ben3 = createWeightCell(data[lifter].Bench["Attempt 3"]);
        bench_row.appendChild(bench_name);
        bench_row.appendChild(ben1);
        bench_row.appendChild(ben2);
        bench_row.appendChild(ben3);
        flexcontainer.appendChild(bench_row);

        var dead_row = createRow();
        var dead_name = createCell('Deadlift');
        var dead1 = createWeightCell(data[lifter].Deadlift["Attempt 1"]);
        var dead2 = createWeightCell(data[lifter].Deadlift["Attempt 2"]);
        var dead3 = createWeightCell(data[lifter].Deadlift["Attempt 3"]);
        dead_row.appendChild(dead_name);
        dead_row.appendChild(dead1);
        dead_row.appendChild(dead2);
        dead_row.appendChild(dead3);
        flexcontainer.appendChild(dead_row);




    }
    console.log(flexcontainer);
    document.body.appendChild(flexcontainer);
    console.log("done");
});

const createCell = (data) =>{
    var div = document.createElement('div');
    div.className = 'cell';
    var text = document.createElement('h2');
    text.innerHTML = data;
    div.appendChild(text);
    return div;
}

const createWeightCell = (data) =>{
    var div = document.createElement('div');
    div.className = 'cell';
    var text = document.createElement('h2');
    text.innerHTML = data.Weight;
    if(data.Sucessful && data.Weight != 'DNA'){
        text.style.color = 'green';
    }else if(data.Weight != 'DNA'){
        text.style.color = 'red';
    }
    div.appendChild(text);
    return div;
}

const createRow = () =>{
    var div = document.createElement('div');
    div.className = 'row';
    return div;
}

