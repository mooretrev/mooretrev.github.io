const name = document.querySelectorAll("#name path");

console.log('Starting Program');

console.log(`the number of paths in the name is ${name.length}`);

for(let i = 0; i < name.length; ++i){
    console.log(`Letter ${i} is ${name[i].getTotalLength()}`);
}

console.log('Ending Program');