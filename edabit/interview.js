//https://dmitripavlutin.com/javascript-this-interview-questions/

//1.question
const object = {
    message: 'Hello, World!',
    getMessage() {
      const message = 'Hello, Earth!';
      return this.message;
    }
  };
  console.log(object.getMessage());


  const joe = {
      firstName: "Joe",
      getFirstName: function(){
          return this.firstName;
      }
  }
  const joeGreeting = joe.getFirstName;
  console.log(joeGreeting());
  console.log(joe.getFirstName());

  /* function Pet(name) {
    this.name = name;
    this.getName = () => this.name;
  }
  const cat = new Pet('Fluffy');
  console.log(cat.getName()); // What is logged?
  const { getName } = cat;
  console.log(getName());     // What is logged? */

  //

 /*  function Pet(name) {
    this.name = name;
    this.getName = function(){
        return this.name;var length = 4;
function callback() {
  console.log(this.length); // What is logged?
}
const object = {
  length: 5,
  method(callback) {
    callback();
  }
};
object.method(callback, 1, 2);

var data = this;
console.log(data);

function logThis(){
    return this;
}

logThis(); // ?
    };
  }
  const cat = new Pet('Fluffy');
  console.log(cat.getName()); // What is logged?
  const { getName } = cat;
  console.log(getName());     // What is logged? */

/*   const object = {
    message: 'Hello, World!',
    logMessage() {
      console.log(this.message); // What is logged?
    
    }
  };
  setTimeout(object.logMessage, 1000); */

  //setTimeout(object.logMessage.bind(object),1000)
  //setTimeout(() => object.logMessage(), 1000);

/*   let funcObj = object.logMessage.bind(object); 
  setTimeout(funcObj, 1000); */

/*   const object = {
    message: 'Hello, World!'
  };
  function logMessage() {
    console.log(this.message); // "Hello, World!"
  }
  
// Using func.call() method
logMessage.call(object);
// Using func.apply() method
logMessage.apply(object);
// Creating a bound function
const boundLogMessage = logMessage.bind(object);
boundLogMessage(); */

/* const object = {
    who: 'World',
    greet() {
      return `Hello, ${this.who}!`;
    },
    farewell: () => {
      return `Goodbye, ${this.who}!`;
    }
  };
  console.log(object.greet());    // What is logged?
  console.log(object.farewell()); // What is logged? */

/* var length = 4;
function callback() {
  console.log(this.length); // What is logged?
}
const object = {
  length: 5,
  method(callback) {
    callback();
  }
};
object.method(callback, 1, 2);

var data = this;
console.log(data);

function logThis(){
    return this;
}

logThis(); // ? */

/* var instructor = {
    firstName: 'Tim',
    sayHi: function(){
        console.log("Hello! " + this.firstName);
    }
}

instructor.sayHi() // ? */

/* var instructor = {
    firstName: 'Tim',
    info: {
        catOwner: true,
        boatOwner: true
    },
    displayInfo: function(){
        console.log("Cat owner? " + this.catOwner);
    }
}

instructor.displayInfo() // ? */

var instructor = {
    firstName: 'Tim',
    info: {
        catOwner: true,
        boatOwner: true,
        displayLocation: function(){
            return this.data.location;
        },
        data: {
            location: "Oakland"
        }
    },
}

instructor.info.displayLocation() // ?

/* var instructor = {
    firstName: 'Tim',
    info: {
        catOwner: true,
        boatOwner: true,
        displayLocation: function(){
            return this.location;
        },
        data: {
            location: "Oakland",
            logLocation: this.displayLocation
        }
    },
}

instructor.info.data.logLocation() // Why might we be getting an error here? */