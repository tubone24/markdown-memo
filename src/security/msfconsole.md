# msfconsole

## Tips

### Msfconsoleで cannot load such file — bundler/setup がでる

bundlerを最新に置き換えればよい

```
sudo gem update --system

sudo gem install bundler:1.17.3
```

```
cd /usr/share/metasploit-framework

sudo bundle install
```

起動できるか確認

```
msfconsole
```

### exploitを検索する

```
grep exploit search xxxx
```

### exploitを利用する

```
use exploit/xxxxx/xxxxxx/xxxxx_xxxx_xxx
```

### exploitのオプションを見る

```
show options
```
