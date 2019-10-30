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
