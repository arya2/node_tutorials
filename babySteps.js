console.log(Array.prototype.slice.call(process.argv, 2).reduce((p,n)=>+p + +n));