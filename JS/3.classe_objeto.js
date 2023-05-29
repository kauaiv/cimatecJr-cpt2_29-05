// 1. class+object
{
class Pessoa {
  constructor (nome, idade){
    this.nome = nome; 
    this.idade = idade; 
  }
  saudacao(){
    console.log(`meu nome: ${this.nome}, minha idade: ${this.idade}`);
  }
}

const pessoa1 = new Pessoa("joao", 20);
const pessoa2 = new Pessoa("maria", 30);

pessoa1.saudacao();
pessoa2.saudacao();
}

// 2. destructuring 
{
class Person { // criando classe com
  constructor(name, age, city){
    this.name = name;
    this.age = age;
    this.city = city;
  }
}

const person = new Person("joão", 25, "Salvador");

const { name, age, city} = person; 
console.log(name);
console.log(age);
console.log(city);
}