# HATSUMEI

## 概要

消費者のあったらいいなのアイデアをユーザー登録することで投稿できる CtoB アプリです。  
企業は評価が高い評価が高い、アイデアを採用し顧客のニーズに合った商品化につなげられます。

---

## 機能

- **アイデア投稿**: アイデアを投稿できます。
- **Meto 機能**: 他社のアイデアに Meto ボタンを押し、評価が可視化できます。
- **採用情報表示**: 採用後商品化されたものの情報を表示します。
- **投稿検索**: 知りたい投稿情報をカテゴリから検索でき、同意するものに Meto を押せます。
- **採用情報検索**:知りたい採用情報をカテゴリから検索でき、採用後商品化されたものの情報を表示します。

---

## ターゲットユーザー

- 全世代。

- **情報を提供する先**: -企業

---

## 技術構成

#### フロントエンド

- **使用言語: Typescript**
- **Framework: Next.js**

#### バックエンド

- **使用言語: Python**
- **Framework: Flask**
- **Database: postgreSQL**
<!-- TODO: キャッシュ
- **Cache**: Redis
  -->

#### 認証

- **Firebase**

#### 決済

- <!-- TODO: **Stripe** -->

#### その他

- **Docker**および**Docker Compose**: データベースのコンテナ化
- **GitHub**: バージョン管理

## 詳細機能

#### **記録・管理**

- 投稿履歴の管理
- Me to の履歴管理

#### **ユーザー認証**

- Firebase SDK を使用し、セキュアなユーザー認証を行います。

<!-- TODO **決済**
- Stripeを使用し、手軽で安全なサービスの決済を行います。 -->

---

## ログ機能

- **エラーログ**: アプリケーションの動作中に発生したエラーを記録します。
- **ユーザーログ**: ユーザーの操作履歴を記録し、問題解決に活用します。

---

## テスト

- **ユニットテスト**: 重要な機能単位での動作確認をします。
<!-- TODO:
- **統合テスト**: 複数のコンポーネントが連携して動作するかを確認します。
- **エンドツーエンドテスト**: ユーザーの操作フロー全体が正しく動作するかを確認します。  
  -->

---

## Linter と Formatter

#### フロントエンド

- **ESLint**: コード品質の維持
- **Prettier**: コードフォーマットの統一
- **Airbnb**: スタイルガイド

#### バックエンド

- **Pylint**: コード品質の維持
- **Black**: コードフォーマットの統一

---

## ディレクトリ構成

