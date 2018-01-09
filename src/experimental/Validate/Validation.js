module.exports = {
    isEmpty: isEmpty
};

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}
