import axios from 'axios';

export default async function getDoc(docId, token) {
  const uri = `https://coda.io/apis/v1beta1/docs/${docId}`;
  const config = { headers: { Authorization: `Bearer ${token}` } };
  const response = await axios.get(uri, config);
  return response.data;
}
