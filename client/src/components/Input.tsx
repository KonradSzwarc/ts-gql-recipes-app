import React from 'react';
import TextField from '@material-ui/core/TextField';

const Input: React.FC<IProps> = ({ name, label, autoFocus, required, autoComplete, type, onChange, value }) => {
  return (
    <TextField
      autoComplete={autoComplete}
      autoFocus={autoFocus}
      required={required}
      onChange={onChange}
      value={value}
      label={label}
      type={type}
      name={name}
      id={name}
      fullWidth
      variant="outlined"
    />
  );
};

interface IProps {
  autoComplete?: string;
  name: string;
  label: string;
  autoFocus?: boolean;
  required?: boolean;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

export default Input;
