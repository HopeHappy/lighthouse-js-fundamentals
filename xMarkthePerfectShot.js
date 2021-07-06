const finalPosition = moves => {
    let x = 0;
    let y = 0;
    let location = [];

    for (let move of moves) {
        if (move === 'east') {
            x++;
        } else if (move === 'west') {
            x--;
        } else if (move === 'north') {
            y++;
        } else if (move === 'south') {
            y--;
        }
    }
    location.push(x, y);
    return location;
}

let moves = ['north' , 'north', 'west', 'west', 'north', 'east', 'north'];
console.log(finalPosition(moves));