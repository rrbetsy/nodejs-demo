var fs = require('fs');

//阻塞代码实例(sync)
/*var address = fs.readFileSync('address.text');
console.log(address.toString());
console.log('已获取到相关地址！');
*/

//非阻塞代码实例(async)
fs.readFile('address.text', function(err, address) {
  if (err) {
    return console.error(err);
  };
  console.log(address.toString());
});
console.log('已获取到github和博客地址！');