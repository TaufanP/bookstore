import {AxiosError} from 'axios';
import {logging} from '../../../../helpers';

const LOCATION = 'src/utils/apiHelper/interceptors/error';

export default function (error: AxiosError) {
  const statusCode = error?.response ? error?.response?.status : null;

  if (statusCode === null) return Promise.reject(error);

  if (statusCode === 400) {
    // Bad Request
    // logging('Bad Request detected', undefined, 'error', `${LOCATION}/400`);
    return Promise.reject({
      ...(error?.response?.data || {}),
      status: statusCode,
    });
  }

  if (statusCode === 401) {
    // Unauthorized user
    // logging('Unauthorized user', undefined, 'info', `${LOCATION}/401`);
    return Promise.reject({
      ...(error?.response?.data || {}),
      status: statusCode,
    });
  }

  if (statusCode === 404) {
    const customError = new Error(
      'We cannot process your request, please try again later!',
    );
    return Promise.reject(customError);
  }

  if (statusCode >= 500) {
    // Server error
    // logging(JSON.stringify(error?.response), 'er', 'error');
    // logging('Server error', undefined, 'error', `${LOCATION}/500`);
    // @ts-ignore
    return Promise.reject({
      ...(error?.response?.data || {}),
      status: statusCode,
    });
  }

  if (statusCode === 422) {
    // Server unable to process the request
    logging(
      'Unable to process the request',
      undefined,
      'info',
      `${LOCATION}/422`,
    );
    return;
  }

  return Promise.reject(error);
}
