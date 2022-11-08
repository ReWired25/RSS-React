import React from 'react';

import { IInputProps } from './types';

const Input = ({ className, labelText, type, name, required, errors, register }: IInputProps) => {
  return (
    <label className={`${className} input-label`}>
      <p>{labelText}</p>
      <input className="input-field" type={type} data-testid={name} {...register(name, required)} />
      {errors[name] && <p className="form-error-message">{errors[name]?.message as string}</p>}
    </label>
  );
};

export default Input;
