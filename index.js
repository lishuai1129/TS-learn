"use strict";
let str1;
str1 = 'hello';
str1.toUpperCase(); //⽆警告
let str2;
str2 = 'hello';
str2.toUpperCase(); //⽆警告
let str3;
str3 = 'hello';
str3.toUpperCase() //警告：“str3”的类型为“未知”
(str3).toUpperCase(); //⽆警告
