const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// ✅ /info API 추가
app.get('/info', (req, res) => {
  res.json({
    commitMsg: process.env.COMMIT_MSG || '업데이트 대기 중...',
    buildTime: new Date().toLocaleString(),
  });
});

// 'public' 폴더 안의 정적 파일 제공
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Express 웹 서버가 ${port}번 포트에서 가동 중입니다...`);
});
