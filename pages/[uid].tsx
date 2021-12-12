import {  } from "next"
import { getPage } from "../prismic/fetcher"
import { getPages } from '../prismic/fetcher'

const Page: any = (props: { page: any; }) => {
  
  return(
    <div>
      
    </div>
  )
}

export async function getStaticPaths() {
  const pages = await getPages()

  const paths = pages.map((page: { uid: any; }) => ({
    params: { uid: page.uid },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }: { params: any }) {

  const page = await getPage(params.uid)
    .then((res: { data: any; }) => res.data)

  return { props: { page } }
}

export default Page;
