import client from './client'
import { Post } from '../../types/blog'
// import { Blog } from '../../types/blog'
import { MicroCMSQueries } from 'microcms-js-sdk'

export default defineEventHandler(async (event) => {
  const queries: MicroCMSQueries = getQuery(event)
  const data = await client
    .getList<Post>({
      endpoint: 'blogs',
      queries: queries,
    })
    .catch((err) => console.error(err))
  // const data  = await useMicroCMSGetList<Post>({
  //   endpoint: 'blogs',
  //   queries: queries
  // }).catch((err) => console.error(err));
  return data
})
