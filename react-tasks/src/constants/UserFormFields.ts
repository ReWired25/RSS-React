export const UserValidFields = ['name', 'surname', 'date', 'checkbox', 'file'];

export const AllFormFields = ['name', 'surname', 'date', 'country', 'switcher', 'file', 'checkbox'];

export const UserFormFields = [
  {
    className: 'input-name',
    type: 'text',
    name: 'name',
    label: 'Name:',
    required: {
      required: '* fill in the field',
      minLength: {
        value: 3,
        message: '* minimum 3 characters',
      },
      maxLength: {
        value: 10,
        message: '* maximum 10 characters',
      },
    },
  },
  {
    className: 'input-surname',
    type: 'text',
    name: 'surname',
    label: 'Surname:',
    required: {
      required: '* fill in the field',
      minLength: {
        value: 3,
        message: '* minimum 3 characters',
      },
      maxLength: {
        value: 10,
        message: '* maximum 10 characters',
      },
    },
  },
  {
    className: 'input-date',
    type: 'date',
    name: 'date',
    label: 'Birth:',
    required: { required: '* select a date!' },
  },
  {
    className: 'input-file',
    type: 'file',
    name: 'file',
    label: 'Picture:',
    required: { required: '* choose an image!' },
  },
  {
    className: 'input-checkbox',
    type: 'checkbox',
    name: 'checkbox',
    label: 'I consent to personal data',
    required: { required: '* сonsent required!' },
  },
];
