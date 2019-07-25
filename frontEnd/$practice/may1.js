// document.getElementById("hello").textContenet = "Hello World!"
console.log("hello world")

class Living extends Object{

	constructor(age){
		super();
		this.age =age;	
	}

	show(){
		console.log("from class living this age", this.age)
	}

	birthday() {
		this.age = this.age +1;
	}

	
}

class Animal extends Living{
	constructor(age, name){
		super(age, name);		
		this.name= name;
	}

	show(){
		console.log("from Animal", this.age, this.name)
	}
}

let j = new Living(3);
console.log("jjj", j);
console.log("age", j.age);
j.show();
j.birthday();
j.show();
// console.log("show method", j.show());
let y=new Living(100);
y.birthday();
y.birthday();
y.show();
j.show();

let dog=new Animal(6);
dog.show();
dog.birthday();
dog.show();


let cat= new Animal(1, "Lisa");
console.log("cat", cat)
cat.show();

j.show();
