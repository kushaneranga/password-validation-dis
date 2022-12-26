module.exports = {
    feature: {
        length: {
            enable: true,
            lengthLimit: 8,
        },
        numbers: true,
        letters: true,
        specialCharacter: true,
        avoidSpaces: true,
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
        avoidCommon: true,
    }
}