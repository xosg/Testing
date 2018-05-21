const fs = require('fs');
fs.unlink('/Users/jim001/Desktop/testtest', () => {     //unlink表示文件的删除其实是断开文件内容和文件头的链接!!
    console.log('删除成功');
});
