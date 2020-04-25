## 赤外線距離センサー(GP2Y0A21YK)

A0にDegital Outputをつける

```
float Vcc = 5.0;
float dist1;
float dist2;
 
void setup(){
  Serial.begin(9600);
}
 
void loop(){
  dist1 = Vcc*analogRead(A0)/1023;
  dist2 = 26.549*pow(dist1,-1.2091);
  Serial.println(dist2);
  delay(300);
}
```

参考: [赤外線距離センサ(GP2Y0A21YK)を使ってみる](https://novicengineering.com/%E8%B5%A4%E5%A4%96%E7%B7%9A%E8%B7%9D%E9%9B%A2%E3%82%BB%E3%83%B3%E3%82%B5gp2y0a21yk%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%A6%E3%81%BF%E3%82%8B/)
