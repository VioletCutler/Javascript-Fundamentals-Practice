const { morningGreeting, afternoonGreeting, eveningGreeting } = require('./01-Greetings')
const { firstDay, secondDay, thirdDay, fourthDay, fifthDay, sixthDay, seventhDay} = require('./02-Weekdays')
console.log('=====Part 3 below=====')
/*      Part 3 - Putting it Together

Now it is time to put it all together!

If you look at lines 1 and 2 of this file, you can see that you have access to the variables you created in the other files. Don't worry too much about how that works for now. 

Complete the following steps:
    a. Declare a variable called firstName which is equal to your first name as a string
    b. Declare a variable called lastName which is equal to your last name as a string
*/

// your code below //


// once you have declared your variables, run your file. You should see the final greetings below in the console below 

console.log(morningGreeting, firstName, lastName)
console.log('Today is :', firstDay)

console.log(afternoonGreeting, firstName, lastName)
console.log('Today is :', thirdDay)

console.log(eveningGreeting, firstDay, lastName)
console.log('Today is :', fifthDay)
console.log('Happy', fifthDay, '!')