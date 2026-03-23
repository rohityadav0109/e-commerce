fetch('http://localhost:3000/api/seed')
  .then(res => res.text())
  .then(text => console.log(text.substring(0, 5000)))
  .catch(err => console.error(err));
