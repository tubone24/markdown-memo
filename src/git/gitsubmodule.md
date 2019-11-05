# Git Submoduleの使い方

## submoduleを作る

```
$ git submodule add https://github.com/tubone24/hoge.git hoge

Cloning into 'bootstrap'...
remote: Counting objects: 12345, done.
remote: Compressing objects: 100% (13/13), done.
remote: Total 12345 (delta 6), reused 0 (delta 0), pack-reused 71220
Receiving objects: 100% (71220/71220), 100.84 MiB | 3.11 MiB/s, done.
Resolving deltas: 100% (44541/44541), done.
Checking connectivity... done.
```

これでレポジトリ直下に `.gitmodule` ができるのでこいつをコミットしてあげる

```
$ git status

# On branch master
# Changes to be committed:
#   (use "git reset HEAD <file>..." to unstage)
#
#       new file:   .gitmodules
#       new file:   hoge
#

$ git add .
$ git commit -m "submodule入れた"
```

## submoduleの取り込み

どちらもsubmodule化した際のコミットでcloneされる

submoduleの取り込み対象commitは

```
$ git submodule
```

で確認できる

### submoduleのあるrepoをclone

```
$ git clone --recursive https://example.com/my-project.git
```

### submoduleのあるcrone済みrepoにsubmoduleの内容をとってくる

こっちのほうがよく使う

```
$ git submodule update --init --recursive
```

### submoduleの更新

submoduleが指し示すcommitを変更する

submodule配下のディレクトリに移動して、指定のコミットへ移動（checkoutとかで）してpullして、コミットすればOK

```
$ cd hoge
$ git checkout master
$ git pull origin master
$ cd ..
$ git add hoge
$ git commit -m "Update submodule: hoge"
```

