const languages = [
  {
    id: 201,
    firstName: 'English',
    nextRoute: 'login'
  },
  {
    id: 202,
    firstName: 'Español',
    nextRoute: 'login'
  }
];

class LanguagesApi {
  static getAllLanguages() {
    return new Promise((resolve, reject) => {
      resolve(Object.assign([], languages));
    });
  }
}

export default LanguagesApi;