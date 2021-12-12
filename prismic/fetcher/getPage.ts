import client from "../client"

async function getPage(uid: string) {
  
  return client.getByUID('page', uid, {})
}

export default getPage;
