# command tips

## イメージをすべて消す

```
docker images -aq | xargs docker rmi
```

## コンテナをすべて消す

```
docker ps -aq | xargs docker rm
```
