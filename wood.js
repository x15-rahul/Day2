/* 
chair = 3cft
table = 10cft
bed = 50cft
 */
const woodForChair = 3;
const woodForTable = 10;
const woodForBed = 50;

function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
    const totalChairWood = chairQuantity * woodForChair;
    const totalTableWood = tableQuantity * woodForTable;
    const totalBedWood = bedQuantity * woodForBed;

    const totalWoodNeeded = totalChairWood + totalTableWood + totalBedWood;

    return totalWoodNeeded;
}

const totalWood = woodCalculator(0, 0, 1);
console.log(totalWood);