import React from 'react';
import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';
import PropTypes from 'prop-types';

const StyleInput = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: 8,
    color: '#625f6e',
  },
  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: '#c2cdd4',
    borderWidth: 1,
  },
  '& .MuiFormLabel-root, .MuiFormLabel-root .Mui-focused': {
    textTransform: 'capitalize',
    color: '#26a69a',
  },
  '& .MuiFormLabel-root .MuiInputLabel-asterisk': {
    color: '#f44336',
  },

  '& .MuiFormLabel-root.MuiInputLabel-shrink': {
    background: 'inherit',
    color: '#26a69a',
  },
}));

function InputField(props) {
  const { label, ...rest } = props;
  return (
    <StyleInput
      id="outlined-basic"
      fullWidth
      label={label}
      variant="outlined"
      className="rounded-1-2"
      size="small"
      {...rest}
    />
  );
}

InputField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
};
InputField.defaultProps = {
  label: '',
  value: '',
  onChange: () => {},
};

export default InputField;
