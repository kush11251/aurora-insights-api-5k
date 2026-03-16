function calculateAverage(data) {
    const sum = data.reduce((acc, curr) => acc + curr.value, 0);
    return sum / data.length;
}

module.exports = { calculateAverage };