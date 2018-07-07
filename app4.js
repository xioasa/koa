const Koa = require('koa');
const route = require('koa-route');
const app = new Koa();


// 路由
const redirect = ctx => {
    ctx.response.redirect('/');
};

const about = ctx => {
    ctx.response.type = 'html';
    ctx.response.body = '<a href="/">返回首页</a>'
}



// 重定向  （当用户访问的链接不满足要求时触发）；
const main = ctx => {
    ctx.response.body = 'Hello World';
};

app.use(route.get('/', main));
app.use(route.get('/about', about));

// 重定向
app.use(main);
app.use(route.get('/redit', redirect));

app.listen(3000);