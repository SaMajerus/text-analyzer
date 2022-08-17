<!-- Pseudo-code testing for 'wordCounter()' [1st and 2nd from Lsn 24] -->
Describe: wordCounter()

Test: "It should return 1 if a passage has just one word."
Code:
const text = "hello";
wordCounter(text);
Expected Output: 1

Test: "It should return 2 if a passage has two words."
Code:
const text = "hello there";
wordCounter(text);
Expected Output: 2 

Test: "It should return 0 for an empty string."
Code: wordCounter("");
Expected Output: 0

Test: "It should return 0 for a string that is only spaces."
Code: wordCounter("            "); 
Expected Output: 0

Test: "It should not count numbers as words."
Code: wordCounter("hi there 77 19");
Expected Output: 2 



<!--[Lsn 26]--> 
Describe: numberOfOccurrencesInText() 

Test: "It should return 0 occurrences of a word for an empty string."
Code:
const text = "";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 0 

Test: "It should return 1 occurrence of a word when the word and the text are the same."
Code:
const text = "red";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 1

Test: "It should return 0 occurrences of a word when the word and the text are different."
Code:
const text = "red";
const word = "blue";
numberOfOccurrencesInText(word, text);
Expected Output: 0

Test: "It should return the number of occurrences of a word."
Code:
const text = "red blue red red red green";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 4

Test: "It should return a word match regardless of case."
Code:
const text = "red RED Red green Green GREEN";
const word = "Red";
numberOfOccurrencesInText(word, text);
Expected Output: 3

Test: "It should return a word match regardless of punctuation."
Code:
const text = "Red! Red. I like red, green, and yellow.";
const word = "Red";
numberOfOccurrencesInText(word, text);
Expected Output: 3



Describe: curseWordFilter() 

Test: "It should return the whole, original string."
Code:
const text = "You muppeteer!"; 
const word = ""; 
curseWordFilter(word, text); 
Expected Output: "You muppeteer!" 

Test: "It should return the string with one word removed."
Code:
const text = "You muppeteer!"; 
const word = "muppeteer"; 
curseWordFilter(word, text); 
Expected Output: "You !" [OR  "You"]

Test: "It should return the string with one word removed (using 'filter()' method)."
Code:
const text = "Doing a silly muppeteer face!"; 
const word = "muppeteer"; 
curseWordFilter(word, text); 
Expected Output: "Doing a silly face!" 


Test: "It should return the a new string with all bad words removed."
Code:
const text = "You muppeteers ruin all our loopdaloop things all the way towards that biffaroni boyo, you zoinks!"; 
const word = ["muppeteer", "zoinks", "loopdaloop", "biffaroni"]; 
curseWordFilter(word, text); 
Expected Output: "You ruin all our things all the way towards that boyo, you" 


<!--(Switched to doing TDD on 'skipShift' here, to assist with this function.    
The tests for that function occur before the next Test below.)--> 


Test: "It should return the new string (in array form or not, doesn't matter) with all bad words removed."
Code:
const text = "You muppeteers ruin all our loopdaloop things all the way towards that biffaroni boyo, you zoinks!"; 
const word = ["muppeteer", "zoinks", "loopdaloop", "biffaroni"]; 
curseWordFilter(word, text); 
Expected Output: "You ruin all our things all the way towards that boyo, you" 




Describe: skipShift() 

Test: "It should exit the loop once it gets to the array's to-be-skipped/'Skipee' index, and print out the part of the array that precedes it (the Skipee)."
Code:
const array = ['You', 'are', 'a', 'muppeteer', 'in', 'first', 'class!']; 
const skipThis = 3; 
const afterSkip = 4; 
skipShift(array, skipThis, afterSkip); 
Expected Output: ['You', 'are', 'a', 'in', 'first', 'class!'] 
