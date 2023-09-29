import { Input, Label } from 'reactstrap';

const Search = (props) => {
  const { value, onChange } = props;

  return (
    <>
      <Label>Search</Label>
      <Input placeholder="Search" onChange={onChange} name="q" value={value} />
    </>
  );
};

export default Search;
