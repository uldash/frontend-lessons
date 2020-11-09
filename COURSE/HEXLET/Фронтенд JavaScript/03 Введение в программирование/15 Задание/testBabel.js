const testOriginal = (a) => {
    let i = 25;
    for (let i = 0; i <= a; i++) {
        console.log(i);
    }
    console.log(i);
}

const testBabel = (a) => {
    var i = 25;
    for (var _i = 0; _i <= a; _i++) {
        console.log(_i);
    }
    console.log(i);
}


testOriginal(5);
