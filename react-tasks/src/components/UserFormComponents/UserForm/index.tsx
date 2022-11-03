import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';

import Input from '../Input';
import Select from '../Select';
import Switcher from '../Switcher';
import SubmitButton from '../SubmitButton';

import { AppContext } from 'context';
import { initFormData } from 'context/FormState';

import { FieldValues } from 'react-hook-form';
import { FormActionCase } from 'context/FormState/types';
import { UserValidFields, UserFormFields, AllFormFields } from 'constants/UserFormFields';
import { IformData, InewData, HandleField, Picture, Notifications, Initial } from './types';

const UserForm = () => {
  const AppState = useContext(AppContext);
  const { FormState, FormDispatch } = AppState;

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    resetField,
  } = useForm({
    defaultValues: FormState.formData,
  });
  const [buttonActive, setButtonActive] = useState(true);
  const [submitStatus, setSubmitStatus] = useState(false);

  const handleChange = () => {
    const newDataObj = AllFormFields.reduce((data, field) => {
      data[field] = getValues(field);
      return data;
    }, {} as IformData);

    const isValidFields = UserValidFields.some((name) =>
      name === HandleField.file ? Boolean(getValues(name)?.length) : Boolean(getValues(name))
    );
    setSubmitStatus(false);
    setButtonActive(!isValidFields);
    FormDispatch({ type: FormActionCase.changeData, payload: newDataObj });
  };

  const onSubmit = (data: FieldValues | IformData) => {
    const { name, surname, date, country } = data;
    const switcher = data.switcher ? Notifications.true : Notifications.false;
    const pictureFile = data.file.item(Picture.index) as File;
    const picture = URL.createObjectURL(pictureFile);

    const newData: InewData = { name, surname, date, country, switcher, picture };
    FormDispatch({
      type: FormActionCase.changeCards,
      payload: [...FormState.formCards, newData],
    });

    setSubmitStatus(true);
    FormDispatch({ type: FormActionCase.changeData, payload: initFormData });

    AllFormFields.forEach((name) => {
      if (name === Initial.countryField) resetField(name, { defaultValue: Initial.country });
      else resetField(name);
    });
  };

  return (
    <form className="form" onChange={handleChange} onSubmit={handleSubmit(onSubmit)}>
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
