// Write a JavaScript program to get the length of a JavaScript object.
// Sample object :
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };

var count=0;
var key;
for(key in student){
    if(student.hasOwnProperty(key)){
        count++
    }
}
console.log(count);