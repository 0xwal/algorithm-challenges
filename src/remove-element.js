module.exports = function (nums, val)
{
    let slowPointer = 0;
    for (let fastPointer = 0; fastPointer < nums.length; fastPointer++) {
        if (nums[fastPointer] !== val) {
            nums[slowPointer] = nums[fastPointer];
            slowPointer++;
        }
    }

    return nums.length = slowPointer;
}
