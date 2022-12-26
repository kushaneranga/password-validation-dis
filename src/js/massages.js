const requirements = {
    length: (charLgth) => `Make your password at least ${charLgth} characters long`,
    letters: 'A mixture of both uppercase and lowercase letters',
    numbers: 'A mixture of letters and numbers',
    specialCharacter: 'Inclusion of at least one special character',
    common: 'Avoid using common words or phrases',
    personalInformation: 'Avoid using personal information',
    password: 'Password should be a valid string',
    minMaxLNumbers: (minLgth, maxLgth, num) => `The string should have a minimum Num length of ${minLgth} & maximum Num length of ${maxLgth} and you number length is ${num.length}`,
    minLNumbers: (lgth, num) => `The string should have a minimum Num length of ${lgth} and you number length is ${num.length}`,
    maxLNumbers: (lgth, num) => `The string should have a maximum Num length of ${lgth} and you number length is ${num.length}`,
}