const mySelf = {
    firstName: 'Rahul',
    lastName: 'Biswas',
    age: 25,
    isRich: false
};

function printName(name){
    console.log(name);
}

const friendsAge = [21, 23, 24, 25, 26];
const newFriendsAge = [29, 31, 35, 28];

console.log(typeof mySelf);
console.log(typeof printName);
console.log(Array.isArray(friendsAge));

console.log(friendsAge.indexOf(21));
if(friendsAge.includes(20)){
    console.log('25 is here');
} else {
    console.log('25 is not here');
}

const newArray = friendsAge.concat(newFriendsAge);
console.log(newArray.join('|'));

