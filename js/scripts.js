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
  let textArray = text.split(" "); 
  console.log("Text -- in array form -- before filtering:  " + textArray);
  
  console.log("Words that will be filtered:  " + blacklist);


  blacklist.forEach(function(curse) {
    console.log("Starting weed out of the word  '" + curse + "'."); 
    textArray.forEach(function(element) { 
      if (!(element.toLowerCase().includes(blacklist[curse]))) {  //If current element matches a 'curse' in 'blacklist' 
        console.log("Current word in text: " + element);
        textRes.push(element); 
        console.log("Nothing filtered out yet! ");
      } else {
        textRes.push(element);
        textRes.splice(textRes.length-1, 1); 
        console.log("Filtered out  '" + curse + "'  , which followed from word " + element-1); 
        console.log("Current 'textRes' array: " + textRes.toString());    
      } 
    }); 
    console.log("Current 'textRes' array: " + textRes.toString()); 

  }); 

  console.log(textRes); 
  return textRes.toString(); 
} 


