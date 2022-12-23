module.exports = {
  error: {
    length: 'Make your password at least 8 characters long',
    specialCharacter: 'Inclusion of at least one special character',
    letters: 'A mixture of both uppercase and lowercase letters',
    numbers: 'A mixture of letters and numbers',
    common: 'Avoid using common words or phrases',
    personalInformation: 'Avoid using personal information',
    password: 'Password should be a valid string',
    invalidPlugin: 'Plugin should be a valid function',
  },
  regex: {
    digits: '(\\d.*)',
    letters: '([a-zA-Z].*)',
    symbols: '([`~\\!@#\\$%\\^\\&\\*\\(\\)\\-_\\=\\+\\[\\\{\\}\\]\\\\\|;:\\\'",<.>\\/\\?€£¥₹§±].*)',
    spaces: '([\\s].*)'
  }
};
