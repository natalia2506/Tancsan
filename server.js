const app = require('./src/app');

const PORT = process.env.PORT || 8090

app.listen(PORT, () => console.log(`Faça sua doação. Endereço: Rua Terra Rio, nº ${PORT}, Nova Lima/MG`));