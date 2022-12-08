let bishCount = 100;

for (let index = 0; index <= bishCount; index++) {
    if (index % 3 == 0 && index % 4 == 0) {
        console.log("Bish-Bosh");
    } else if (index % 3 == 0) {
        console.log("Bish");
    } else if (index % 4 == 0) {
        console.log("Bosh");        
    } else {
        console.log(index);
    }  
}