import { useState } from 'react';
import { deleteData } from 'services/App/Blog';
import useStore from '../../Store/Context';
import VerifyDelete from 'components/VerifyDelete';

const ActionsDelete = (props) => {
  const { id, name } = props;
  const { store, setStore } = useStore();
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(!modal);
  };

  const handleDelete = () => {
    const newStore = store
      .filter((row) => row.id !== id)
      .map((row) => {
        return row;
      });
    const updateStore = () => {
      setStore(newStore);
    };

    deleteData(id, updateStore);
    handleModal();
  };

  return (
    <VerifyDelete
      modal={modal}
      handleDelete={handleDelete}
      handleModal={handleModal}
      name={name}
      type="news"
    />
  );
};

export default ActionsDelete;
