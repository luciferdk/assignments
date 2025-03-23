var counter = 0;

const intervalId = setTimeout(() => {
    counter++;
    console.log(intervalId);
    
    if (counter === 20) {
        clearInterval(intervalId)
        console.log("stoped when counter reache at 20");
        
    }
}, 1000);

for (const counter of 20) {
  
        clearInterval(intervalId)
        console.log("stoped when counter reache at 20");
        
   
}