import axios from 'axios';
import { DEFAULT_API_CONFIG, ApiConfig } from '../config';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const putApi = async (
  putApiPath: string,
  jsonStr?: string,
  optionConfig?: ApiConfig,
) => {
  const config = {
    ...DEFAULT_API_CONFIG,
    ...optionConfig,
  };

  const instance = axios.create(config);

  const response = await instance.put(putApiPath, jsonStr);

  if (response.status !== 200) {
    throw new Error('Server Error');
  }

  const { data } = response;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return data;
};

export default putApi;
