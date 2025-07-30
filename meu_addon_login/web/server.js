const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.redirect('/login.html');
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const users = JSON.parse(fs.readFileSync(path.join(__dirname, 'users.json')));

  if (users[username] && users[username] === password) {
    res.send(\`
      <script>
        localStorage.setItem('user', '\${username}');
        window.location.href = "/dashboard.html";
      </script>
    \`);
  } else {
    res.send('<h3>❌ Login inválido</h3><a href="/login.html">Tentar novamente</a>');
  }
});

app.listen(port, () => {
  console.log(\`🟢 Servidor rodando em http://localhost:\${port}\`);
});
