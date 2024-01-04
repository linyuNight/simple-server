const express = require('express');
const app = express();
const path = require('path');

// 静态资源中间件，将 public 目录映射到根路径
app.use(express.static(path.join(__dirname, 'public')));

// 用于处理根路径的路由
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 启动服务器
const port = 3344;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});