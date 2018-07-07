const Koa = require('Koa');
const fs = require('fs');


const app = new Koa();



// HTTP Response 的类型

        // koa 默认的返回类型是 text/plain , 如果想返回其他类型的数据 可以用ctx.request.accepts 判断
        // 用户想接受什么类型的数据，然后用 ctx.response.type 设置返回数据的类型
        // 其他可选的 格式有 xml json html text

const main = ctx =>{
    if (ctx.request.accepts('xml')) {
        ctx.response.type = 'xml';
        ctx.response.body = '<data>hello</data>'
    }
}

// 发送模板

const main2 = ctx =>{
    ctx.response.type = 'html';
    ctx.response.body = fs.createReadStream('./template.html');
}


app.use(main2); 
app.listen(3000);