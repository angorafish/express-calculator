function validateNums(req, res, next) {
    const { nums } = req.query;
    if (!nums) {
        return res.status(400).json({ error: 'nums are required' });
    }
    const numArray = nums.split(',');
    for (let num of numArray) {
        if (isNaN(num)) {
            return res.status(400).json({ error: `${num} is not a number` });
        }
    }
    next();
}

function handleErrors(err, req, res, next) {
    res.status(500).json({ error: 'Internal Server Error' });
}
module.exports = { validateNums, handleErrors };