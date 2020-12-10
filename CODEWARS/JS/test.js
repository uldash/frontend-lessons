function assertEquals(a, b) {
    if (a === b) {
        return true;
    } else {
        return `${typeof a}(${a}) === ${typeof b}(${b})`;
    }

}