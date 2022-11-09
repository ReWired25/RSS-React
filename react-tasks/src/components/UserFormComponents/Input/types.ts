import { UseFormRegister } from 'react-hook-form';
import { FieldValues } from 'react-hook-form';
import { FieldErrors } from 'react-hook-form';
import { IformData } from '../UserForm/types';

interface IrequiredLength {
  value: number;
  message: string;
}

interface IInputRequired {
  required: string;
  minLength?: IrequiredLength;
  maxLength?: IrequiredLength;
}

export interface IInputProps {
  className: string;
  labelText: string;
  type: string;
  name: string;
  register: UseFormRegister<IformData>;
  required: IInputRequired;
  errors: FieldErrors<FieldValues>;
}
