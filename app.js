const a = 1
console.log(a);
let x = ()=>{
  console.log('x');
  
}
x()
let p = new Promise((resolve, reject)=>{
  setTimeout(() => {
    resolve('ok')
  }, 100);
})
p.then((x)=>{
  console.log(x)
})
let aa = require('n/test.js')
console.log('node_modules');
console.log(aa);
aa.p.then(s=>{
  console.log(s);
  
})

