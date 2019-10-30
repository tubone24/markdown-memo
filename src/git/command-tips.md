# Command TIPS

多くの現場でGitは共通言語で語られがちで、当たり前にできないといけない。

できないとペアプロで怒鳴られたり、雰囲気を悪くするのでよく使うやつをメモっとく。

## log

### 全ブランチをNetworkでそれっぽく出す

利用用途

```
git log --graph --oneline --decorate --all
```

## add/commit

### 差分をステージングエリアに追加する

```
git add -p
```

## delete

### ローカルブランチに残っている古いリモートブランチをけす

PRが無事マージされたので残ったローカルブランチをきれいにしたいとき。

#### ドライラン

```
git remote prune --dry-run origin
```

#### 消す

```
git remote prune origin
```

## 付け替え

### 別ブランチからはやし直す

利用用途: A「PRをmasterにマージしたんで、各featureはmasterから切り直してね」
         ワイ「はい」

```
git rebase --onto はやし元ブランチ名 はやし元コミットハッシュ 移動させたいブランチ名
```

### 特定コミットハッシュをブランチのHEADにしちゃう

```
git branch --create-reflog ブランチ名 コミットハッシュ
```

## タグの運用

### タグを打つ

```
git tag -a v1.0.x -m "なんかコメントあれば"
git push origin v1.0.x
```

### タグを消す

```
git tag -d v1.0.x
git push origin :v1.0.x
```

## 差分を確認したい

### ブランチ同士を比較したい

#### 元ブランチ(master)からどんな変更が加わったか見る

```
git log master..branch1
```

#### 差分のあるファイルだけ列挙

```
git diff --name-only 
```

#### コミット同士の比較

GitHubで便利なアレ

```
git diff コミットハッシュ コミットハッシュ
```

## WIP系

### 空コミットを打つ

WIPでPR出してから作業する人向け。
first commitするまでWIP PRが作れないので空コミットを打つ運用。

```
git commit --allow-empty
```

参考: [git commit --allow-empty を使った WIP PR ワークフロー](https://qiita.com/a-suenami/items/129e09f8550f31e4c2da)
