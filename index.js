const _ = require("lodash")


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

_.each(arr,(num,i)=>{
    console.log(num,i);
})

const n = "new";