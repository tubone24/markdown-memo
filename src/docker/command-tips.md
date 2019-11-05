# command tips

## イメージをすべて消す

```
docker images -aq | xargs docker rmi
```

## コンテナをすべて消す

```
docker ps -aq | xargs docker rm
```

## ビルド時にキャッシュを無効化する

```
docker build --no-cache=true
```

## docker run 必勝法

Dockerコンテナ内でなんか作業したいときはこんな感じにする

- `--name` でコンテナ名指定
- `-h` がホスト名指定
- `--rm` でdocker stopと同時にdocker rmされる
- `-c` でCPU使用率相対
- `-m` でメモリ割り当て指定
- `-it` 魔法の言葉、-iは標準入力をDockerコンテナにオープンし続ける、-tはttyを割り当てるという意味らしい
  - さらに書くと `-t` を指定しているとttyからの受付状態になるので `echo test | docker run -i busybox cat` のようなパイプやリダイレクトは使えないらしい

```
docker run -c 200 -m 512m --rm --name hoge -h hoge -it ubuntu /bin/bash
```

## 
