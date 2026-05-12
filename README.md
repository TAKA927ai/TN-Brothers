# TN Brothers - Official Website

> 香港系グローバル投資会社 TN Brothers の公式Webサイト
> 黒ベース x ゴールドアクセント x 超高級デザイン
> EN / JP 多言語対応 · Vercel公開済み

公開URL: https://tn-brothers.vercel.app

---

## ファイル構成

```
tn-brothers/
├── index.html        ← TOPページ
├── company.html      ← 会社概要
├── investment.html   ← 投資分野
├── contact.html      ← お問い合わせ
├── privacy.html      ← プライバシーポリシー（EN/JP）
├── terms.html        ← 利用規約（EN/JP）
├── style.css         ← 共通スタイル
├── script.js         ← 多言語・エフェクト
├── README.md         ← このファイル
└── assets/
    └── videos/
        └── hero.mp4  ← ヒーロー動画（置くだけで有効）
```

---

## GitHubへのアップロード方法

### 新規リポジトリの場合

1. github.com にログイン
2. 右上「+」→「New repository」→名前入力→「Create repository」
3. 「Add file」→「Upload files」
4. 全ファイルをドラッグ＆ドロップ
5. 「Commit changes」をクリック

### ファイルを更新する場合

1. 「Add file」→「Upload files」で同名ファイルをアップロード（上書き）
2. 「Commit changes」をクリック
3. Vercelが自動で再デプロイします

---

## Vercelでの公開方法

1. vercel.com を開いてGitHubでログイン
2. 「Add New」→「Project」
3. リポジトリ「tn-brothers」を選択→「Import」
4. 設定はデフォルトのまま「Deploy」
5. 数分後に https://tn-brothers.vercel.app で公開完了

---

## 動画背景の変更方法

### 動画ファイルを準備

- フォーマット：MP4（H.264推奨）
- 推奨サイズ：1920x1080px
- 5MB以下を推奨
- 無料素材：pexels.com で「city night」検索

### 設定方法

1. assets/videos/hero.mp4 として配置
2. index.html を開いて以下のコメントを外す：

```html
<!-- コメントを外す（<!-- と --> を削除） -->
<video class="hero-video" autoplay muted loop playsinline>
  <source src="assets/videos/hero.mp4" type="video/mp4">
</video>
```

---

## 文章の変更方法

全ページの文言は script.js の LANG オブジェクトで管理しています。

```javascript
const LANG = {
  en: {
    hero_title1: 'Building Long-Term',  // ← 英語テキストを変更
    hero_title2: 'Value Beyond Borders',
  },
  jp: {
    hero_title1: '国境を越えた',         // ← 日本語テキストを変更
    hero_title2: '長期的価値の創造',
  }
};
```

ここを編集するだけで全ページの文言が一括で変わります。

---

## ロゴの変更方法

### 方法A：画像ファイルに置き換える

1. ロゴ画像を assets/images/logo.svg として保存
2. 各HTMLのナビロゴ部分を変更：

```html
<!-- 変更前 -->
<svg class="nav-logo-mark" viewBox="0 0 40 40">...</svg>

<!-- 変更後 -->
<img src="assets/images/logo.svg" alt="TN Brothers" class="nav-logo-mark">
```

### 方法B：SVGコードを直接編集

各HTMLファイルのナビ内 `<svg class="nav-logo-mark">` のコードを変更します。

---

## お問い合わせフォームの接続方法

現在はデモ表示のみ。実際にメールを受け取るには Formspree を使用します。

1. formspree.io で無料アカウント作成
2. 「New Form」を作成してエンドポイントURLを取得
   例：https://formspree.io/f/xabcdefg
3. contact.html の form タグを変更：

```html
<!-- 変更前 -->
<form id="contactForm" action="#" method="GET">

<!-- 変更後 -->
<form id="contactForm" action="https://formspree.io/f/xabcdefg" method="POST">
```

無料プランは月50件まで受信可能。

---

## カウンター数値の変更方法

index.html の以下の数値を変更：

```html
<span data-counter="48"  data-suffix="+">0+</span>
<span data-counter="32"  data-suffix="+">0+</span>
<span data-counter="18"  data-suffix="+">0+</span>
<span data-counter="120" data-suffix="+">0+</span>
```

---

## 色の変更方法

style.css の先頭 CSS変数を変更：

```css
:root {
  --color-gold:       #c9a84c;  /* メインゴールド */
  --color-gold-light: #e8c97a;  /* 明るいゴールド */
  --color-black:      #020304;  /* 背景の黒 */
}
```

---

## よくある質問

Q. スマートフォンで崩れる
A. ブラウザを更新してください。style.css 末尾のレスポンシブ設定を確認。

Q. 言語が切り替わらない
A. JavaScriptが有効か確認。ブラウザのコンソールでエラーを確認。

Q. Vercelで404が出る
A. index.html がリポジトリのルートに置かれているか確認。

---

## 技術仕様

- 使用技術：HTML5 / CSS3 / Vanilla JavaScript
- フォント：Cormorant Garamond / Montserrat / Noto Serif JP
- 多言語：英語（デフォルト）/ 日本語
- ホスティング：Vercel（無料プラン対応）

---

© 2025 TN Brothers. All Rights Reserved.
