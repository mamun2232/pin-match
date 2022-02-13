function getPin(){
          const pin = Math.round(Math.random()* 10000)
          const pinStinge = pin + ''
          if(pinStinge.length == 4){
                    return pin
          }
         
          else{
                    return getPin()
          }

}

function pinGenaret(){
        const pin = getPin()
        const displayPin = document.getElementById("display-pin").value = pin
    

          
    
}

