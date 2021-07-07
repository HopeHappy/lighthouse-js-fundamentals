const judgeVegetable = (vegetables, metric) => {
    let indexOfLargest = [0];
    let valueOfLargest = vegetables[0][metric];

    for (let i = 1; i < vegetables.length; i++) {
        if (vegetables[i][metric] === valueOfLargest) {
            indexOfLargest.push(i);
        } else if (vegetables[i][metric] > valueOfLargest) {
            indexOfLargest.splice(0, indexOfLargest.length, i);
            console.log(indexOfLargest);
            valueOfLargest = vegetables[i][metric]
        }
    }
    console.log(indexOfLargest);
    for (let j = 0; j < indexOfLargest.length; j++) {
        console.log(vegetables[indexOfLargest[j]]['submitter'])
    }
}

const vegetables = [
    {
      submitter: 'Old Man Franklin',
      redness: 10,
      plumpness: 5
    },
    {
      submitter: 'Sally Tomato-Grower',
      redness: 10,
      plumpness: 8
    },
    {
      submitter: 'Hamid Hamidson',
      redness: 10,
      plumpness: 8
    }
]
  
const metric = 'plumpness'
  
judgeVegetable(vegetables, metric)