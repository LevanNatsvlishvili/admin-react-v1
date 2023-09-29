import Actions from './Actions';

// const status = {
//   false: {
//     color: 'danger',
//     message: 'No',
//   },
//   true: {
//     color: 'success',
//     message: 'Yes',
//   },
//   null: {
//     color: 'danger',
//     message: 'No',
//   },
// };

const columns = [
  {
    name: 'id',
    minWidth: '100px',
    grow: true,
    cell: (row) => (
      <div className="d-flex justify-content-left align-items-center">
        <div className="d-flex flex-column">{row.id}</div>
      </div>
    ),
  },
  {
    name: 'Title',
    minWidth: '350px',
    key: (row) => row.id,
    grow: true,
    cell: (row) => (
      <div className="d-flex justify-content-left align-items-center">
        <div className="d-flex flex-column">{row.title}</div>
      </div>
    ),
  },
  {
    name: 'published',
    minWidth: '150px',
    key: (row) => row.id,
    cell: (row) => (
      <div className="d-flex justify-content-left align-items-center">
        <div className="d-flex flex-column">{row.published}</div>
      </div>
    ),
  },

  {
    name: 'actions',
    grow: true,
    minWidth: '140px',
    cell: (row) => <Actions id={row.id} name={row.number} />,
  },
];

export default columns;
