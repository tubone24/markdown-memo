# metasploitableをインストール

[metasploitable](https://sourceforge.net/projects/metasploitable/)

[MVMC3.0](https://www.microsoft.com/en-us/download/details.aspx?id=42497)

変換

```
 import-module "C:\Program Files\Microsoft Virtual Machine Converter\MvmcCmdlet.psd1"
 
 ConvertTo-MvmcVirtualHardDisk -SourceLiteralPath "E:\metasploitable-linux-2.0.0\Metasploitable2-Linux\Metasploitable.vmdk" -DestinationLiteralPath "E:\metasploitable-linux-2.0.0\Metasploitable2-Linux\meta.vhdx" -VhdFormat Vhdx
```

