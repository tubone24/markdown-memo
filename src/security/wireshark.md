# Wireshark

## http form postの認証時変数を見る

### Wiresharkを起動し目的のページでとりあえず認証(失敗)してみる

![inmg](https://i.imgur.com/2grWVCS.png)

### キャプチャー後、httpプロコトルでソートすると、POSTのリクエストが見つかる

![img](https://i.imgur.com/eU6lrTK.png)

右クリック=>追跡=>HTTPストリームでストリームの追跡ができる

![igm](https://i.imgur.com/bLGmVTD.png)

POST先のURLが `/admin/j_security_check` 認証情報はそれぞれ `j_username` と `j_password` に格納されていることがわかる

```
POST /admin/j_security_check;jsessionid=48C8347E6BC9DF747D3000552B6503BF HTTP/1.1
Host: 172.17.220.5:8180
User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:68.0) Gecko/20100101 Firefox/68.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate
Referer: http://172.17.220.5:8180/admin/
Content-Type: application/x-www-form-urlencoded
Content-Length: 27
Connection: keep-alive
Cookie: JSESSIONID=48C8347E6BC9DF747D3000552B6503BF
Upgrade-Insecure-Requests: 1
j_username=aa&j_password=aa
```

下にスクロールすると認証に失敗しているので認証失敗を示す何らかのレスポンスが返却されている

![ig](https://i.imgur.com/pOTqM57.png)

```
HTTP/1.1 200 OK
Server: Apache-Coyote/1.1
Content-Type: text/html;charset=utf-8
Content-Length: 2941
Date: Thu, 16 Apr 2020 04:23:27 GMT
<!--
  Licensed to the Apache Software Foundation (ASF) under one or more
  contributor license agreements.  See the NOTICE file distributed with
  this work for additional information regarding copyright ownership.
  The ASF licenses this file to You under the Apache License, Version 2.0
  (the "License"); you may not use this file except in compliance with
  the License.  You may obtain a copy of the License at
      http://www.apache.org/licenses/LICENSE-2.0
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
-->
<!-- Standard Struts Entries -->
<html lang="en">
<!-- Standard Content -->
<!--
  Licensed to the Apache Software Foundation (ASF) under one or more
  contributor license agreements.  See the NOTICE file distributed with
  this work for additional information regarding copyright ownership.
  The ASF licenses this file to You under the Apache License, Version 2.0
  (the "License"); you may not use this file except in compliance with
  the License.  You may obtain a copy of the License at
      http://www.apache.org/licenses/LICENSE-2.0
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
-->
<head>
  <title>Tomcat Server Administration</title>
  <base href="http://172.17.220.5:8180/admin/error.jsp">
  <link rel="stylesheet" type="text/css" href="tree-control-test.css">
  <link rel="stylesheet" type="text/css" href="admin.css">
</head>
<!-- Body -->
<body bgcolor="white" background="images/PaperTexture.gif">
<center>
<h2>
  Invalid username or password
  <br>
  To try again, click
  <a href="/admin/">here</a>
</h2>
</center>
</body>
<!-- Standard Footer -->
<!--
  Licensed to the Apache Software Foundation (ASF) under one or more
  contributor license agreements.  See the NOTICE file distributed with
  this work for additional information regarding copyright ownership.
  The ASF licenses this file to You under the Apache License, Version 2.0
  (the "License"); you may not use this file except in compliance with
  the License.  You may obtain a copy of the License at
      http://www.apache.org/licenses/LICENSE-2.0
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
-->
</html>
GET /admin/images/PaperTexture.gif HTTP/1.1
Host: 172.17.220.5:8180
User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:68.0) Gecko/20100101 Firefox/68.0
Accept: image/webp,*/*
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate
Referer: http://172.17.220.5:8180/admin/j_security_check;jsessionid=48C8347E6BC9DF747D3000552B6503BF
Connection: keep-alive
Cookie: JSESSIONID=48C8347E6BC9DF747D3000552B6503BF
HTTP/1.1 200 OK
Server: Apache-Coyote/1.1
ETag: W/"1194-1228677432000"
Last-Modified: Sun, 07 Dec 2008 19:17:12 GMT
Content-Type: image/gif
Content-Length: 1194
Date: Thu, 16 Apr 2020 04:23:27 GMT
GIF89a(.(....................................................................................................................................................................................................,....(.(.@....H8.|>.Q.bPj*.Qe.=|0..%.1X. ..B.L$..Pc.L......x&..."R...b.X.....c.....\..n.......Z..!
    ....tY` .}.....!p.  !C ..^....B.K..SPF....."t...GOq....... \"G..G ..avR..".j!!....pB..a..F.n.    ...q0x1.....|.`.pA.38 .\8.......R..&...R"~.q.]..]z..c`...
..Zf@..$..L. A...l"&..c...
..TX......4.......X.j........&5..Q.............8B`d../
-\.r....r..q..UI.....`AH........O.AH...."..jKY)),...%q....p..  .&..`.J.t..<..).i
..t..'h..!.}..s.....H.......Q..Fd.;..,.).+...I..ab...&.......^!f4 H../2V.L.....R......(..1./.`.J...b.;H...G DF..I...W.Q`B..d..._N.(.. .....0..0.l.T."..K7...E7.Mp.3
Y..=KM.....D....&WN.`0.Ck .....S.^Odp...0&.M.....^ea.y..yQ-q.3.d9..F@.Q.a...B.DZ......f.r .r..{.A.....E5.@..dE\$Y.r<(.L...J.`......4.#\@.F..(.   T.....'M.Q1L.7.$Q...v.D@.u......l.
A..a..O0.O..M.@.|.1....d.H>}...-H.T....3...Q...~eQS....k.n..G.. .B*.....q...c..C0GVDSj$..Riw...A.U.aiC...A.}.8..
.E.A......x.PA.....G.....<Z....a......B..".Nc\9k*.F../.27D...1..O.U.O....MA....N.cZ...h..B...$(;V.01.r^.#r....H@my.-.@..;

```

ここでは `Invalid username or password` が返っている

ちなみに、日本語のロケールブラウザを使ってアクセスすると認証失敗文字列が日本語になることもある。Hydraなどのブルートフォースアタックツールを使う場合、ロケールを合わせておかない認証不可を判断できないことがある。

