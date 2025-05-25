# React First Impression

ReactとSSG（Static Site Generation）について紹介する1ページ型のランディングページです。GitHub Pagesでの公開を想定したSSG対応のReactアプリケーションです。

## 🌟 特徴

- **SSG対応**: Next.jsのStatic Site Generationを使用し、高速なページ読み込みを実現
- **レスポンシブデザイン**: モバイルとデスクトップの両方に対応
- **ダークテーマ**: 黒をベースとしたモダンなデザイン
- **アニメーション効果**: グリッチテキストエフェクトによる視覚的なインパクト
- **GitHub Pages対応**: 静的ファイル生成によりGitHub Pagesで簡単にデプロイ可能

## 🚀 デモ

[Live Demo](https://your-username.github.io/react-first-impression/)

## 📋 ページ構成

### Header
- **タイトル**: "React First Impression"
- **アニメーション**: グリッチテキストエフェクト（3秒間隔で発動）

### Main Content

#### 1. Reactについて
- Reactの概要説明
- **メリット**:
  - コンポーネントベースで再利用性が高い
  - 仮想DOMによる高いパフォーマンス
  - 豊富なエコシステムと活発なコミュニティ
- **デメリット**:
  - 学習コストが高い
  - 頻繁なアップデートによる互換性の問題
  - SEOの実装が複雑になる場合がある

#### 2. SSGについて
- SSG（Static Site Generation）の概要説明
- **メリット**:
  - 高速なページ読み込み
  - 優れたSEOパフォーマンス
  - 低コストでのホスティング
- **デメリット**:
  - 動的コンテンツの実装が制限される
  - 大規模サイトではビルド時間が長くなる
  - リアルタイムデータの表示が困難

### Footer
- **Vercel**: 公式サイトへのリンク
- **v0**: 公式サイトへのリンク

## 🛠️ 技術スタック

- **フレームワーク**: Next.js 15
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **デプロイ**: GitHub Pages
- **アニメーション**: カスタムCSS + React Hooks

## 📦 セットアップ

### 前提条件
- Node.js 18.0.0 以上
- npm または yarn

### インストール

1. リポジトリをクローン
\`\`\`bash
git clone https://github.com/your-username/react-first-impression.git
cd react-first-impression
\`\`\`

2. 依存関係をインストール
\`\`\`bash
npm install
\`\`\`

3. 開発サーバーを起動
\`\`\`bash
npm run dev
\`\`\`

4. ブラウザで \`http://localhost:3000\` を開く

## 🚀 デプロイ

### GitHub Pagesへのデプロイ

1. 静的ファイルをビルド
\`\`\`bash
npm run build
\`\`\`

2. \`out\` フォルダの内容をGitHub Pagesにデプロイ

### 自動デプロイ（GitHub Actions）

\`.github/workflows/deploy.yml\` を作成して自動デプロイを設定:

\`\`\`yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build
      run: npm run build
    
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: \${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./out
\`\`\`

## 📁 プロジェクト構造

\`\`\`
react-first-impression/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── glitch-text.tsx
├── public/
├── next.config.mjs
├── tailwind.config.ts
├── package.json
└── README.md
\`\`\`

## ⚙️ 設定ファイル

### next.config.mjs
- \`output: 'export'\`: SSG有効化
- \`distDir: 'out'\`: 出力フォルダ指定
- \`images: { unoptimized: true }\`: 静的エクスポート用画像設定

### tailwind.config.ts
- ダークテーマ対応
- カスタムアニメーション設定

## 🎨 カスタマイズ

### グリッチエフェクトの調整
\`components/glitch-text.tsx\` でアニメーションのタイミングや色を変更可能:

\`\`\`typescript
// アニメーション間隔を変更（現在: 3秒）
const interval = setInterval(() => {
  // ...
}, 3000) // ← この値を変更

// グリッチ色を変更
textShadow: "2px 0 #ff0000, -2px 0 #00ffff, 0 2px #ffff00"
\`\`\`

### 出力フォルダ名の変更
\`next.config.mjs\` で \`distDir\` を変更:

\`\`\`javascript
const nextConfig = {
  // ...
  distDir: 'docs', // GitHub Pages用
  // ...
}
\`\`\`

## 📱 レスポンシブ対応

- **モバイル**: 320px〜768px
- **タブレット**: 768px〜1024px
- **デスクトップ**: 1024px以上

## 🔧 開発用コマンド

\`\`\`bash
npm run dev          # 開発サーバー起動
npm run build        # 本番用ビルド
npm run start        # 本番サーバー起動（SSGでは不要）
npm run lint         # ESLintチェック
\`\`\`

## 📄 ライセンス

MIT License

## 🤝 コントリビューション

1. このリポジトリをフォーク
2. 機能ブランチを作成 (\`git checkout -b feature/amazing-feature\`)
3. 変更をコミット (\`git commit -m 'Add some amazing feature'\`)
4. ブランチにプッシュ (\`git push origin feature/amazing-feature\`)
5. プルリクエストを作成

## 📞 サポート

質問や問題がある場合は、[Issues](https://github.com/your-username/react-first-impression/issues) を作成してください。

---

**Built with ❤️ using React, Next.js, and Tailwind CSS**
