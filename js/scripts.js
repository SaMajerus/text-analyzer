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

/*
function curseWordFilter(blacklist, text) {   // **Lsn 27 
  const textArray = text.split(" "); 
  const cursesArray = blacklist.split(" ");
  textArray.forEach(function(element){
    if (element.toLowerCase().includes(cursesArray.toLowerCase())) {  //If current element matches the/a word in 'cursesArray'
      textArray[element] = textArray[element].value - cursesArray[element].value; 
    }
  }); 
  return textArray;  
} 
*/ 
function curseWordFilter(blacklist, text) {   // **Lsn 27 
  //const textArray = text.split(" "); 
  //const cursesArray = blacklist.split(" ");
  console.log("Text -- in array form -- before filtering:  " + textArray);
  return text; 
} 