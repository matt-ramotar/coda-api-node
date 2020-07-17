import axios from 'axios';

export default async function getView(docId, tableId, token) {
  const uri = `https://coda.io/apis/v1beta1/docs/${docId}/tables/${tableId}`;
  const config = { headers: { Authorization: `Bearer ${token}` } };
  const response = await axios.get(uri, config);
  return response.data;
}
