export const USER_VALID_FIELDS = ['name', 'surname', 'date', 'checkbox', 'file'];

export const ALL_FORM_FIELDS = ['name', 'surname', 'date', 'country', 'switcher', 'checkbox'];

export const USER_FORM_FIELDS = [
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
