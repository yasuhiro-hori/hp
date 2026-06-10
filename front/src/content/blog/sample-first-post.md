---
title: 記事のサンプル（書き方の見本）
description: 記事の書き方の見本です。draft を false にすると公開されます。
pubDate: 2026-06-10
draft: true
---

これは記事のサンプルです。`src/content/blog/` に Markdown ファイルを置くと記事になります。

## 見出しの書き方

本文は普通の Markdown で書けます。`##` が記事内の大見出しになります。

- 箇条書き
- も使えます

コードブロックも書けます。

```ts
const hello = "world";
```

公開するときは frontmatter の `draft: true` を削除（または `false` に）してください。