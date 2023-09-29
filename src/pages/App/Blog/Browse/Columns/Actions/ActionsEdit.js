import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import { Edit } from '@mui/icons-material';
import paths from 'routing/Paths';

const ActionsEdit = (props) => {
  const { id } = props;

  return (
    <IconButton
      variant="outlined"
      as={Link}
      to={`${paths.app.blog.create}?id=${id}`}
      color="success"
    >
      <Edit />
    </IconButton>
  );
};

export default ActionsEdit;
