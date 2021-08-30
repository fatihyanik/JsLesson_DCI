let user="Jerry";

switch (user){
    case 'Jerry':
       // console.log(`Hi, ${user}!`);
        console.log('Hi, Jerry!');
       // break;
    case 'George':
        console.log('Hi, George!');
        break;
    case 'Elaine':
        console.log('Hi, Elaine!');
        break;
    case 'Kramer':
        console.log('Hi, Kramer!');
        break;
    default:
        console.log('Hello Newman');
}

//Color Analyzer
//1.Create a switch statement that prints a different statement for each color possibility (red, blue, green, yellow).
let color = "red";
switch (color){
    case 'red':
      console.log(`The color is ${color}`);
      break;
    case "green":
      console.log(`The color is ${color}`);
      break;
    case 'blue':
      console.log(`The color is ${color}`);
      break;
    default:
       console.log("Pick up a valid option!");
};

//2. Grading
//Create a switch statement that prints different comments depending on a grade.

let grade = 1;
switch (grade){
    case 0:
      console.log("You are a zero");
      break;
    case 1:
      console.log("You are the number one");
      break;
    case 2:
      console.log("You are second");
      break;
    default:
      console.log("What are you?");
};

//3. Fruits
//Create a switch statement that prints different statement for various fruit (e.g. banana, orange, strawberry, apple).
let fruit = "apple";
switch (fruit){
    case 'apple':
      console.log(fruit);
      break;
    case "banana":
      console.log(fruit);
      break;
    case 'orange':
        console.log(color);
        break;
    default:
       console.log("Pick up your fruit!");
};

//4. Percentage Complete.
//If percentageComplete is below 30, print “Still a long way to go”.
//If the percentageComplete is between 30 and 50, print “Slowly getting there”.
//If percentageComplete is between 51 and 80, print “You can do it!“.
//If percentageComplete is between 81 and 99, print “This is the last push!“.
//If percentageComplete is 100, print “You’re there. Well done!“.
const percentageComplete = 100;

switch(true){
    case percentageComplete < 30:
        console.log("Still a long way to go");
        break;
    case percentageComplete >= 30 && percentageComplete <=50:
        console.log("Slowly getting there");
        break;
    case percentageComplete >=51 && percentageComplete <=80:
        console.log("You can do it!");
        break;
    case percentageComplete >=81 && percentageComplete <=99:
        console.log("This is the last push!");
        break;
    case percentageComplete ==100:
        console.log("This is the last push!");
        break;
    default:
        console.log("Whaattttt?");
}

if(percentageComplete < 30){
    console.log("Still a long way to go");
}else if(percentageComplete <=50){
    console.log("Slowly getting there");
}else if(percentageComplete <=80){
    console.log("You can do it!");
}else if(percentageComplete <=99){
    console.log("This is the last push!");
}else if(percentageComplete ==100){
    console.log("This is the last push!");
}else{
    console.log("Whaattttt?");
}

//5. Differences
//When should you use a switch statement versus an if else statement. Comment your answer in your js file.
// switch => 4 or more simple conditions, if/else => 2-4 conditions or complex