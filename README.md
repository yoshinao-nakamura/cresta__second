# Gulp環境

## 環境
- Gulpが使える環境が前提（4系）
- Nodeはバージョン14以降

## 使い方
- ターミナルで、cd gulp　を実行
- npm i を実行
- gulpフォルダにnode_modules、package-lock.jsonが生成されたことを確認
- 「 npx gulp 」とコマンドを入力すると動き出します

## 仕様
- スマホファースト、PCファーストを設定で切り替え可能です。
- variables.scssの「$break-flg」を0:SPファースト、1：PCファーストで切り替えて使用する
- 基本的には、srcフォルダに対して作業する
- コンパイル後のコードはdistフォルダに格納される
- htmlはdistフォルダの内容を修正する
- SassをCSSにコンパイル実施
- 画像の圧縮を実施
- JavaScriptの圧縮は未実施
