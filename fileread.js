let fs=require("fs");

let arr=["./f1.txt","./f2.txt","./f3.txt","./f4.txt","./f5.txt",];


let filePromise=fs.promises.readFile(arr[0]);

for(let i=1;i<arr.length;i++){
    filePromise=filePromise.then(function(data){
        console.log(data + "");
        let nextFileData=fs.promises.readFile(arr[i]);
        return nextFileData;
    })
}

filePromise.then(function(data){
    console.log(data+"");
})