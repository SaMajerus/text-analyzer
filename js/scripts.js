/*     Utility Logic     */ 

function isEmpty(testString) {   // **Lsn 31
  return (testString.trim().length === 0);
}







/*     Business Logic     */ 

function wordCounter(text) {  
  if(isEmpty(text)){   //Test 4 [also works for Test 3].    (***Modified w/ Lsn 31) 
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

  if (isEmpty(word)) {   //Test 6  [*Lsn 28]     (***Modified w/ Lsn 31)
    return 0;
  }  

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




/*     UI Logic     */ 

function handleFormSubmission() {   // **Lsn 28 
  event.preventDefault();
  const passage = document.getElementById("text-passage").value;
  const word = document.getElementById("word").value;
  const wordCount = wordCounter(passage);
  const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
  document.getElementById("total-count").innerText = wordCount;
  document.getElementById("selected-count").innerText = occurrencesOfWord; 

  let boldedPassage = boldPassage(word, passage);  
  if (boldedPassage) {
    document.querySelector("div#bolded-passage").append(boldedPassage);
  } else {
    document.querySelector("div#bolded-passage").innerText = null;
  }
}

window.addEventListener("load", function() {
  document.querySelector("form#word-counter").addEventListener("submit", handleFormSubmission);
});


function boldpassage(word, text) {   // **Lsn 30 
  if(isEmpty(word) || isEmpty(text)) {   //Test 1     (***Modified w/ Lsn 31)
    return null; 
  } 

  const p = document.createElement("p"); 
  let textArray = text.split(" ");  //Set-up for Test 4 

  textArray.forEach(function(element, index) {  //Test 4
    if (word === element) {   //[Also works for Test 3]
      const bold = document.createElement("strong"); 
      bold.append(element); 
      p.append(bold); 
    } else {   //[Also works for Test 2]
      p.append(element); 
    } 
    if (index !== (textArray.length - 1)) { 
      p.append(" "); 
    } 
  });
  return p; 
}

