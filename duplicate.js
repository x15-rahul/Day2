const names = ['abul', 'babul', 'cabul', 'dabul', 'ebul', 'babul', 'kabul', 'cabul', 'abul', 'gabul', 'abul', 'dabul'];

function removeDuplicate(names){
    const clearArray = [];
    for(const name of names){
        if(clearArray.includes(name)){
            continue;
        } else {
            clearArray.push(name);
        }
    }
    return clearArray;
}

const newArray = removeDuplicate(names);
console.log(newArray);