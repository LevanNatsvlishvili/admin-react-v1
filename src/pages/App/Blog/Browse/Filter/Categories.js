import { useEffect, useState } from 'react';
import { fetchDataList } from '@services/Media/Blog/Categories';
import { Label } from 'reactstrap';
import Select from '@src/Components/TextField';

const Categories = (props) => {
  const { value, onChange } = props;
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const handleFetch = async () => {
      const categories = await fetchDataList();
      const opts = categories.map((category) => {
        return {
          value: category.id,
          label: category.title,
        };
      });
      setOptions(opts);
    };

    handleFetch();
  }, []);

  const handleChange = (e) => {
    onChange({ field: 'categoryIds', value: e.target.value });
  };

  return (
    <div>
      <Label>Choose Category</Label>
      <Select options={options} value={value} onChange={handleChange} />
    </div>
  );
};

export default Categories;
