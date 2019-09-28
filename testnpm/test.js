const a = 1
exports.a = a
let p = new Promise((resolve, reject)=>{
  setTimeout(() => {
    resolve('我来自node_modules')
  }, 100);
})
exports.p = p