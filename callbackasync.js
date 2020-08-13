
let students=[{name:"anurag",rollno:10,number:9899},{name:"shashank",rollno:5,number:9999}];

function getDetails() {
    setTimeout(() => {
        console.log(students);
    },1000);
}
function setDetails(obj,callback) {
    setTimeout(() => {
        students.push(obj);
    }, 3000);
    callback();
}
let obj={name:"simran",rollno:20,number:7877};
setDetails(obj,getDetails);