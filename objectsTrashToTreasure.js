const smartGarbage = (trash, bins) => {
    let trashTypeOfBins = Object.keys(bins);

    for (let i = 0; i < trashTypeOfBins.length; i++) {
        if (trashTypeOfBins[i] === trash) {
            bins[trashTypeOfBins[i]]++;
        }
    }
    return bins;
}

console.log(smartGarbage('recycling', {waste: 4, recycling: 2, compost: 5}));