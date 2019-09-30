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

