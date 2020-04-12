# nmap

最強の日本語リファレンスサイト <https://nmap.org/man/ja/>

## ポートスキャン

### Ping scan
```
nmap -sn xxx.xxx.xxx.xxx/28
```

出力例
```
Starting Nmap 7.80 ( https://nmap.org ) at 2020-04-13 00:07 JST
Nmap scan report for DESKTOP-HEHPH4B.mshome.net (172.17.220.1)
Host is up (0.00021s latency).
MAC Address: 00:15:5D:2C:25:2C (Microsoft)
Nmap scan report for 172.17.220.5
Host is up (0.00059s latency).
MAC Address: 00:15:5D:AC:06:1A (Microsoft)
Nmap scan report for sec-linux.mshome.net (172.17.220.4)
Host is up.
```

### ポートスキャン

#### 全ポートに対してのスキャン

全ポートスキャンはそこそこ重たい。

```
nmap -sV -O -p- xxx.xxx.xxx.xxx
```

-p-: 全ポート(1～65535)
-sV: サービスバージョンスキャン
-O: OSフィンガープリント出力

metasploitableをスキャンしてみた

```
Starting Nmap 7.80 ( https://nmap.org ) at 2020-04-13 00:04 JST
Nmap scan report for 172.17.220.5
Host is up (0.00065s latency).
Not shown: 65505 closed ports
PORT      STATE SERVICE     VERSION
21/tcp    open  ftp         vsftpd 2.3.4
22/tcp    open  ssh         OpenSSH 4.7p1 Debian 8ubuntu1 (protocol 2.0)
23/tcp    open  telnet      Linux telnetd
25/tcp    open  smtp        Postfix smtpd
53/tcp    open  domain      ISC BIND 9.4.2
80/tcp    open  http        Apache httpd 2.2.8 ((Ubuntu) DAV/2)
111/tcp   open  rpcbind     2 (RPC #100000)
139/tcp   open  netbios-ssn Samba smbd 3.X - 4.X (workgroup: WORKGROUP)
445/tcp   open  netbios-ssn Samba smbd 3.X - 4.X (workgroup: WORKGROUP)
512/tcp   open  exec?
513/tcp   open  login
514/tcp   open  tcpwrapped
1099/tcp  open  java-rmi    GNU Classpath grmiregistry
1524/tcp  open  bindshell   Metasploitable root shell
2049/tcp  open  nfs         2-4 (RPC #100003)
2121/tcp  open  ftp         ProFTPD 1.3.1
3306/tcp  open  mysql       MySQL 5.0.51a-3ubuntu5
3632/tcp  open  distccd     distccd v1 ((GNU) 4.2.4 (Ubuntu 4.2.4-1ubuntu4))
5432/tcp  open  postgresql  PostgreSQL DB 8.3.0 - 8.3.7
5900/tcp  open  vnc         VNC (protocol 3.3)
6000/tcp  open  X11         (access denied)
6667/tcp  open  irc         UnrealIRCd
6697/tcp  open  irc         UnrealIRCd
8009/tcp  open  ajp13       Apache Jserv (Protocol v1.3)
8180/tcp  open  http        Apache Tomcat/Coyote JSP engine 1.1
8787/tcp  open  drb         Ruby DRb RMI (Ruby 1.8; path /usr/lib/ruby/1.8/drb)
34631/tcp open  mountd      1-3 (RPC #100005)
38471/tcp open  java-rmi    GNU Classpath grmiregistry
41431/tcp open  nlockmgr    1-4 (RPC #100021)
45239/tcp open  status      1 (RPC #100024)
MAC Address: 00:15:5D:AC:06:1A (Microsoft)
Device type: general purpose
Running: Linux 2.6.X
OS CPE: cpe:/o:linux:linux_kernel:2.6
OS details: Linux 2.6.9 - 2.6.33
Network Distance: 1 hop
Service Info: Hosts:  metasploitable.localdomain, irc.Metasploitable.LAN; OSs: Unix, Linux; CPE: cpe:/o:linux:linux_kernel
OS and Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 137.09 seconds
```

### intense scan

OSディテクション、バージョンディテクション、スクリプトスキャン、トレースルートを全部やりつつ、そこそこタイミング早く

```
nmap -T4 -A -v 172.17.220.5
```

-A: Enable OS detection, version detection, script scanning, and traceroute

-T<0-5>: Set timing template (higher is faster) paranoid (0)、sneaky (1)、polite (2)、normal (3)、aggressive (4)、insane (5)

0,1はIDS回避用。高信頼ネットワークならT4がおすすめらしい。

<https://nmap.org/man/ja/man-performance.html>

