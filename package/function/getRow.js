import axios from 'axios';

export default async function getRow(docId, tableId, rowId, token) {
  const uri = `https://coda.io/apis/v1beta1/docs/${docId}/tables/${tableId}/rows/${rowId}?useColumnNames=true&valueFormat=simpleWithArrays`;
  const config = { headers: { Authorization: `Bearer ${token}` } };
  const response = await axios.get(uri, config);
  return response.data;
}
