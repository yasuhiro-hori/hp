# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

株式会社テクシズ (TECSIZ Co., Ltd.) のコーポレートサイト。Astro製の静的サイトで、GitHub Pages にホスティングされている。

## Working Directory

すべての作業は `front/` ディレクトリ内で行う。

```
cd front
```

## Commands

```bash
# 開発サーバー起動 (http://localhost:4321)
pnpm dev

# 型チェック
pnpm check

# ビルド
pnpm build

# ビルド結果のプレビュー
pnpm preview
```

テスト・リントの設定はない。

## Deployment

`main` ブランチへの push で GitHub Actions が自動的にビルド・GitHub Pages へデプロイする (`.github/workflows/deploy.yml`)。

## Architecture

### Component Pattern

Astro と React のハイブリッド構成。基本方針：

- **Astro コンポーネント** (`src/components/astro/sections/`): インタラクティビティが不要なセクション（Hero, Services, FAQ など）
- **React コンポーネント** (`src/components/react/`): クライアントサイドの状態管理が必要なもの（`Navbar.tsx`, `BackendTemplates.tsx`）
- React コンポーネントをページで使う際は `client:load` ディレクティブを付与する

### Pages

| パス | ファイル | 内容 |
|------|---------|------|
| `/` | `pages/index.astro` | トップ（複数セクションを縦に並べたランディングページ） |
| `/products` | `pages/products.astro` | プロダクト紹介 |
| `/recruit` | `pages/recruit.astro` | 採用情報 |
| `/about` | `pages/about.astro` | 会社概要 |

### Layouts

- `layouts/Layout.astro`: `<head>` 全体（OGP, フォント, JSON-LD, Astro View Transitions）を管理する共通ラッパー
- `layouts/Footer.astro`: フッター

### Styling

CSS フレームワークは使用していない。`src/styles/globals.css` に CSS カスタムプロパティ（`--primary-color`, `--card-bg` 等）でデザイントークンを定義し、全コンポーネントで共有している。各 Astro コンポーネントには `<style>` ブロックでスコープ付きスタイルを書く。

### Navigation

`Navbar.tsx` はスクロール位置と URL パスを `IntersectionObserver` で監視してアクティブリンクを制御している。ホームページの「サービス」リンクは `href="/"` (トップページ) を指す。

### Path Alias

`@/*` → `src/*` で使用可能（`tsconfig.json` で設定済み）。

### TypeScript

`astro/tsconfigs/strictest` を継承した strict モード。