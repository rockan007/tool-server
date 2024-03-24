const http = require('http');
const url = require('url');
const axios = require('axios');
http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader( 'Content-Type', 'application/json');
    let params = url.parse(req.url, true);
    console.log("params.url", params);
    if (params.pathname == "/map") {
        console.log("req", req.url);
        
        getAliResorce(params.query.url).then((response) => {
            console.log(response.data);
            res.end(JSON.stringify(response.data) );
        }).catch(err => {
            console.log(err);
            res.end("hello world!")
        })
        
    }else{
        res.end("hello world!")
    }

}).listen(8999);

function getAliResorce(url) {
    return axios.get(url);
}