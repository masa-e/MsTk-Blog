import { createClient } from 'microcms-js-sdk' //ES6
import { env } from 'process'

const client = createClient({
  serviceDomain: env.MICROCMS_SERVICE_DOMAIN,
  apiKey: env.MICROCMS_API_KEY,
})

export default client
