const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');

// 設定靜態檔案目錄
app.use(express.static(path.join(__dirname)));

// 服務 index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});