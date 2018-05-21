const url = require('url');
console.log(url.parse('http://www.baidu.com:8080/p/a/t/h.html?query1=str1&query2=str2#hash',true).protocol);
console.log(url.parse('http://www.baidu.com:8080/p/a/t/h.html?query1=str1&query2=str2#hash',true).hostname);
console.log(url.parse('http://www.baidu.com:8080/p/a/t/h.html?query1=str1&query2=str2#hash',true).host);
console.log(url.parse('http://www.baidu.com:8080/p/a/t/h.html?query1=str1&query2=str2#hash',true).port);
console.log(url.parse('http://www.baidu.com:8080/p/a/t/h.html?query1=str1&query2=str2#hash',true).pathname);
console.log(url.parse('http://www.baidu.com:8080/p/a/t/h.html?query1=str1&query2=str2#hash',true).path);
console.log(url.parse('http://www.baidu.com:8080/p/a/t/h.html?query1=str1&query2=str2#hash',true).search);
console.log(url.parse('http://www.baidu.com:8080/p/a/t/h.html?query1=str1&query2=str2#hash',true).hash);
console.log(url.parse('http://www.baidu.com:8080/p/a/t/h.html?query1=str1&query2=str2#hash',true).query);

//参数列表要规范,不能省却第二个true