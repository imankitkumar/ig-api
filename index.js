const express = require('express');
const prv = require('./handler/lib');
const app = express();

app.listen(3000);

app.get('/api/v1',async (req, res) => {
    console.log('server live');
res.send(await prv.data(req.query.url));

    
});
app.use((req, res) => {
  
  res.status(404).json({"err": 404});

  
})