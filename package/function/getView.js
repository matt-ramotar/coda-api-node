import axios from 'axios';

export default async function getView(docId, viewId, token) {
  const uri = `https://coda.io/apis/v1beta1/docs/${docId}/views/${viewId}`;
  const config = { headers: { Authorization: `Bearer ${token}` } };
  const response = await axios.get(uri, config);
  return response.data;
}