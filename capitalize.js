const capitalize = (str) => {
    const string = str.split('')[0].toUpperCase() + str.slice(1);
    return string;
}

module.exports = capitalize;