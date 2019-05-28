import React from 'react';
import TextField from '@material-ui/core/TextField';

const TextArea: React.FC<IProps> = ({ name, label, autoFocus, required, autoComplete, rows, rowsMax }) => {
  return (
    <TextField
      autoComplete={autoComplete}
      autoFocus={autoFocus}
      required={required}
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
}

TextArea.defaultProps = {
  rows: 4,
}

export default TextArea;
