//定义一个 Animal 构造函数，作为 Dog 的父类
function Animal() {
    this.superType = 'Animal';
    this.superSpeak = function () {
        console.log(this.superType);
    }
}

function Dog(name) {
    //这里的属性不能通过__proto__访问,因为是通过构造函数临时产生的
    this.name = name;
    this.type = 'Dog';
    //一般构造函数里定义的属于本类里面的东西,原型对象里面的东西属于父类!!!!!!!!!!!!!!!!!!
}

//改变Dog的prototype指针，指向一个 Animal 实例
Dog.prototype = new Animal();   //原型对象!!!变成父类的实例
Dog.prototype.test ='test';
Dog.prototype.speak = function () {
    console.log(this.type);
};

const jiwawa = new Dog('jiwawa');
const husky = new Dog('husky');
// doggie.superSpeak();  //Animal
// doggie.speak();
// doggie.test='haha';
jiwawa.__proto__.test = 'hi';   //这里将改变原型(类)的唯一(静态)属性
console.log(jiwawa.test);
console.log(husky.test);    //因为找不到本地私有属性,然后在他的原型对象(父类)上找到公共的'hi'


// javascript语言实现继承机制的核心就是 prototype ，而不是Java语言那样的类式继承。Javascript 解析引擎在读取一个Object的属性的值时，会沿着 原型链 向上寻找，如果最终没有找到，则该属性值为 undefined ；
// 如果最终找到该属性的值，则返回结果。与这个过程不同的是，当javascript解析引擎执行“给一个Object的某个属性赋值”的时候，如果当前Object存在该属性，则改写该属性的值，如果当前的Object本身并不存在该属性，则新增这个属性 。
