/* eslint-disable array-callback-return */
// import NotificationManager from 'react-notifications/lib/NotificationManager';
// import generateErrorMsg from 'utility/generateErrorMsg';
// import Messages from './Messages';

export const errorHandler = (e, specification) => {
  if (e && e.response && e.response.data && e.response.data.errors) {
    // const result = generateErrorMsg(e.response.data.errors, specification);
    // console.log(e.response.data.errors);
    // result.forEach((error) => {
    //   if (Array.isArray(error)) {
    //     error.map((err) => {
    //       NotificationManager.error(err, '', 3000);
    //     });
    //     return;
    //   }
    //   NotificationManager.error(error, '', 3000);
    // });
  }
};

export const successHandler = (response, msg, func) => {
  // NotificationManager.success(msg || Messages.success, '', 3000);
  if (func) func();
  return response;
};
