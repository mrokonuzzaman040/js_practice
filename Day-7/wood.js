function woodCalculator(chairQuantity, tableQuantity, bedQuantaity) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairWoodQuantity = chairQuantity * perChairWood;
    const tableWoodQuantity = tableQuantity * perTableWood;
    const bedWoodQuantity = bedQuantaity * perBedWood;

    const totalWood = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;
    return totalWood;

}

const firstOption = woodCalculator(1, 1, 1);
console.log(firstOption);

// Path: brick.js