const Koa = require('Koa');


const app = new Koa();


// 原生路由

const main = ctx => {
    if(ctx.request.path !== '/'){
        ctx.response.type = 'html';
        ctx.response.body = '<a href="/">index</a>';
    }else{
        ctx.response.body = 'hello';
    }
}

app.use(main);
app.listen(3000);