class Student{
    constructor(name,age,eyeColor) {
        this.name = name;
        this.age = age;
        this.eyeColor = eyeColor;
    }
    get detail() {
        return {name:this.name,age:this.age,eyeColor:this.eyeColor};
    }
    set data(name,age,eyeColor)  {
        this.name = name;
        this.age = age;
        this.eyeColor = eyeColor;
    }

}

let ali = new Student("ali",21,"black");

ali.data("ali",21,"black");
console.log(ali.detail());