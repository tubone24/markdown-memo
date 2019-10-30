# Command TIPS

多くの現場でGitは共通言語で語られがちで、当たり前にできないといけない。

できないとペアプロで怒鳴られたり、雰囲気を悪くするのでよく使うやつをメモっとく。

## 変更log

### 全ブランチをNetworkでそれっぽく出す

利用用途: 今自分がどこにいるのか、どこにマージされるのか見る

```
git log --graph --oneline --decorate --all
```

## add

### 差分をステージングエリアに追加する

```
git add -p
```

### 間違えてgit addしてしまった！

```
git reset HEAD [ファイル名]
```

ファイル名がない場合はstageされたファイルすべてがunstageに

### コミットコメントを修正したい

#### 直前のコミットの場合

```
git commit --amend -m "fix message"
```

#### それ以外のコミットの場合

```
# ~ の数だけ、過去分をさかのぼる
git rebase -i git rebase -i HEAD^~~~
```

と入力すると、さかのぼった分だけのコミットが表示され・・

```
pick a21a813bc commitメッセージ
pick d821e1bca commitメッセージ

# Rebase XXXXX..XXXXX onto XXXXXX
#
# Commands:
#  p, pick = use commit
#  r, reword = use commit, but edit the commit message
#  e, edit = use commit, but stop for amending
#  s, squash = use commit, but meld into previous commit
#  f, fixup = like "squash", but discard this commit's log message
#  x, exec = run command (the rest of the line) using shell
#
# If you remove a line here THAT COMMIT WILL BE LOST.
# However, if you remove everything, the rebase will be aborted.
#
```

エディタで書き換えてあげて保存する

pick => そのまま
reword => コミットメッセージを変えたいやーつ

rewordにしたやつがその次

```
hogeee

# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
#
# Date:      Wed Oct 30 00:38:19 2019 +0900
#
# interactive rebase in progress; onto 44c7d4b
# Last commands done (2 commands done):
#    pick 21b1144 logo

```

コミットメッセージの変更画面に遷移する


## commit

### まちがってコミットしてしまった！！

#### コミットしたファイルは消したくないなぁ・・・

```
git reset --soft HEAD^
```

#### コミットしたファイルは消していいゾ

```
git reset --hard HEAD^
```

自分しか見てないブランチならforce pushもやぶさかではない。

### 切り戻しのコミット技

みんなが作業しているブランチへのpushや、意図して取り消したい変更履歴を残したい場合

特定のコミットの打消しコミットを作る `revert` が便利。

ただし、マージコミットの打消しなどちょっとトリッキーな部分もあるので覚えておくとgit大臣になれそう。

#### 特定コミットの打消し

打消しのコミットができる

```
git revert コミットハッシュ
```

#### コミットはしたくない

コミットは生成されずindexに打消しの変更を残す

```
git revert コミットハッシュ -n
```

#### マージコミットを打ち消す

利用ケース: 

A「リリースするためにmasterにPRマージするやで」

～30分後～

A「動かんぞ！早く切り戻せ。masterをリリース前に戻せや。一応作業ログ残したいから `revert` で頼むやで」

##### 一般的に

```
git revert -m 1 マージコミットハッシュ
```

でよい

###### 解説

`-m` オプションは main-line という意味で本線と訳されます。

マージコミットの場合、2つのブランチが合体するので、打消しコミットをどっちにつければいいか指定するオプションがあります。

1のときは「マージされた側のブランチ」、2のときは「マージする側のブランチ」です。

原則revertは打ち消したいコミットのいるbranchで打つといいかも～なので基本は 1 でいいわけです。

## delete

### ローカルブランチに残っている古いリモートブランチをけす

PRが無事マージされたので残ったローカルブランチをきれいにしたいとき重宝

#### ドライラン

```
git remote prune --dry-run origin
```

#### 消す

```
git remote prune origin
```

## stash

コメント、リストなど色々な機能があるけど、きちんと管理したいならブランチ切れやといわれるので基本これだけ

### とりま退避

```
git stash
```

### 戻す

```
git pop
```

## 付け替え

![](./HKUs9.png)

### 別ブランチからはやし直す

利用ケース: 

切り元のブランチがPRマージされて進んだときに、

「master進んだんで生やしなおしてね」

という会話になりがち。

#### パターン1

```
git checkout branchA
git rebase master
```

#### パターン2

```
git rebase --onto master branchAの中で生やしたい位置のコミットハッシュ branchA
```

#### もしすでにブランチをpushしていたら・・

他の人のツリーにも影響を与えてしまうので、

「ブランチ最新のmasterから生やしなおしました～」というとかっこいいゾ！

```
git push -f origin branchA
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

## つまみ食い

### 童貞コマンド cherry-pick

例えばAさんが作っているfeature branchから一部の共通処理部分のコミットを拝借したいとき、

つまみ食い機能、もとい童貞機能がある

やりたいこと

```
commit 213dd32
    main修正
    
commit 173vdd20
    main修正2
    
commit 6742aa0b
    便利なtime_util作りました　　<= こいつだけが欲しい！
    
commit aa12301b
    便利なtime_util作りました2
    
commit ca16709d
    便利なtime_util作りました3
```

```
# 自分のブランチで
git cherry-pick 6742aa0b
```

コミットまとめてcherry-pickも可能だが99.9%コンフリクトする

一個ずつやるか、まとめられるなら、git rebase -i でまとめてからやったほうがいい。

```
# 便利なtime_util作りました3までほしい

git cherry-pick 6742aa0b..ca16709d
```
