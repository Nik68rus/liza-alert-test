import ApiService from './api';

const JSON_QUERY = '.json?print=pretty';
const BASE_URL = 'https://hacker-news.firebaseio.com/v0';
const client = new ApiService({ baseURL: BASE_URL });

const hackerNewsApi = {};

hackerNewsApi.getNewItemIds = () => client.get(`/newstories${JSON_QUERY}`);
hackerNewsApi.getItem = id => client.get(`/item/${id}${JSON_QUERY}`);

export default hackerNewsApi;