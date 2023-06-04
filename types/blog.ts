import type {
  MicroCMSImage,
  MicroCMSListContent,
  MicroCMSListResponse,
} from 'microcms-js-sdk'
import { Category } from './category'

export type Blog = {
  title?: string
  content?: string
  eyecatch?: MicroCMSImage
  category: (MicroCMSListContent & Category) | null
}

export type Tag = {
  name: string
  sortOrder: number
} & MicroCMSListContent

export type TagList = MicroCMSListResponse<Tag>

export type Post = {
  title: string
  description: string
  keywords: string
  thumbnail: MicroCMSImage
  tag: Tag[]
  tocVisible: boolean
  text: string
  related: Post[]
  useRepeatBody: boolean
  repeated: Body[]
} & MicroCMSListContent

export type PostList = MicroCMSListResponse<Post>
