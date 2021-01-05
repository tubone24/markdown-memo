# CWE早見表

| CWE分類  | 英名                                                                                                            | 日本語名                               | 概要 | 
| -------- | --------------------------------------------------------------------------------------------------------------- | -------------------------------------- | ---- | 
| CWE-89   | Improper Neutralization of Special Elements used in an SQL Command "SQL Injection"                              | SQLインジェクション                    |      | 
| CWE-77   | Improper Neutralization of Special Elements used in a Command "Command Injection"                               | コマンドインジェクション               |      | 
| CWE-93   | Improper Neutralization of CRLF Sequences "CRLF Injection"                                                      | CRLFインジェクション                   |      | 
| CWE-113  | Improper Neutralization of CRLF Sequences in HTTP Headers "HTTP Response Splitting"                             | HTTP レスポンス分割攻撃                |      | 
| CWE-79   |  Improper Neutralization of Input During Web Page Generation "Cross-site Scripting"                             | クロスサイトスクリプティング           |      | 
| CWE-592  | Authentication Bypass Issues                                                                                    | 認証回避                               |      | 
| CWE-307  | Improper Restriction of Excessive Authentication Attempts                                                       | 過度な認証試行に対する対策不備・欠落.  |      | 
| CWE-521  | Weak Password Requirements                                                                                      | 脆弱なパスワードポリシー               |      | 
| CWE-257  | Storing Passwords in a Recoverable Format                                                                       | 復元可能なパスワード保存               |      | 
| CWE-384  | Session Fixation                                                                                                | セッションフィクセイション             |      | 
| CWE-334  | Small Space of Random Values                                                                                    | 推測可能なセッションID                 |      | 
| CWE-200  | Information Exposure                                                                                            | 情報漏えい                             |      | 
| CWE-598  | Information Exposure Through Query Strings in GET Request                                                       | クエリストリング情報の漏えい           |      | 
| CWE-524  | Information Exposure Through Caching                                                                            | キャッシュからの情報漏えい             |      | 
| CWE-549  | Missing Password Field Masking                                                                                  | パスワードフィールドのマスク不備       |      | 
| CWE-614  | Sensitive Cookie in HTTPS Session Without 'Secure' Attribute                                                    | HTTPS利用時のCookieのSecure 属性未設定 |      | 
| CWE-425  | Direct Request "Forced Browsing"                                                                                | 強制ブラウズ                           |      | 
| CWE-352  | Cross-Site Request Forgery (CSRF)                                                                               | クロスサイトリクエストフォージェリ     |      | 
| CWE-22   | Improper Limitation of a Pathname to a Restricted Directory "Path Traversal"                                    | パストラバーサル                       |      | 
| CWE-611  | Improper Restriction of XML External Entity Reference “XXE”                                                   | XML外部エンティティ参照                |      | 
| CWE-601  | URL Redirection to Untrusted Site "Open Redirect"                                                               | オープンリダイレクト                   |      | 
| CWE-502  | Deserialization of Untrusted Data                                                                               | 安全でないデシリアライゼーション       |      | 
| CWE-98   | Improper Control of Filename for Include/ Require Statement in PHP Program "PHP Remote File Inclusion"<br>(RFI) | リモートファイルインクルージョン       |      | 
| CWE-693  | Clickjacking/ Clickjack/ UI Redress/ UI Redressing                                                              | クリックジャッキング                   |      | 