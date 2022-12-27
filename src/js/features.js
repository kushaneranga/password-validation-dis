module.exports = {
  feature: {
    length: {
      enable: true,
      lengthLimit: 8,
    },
    letters: true,
    specialCharacter: true,
    avoidSpaces: true,
    numbers: {
      enable: true,
      length: {
        min: {
          minLgthEnable: true,
          lgth: 5,
        },
        max: {
          maxLgthEnable: true,
          lgth: 10,
        },
      },
    },
    avoidCommon: true,
  },
};
