# MsTk Blog

## 機能

- ブログ一覧
- カテゴリー別記事一覧
- 記事検索
- 記事詳細

## 技術構成

- Nuxt.js
- microCMS(コンテンツ)
- TypeScript
- ESLint
- Prettier
- Storybook
- Jest

## 環境変数

プロジェクトルートに.env ファイルを作成し、以下の項目を設定してください。

- MICROCMS_SERVICE_DOMAIN (microCMS の サービスドメイン)
- MICROCMS_API_KEY (microCMS の APIキー)
- PROXY_API_URL (backend の API URL)

例:

```
MICROCMS_SERVICE_DOMAIN=xxxxxxxx
MICROCMS_API_KEY=xxxxxxxx
PROXY_API_URL="http://localhost:3009"

```

## 開発方法

```
# パッケージをinstall
$ yarn

# 開発サーバーを起動(localhost:3000)
$ yarn dev

# storybookを起動
$ yarn storybook

# 単体テストを実行
$ yarn run test

```
