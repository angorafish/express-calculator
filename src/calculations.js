function calculateMean(nums) {
    return nums.reduce((acc, val) => acc + val, 0) / nums.length;
}

function calculateMedian(nums) {
    nums.sort((a, b) => a - b);
    const mid = Math.floor(nums.length / 2);
    return nums.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2
}

function calculateMode(nums) {
    const frequency = {};
    nums.forEach(num => {
        frequency[num] = (frequency[num] || 0) + 1;
    });
    let mode = nums[0];
    let maxCount = 0;
    for (let num in frequency) {
        if (frequency[num] > maxCount) {
            maxCount = frequency[num];
            mode = Number(num);
        }
    }
    return mode;
}

module.exports = { calculateMean, calculateMedian, calculateMode };