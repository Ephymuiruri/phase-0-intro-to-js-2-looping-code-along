// Code your solutions in this file
const names=[]
const eventName ="wedding"
const messageList=[]
function writeCards(names,eventName){
    for (let i=0;i<names.length;i++){
       const message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`  
       console.log(message)
       messageList.push(message)
          }
        return messageList
}
writeCards(names,eventName)

function countDown(int){
 if (int < 0){
    return 'enter positive integer'
 } else{
  let count = int
 while (count>= 0 ){
    console.log(int) 
    int= int-1
    count=count-1
 }}
}
