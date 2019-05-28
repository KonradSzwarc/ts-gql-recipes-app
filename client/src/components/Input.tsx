import React from 'react';
import TextField from '@material-ui/core/TextField';

const Input: React.FC<IProps> = ({ name, label, autoFocus, required, autoComplete, type }) => {
  return (
    <TextField
      autoComplete={autoComplete}
      autoFocus={autoFocus}
      required={required}
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
}

export default Input;
