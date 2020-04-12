# metasploitableをHyper-Vにインストール

metasploitableはVirtualbox用が主流なのでHyper-V用にイメージを変換して使う

[metasploitable](https://sourceforge.net/projects/metasploitable/)

[MVMC3.0](https://www.microsoft.com/en-us/download/details.aspx?id=42497)

## 変換

```
 import-module "C:\Program Files\Microsoft Virtual Machine Converter\MvmcCmdlet.psd1"
 
 ConvertTo-MvmcVirtualHardDisk -SourceLiteralPath "E:\metasploitable-linux-2.0.0\Metasploitable2-Linux\Metasploitable.vmdk" -DestinationLiteralPath "E:\metasploitable-linux-2.0.0\Metasploitable2-Linux\meta.vhdx" -VhdFormat Vhdx
```

## Hyper-Vに入れる

イメージからインストールする。詳細割愛。

## 起動

ID/PWは初期 msfadmin/msfadmin

![img](https://i.imgur.com/QrPsPUH.png)

## 日本語キー配列にする

```
sudo loadkeys ja
```

## ネットワークを設定する

レガシーネットワークアダプタしか認識しないので設定する

![img](https://i.imgur.com/B8hyTwM.png)

設定できればeth0を正しく認識する

![img](https://i.imgur.com/R66g1Tj.png)