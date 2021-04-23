function primitiveMultiply(a,b) {
    //let tries = 0; to check the attempts
    let notrue = true;
    while(notrue) {
       // tries++;
    let percentage = Math.floor( Math.random() * 10);
    if(percentage >= 9 && percentage<=10) {
        notrue = false;
        console.log(percentage);
        return a*b;
    }
}

}


console.log(primitiveMultiply(2,3));