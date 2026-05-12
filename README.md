# TN Brothers - Official Website

> 香港系グローバル投資会社 TN Brothers の公式Webサイト  
> 黒ベース × ゴールドアクセント の超高級デザイン

---

## ファイル構成

```
tn-brothers/
├── index.html        ← TOPページ
├── company.html      ← 会社概要ページ
├── investment.html   ← 投資分野ページ
├── contact.html      ← お問い合わせページ
├── style.css         ← 全ページ共通スタイル
├── script.js         ← 全ページ共通JavaScript
└── README.md         ← このファイル
```

---

## GitHub へのアップロード方法

### 手順1. GitHub でリポジトリを作成

1. [github.com](https://github.com) にログイン
2. 右上の「＋」→「New repository」をクリック
3. Repository name に `tn-brothers`（任意）と入力
4. 「Create repository」をクリック

### 手順2. ファイルをアップロード

1. 作成したリポジトリを開く
2. 「Add file」→「Upload files」をクリック
3. 以下の7ファイルをすべてドラッグ＆ドロップ：
   - `index.html`
   - `company.html`
   - `investment.html`
   - `contact.html`
   - `style.css`
   - `script.js`
   - `README.md`
4. 「Commit changes」をクリック

---

## Vercel での公開方法

### 手順1. Vercel にログイン

1. [vercel.com](https://vercel.com) を開く
2. 「Continue with GitHub」でログイン

### 手順2. プロジェクトをインポート

1. ダッシュボードで「Add New」→「Project」
2. GitHub リポジトリ一覧から `tn-brothers` を選択
3. 「Import」をクリック
4. 設定はそのまま「Deploy」をクリック

### 手順3. 公開完了

- 数分後に `https://tn-brothers.vercel.app` のような URL で公開されます
- GitHub に変更を Push するたびに自動的に更新されます

---

## 文章の変更方法

### キャッチコピーを変更したい場合

`index.html` を開き、以下の部分を探して変更します：

```html
<!-- メインタイトル ここを変更 -->
<h1 class="hero-title">
  Building Long-Term<br>
  <em>Value Beyond Borders</em>
</h1>
```

### 会社紹介文を変更したい場合

`index.html` の以下の部分を変更します：

```html
<!-- 会社紹介文 ここを変更 -->
<p class="about-text fade-in">
  TN Brothers is a global investment company based in Hong Kong.
  ...
</p>
```

### ナビゲーションのリンク名を変更したい場合

`index.html`（および各ページ）の以下の部分を変更します：

```html
<ul class="nav-links">
  <li><a href="company.html">Company</a></li>      ← ここを変更
  <li><a href="investment.html">Investment</a></li> ← ここを変更
  <li><a href="contact.html">Contact</a></li>       ← ここを変更
</ul>
```

---

## お問い合わせフォームの設定方法（Formspree）

現在のフォームはダミー（実際にメールは届きません）です。  
実際にメールを受け取るには以下の手順で設定します。

### 手順1. Formspree でアカウント作成

1. [formspree.io](https://formspree.io) を開く
2. 「Sign Up」でアカウント作成（無料プランあり）

### 手順2. フォームを作成

1. ダッシュボードで「New Form」をクリック
2. フォームの名前を入力して作成
3. 表示される Endpoint URL をコピー（例：`https://formspree.io/f/xabcdefg`）

### 手順3. contact.html を編集

`contact.html` を開き、form タグを以下のように変更します：

```html
<!-- 変更前 -->
<form id="contactForm" action="#" method="GET">

<!-- 変更後 -->
<form id="contactForm" action="https://formspree.io/f/xabcdefg" method="POST">
```

### 手順4. 確認

- フォームを送信すると、Formspree に登録したメールアドレスに届きます
- 無料プランは月50件まで受信可能

---

## メールアドレスの変更方法

`contact.html` の以下の部分を変更します：

```html
<!-- メールアドレス ここを変更 -->
<div class="contact-detail-value">contact@tnbrothers.com</div>
```

---

## 色・デザインの変更方法

`style.css` の先頭にある CSS変数を変更します：

```css
:root {
  /* ゴールドの色を変えたい場合 */
  --color-gold:       #c9a84c;   ← ここを変更
  --color-gold-light: #e8c97a;   ← ここを変更

  /* 背景の黒を変えたい場合 */
  --color-black:      #020304;   ← ここを変更
}
```

---

## カウンター数値の変更方法

`index.html` の以下の部分の数値を変更します：

```html
<!-- data-counter="数値" を変更するとカウンターが変わります -->
<span data-counter="48" data-suffix="+">0+</span>  ← 48 を変更
<span data-counter="32" data-suffix="+">0+</span>  ← 32 を変更
<span data-counter="18" data-suffix="+">0+</span>  ← 18 を変更
<span data-counter="10" data-suffix="Y+">0Y+</span> ← 10 を変更
```

---

## 動画背景の追加方法

ヒーローセクションに動画を追加したい場合：

1. `assets/videos/` フォルダを作成
2. 動画ファイル（`hero.mp4`）を配置
3. `index.html` の以下のコメントを外します：

```html
<!-- コメントを外す（<!-- と --> を削除） -->
<video class="hero-video" autoplay muted loop playsinline>
  <source src="assets/videos/hero.mp4" type="video/mp4">
</video>
```

> 💡 動画素材は [Pexels](https://pexels.com) や [Pixabay](https://pixabay.com) で「city night」などで検索すると無料で入手できます

---

## よくある質問

### Q. スマートフォンで表示が崩れる
A. ブラウザを更新してみてください。それでも崩れる場合は `style.css` のレスポンシブ部分（ファイル末尾）を確認してください。

### Q. フォントが表示されない
A. インターネット接続が必要です。Google Fonts を使用しているため、オフライン環境では代替フォントが表示されます。

### Q. ローディングが終わらない
A. `script.js` の `setTimeout` の数値（`2300`）を調整してください。

---

## ライセンス

© 2025 TN Brothers. All Rights Reserved.
