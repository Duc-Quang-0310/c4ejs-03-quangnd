let string = ['to','be','that','of','elon','to','this','now','back','cool','hey','love','of','life','that','rain','summer','color','now','of','hat','late','sorry','my','team'];
let obj = {};
for (let i=0;i<string.length;i++){
    if(obj[string[i]] ===undefined){
        obj[string[i]]=1;
    }
    else {
        obj[string[i]]++;
    }
}
console.log(obj)