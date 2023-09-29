import React from 'react';
import CheckboxComponent from '@src/Components/Checkbox';

const IsMain = (props) => {
  const { value, onChange } = props;

  const handleChange = (e) => {
    onChange({ field: 'isMain', value: e.target.checked });
  };

  return (
    <CheckboxComponent
      onChange={handleChange}
      label="Is It Main?"
      checked={value}
    />
  );
};

export default IsMain;
