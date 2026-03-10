# OOP's
    OOP's stands for Object Oriented programming system.
    this concept introduce in js in ES6
    isme overriding support but overloading not support
    there are mainly four pillar's in OOP's:
    This system based on class and object .
    a class is a blueprint of an object and object is a real world entities.

    1️⃣ Encapsulation-->
            Encapsulation is an OOP concept where data and methods are wrapped inside a class and data access is restricted to ensure security.
            (Encapsulation = data ko protect karna + control dena)

    2️⃣ Abstraction-->
            Abstraction is a concept in which showing the essiential properties and hiding the internal properties.
            (User ko andar ka logic nahi, sirf kaam dikhe)

    3️⃣ Inheritance-->
            Inheritance is concept in which a child class inherit the methods and properties of a parent class.
            (Ek class ki properties dusri class use kare)

    4️⃣ Polymorphism-->
            Polymorphism is a concept in which a method(function) can be used many times in a  class . In polymorphism means one thing many forms. 
            (Ek hi function naam, alag-alag kaam)
            
# Methods
    -> Functions inside the class is called methods.
# propersties
    -> properties are the data member of a class.
# Constructor
    -> Constructor is a function in the class that is called itself when a object created.

    
 # super-> is denoting parent class

****************************************************************************************************************
# OOP's: OOP's is a system or mechanism for creating a software by which we can write structured and secure code.


# OOP's is based on two entities:
# Class : class is not a real world entity , it is a blueprint of object and use to store data member(properties) and member function(method) in it.  

# object :Object is a real  world entity , it is an instance of class and use to access all the properties and functionalities of class

# Constructor : Constructor is a special method(Function) which is use to initialization of properties and it will call itself on the time of creation of object.

# OOP's follows 4 pillars:
# 1. Abstraction--> Abstraction is a concept in which showing the essiential properties and hiding the internal properties.
 OR
## Abstraction is a method of hiding internal implementation and showing essential information.
 Ex: 
        class ATM { 
                withdraw(amount){
                        this.#process(amount);
                }
                #process(amount){
                        console.log(amount + " withdraw");
                }
        }
        let atm = new ATM();
        atm.withdraw(1000);

# 1. Encapsulation : Encapsulation is a method  for wrapping all functionalities and properties in a single unit and that single unit is called class.

# 2. Inheritance : Inheritance is a process creating a new class by using existing class and due to inheritance we are able to access all the public functionalities and properties of existing class into new class object.

##### 3. Polymorphism : Polymorphism means one thing many form by which we can create methods of same name but different functionality.
There are two polymorphism;
# overloading : when we create method of same name in same class with different parameter.
# overriding : When we create method of same name in derived class with same parameter.
----- overloading is not supported in js


