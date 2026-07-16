function sumInput() {
    let numSelection = [];

    while(true) {
        
        let nums = prompt('', 0);

        if (nums === "" || nums === null || nums === !isFinite(nums)) break;

        numSelection.push(+nums);
    }

        let sum = 0;

        for (let number of numSelection) {
            sum += number;
        }
            return sum;
}

alert(sumInput());