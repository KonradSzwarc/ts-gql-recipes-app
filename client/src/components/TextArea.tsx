import React from 'react';
import TextField from '@material-ui/core/TextField';

const TextArea: React.FC<IProps> = ({ name, label, autoFocus, required, autoComplete, rows, rowsMax, onChange, value }) => {
  return (
    <TextField
      autoComplete={autoComplete}
      autoFocus={autoFocus}
      required={required}
      onChange={onChange}
      value={value}
      label={label}
      name={name}
      id={name}
      rows={rows}
      rowsMax={rowsMax}
      fullWidth
      multiline
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
  rows?: number;
  rowsMax?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

TextArea.defaultProps = {
  rows: 4,
}

export default TextArea;
