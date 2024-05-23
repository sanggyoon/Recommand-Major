const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session'); // 세션 미들웨어 추가
const mysql = require('mysql');

const app = express();
const port = process.env.PORT || 5000;

// 세션 미들웨어 설정
app.use(session({
  secret: '0000', // 임의의 문자열로 세션을 암호화합니다.
  resave: false,
  saveUninitialized: true,
}));

// MySQL 데이터베이스 연결 설정
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
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
app.use(bodyParser.json());

//로그인 요청 처리
app.post('/api/login', (req, res) => {
  const { studentID } = req.body;
  const timestamp = new Date().toISOString().slice(0,19).replace('T', ' ');
  const query = 'INSERT INTO users (studentID, created_at) VALUES (?, ?)';

  db.query(query, [studentID, timestamp], (err, result) => {
    if (err) {
      console.log('학번 저장 중 오류 발생:', err);
      res.status(500).json({ error: 'Error saving studentID' });
    } else {
      // 세션에 학번 저장
      req.session.studentID = studentID;
      res.send({ message: '학번 저장!', id: result.insertId });
    }
  });
});

app.post('/api/saveResult', (req, res) => {
  const { result } = req.body;
  const studentID = req.session.studentID; // 세션에서 학번 가져오기

  console.log('받은 데이터:', result, studentID);

  // 결과를 users 테이블에 저장하는 쿼리 실행
  const query = 'UPDATE users SET results = ? WHERE studentID = ?';
  db.query(query, [result, studentID], (err, result) => {
    if (err) {
      console.error('Error saving result:', err);
      res.status(500).json({ error: 'Error saving result' });
    } else {
      console.log('Result saved in database');
      res.json({ success: true });
    }
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'recommand-major', 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`서버가 ${port}번 포트에서 실행중입니다.`);
});
