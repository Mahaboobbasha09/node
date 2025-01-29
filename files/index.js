let fs = require("fs");
fs.writeFile("index122.js","hello",(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("ss")
    }
})
fs.unlink("index122.js",(err)=>{
    console.log(err)
})
let arr=["index122.js","index23.js","index24.js"]
for(i of arr){
    fs.writeFile(i,"Hello",(err)=>{
        if(err){
            console.log(err)
        }else{
            console.log("sucess")
        }
    })
}
for(i of arr){
    fs.unlink(i,(err)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("delete")
        }
    })
}