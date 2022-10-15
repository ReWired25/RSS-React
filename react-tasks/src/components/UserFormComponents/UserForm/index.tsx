import React from 'react';

import Input from '../Input';
import SubmitButton from '../SubmitButton';
import Select from '../Select';
import Switcher from '../Switcher';
import { UserFormFields } from 'constants/UserFormFields';

import {
  IUserFormProps,
  IUserFormState,
  InewData,
  IFormsInputs,
  Picture,
  Notifications,
  Initial,
  Clear,
} from './types';

class UserForm extends React.Component<IUserFormProps, IUserFormState> {
  constructor(props: IUserFormProps) {
    super(props);
    this.state = { errorsState: [], isSubmitButtonDisabled: true, isSubmitSuccess: false };
  }

  handleValidInput(input: HTMLInputElement) {
    const value = input.type === 'checkbox' ? input.checked : input.value;
    return this.handleValidData(input, value);
  }

  handleValidFile(input: HTMLInputElement) {
    const value = input.files?.length || input.files?.item(Picture.index)?.type.includes('image');
    return this.handleValidData(input, value);
  }

  handleValidData(input: HTMLInputElement, value: boolean | number | string | undefined) {
    if (!value) {
      if (!this.state.errorsState.includes(input)) this.state.errorsState.push(input);
      this.setState({ isSubmitButtonDisabled: true });
      return false;
    }

    if (this.state.errorsState.includes(input)) {
      const index = this.state.errorsState.indexOf(input);
      this.state.errorsState.splice(index, 1);
    }

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
    } = form;

    const isValidArray = [
      this.handleValidInput(inputName),
      this.handleValidInput(inputSurname),
      this.handleValidInput(inputDate),
      this.handleValidInput(inputCheckbox),
      this.handleValidFile(inputFile),
    ];
    const isValid = isValidArray.every((validData) => validData);
    console.log(this.state.errorsState);
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

    this.setState({ isSubmitButtonDisabled: true, isSubmitSuccess: true });

    [inputName, inputSurname, inputDate, inputFile].forEach((field) => (field.value = Clear.input));
    selectCountry.value = Initial.country;
    inputSwitcher.checked = false;
    inputCheckbox.checked = false;
  };

  handleSubmitButton: React.FormEventHandler<HTMLFormElement & IFormsInputs> = (e) => {
    const form = e.currentTarget;
    const { inputName, inputSurname, inputDate, inputCheckbox, inputFile } = form;

    this.setState({ isSubmitSuccess: false });

    if (this.state.errorsState.length) {
      this.state.errorsState.forEach((input) => {
        input.type === 'file' ? this.handleValidFile(input) : this.handleValidInput(input);
      });
    }
    if (this.state.errorsState.length) return;

    if (
      inputName.value ||
      inputSurname.value ||
      inputDate.value ||
      inputCheckbox.checked ||
      inputFile.files?.length
    ) {
      this.setState({ isSubmitButtonDisabled: false });
    } else {
      this.setState({ isSubmitButtonDisabled: true });
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
              validationMessage={
                this.state.errorsState.some((input) => input.name === name) && validation
              }
            />
          );
        })}
        <Select />
        <Switcher />
        <SubmitButton
          isDisabled={this.state.isSubmitButtonDisabled}
          isSubmitSuccess={this.state.isSubmitSuccess}
        />
      </form>
    );
  }
}

export default UserForm;
