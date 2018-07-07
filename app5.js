const Koa = require('koa');
const app = new Koa();

// const main = ctx => {
//     console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`);
//     ctx.response.body = 'Hello World';
// };
const main2 = (ctx,next) =>{
   console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`);
   next();
}

app.use(main2);
app.listen(3000);