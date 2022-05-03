import http from 'http';

http.createSever(
(req,res)=>{
    res.writehead(200,
{'Content-Type':
'text/xplain'});
    res.end('Vietnamese Restaurant');
}
).listen(process.env.PORT // 3000);