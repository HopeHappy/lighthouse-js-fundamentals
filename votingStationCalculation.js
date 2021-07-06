const stations = [
    ['Big Bear Donair', 10, 'restaurant'],
    ['Bright Lights Elementary', 50, 'school'],
    ['Moose Mountain Community Centre', 45, 'community centre']
];

const chooseStations = nameLists => {
    let finalNameList = [];
    for (let name of nameLists) {
        if(name[1] >= 20 && (name[2] === 'school' || name[2] === 'community centre')) {
            finalNameList.push(name[0]);
        }
    }
    return finalNameList;
}

console.log(chooseStations(stations));