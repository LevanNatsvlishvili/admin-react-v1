/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import Columns from './Columns';
import { fetchDataList } from 'services/App/Blog';
import DataTable from 'react-data-table-component';
// import { ChevronDown } from 'react-feather';
// import { useValuesUpdaterByLocale } from 'utils/locales';
// import BrowseHeader from './BrowseHeader';
// import BrowseFilter from './BrowseFilter';
import useStore from './Store/Context';

const Browse = () => {
  const {
    store,
    setStore,
    filter,
    // setFilter,
    rowsPerPage,
    setRowsPerPage,
    total,
    setTotal,
  } = useStore();

  const handleFetch = async (val) => {
    const data = await fetchDataList({
      ...filter,
      take: rowsPerPage,
      skip: rowsPerPage * val,
      languageCode: 'ka',
    });

    setTotal(data.meta.total);
    setStore(data.data);
  };
  useEffect(() => {
    handleFetch();
  }, [rowsPerPage]);

  useEffect(() => {
    if (store.length > 0) return;

    handleFetch();
  }, [store.length]);

  // const valueUpdater = useValuesUpdaterByLocale();

  // const handleChange = ({ field, value, multiLanguage }) => {
  //   setFilter((prev) => valueUpdater(field, value, multiLanguage, prev));
  // };

  const handlePageChange = (page) => {
    handleFetch(page - 1);
  };

  const handleChangeCount = (rowsPerPage) => {
    setRowsPerPage(rowsPerPage);
  };

  return (
    <div className="">
      {/* <Card>
        <BrowseFilter
          handleFilter={handleChange}
          filter={filter}
          handleFetch={handleFetch}
        />
      </Card> */}
      <div className="react-dataTable">
        <DataTable
          noHeader
          subHeader
          pagination
          responsive
          paginationServer
          columns={Columns}
          className="react-dataTable"
          data={store}
          paginationTotalRows={total}
          onChangePage={handlePageChange}
          onChangeRowsPerPage={handleChangeCount}
          // subHeaderComponent={<BrowseHeader />}
        />
      </div>
    </div>
  );
};

export default Browse;
