const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = process.env.PORT || 5000;

// MySQL 데이터베이스 연결 설정
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '0000',
  database: 'jochigyeol'
});
// 데이터베이스 연결
db.connect((err) => {
  if (err) throw err;
  console.log("mysql connected.");
});

// JSON 요청 본문을 파싱하기 위한 미들웨어
app.use(express.json());
// 정적 파일 제공 설정
app.use(express.static(path.join(__dirname, '..', 'recommand-major', 'build')));
//
app.use(bodyParser.json());

//로그인 요청 처리
app.post('/api/login', (req, res) => {
  const { studentID } = req.body;
  const timestamp = new Date().toISOString().slice(0,19).replace('T', ' ');
  const query = 'INSERT INTO users (studentID, created_at) VALUES (?, ?)';

  db.query(query, [studentID, timestamp], (err, result) => {
    if (err) console.log('학번 저장 중 오류 발생');
    res.send({ massage: '학번 저장!', id: result.insertId });
  });
});

// 모든 GET 요청을 처리하고, React 앱을 반환
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'recommand-major', 'build', 'index.html'));
});

// 서버 실행
app.listen(port, () => {
  console.log(`서버가 ${port}번 포트에서 실행중입니다.`);
});