```
/                                 # プロジェクトのルートディレクトリ
├─ .github/                       # GitHub関連の設定ファイルを格納するディレクトリ
│  └─ pull_request_template.md    # プルリクエスト作成時のテンプレート
├─ backend/                       # バックエンド関連ファイルを格納するディレクトリ
│  ├─ .vscode/                    # VSCodeエディタの設定ディレクトリ
│  │  └─ settings.json            # VSCode用の設定ファイル
│  ├─ manual_app/                 # Djangoプロジェクトのメインディレクトリ
│  │  ├─ kibun_yokai/             # アプリケーション「kibun_yokai」のディレクトリ
│  │  │  ├─ __pycache__/          # Pythonキャッシュディレクトリ
│  │  │  ├─ data/                 # シーディング用データファイルディレクトリ
│  │  │  ├─ management/           # シーディングコマンド用ディレクトリ
│  │  │  ├─ migrations/           # データベースマイグレーション用ディレクトリ
│  │  │  ├─ tests/                # 単体テストディレクトリ
│  │  │  ├─ __init__.py           # Pythonパッケージ識別用ファイル
│  │  │  ├─ admin.py              # Django管理画面の設定
│  │  │  ├─ apps.py               # アプリケーション設定
│  │  │  ├─ models.py             # データベースモデル定義
│  │  │  ├─ serializers.py        # Django REST Framework用シリアライザ
│  │  │  ├─ urls.py               # アプリケーションのURLルーティング
│  │  │  ├─ utils.py              # ユーティリティ関数
│  │  │  └─ views.py              # ビュー関数やクラスベースビュー
│  │  ├─ manual_app/              # Djangoプロジェクト設定ディレクトリ
│  │  │  ├─ __pycache__/          # Pythonキャッシュディレクトリ
│  │  │  ├─ logs/                 # ログディレクトリ
│  │  │  ├─ __init__.py           # Pythonパッケージ識別用ファイル
│  │  │  ├─ asgi.py               # ASGIサーバ設定
│  │  │  ├─ settings.py           # Djangoプロジェクトの設定
│  │  │  ├─ urls.py               # プロジェクト全体のURLルーティング
│  │  │  └─ wsgi.py               # WSGIサーバ設定
│  │  ├─ media/                   # メディアファイル保存用ディレクトリ
│  │  │  └─ generated_images/     # 生成された画像ディレクトリ
│  │  ├─ scripts/                 # スクリプト関連ディレクトリ
│  │  ├─ stripe_payment/          # Stripe決済関連アプリケーション
│  │  │  ├─ __pycache__           # Pythonキャッシュファイル
│  │  │  ├─ migrations/           # データベースマイグレーション用ファイル
│  │  │  ├─ __init__.py           # Pythonパッケージ識別用ファイル
│  │  │  ├─ admin.py              # 管理画面設定
│  │  │  ├─ apps.py               # アプリケーション設定
│  │  │  ├─ models.py             # データベースモデル定義
│  │  │  ├─ serializers.py        # シリアライザ定義
│  │  │  ├─ tests.py              # テストコード
│  │  │  ├─ urls.py               # URLルーティング
│  │  │  └─ views.py              # ビュー関数やAPIエンドポイント
│  │  ├─ .coverage                # テストカバレッジレポート
│  │  └─ manage.py                # Django管理コマンド用スクリプト
│  ├─ venv/                       # 仮想環境用ディレクトリ
│  ├─ .env                        # 環境変数設定ファイル
│  ├─ .gitignore                  # Gitで追跡しないファイルリスト
│  ├─ .python-version             # Pythonのバージョン指定
│  ├─ README                      # バックエンドのREADMEファイル
│  └─ requirements.txt            # Python依存関係リスト
├─ db                             # データベース関連ディレクトリ
│  ├─ .env                        # データベース環境変数
│  ├─ .gitignore                  # Gitで無視するデータベース関連ファイル
│  ├─ compose.yml                 # Docker Compose設定
│  └─ my.cn                       # MySQL設定ファイル
├─ docs                           # ドキュメンテーション関連ディレクトリ
│  ├─ API_design.md               # API設計書
│  ├─ database_design.md          # データベース設計書
│  ├─ ERdiagram.png               # ER図
│  ├─ product_requirements-doc.md # 製品要求仕様書
│  └─ test_plan.md                # テスト計画書
│
│
│
│
│
│
├─ frontend/                                 # フロントエンド関連ディレクトリ
│  ├─ mocks                                  # テスト用モックデータ
│  ├─ public/                                # 静的ファイルディレクトリ
│  ├─ src/                                   # アプリケーションソースコード
│  │  ├─ app/                                # アプリケーションメイン機能
│  │  │  ├─ components/                      # 再利用可能なコンポーネント
│  │  │  │   ├─ elements/              　
│  │  │  │   │    ├─ buttons/                # ボタン機能
│  │  │  │   │    │    └─ HomeButton.tsx     # ホームボタン
│  │  │  │   │    └─ input/                  # 検索機能
│  │  │  │   │         └─ input.tsx
│  │  │  │   └─ layouts/                     #すべてのページで使うレイアウト
│  │  │  │        ├─ footer/                 # フッター
│  │  │  │        │    └─ page.tsx
│  │  │  │        └─ header/                 # ヘッダー
│  │  │  │           └─ page.tsx
│  │  │  │
│  │  │  │
│  │  │  ├─ membersPage/                     # 会員のみ閲覧できるページ
│  │  │  │    ├─ allPosts/                   # ポスト一覧(publicからのインポート？)
│  │  │  │    │    └─ page.tsx     　　　　
│  │  │  │    ├─ recruited/                  # 採用一覧(publicからのインポート？)
│  │  │  │    │    └─ page.tsx    　　　　
│  │  │  │    ├─ ideaPost/                   # 自分のポスト一覧
│  │  │  │    │    └─ page.tsx     　
│  │  │  │    ├─ meto/                       # meto一覧
│  │  │  │    │    └─ page.tsx     　　　
│  │  │  │    ├─ lookHistory/                # 閲覧履歴
│  │  │  │    │    └─ page.tsx    　　　　　　
│  │  │  │    ├─ contacts/                   # コンタクト
│  │  │  │    │    └─ page.tsx    　　
│  │  │  │    └─ page.tsx                    #メンバーページの統合ページ
│  │  │  │
│  │  │  │
│  │  │  ├─ publicPage/                      # 全員閲覧できるページ
│  │  │  │    ├─ allPosts/                   # ポスト一覧
│  │  │  │    │    └─ page.tsx     　　　　
│  │  │  │    ├─ recruited/                  # 採用一覧
│  │  │  │    │    └─ page.tsx    　　　　
│  │  │  │    └─ page.tsx                    #パブリックページの統合ページ
│  │  │  │
│  │  │  │
│  │  │  │
│  │  │  ├─ globals.css                      # グローバルCSS
│  │  │  ├─ layout.tsx                       # レイアウトファイル
│  │  │  └─ page.tsx                         # アプリのトップページ
│  │  │
│  │  │
│  │  │
│  │  ├─ assets/                             # アニメーション用
│  │  │  └─ page.tsx
│  │  │
│  │  │
│  │  │
│  │  └─ services/                           # API用
│  │       ├─ideaPostAPI.tsx 　　　　
│  │       ├─contactAPI.tsx　
│  │       ├─lookHistoryAPI.tsx       　　　　
│  │       ├─metoAPI.tsx
│  │       ├─userIdAPI.tsx
│  │       ├─usersAPI.tsx
│  │       └─postsListAPI.tsx
│  │
│  ├─ tests/                                 # テスト関連ファイル
│  ├─ .env                                   # 環境変数設定ファイル
│  ├─ .eslintrc.json                         # ESLint設定ファイル
│  ├─ .gitignore                             # Gitで追跡しないファイルリスト
│  ├─ .prettierrc                            # Prettier設定ファイル
│  ├─ Dockerfile                             # Docker用設定ファイル
│  ├─ next-env.d.ts                          # Next.js環境型定義ファイル
│  ├─ next.config.js                         # Next.js設定ファイル
│  ├─ package-lock.json                      # npm依存関係ロックファイル
│  ├─ package.json                           # プロジェクトの依存関係・スクリプト定義
│  ├─ README.md                              # フロントエンド全体のREADMEファイル
│  └─ tsconfig.json                          # TypeScript設定ファイル
├─ .gitignore                                # Gitで追跡しないファイルリスト
└─ README.md                                 # プロジェクト概要を記載するファイル

```

