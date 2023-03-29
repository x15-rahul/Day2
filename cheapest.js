const phones = [
    {manufacture: 'Samsung', model: 'S22', color: 'Matt Green', price: 82000},
    {manufacture: 'iphone', model: 'S22', color: 'Matt Green', price: 122000},
    {manufacture: 'Xiaomi', model: 'S22', color: 'Matt Green', price: 42000},
    {manufacture: 'OPPO', model: 'S22', color: 'Matt Green', price: 24000},
    {manufacture: 'realme', model: 'S22', color: 'Matt Green', price: 16500},
    {manufacture: 'Vivo', model: 'S22', color: 'Matt Green', price: 26000},
];

function getCheapestPhone(phones){
    let cheapestPhone = phones[0].price;
    
    for(const phone of phones){
        if(cheapestPhone > phone.price){
            cheapestPhone = phone.price;
        } else {
            continue;
        }
    }
    return cheapestPhone;
}

const cheapestPhone = getCheapestPhone(phones);
console.log(cheapestPhone);