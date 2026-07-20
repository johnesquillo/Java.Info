// JS.Info Task
function getMaxSubSum(arr) {

    let maxSum = 0;
    let partialSum = 0;

    for (let items of arr) {
        partialSum += items;
        maxSum = Math.max(partialSum, maxSum);
        if (partialSum < 0) partialSum = 0
    }
        return maxSum;

}

alert( getMaxSubSum([-1, 2, 3, -9]) ); 
alert( getMaxSubSum([-1, 2, 3, -9, 11]) );
alert( getMaxSubSum([-2, -1, 1, 2]) ); 
alert( getMaxSubSum([100, -9, 2, -3, 5]) ); 
alert( getMaxSubSum([1, 2, 3]) ); 
alert( getMaxSubSum([-1, -2, -3]) ); 




       
    
      



