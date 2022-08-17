// Business Logic 

function wordCounter(text) {  
  if(text.trim().length === 0){ //Test 4 [also works for Test 3] 
    return 0; 
  } 
  let wordCount = 0; //Initializes counter 'wordCount' at 0. 
  const textArray = text.split(" "); //Set-up for Test 2 
  textArray.forEach(function(word) { //Test 2 [also works for Test 1] 
    if(!Number(word)){ //Test 5 [also works for Tests 1 & 2] 
      wordCount++;  
    } 
  }); 
  return wordCount; 
} 

function numberOfOccurrencesInText(word, text) {    // **Lsn 26   
/*
  if (word === text) {  //Test 2  
    return 1;  
  } 
  return 0; //Tests 1 & 3. 
*/
  
  const textArray = text.split(" "); 
  let wordCount = 0; 
  textArray.forEach(function(element) {  //Test 4
    //if (word === element) {
    //if (word.toLowerCase() === element.toLowerCase()) { //Test 5 [also works for Test 4]

    if (element.toLowerCase().includes(word.toLowerCase())) {  //Test 6 [also works for Tests 4-5]  
      wordCount++; 
    }
  }); 
  return wordCount;  //Works for Tests 1-3. 
}  


function curseWordFilter(blacklist, text) {   // **Lsn 27 
  let textRes = []; 
  const textArray = text.split(" "); 
  console.log("Text -- in array form -- before filtering:  " + textArray); 
  console.log("Words that will be filtered/omitted:  " + blacklist); 
  
  blacklist.forEach(function(curse) {
    let badwordCurr = String(blacklist[curse]); 
    textArray.forEach(function(element) {
      if ((element.toLowerCase()).includes(badwordCurr)) {  //If current element does match the/a word in 'blacklist'
        console.log(element); 
        
        /*
        textArray = textRes = textArray[element+1,textArray.length-1];  
        console.log("textArray now contains:  " + textArray);
        console.log("textRes now contains:  " + textRes); 
        */ 

        textArray = skipShift(textArray, textArray.indexOf(element)); 
        console.log("Currently at " + element + "in textArray.  Just filtered out  '" + badwordCurr + "' ");  


      } else {   //Current element isn't a blacklisted word. 
        console.log("Didn't omit anything here!  Pushed the current word -- " + element + " -- to result array, moving onto the next one."); 
      } 

      //console.log("Current 'textArray': " + textArray); 
      console.log("Current 'textArray' (at end of this pass): " + textArray);

    }); 

    //console.log("Current 'textRes' (at end of this iteration): " + textRes); 
    console.log("Current 'textArray' (at end of this iteration): " + textArray);  

  }); 
  
  console.log(textArray); 
  console.log(textRes);
  //return textRes.toString(); 
  return textArray.toString();
} 


function skipShift(arrRef, skipThisInd) {  //Accepts args as follows: 'reference array', 'index to-be-skipped'   
  let newArr = []; //Initialization of array that will contain everything except the 'skipee' index.  
  let currItInd = 0; 
  arrRef.forEach(function(element) { 
    currItInd = arrRef.indexOf(element); 
    if(currItInd === skipThisInd){ 
      return;  //Skip to next element.   **(Calvin reminded me that 'return' with no args does the same as 'continue' would in a while loop.   -SM, 8-17-2022, 12:08pm.)
    }else{
      newArr.push(element); 
    }
  }); 
  console.log(newArr); 

  return newArr; 
}



/*   **Building off of idea from earlier (copy-pasted from above -- starts at line 64, see line 60 and earlier for hopefully-fuller context):  
  //.. 
  //Create a function called 'SkipNShift' that starts at a given (to-be-skipped) array index, and do this to those that come after:  shift each index left by 1. 
  //I'd have pass in an array containing indices that come before the given index, in order to append the modified end-half to it & return the new array...
  //But that would work! 
*/
/*
function skipShift(arrRef, skipThisInd) {  //Accepts args as follows: 'reference array', 'index to-be-skipped'   
  let newArr = []; //Initialization of array that will contain everything except the 'skipee' index.  
  let currItInd = 0; 
  arrRef.forEach(function(element) { 
    currItInd = arrRef.indexOf(element); 
    if(currItInd === skipThisInd){ 
      return;  //Skip to next element.   **(Calvin reminded me that 'return' with no args does the same as 'continue' would in a while loop.   -SM, 8-17-2022, 12:08pm.)
    }else{
      newArr.push(element); 
    }
  }); 
  console.log(newArr); 

  return newArr; 
}
*/



/*
function curseWordFilter(blacklist, text) {   // **Lsn 27 
  let textRes = []; 
  let textArray = text.split(" "); 
  console.log("Text -- in array form -- before filtering:  " + textArray);
  
  console.log("Words that will be filtered:  " + blacklist); 

  blacklist.forEach(function(curse) {
    console.log("Starting weed out of the word  '" + curse + "'."); 
    textArray.forEach(function(element) { 
      if (!(element.toLowerCase().includes(blacklist[curse]))) {  //If current element doesn't match a 'curse' in 'blacklist' 
        console.log("Current word in text: " + element);
        textRes.push(element); 
        console.log("Nothing filtered out yet! "); 
      } else {  //If current element DOES match a 'curse' in 'blacklist'
        let indCurse = textArray.indexOf(element); 
        textRes=textArray.splice(indCurse, indCurse+1); 
        console.log("Filtered out  '" + curse + "'  , which followed from word " + element-1); 
        console.log("Current 'textRes' array: " + textRes.toString()); 
      } 
      textArray=textRes; //Syncs 'textArray' with updated array contents (which is stored in variable 'textRes'). 
    }); 
    console.log("Current 'textRes' array: " + textRes.toString()); 

  }); 

  console.log(textRes); 
  return textRes.toString(); 
} 
*/ 

