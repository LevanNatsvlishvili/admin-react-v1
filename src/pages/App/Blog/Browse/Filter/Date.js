import Date from '@src/Components/Date';

const DatePicker = (props) => {
  const { onChange, value } = props;

  const handleDateChange = (newDate) => {
    const start = newDate[0].toISOString();
    const end = newDate[1] && newDate[1].toISOString();
    onChange({ field: 'start', value: start });
    onChange({ field: 'end', value: end });
  };
  const clearDate = () => {
    onChange({ field: 'start', value: '' });
    onChange({ field: 'end', value: '' });
  };

  return (
    <Date
      value={value}
      onChange={handleDateChange}
      placeholder="Choose From-To Date"
      options={{
        mode: 'range',
      }}
      onClear={clearDate}
    />
  );
};

export default DatePicker;
