# Random Password Generator

## Installation

The purpose of this project was to write our own functions to generate a random password using a string of letters (upper and lower case), numbers and special characters.  We were supposed to prompt the user as to which types of characters they would like to use in their password, and how long they would like the password to be (8-128 characters).  The choices they had to choose from were,

* password length
* upper case letters
* lowercase letters
* numbers
* special characters (!, @, #, $, _ etc.). 

Once the user has answered all of the questions, the random password should be displayed in the 'secure password' box.

### function generatePasswordRequirements()

I created a function called passwordRequirements that included a series of prompts that began after the 'generate password' button had been clicked.  All of the answers took either a true or a false value to them.  I created an array called 'charTypes' where the character type would be pushed if the user decided to use that specific character type.  

Based on the answers by the user the charTypes array could have had a max of 4 items inside, which were the four types of characters being used for the password.

<img width="869" alt="Screen Shot 2020-07-21 at 4 23 45 PM" src="https://user-images.githubusercontent.com/61304861/88117043-ed855200-cb6e-11ea-8388-1f5a8ac0d29e.png">

### function generatePassword()

I then wrote a function 'generatePassword' that pulled a random character type from charTypes, which would then pull a random index from the array of characters.  Once I had the index of the character in the array I used the variable newChar to assign the character from the random index.  I then appended newChar to password.  

I used a for loop to continue this process until the desired password length was fulfilled.

<img width="681" alt="Screen Shot 2020-07-21 at 4 24 17 PM" src="https://user-images.githubusercontent.com/61304861/88117083-01c94f00-cb6f-11ea-92cb-099fd27559b9.png">

## Screenshot of Application

![image](https://user-images.githubusercontent.com/61304861/91205890-24450f80-e6bb-11ea-91fc-b9a67f75114e.png)


## Link 

https://joshherrera09.github.io/PW-generator/

## Contact Information

Email: joshherrera09@gmail.com


