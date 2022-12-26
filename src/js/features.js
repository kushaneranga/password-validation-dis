module.exports = {
    feature: {
        length: true,
        specialCharacter: true,
        letters: true,
        numbers: true,
        numLgth: {
            minLgthEnable: true,
            min: {
                lgth: 5,
            },
            maxLgthEnable: true,
            max: {
                lgth: 10,
            },
        },
        symbols: true,
        avoidCommon: true,
        avoidSpaces: true,
    }
}