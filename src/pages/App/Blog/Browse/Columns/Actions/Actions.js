import ActionsEdit from './ActionsEdit';
import ActionsDelete from './ActionsDelete';

const Actions = (props) => {
  const { id, name } = props;

  return (
    <div>
      <ActionsDelete id={id} name={name} />
      <ActionsEdit id={id} />
    </div>
  );
};

export default Actions;
