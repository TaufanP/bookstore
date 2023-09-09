import apiClient from '../../config/apiClient';

export default {get: () => apiClient.get('/books')};
