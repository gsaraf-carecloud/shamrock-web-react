const fields = [
  {
    type: 'input',
    subtype: 'text',
    labels: [
      {
        
        languageText: 'Username'
      },
      {
        languageId: 202,
        languageText: 'Nombre de usuario'
      }
    ]
  },
  {
    type: 'input',
    subtype: 'password',
    labels: [
      {
        languageId: 201,
        languageText: 'Password'
      },
      {
        languageId: 202,
        languageText: 'Contraseña'
      }
    ]
  },
];

const byLanugage = [
  {
    languageId: 201,
    fields: [
      {
        type: 'input',
        subtype: 'text',
        label: 'Username'
      },
      {
        type: 'input',
        subtype: 'password',
        label: 'Password'
      }
    ]
  },
  {
    languageId: 202,
    fields: [
      {
        type: 'input',
        subtype: 'text',
        label: 'Nombre de usuario'
      },
      {
        type: 'input',
        subtype: 'password',
        label: 'Contraseña'
      }
    ]
  },
];

class LoginApi {
  static getFields(languageId) {
    return new Promise((resolve, reject) => {
      resolve(Object.assign([], 
      _.find(byLanugage, {languageId: languageId}).fields
      ));
    });
  }
}

export default LoginApi;