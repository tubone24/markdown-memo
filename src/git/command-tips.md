# Command TIPS

## log

### 全ブランチをNetworkでそれっぽく出す

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

```
git rebase --onto はやし元ブランチ名 はやし元コミットハッシュ 移動させたいブランチ名
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
