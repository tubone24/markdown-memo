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
