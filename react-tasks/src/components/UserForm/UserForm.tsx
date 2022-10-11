import React from 'react';

import Input from './Input/Input';
import SubmitButton from './SubmitButton/SubmitButton';
import Select from './Select/Select';
import Switcher from './Switcher/Switcher';
import { UserFormFields } from 'constants/UserFormFields';

import {
  IUserFormProps,
  InewData,
  IFormsInputs,
  Picture,
  Notifications,
  InputValue,
  Initial,
  Clear,
} from './types';

class UserForm extends React.Component<IUserFormProps> {
  errorsState: HTMLInputElement[] = [];

  handleValidInput(input: HTMLInputElement, button: HTMLButtonElement) {
    const value = input.type === 'checkbox' ? input.checked : input.value;
    return this.handleValidData(input, value, button);
  }

  handleValidFile(input: HTMLInputElement, button: HTMLButtonElement) {
    const value = input.files?.length || input.files?.item(Picture.index)?.type.includes('image');
    return this.handleValidData(input, value, button);
  }

  handleValidData(
    input: HTMLInputElement,
    value: boolean | number | string | undefined,
    button: HTMLButtonElement
  ) {
    if (!value) {
      if (!this.errorsState.includes(input)) this.errorsState.push(input);
      input.classList.add(InputValue.invalid);
      button.disabled = true;
      return false;
    }

    if (this.errorsState.includes(input)) {
      const index = this.errorsState.indexOf(input);
      this.errorsState.splice(index, 1);
    }
    input.classList.remove(InputValue.invalid);
    return true;
  }

  handleFormData: React.FormEventHandler<HTMLFormElement & IFormsInputs> = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const {
      inputName,
      inputSurname,
      inputDate,
      selectCountry,
      inputSwitcher,
      inputCheckbox,
      inputFile,
      submitButton,
    } = form;

    const isValidArray = [
      this.handleValidInput(inputName, submitButton),
      this.handleValidInput(inputSurname, submitButton),
      this.handleValidInput(inputDate, submitButton),
      this.handleValidInput(inputCheckbox, submitButton),
      this.handleValidFile(inputFile, submitButton),
    ];
    const isValid = isValidArray.every((validData) => validData);
    if (!isValid) return;

    const name = inputName.value;
    const surname = inputSurname.value;
    const date = inputDate.value;
    const country = selectCountry.value;
    const switcher = inputSwitcher.checked ? Notifications.true : Notifications.false;
    const pictureFile = inputFile.files?.item(Picture.index) as File;
    const picture = URL.createObjectURL(pictureFile);

    const newData: InewData = { name, surname, date, country, switcher, picture };
    this.props.onChange(newData);

    submitButton.classList.add('submit-success');
    submitButton.disabled = true;

    [inputName, inputSurname, inputDate, inputFile].forEach((field) => (field.value = Clear.input));
    selectCountry.value = Initial.country;
    inputSwitcher.checked = false;
    inputCheckbox.checked = false;
  };

  handleSubmitButton: React.FormEventHandler<HTMLFormElement & IFormsInputs> = (e) => {
    const form = e.currentTarget;
    const button = form.submitButton;
    const { inputName, inputSurname, inputDate, inputCheckbox, inputFile } = form;
    if (!inputName || !inputSurname || !inputDate || !inputCheckbox || !inputFile) return;

    button.classList.remove('submit-success');

    if (this.errorsState.length) {
      this.errorsState.forEach((input) => {
        input.type === 'file'
          ? this.handleValidFile(input, button)
          : this.handleValidInput(input, button);
      });
    }
    if (this.errorsState.length) return;

    if (
      inputName.value ||
      inputSurname.value ||
      inputDate.value ||
      inputCheckbox.checked ||
      inputFile.files?.length
    ) {
      button.disabled = false;
    } else {
      button.disabled = true;
    }
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleFormData} onChange={this.handleSubmitButton}>
        {UserFormFields.map(({ className, type, name, label, validation }) => {
          return (
            <Input
              key={className}
              inputClassName={className}
              inputType={type}
              inputName={name}
              labelText={label}
              validationMessage={validation}
            />
          );
        })}
        <Select />
        <Switcher />
        <SubmitButton />
      </form>
    );
  }
}

export default UserForm;
