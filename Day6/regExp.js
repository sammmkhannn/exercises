let dateTime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
//console.log(dateTime.test("(1-30-2003 8:45)"));


let cartoonCrying = /boo+(hoo+)+/i;

//console.log(cartoonCrying.exec("Boohoooohoohooooo"));


//the exec method

let match = /\d+/.exec("one two 100");
//console.log(match);

// the match method of strings
//console.log("one two 100".match(/\d+/));

let quotedText = /'([^']*)'/;

//console.log(quotedText.exec("she said 'hello'"));

//console.log(/bad(ly)?/.exec("bad"));
//console.log(/(\d)+/.exec("123"));


//let str = new RegExp("sam");
let number = /hey+(sam)+/i;

//console.log(number.exec("heyyyysamsamsam"));

//the javascript date class

//console.log(new Date());
//creating an object from a specific time
//console.log(new Date(2009,11,9));
//console.log(new Date(2009, 11,9, 12,59, 59, 999));

//console.log(new Date(2013, 11, 19).getTime());

//function to exract date from a string

function getDate(string) {
	let [_,month, day, year] = /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);
	
	return new Date(year,month - 1, day);
}

//console.log(getDate("1-30-2003"));


let newDate = /(\d{1,2})-(\d{1,2}),(\d{1,4})/i;

//console.log(newDate.exec("23-12-2004"));

//console.log(/cat/.test("concatenate"));

//console.log(/\bcat\b/.test("concatenate"));
let animalCount = /\b\d+ (pig|cow|chicken)s?\b/;
console.log(animalCount.exec("15 pigs"));

