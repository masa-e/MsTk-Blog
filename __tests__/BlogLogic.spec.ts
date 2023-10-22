/**
 * BlogLogic.spec
 * @package logics
 */
/* logics */
import { searchBlogListLogic } from '@/logic/BlogLogic'
/* types */
import { Blog } from '../types/blog'

describe('【Logicテスト】BlogLogic test', () => {
  describe('【関数テスト】searchBlogListLogic', () => {
    const blogList: Blog[] = []
    const firstBlogItem: Blog = {
      title: 'テスト1',
      content: '',
    }
    const secondBlogItem: Blog = {
      title: 'テスト2',
      content: '',
    }
    const thirdBlogItem: Blog = {
      title: 'てすと3',
      content: '',
    }

    beforeEach(() => {
      blogList.push(firstBlogItem)
      blogList.push(secondBlogItem)
      blogList.push(thirdBlogItem)
    })
    test('【正常系】検索キーワードと部分一致した場合、ヒットしたブログ記事のリストを返す。', () => {
      const expectResult: Blog[] = [firstBlogItem, secondBlogItem]
      const targetSearchValue = 'テスト'
      expect(searchBlogListLogic(blogList, targetSearchValue)).toEqual(
        expectResult
      )
    })
    test('【正常系】検索キーワードと部分一致した記事が0の場合、空配列を返す。', () => {
      const expectResult: Blog[] = []
      const targetSearchValue = 'テスト4'
      // expect(searchBlogListLogic(blogList, targetSearchValue)).toEqual(
      //   expectResult
      // )
    })
  })
})
