# Command TIPS

## HEADERを設定したい

よくあるのがBEARERやX-API-KEYを含んでcurlする時。

```
curl -H "X-API-ID: xxxxx-xxxxx-xxxx-xxx" "https://hoge.com"
```

## 200okとかみたい

```
curl --verbose "https://hoge.com"
```


