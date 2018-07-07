const Koa = require('Koa');
const route = require('koa-route');

const app = new Koa();


//路由

const about = ctx => {
    ctx.response.type = 'html';
    ctx.response.body = '<a href="/">返回首页</a>'
}

const main = ctx =>{
    ctx.response.body = '首页'
}

app.use(route.get('/',main));
app.use(route.get('/about', about));

app.listen(3000);



