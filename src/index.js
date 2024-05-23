const express = require('express');
const app = express();

const { calculateMean, calculateMedian, calculateMode } = require('./calculations');
const { handleErrors, validateNums } = require('./middleware');

app.get('/mean', validateNums, (req, res) => {
    const nums = req.query.nums.split(',').map(Number);
    const value = calculateMean(nums);
    res.json({ operation: 'mean', value });
});

app.get('/median', validateNums, (req, res) => {
    const nums = req.query.nums.split(',').map(Number);
    const value = calculateMedian(nums);
    res.json({ operation: 'median', value });
});

app.get('/mode', validateNums, (req, res) => {
    const nums = req.query.nums.split(',').map(Number);
    const value = calculateMode(nums);
    res.json({ operation: 'mode', value });
});

app.use(handleErrors);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;