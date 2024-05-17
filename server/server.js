const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

// JSON 요청 본문을 파싱하기 위한 미들웨어
app.use(express.json());

// 정적 파일 제공 설정
app.use(express.static(path.join(__dirname, '..', 'recommand-major', 'build')));

// 모든 GET 요청을 처리하고, React 앱을 반환
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'recommand-major', 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`서버가 ${port}번 포트에서 실행중입니다.`);
});
