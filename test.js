let testData = [{category:'111'},{category:'222'}];

testData.map((x)=>{
    x.label = x.category;
    delete x.category;
    x.type = [];
})
console.log(testData);