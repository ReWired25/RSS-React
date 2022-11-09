import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';

import Input from '../Input';
import Select from '../Select';
import Switcher from '../Switcher';
import SubmitButton from '../SubmitButton';

import { changeFormState } from 'store/FormState/reducer';
import { initFormData } from 'store/FormState';

import { USER_VALID_FIELDS, USER_FORM_FIELDS, ALL_FORM_FIELDS } from 'constants/UserFormFields';

import { RootState } from 'store/types';
import { FieldValues } from 'react-hook-form';
import { IformData, InewData, HandleField, Picture, Notifications, Initial } from './types';

const UserForm = () => {
  const { FormState } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    resetField,
  } = useForm({
    defaultValues: FormState.formData,
  });

  const handleChange = () => {
    const FormData = ALL_FORM_FIELDS.reduce((data, field) => {
      data[field] = getValues(field);
      return data;
    }, {} as IformData);

    const isValidFields = USER_VALID_FIELDS.some((name) =>
      name === HandleField.file ? Boolean(getValues(name)?.length) : Boolean(getValues(name))
    );
    const submitStatus = false;
    const buttonActive = !isValidFields;
    dispatch(changeFormState({ FormData, buttonActive, submitStatus }));
  };

  const onSubmit = (data: FieldValues | IformData) => {
    const { name, surname, date, country } = data;
    const switcher = data.switcher ? Notifications.true : Notifications.false;
    const pictureFile = data.file.item(Picture.index) as File;
    const picture = URL.createObjectURL(pictureFile);

    const newCard: InewData = { name, surname, date, country, switcher, picture };
    const submitStatus = true;
    const buttonActive = true;
    const FormData = initFormData;
    dispatch(changeFormState({ newCard, FormData, buttonActive, submitStatus }));

    ALL_FORM_FIELDS.forEach((name) => {
      if (name === Initial.countryField) resetField(name, { defaultValue: Initial.country });
      else resetField(name);
    });
  };

  return (
    <form className="form" onChange={handleChange} onSubmit={handleSubmit(onSubmit)}>
      {USER_FORM_FIELDS.map(({ className, type, name, label, required }) => (
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
        isValid={Object.values(errors).length ? true : FormState.buttonActive}
        isSubmit={FormState.submitStatus}
      />
    </form>
  );
};

export default UserForm;