---

## 実行方法

-- npm run dev

### 前提条件

- Docker および Docker Compose がインストール済み
- 認証機能用 Firebase プロジェクト設定
- 決済用 Stripe アカウント設定
- OpenAI の API キー

### ローカルでのセットアップ手順

**1. リポジトリをクローンします。**

```
git clone https://github.com/ms-engineer-bc25-02/TeamD_Section7.git
```

**2. フロントエンド、バックエンドそれぞれのセットアップを行います。**
セットアップ手順は、フロントエンド・バックエンドの各 README を参照してください。

---

## 開発ルール

### 1. ブランチ運用

#### 1-1. ブランチの命名規則

- **メインブランチ**: `main`
  - 最新の統合ブランチ
  - 直接コミットせず、Pull Request (PR)を通じてのみマージする
- **機能開発ブランチ**: `feature/xxx_name` (例: `feature/login_mizue`)
  - 新しい機能を開発するためのブランチ
  - `main`ブランチから派生させる
- **バグ修正ブランチ**: `bugfix/xxx_name` (例: `bugfix/login_mizue`)
  - 機能開発 PR のマージ後にバグがあった場合、修正を行うためのブランチ
  - `main`ブランチから派生させる
- **ドキュメントブランチ:** `doc/xxx_name` (例: `doc/readme_mizue`)
  - ドキュメント整備のためのブランチ
  - `main`ブランチから派生させる

#### 1-2. ブランチ作成ルール

- 新しいタスクごとにブランチを作成する
- 作業終了後は、PR を通じて`develop`へマージする

### 2. Pull Request (PR) ルール

#### 2-1. ブランチ作成からマージまでのフロー

1. `develop`ブランチから`feature/xxx_name`  や  `bugfix/xxx_name`のブランチを切る。
2. そのブランチで開発する。
3. PR を作成する。
4. PR をレビューする。
5. PR を承認する。
   1. 修正がある場合は PR コメント機能で PR 作成者に返す。
   2. 修正後、再度同一ブランチで commit, push すると同一 PR に自動的に追加される。
6. `develop`ブランチへマージする。

#### 2-2. PR 記載項目

- PR テンプレート使用
  - PR タイトル: issue 番号＋概要 (例: #1 環境構築\_フロント)
  - やったこと
  - 確認したこと
  - 補足 (スクショなど)
- メンバーへのメンション: プルリクが出たことの周知

#### 2-3. レビュー

- 大きな変更は、細かく PR を分割する。
- レビュー後の修正では再度承認を得る (2-1.の手順 5 参照)。

#### 2-4. マージルール

- `main`への直接マージは禁止。必ず PR を通す。
- 細かく PR とマージを行い、コンフリクトを最小化する。

### 3. コミットメッセージ規則

#### 3-1. フォーマット

1 行目: [prefix] issue 番号(シャープ記号+数字) 概要

(2 行目以降: 必要に応じて詳細説明)

- **prefix**
  - `feat`: 新機能
  - `fix`: バグ修正
  - `docs`: ドキュメント保存・変更
  - `refactor`: 既存コードの改善
  - `style`: コードのフォーマット調整
  - `delete`:ファイルの削除
- **例**:
  ```bash
  [feat] #1 ログイン機能を実装
  ユーザーがメールとパスワードでログインできる機能を実装
  ```

#### 3-3. ルール

- 1 コミット = 1 つのファイル変更
- 意味のあるメッセージを記述

---

## ビジョンおよび社会的影響

消費者のあったらいいなの声を企業に届けるプラットフォームの提供により、消費者満足度と企業の売り上げに貢献する。

### 社会的意義

消費者のあったらいいなを届けるメインツールがなく、採用されたら消費者の満足度も上がり、企業側の市場調査の期間を短縮できる。

---

### 今後の追加機能

- **子供用ページの実装**
- **入出金機能**
- **採用者にポイント付与**

## 開発チーム

このプロジェクトは 2502 期 Team D が開発しています。
