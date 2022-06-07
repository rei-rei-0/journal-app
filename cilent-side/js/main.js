//document.querySelector('#clickMe').addEventListener('click', makeReq)


//document.querySelector('#answerQ').addEventListener('click', test)
document.getElementById('answerQ').addEventListener('click', apiRequest)

let countQ = 0

function test(){
  console.log('btt')
}
//basic idea works
async function apiRequest(){
  countQ++
  try{
    const res = await fetch(`/messaging?question=${countQ}`)
    const data = await res.json()
    
      console.log(data)
      document.querySelector('#question').innerText = data[Math.floor(Math.random()*3)]
  }catch(error){
      console.log(error)
  }
}
// async function makeReq(){

//   const userName = document.querySelector("#userName").value;
//   const res = await fetch(`/api?student=${userName}`)
//   const data = await res.json()

//   console.log(data);
//   document.querySelector("#personName").textContent = data.name
//   document.querySelector("#personStatus").textContent = data.status
//   document.querySelector("#personOccupation").textContent = data.currentOccupation
// }