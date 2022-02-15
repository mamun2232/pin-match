// function getPin(){
//           const pin = Math.round(Math.random()* 10000)
//           const pinStinge = pin + ''
//           if(pinStinge.length == 4){
//                     return pin
//           }
         
//           else{
//                     return getPin()
//           }

// }

// function pinGenaret(){
//         const pin = getPin()
//         const displayPin = document.getElementById("display-pin").value = pin
        
    
// }
function getPin(){
        const pin = Math.round(Math.random() * 10000)
        const pinStinge = pin + ''
        if(pinStinge.length == 4){
                return pin

        }
        else{
                getPin()
        }

}

function pinGenaret(){
        const pin = getPin()
        document.getElementById('display-pin').value = pin    
}


// second strep --------------
document.getElementById('key-pad').addEventListener('click',function(event){
        const number = event.target.innerText;
        const inputCals = document.getElementById('input-numbers')
        if(isNaN(number)){
               if(number == 'C'){
                       
                inputCals.value = ""
                       
               }
                
        }
        else{
               
        const previsNumber = inputCals.value
        const newNumber = previsNumber + number
        inputCals.value = newNumber;
        }
})

document.getElementById('submit-btn').addEventListener('click', function(){
        const pin = document.getElementById('display-pin').value
       const inputCals = document.getElementById('input-numbers').value

       if(pin == inputCals){
               document.getElementById('match').style.display = 'block'
               document.getElementById('not-match').style.display = 'none'
       }
       else{
               
        document.getElementById('not-match').style.display = 'block'
        document.getElementById('match').style.display = 'none'
      }
        
})
