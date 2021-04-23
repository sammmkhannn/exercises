//matching date format


let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;

//console.log(dateTime.test("01-30-2003 15:20"));


let cartoonCrying = /boo+(hoo+)+(cooo)+/i;


//console.log(cartoonCrying.test("Boohoooohoohoooocooocooocooo"));


//the exec method

let match = /\d+/.exec("one two 100");
console.log(match);

