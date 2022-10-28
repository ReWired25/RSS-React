import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import Input from '../Input';
import Select from '../Select';
import Switcher from '../Switcher';
import SubmitButton from '../SubmitButton';

import { FieldValues } from 'react-hook-form';
import { UserValidFields, UserFormFields, AllFormFields } from 'constants/UserFormFields';
import {
  IformData,
  InewData,
  IUserFormProps,
  HandleField,
  Picture,
  Notifications,
  Initial,
} from './types';

const UserForm = (props: IUserFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    resetField,
  } = useForm();
  const [buttonActive, setButtonActive] = useState(true);
  const [submitStatus, setSubmitStatus] = useState(false);

  const handleButton = () => {
    const isValidFields = UserValidFields.some((name) =>
      name === HandleField.file ? Boolean(getValues(name)?.length) : Boolean(getValues(name))
    );
    setSubmitStatus(false);
    setButtonActive(!isValidFields);
  };

  const onSubmit = (data: FieldValues | IformData) => {
    const { name, surname, date, country } = data;
    const switcher = data.switcher ? Notifications.true : Notifications.false;
    const pictureFile = data.file.item(Picture.index) as File;
    const picture = URL.createObjectURL(pictureFile);

    const newData: InewData = { name, surname, date, country, switcher, picture };
    props.onChange(newData);

    setSubmitStatus(true);
    AllFormFields.forEach((name) => {
      if (name === Initial.countryField) resetField(name, { defaultValue: Initial.country });
      else resetField(name);
    });
  };

  return (
    <form className="form" onChange={handleButton} onSubmit={handleSubmit(onSubmit)}>
      {UserFormFields.map(({ className, type, name, label, required }) => (
        <Input
          key={className}
          type={type}
          className={className}
          name={name}
          labelText={label}
          register={register}
          required={required}
          errors={errors}
        />
      ))}
      <Select register={register} />
      <Switcher register={register} />
      <SubmitButton
        isActive={Object.values(errors).length ? true : buttonActive}
        isSubmit={submitStatus}
      />
    </form>
  );
};

export default UserForm;
