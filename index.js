const app = require('express')();
const PORT = 8080;

app.get('/tshirt', (req, res) => {
    res.status(200).send({
        tshirt: '43ijff',
        size: 'large'
    })
});
app.listen(
    PORT,
    () => console.log(`its alive on https://localhost:${PORT}`)
)