# npm でupdateする

**npm update** は package.json に記載された semver のルールに従うため、^ つきの記載だとメジャーバージョンのアップデートまでは行ってくれない。

また、npm outdated は パッケージの更新確認はやってくれるが、package.json の更新まではやってくれない。

なので、npm-check-updates を使う

```
npm install -g npm-check-updates

# update確認
ncu 

# package.json更新
ncu -u
```

実行した後は npm installする
