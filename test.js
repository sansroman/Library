let tmp = "sssssss1sss";
function checkUnique(str){
    return new Set(str).size ===1;
}
console.log(checkUnique(tmp));