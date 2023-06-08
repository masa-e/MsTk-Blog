import client from './client'
import { Post } from '../../types/blog'
import { MicroCMSQueries } from 'microcms-js-sdk'

export default defineEventHandler(async (event) => {
  const params: MicroCMSQueries = getQuery(event)
  const queries = {
    filters: `category[equals]${params.id}`,
  }
  const data = await client
    .getList<Post>({
      endpoint: 'blogs',
      queries: queries,
    })
    .catch((err) => console.error(err))
  return data
})
