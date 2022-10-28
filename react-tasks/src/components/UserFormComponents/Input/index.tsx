import React from 'react';

import { IInputProps } from './types';

const Input = (props: IInputProps) => {
  return (
    <label className={`${props.className} input-label`}>
      <p>{props.labelText}</p>
      <input
        className="input-field"
        type={props.type}
        data-testid={props.name}
        {...props.register(props.name, props.required)}
      />
      {props.errors[props.name] && (
        <p className="form-error-message">{props.errors[props.name]?.message as string}</p>
      )}
    </label>
  );
};

export default Input;
