const Koa = require('Koa');
const app = new Koa();

const main = ctx => {
   ctx.response.body = 'hello';
}


app.use(main);
app.listen(3000);