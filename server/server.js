const express = require('express');
const session = require('express-session');
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
// express-session 사용
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true
}));

// 로그인 요청 처리
app.post('/api/login', (req, res) => {
  const { studentID } = req.body;

  // DB에서 해당 학번 조회
  const query = 'SELECT * FROM users WHERE studentID = ?';

  db.query(query, [studentID], (err, results) => {
    if (err) {
      console.error('DB 조회 중 오류 발생:', err);
      return res.status(500).send({ message: 'DB 조회 중 오류 발생' });
    }
    if (results.length > 0) {
      // 학번이 존재하는 경우 세션에 저장
      req.session.studentID = studentID;
      res.send({ message: '로그인 성공!', user: results[0] });
    } else {
      // 학번이 존재하지 않는 경우 새로 추가하고 세션에 저장
      const timestamp = new Date().toISOString().slice(0, 19).replace('T', ' ');
      const insertQuery = 'INSERT INTO users (studentID, created_at) VALUES (?, ?)';

      db.query(insertQuery, [studentID, timestamp], (err, result) => {
        if (err) {
          console.error('학번 저장 중 오류 발생:', err);
          return res.status(500).send({ message: '학번 저장 중 오류 발생' });
        }
        req.session.studentID = studentID;
        res.send({ message: '학번 저장!', id: result.insertId });
      });
    }
  });
});

// research 페이지에서 highestResults를 저장하는 요청 처리
app.post('/api/research', (req, res) => {
  const { highestResults } = req.body;
  const studentID = req.session.studentID;

  if (!studentID) {
    return res.status(401).send({ message: '로그인 필요' });
  }

  const updateQuery = 'UPDATE users SET result = ? WHERE studentID = ?';

  db.query(updateQuery, [JSON.stringify(highestResults), studentID], (err, result) => {
    if (err) {
      console.error('결과 업데이트 중 오류 발생:', err);
      return res.status(500).send({ message: '결과 업데이트 중 오류 발생' });
    }

    res.send({ message: '결과 업데이트 성공' });
  });
});

// 사용자의 결과 조회
app.get('/api/getUserResult', (req, res) => {
  const studentID = req.session.studentID;

  if (!studentID) {
    return res.status(401).send({ message: '로그인 필요' });
  }

  const query = 'SELECT result FROM users WHERE studentID = ?';

  db.query(query, [studentID], (err, results) => {
    if (err) {
      console.error('결과 조회 중 오류 발생:', err);
      return res.status(500).send({ message: '결과 조회 중 오류 발생' });
    }

    if (results.length > 0) {
      res.send({ result: results[0].result });
    } else {
      res.status(404).send({ message: '결과를 찾을 수 없습니다.' });
    }
  });
});

// 사용자에게 추천할 강의와 자격증 목록을 반환하는 요청 처리
app.get('/api/getRecommendations', (req, res) => {
  const studentID = req.session.studentID;

  if (!studentID) {
    return res.status(401).send({ message: '로그인 필요' });
  }

  const userQuery = 'SELECT result FROM users WHERE studentID = ?';

  db.query(userQuery, [studentID], (err, userResults) => {
    if (err) {
      console.error('사용자 결과 조회 중 오류 발생:', err);
      return res.status(500).send({ message: '사용자 결과 조회 중 오류 발생' });
    }

    if (userResults.length > 0) {
      const userResult = userResults[0].result;

      const resultQuery = 'SELECT id FROM results WHERE type = ?';

      db.query(resultQuery, [userResult], (err, resultData) => {
        if (err) {
          console.error('결과 조회 중 오류 발생:', err);
          return res.status(500).send({ message: '결과 조회 중 오류 발생' });
        }

        if (resultData.length > 0) {
          const resultId = resultData[0].id;

          const lectureQuery = 'SELECT lectureName, lectureExplain FROM lectures WHERE result_id = ?';
          const certificationQuery = 'SELECT certificationName, certificationExplain FROM certifications WHERE result_id = ?';

          db.query(lectureQuery, [resultId], (err, lectureData) => {
            if (err) {
              console.error('강의 조회 중 오류 발생:', err);
              return res.status(500).send({ message: '강의 조회 중 오류 발생' });
            }

            db.query(certificationQuery, [resultId], (err, certificationData) => {
              if (err) {
                console.error('자격증 조회 중 오류 발생:', err);
                return res.status(500).send({ message: '자격증 조회 중 오류 발생' });
              }

              res.send({
                lectures: lectureData,
                certifications: certificationData,
              });
            });
          });
        } else {
          res.status(404).send({ message: '결과를 찾을 수 없습니다.' });
        }
      });
    } else {
      res.status(404).send({ message: '사용자를 찾을 수 없습니다.' });
    }
  });
});

// 모든 GET 요청을 처리하고, React 앱을 반환
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'recommand-major', 'build', 'index.html'));
});

// 서버 실행
app.listen(port, () => {
  console.log(`서버가 ${port}번 포트에서 실행 중입니다.`);
});