出力例
```
Starting Nmap 7.80 ( https://nmap.org ) at 2020-04-13 00:13 JST
NSE: Loaded 151 scripts for scanning.
NSE: Script Pre-scanning.
Initiating NSE at 00:13
Completed NSE at 00:13, 0.00s elapsed
Initiating NSE at 00:13
Completed NSE at 00:13, 0.00s elapsed
Initiating NSE at 00:13
Completed NSE at 00:13, 0.00s elapsed
Initiating ARP Ping Scan at 00:13
Scanning 172.17.220.5 [1 port]
Completed ARP Ping Scan at 00:13, 0.00s elapsed (1 total hosts)
Initiating Parallel DNS resolution of 1 host. at 00:13
Completed Parallel DNS resolution of 1 host. at 00:13, 1.01s elapsed
Initiating SYN Stealth Scan at 00:13
Scanning 172.17.220.5 [1000 ports]
Discovered open port 23/tcp on 172.17.220.5
Discovered open port 111/tcp on 172.17.220.5
Discovered open port 22/tcp on 172.17.220.5
Discovered open port 445/tcp on 172.17.220.5
Discovered open port 53/tcp on 172.17.220.5
Discovered open port 3306/tcp on 172.17.220.5
Discovered open port 80/tcp on 172.17.220.5
Discovered open port 139/tcp on 172.17.220.5
Discovered open port 25/tcp on 172.17.220.5
Discovered open port 5900/tcp on 172.17.220.5
Discovered open port 21/tcp on 172.17.220.5
Discovered open port 512/tcp on 172.17.220.5
Discovered open port 2121/tcp on 172.17.220.5
Discovered open port 6000/tcp on 172.17.220.5
Discovered open port 2049/tcp on 172.17.220.5
Discovered open port 8180/tcp on 172.17.220.5
Discovered open port 1099/tcp on 172.17.220.5
Discovered open port 5432/tcp on 172.17.220.5
Discovered open port 1524/tcp on 172.17.220.5
Discovered open port 6667/tcp on 172.17.220.5
Discovered open port 513/tcp on 172.17.220.5
Discovered open port 514/tcp on 172.17.220.5
Discovered open port 8009/tcp on 172.17.220.5
Completed SYN Stealth Scan at 00:13, 0.11s elapsed (1000 total ports)
Initiating Service scan at 00:13
Scanning 23 services on 172.17.220.5
Completed Service scan at 00:14, 62.37s elapsed (23 services on 1 host)
Initiating OS detection (try #1) against 172.17.220.5
NSE: Script scanning 172.17.220.5.
Initiating NSE at 00:14
NSE: [ftp-bounce] PORT response: 500 Illegal PORT command.
Completed NSE at 00:14, 9.91s elapsed
Initiating NSE at 00:14
Completed NSE at 00:14, 14.05s elapsed
Initiating NSE at 00:14
Completed NSE at 00:14, 0.00s elapsed
Nmap scan report for 172.17.220.5
Host is up (0.00085s latency).
Not shown: 977 closed ports
PORT     STATE SERVICE     VERSION
21/tcp   open  ftp         vsftpd 2.3.4
|_ftp-anon: Anonymous FTP login allowed (FTP code 230)
| ftp-syst: 
|   STAT: 
| FTP server status:
|      Connected to 172.17.220.4
|      Logged in as ftp
|      TYPE: ASCII
|      No session bandwidth limit
|      Session timeout in seconds is 300
|      Control connection is plain text
|      Data connections will be plain text
|      vsFTPd 2.3.4 - secure, fast, stable
|_End of status
22/tcp   open  ssh         OpenSSH 4.7p1 Debian 8ubuntu1 (protocol 2.0)
| ssh-hostkey: 
|   1024 60:0f:cf:e1:c0:5f:6a:74:d6:90:24:fa:c4:d5:6c:cd (DSA)
|_  2048 56:56:24:0f:21:1d:de:a7:2b:ae:61:b1:24:3d:e8:f3 (RSA)
23/tcp   open  telnet      Linux telnetd
25/tcp   open  smtp        Postfix smtpd
|_smtp-commands: metasploitable.localdomain, PIPELINING, SIZE 10240000, VRFY, ETRN, STARTTLS, ENHANCEDSTATUSCODES, 8BITMIME, DSN, 
|_ssl-date: 2020-04-12T15:18:18+00:00; +3m46s from scanner time.
| sslv2: 
|   SSLv2 supported
|   ciphers: 
|     SSL2_DES_64_CBC_WITH_MD5
|     SSL2_DES_192_EDE3_CBC_WITH_MD5
|     SSL2_RC4_128_WITH_MD5
|     SSL2_RC2_128_CBC_EXPORT40_WITH_MD5
|     SSL2_RC2_128_CBC_WITH_MD5
|_    SSL2_RC4_128_EXPORT40_WITH_MD5
53/tcp   open  domain      ISC BIND 9.4.2
| dns-nsid: 
|_  bind.version: 9.4.2
80/tcp   open  http        Apache httpd 2.2.8 ((Ubuntu) DAV/2)
| http-methods: 
|_  Supported Methods: GET HEAD POST OPTIONS
|_http-server-header: Apache/2.2.8 (Ubuntu) DAV/2
|_http-title: Metasploitable2 - Linux
111/tcp  open  rpcbind     2 (RPC #100000)
139/tcp  open  netbios-ssn Samba smbd 3.X - 4.X (workgroup: WORKGROUP)
445/tcp  open  netbios-ssn Samba smbd 3.X - 4.X (workgroup: WORKGROUP)
512/tcp  open  exec?
513/tcp  open  login       OpenBSD or Solaris rlogind
514/tcp  open  tcpwrapped
1099/tcp open  java-rmi    GNU Classpath grmiregistry
1524/tcp open  bindshell   Metasploitable root shell
2049/tcp open  nfs         2-4 (RPC #100003)
2121/tcp open  ftp         ProFTPD 1.3.1
3306/tcp open  mysql       MySQL 5.0.51a-3ubuntu5
| mysql-info: 
|   Protocol: 10
|   Version: 5.0.51a-3ubuntu5
|   Thread ID: 15
|   Capabilities flags: 43564
|   Some Capabilities: SwitchToSSLAfterHandshake, SupportsTransactions, Speaks41ProtocolNew, ConnectWithDatabase, LongColumnFlag, SupportsCompression, Support41Auth
|   Status: Autocommit
|_  Salt: +[j#lv1--9t`dTY@vPmT
5432/tcp open  postgresql  PostgreSQL DB 8.3.0 - 8.3.7
|_ssl-date: 2020-04-12T15:18:18+00:00; +3m47s from scanner time.
5900/tcp open  vnc         VNC (protocol 3.3)
| vnc-info: 
|   Protocol version: 3.3
|   Security types: 
|_    VNC Authentication (2)
6000/tcp open  X11         (access denied)
6667/tcp open  irc         UnrealIRCd
| irc-info: 
|   users: 1
|   servers: 1
|   lusers: 1
|   lservers: 0
|   server: irc.Metasploitable.LAN
|   version: Unreal3.2.8.1. irc.Metasploitable.LAN 
|   uptime: 0 days, 1:14:09
|   source ident: nmap
|   source host: Test-96C670A6.mshome.net
|_  error: Closing Link: camzrnzwm[sec-linux.mshome.net] (Quit: camzrnzwm)
8009/tcp open  ajp13       Apache Jserv (Protocol v1.3)
|_ajp-methods: Failed to get a valid response for the OPTION request
8180/tcp open  http        Apache Tomcat/Coyote JSP engine 1.1
|_http-favicon: Apache Tomcat
| http-methods: 
|_  Supported Methods: GET HEAD POST OPTIONS
|_http-server-header: Apache-Coyote/1.1
|_http-title: Apache Tomcat/5.5
MAC Address: 00:15:5D:AC:06:1A (Microsoft)
Device type: general purpose
Running: Linux 2.6.X
OS CPE: cpe:/o:linux:linux_kernel:2.6
OS details: Linux 2.6.9 - 2.6.33
Uptime guess: 0.049 days (since Sun Apr 12 23:04:26 2020)
Network Distance: 1 hop
TCP Sequence Prediction: Difficulty=190 (Good luck!)
IP ID Sequence Generation: All zeros
Service Info: Hosts:  metasploitable.localdomain, irc.Metasploitable.LAN; OSs: Unix, Linux; CPE: cpe:/o:linux:linux_kernel
Host script results:
|_clock-skew: mean: 3m46s, deviation: 0s, median: 3m45s
|_ms-sql-info: ERROR: Script execution failed (use -d to debug)
| nbstat: NetBIOS name: METASPLOITABLE, NetBIOS user: <unknown>, NetBIOS MAC: <unknown> (unknown)
| Names:
|   METASPLOITABLE<00>   Flags: <unique><active>
|   METASPLOITABLE<03>   Flags: <unique><active>
|   METASPLOITABLE<20>   Flags: <unique><active>
|   \x01\x02__MSBROWSE__\x02<01>  Flags: <group><active>
|   WORKGROUP<00>        Flags: <group><active>
|   WORKGROUP<1d>        Flags: <unique><active>
|_  WORKGROUP<1e>        Flags: <group><active>
|_smb-os-discovery: ERROR: Script execution failed (use -d to debug)
|_smb-security-mode: ERROR: Script execution failed (use -d to debug)
|_smb2-time: Protocol negotiation failed (SMB2)
TRACEROUTE
HOP RTT     ADDRESS
1   0.85 ms 172.17.220.5
NSE: Script Post-scanning.
Initiating NSE at 00:14
Completed NSE at 00:14, 0.00s elapsed
Initiating NSE at 00:14
Completed NSE at 00:14, 0.00s elapsed
Initiating NSE at 00:14
Completed NSE at 00:14, 0.00s elapsed
Read data files from: /usr/bin/../share/nmap
OS and Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 89.12 seconds
           Raw packets sent: 1020 (45.626KB) | Rcvd: 1016 (41.430KB)
```
