const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
     for (let i = 0; i < data.length; i++) {
        if (data[i].profession === "developer") {
            console.log(data[i]);
   
}
}
}
// 2. Add Data
function addData() {
    let name = prompt("enter your name")
    let age = prompt("enter your age")
    let profession = prompt("enter your profession")
    let obj = { name: name, age: age, profession: profession };
    data.push(obj);
    
    console.log(obj)
}

// 3. Remove Admins
function removeAdmin() {
    for (let i = 0; i < data.length; i++) {
         if (data[i].profession === "admin") {
              data.pop(data[i].profession);
         }
         console.log(data[i]);
    }
    
    
}

// 4. Concatenate Array
function concatenateArray() {
    const example = [
         { name: "Raju ", age: 22, profession: "developer" },
         { name: "sanket", age: 26, profession: "admin" },
    ]   
    for (let i = 0; i < example.length; i++) {
        console.log( data.push(example))
        
    }
    console.log(example);
    
}

// 5. Average Age
function averageAge() {
    const sumOfAges = data.reduce((sum, data) => sum + data.age, 0);
    const averageAge = sumOfAges / data.length;
    let result = prompt("average age", averageAge)
  console.log(result);
}

// 6. Age Check
function checkAgeAbove25() {
    for(let i=0;i<data.length;i++){
         if(data[i].age>=25){
              console.log(data[i]);
         }
    }

}

// 7. Unique Professions
function uniqueProfessions() {
    let arr = [];
    for(let i=0;i<data.length;i++){
         if(arr.includes(data[i].profession)==true){
              continue;
         }else{
              arr.push(data[i].profession);
         }
    }
    console.log(arr);

}

// 8. Sort by Age
function sortByAge() {
   data.sort((a,b)=>a.age-b.age);
   console.log(data);
  

}

// 9. Update Profession
function updateJohnsProfession() {
    for(let i=0;i<data.length;i++){
         if(data[i].name==="jane"){
              data[i].profession="frontend developer";
         console.log(data[i]);
              
         }
    }
}

// 10. Profession Count
function getTotalProfessions() {
    let admin =0;
    let dev = 0;
    for(let i=0;i<data.length;i++){
         if(data[i].profession==="admin"){
              admin++;
         }else if(data[i].profession==="developer"){
              dev++;
         }
    }
    console.log(`Total Admin : ${admin}`)
    console.log(`Total Developers : ${dev}`)
}