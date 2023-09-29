import { StoreContextProvider } from './Store/Context';
import Browse from './Browse';

const BrowseProvider = () => {
  return (
    <StoreContextProvider>
      <Browse />
    </StoreContextProvider>
  );
};

export default BrowseProvider;
