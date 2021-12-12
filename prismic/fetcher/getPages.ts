import client from "../client"

async function getPages() {
  
  return client.query('')
    .then(res => res.results)
}

export default getPages;
