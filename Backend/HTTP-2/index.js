// what is http
// => http hyper text transfer protocol is use for create HTTP server and HTTP request

const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    res.end("Home Page");
  } else if (url === "/login") {
    res.end("Login Page");
  } else if (url === "/signup") {
    res.end("signup Page");
  } else if (url === "/about") {
    req.end("About Page");
  } else {
    res.end("404 Page Not Found !");
  }
});

server.listen(8090,()=>{
    console.log("Server Start !!");
    
})

// const http = require("http");

// const server = http.createServer((req, res) => {
//   const url = req.url;

//   if (url === "/") {
//     res.end("Home Page");
//   } else if (url === "/login") {
//     res.end("Login Page");
//   } else if (url === "/signup") {
//     res.end("Signup Page"); 
//   } else if (url === "/home") {
//     res.end("Home Page");
//   } else {
//     res.end("404 Page Not Found");
//   }
// });

// server.listen(8090, () => {
//   console.log("Server Start !!");
// });
