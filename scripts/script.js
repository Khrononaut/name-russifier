const russifyBtn = document.querySelector("#russify-btn");
russifyBtn.onclick = russifyName;

function russifyName() {
    let forename = document.querySelector("#forename").value;
    let surname = document.querySelector("#surname").value;
    
    // transcribe forname
    forename = forename.toUpperCase();
    let forenameArr = forename.split("");
    let forenameArrLength = forenameArr.length;
   
    for (let i = 0; i < forenameArrLength; i++) {
      
      if (forenameArr[i] === "C" && forenameArr[i+1] === "H") {
        forenameArr[i] = "CH";
        forenameArr.splice(i+1, 1);
      }
   
      if (forenameArr[i] === "E" && forenameArr[i+1] === "I") {
        forenameArr[i] = "EI";
        forenameArr.splice(i+1, 1);
      }
   
      if (forenameArr[i] === "E" && forenameArr[i+1] === "U") {
        forenameArr[i] = "EU";
        forenameArr.splice(i+1, 1);
      }
   
      if (forenameArr[i] === "I" && forenameArr[i+1] === "E") {
        forenameArr[i] = "IE";
        forenameArr.splice(i+1, 1);
      }
   
      if (forenameArr[i] === "J" && forenameArr[i+1] === "U") {
        forenameArr[i] = "JU";
        forenameArr.splice(i+1, 1);
      }
   
      if (forenameArr[i] === "J" && forenameArr[i+1] === "A") {
        forenameArr[i] = "JA";
        forenameArr.splice(i+1, 1);
      }
   
      if (forenameArr[i] === "L" && forenameArr[i+1] === "L") {
        forenameArr[i] = "LL";
        forenameArr.splice(i+1, 1);
      }
   
      if (forenameArr[i] === "Q" && forenameArr[i+1] === "U") {
        forenameArr[i] = "QU";
        forenameArr.splice(i+1, 1);
      }
   
      if (forenameArr[i] === "N" && forenameArr[i+1] === "N") {
        forenameArr[i] = "NN";
        forenameArr.splice(i+1, 1);
      }
   
      if (forenameArr[i] === "S" && forenameArr[i+1] === "C" && forenameArr[i+2] === "H") {
        forenameArr[i] = "SCH";
        forenameArr.splice(i+1, 2);
      }
   
      if (forenameArr[i] === "S" && forenameArr[i+1] === "T") {
        forenameArr[i] = "ST";
        forenameArr.splice(i+1, 1);
      }
      
      if (forenameArr[i] === "S" && forenameArr[i+1] === "P") {
        forenameArr[i] = "SP";
        forenameArr.splice(i+1, 1);
      }
   
      if (forenameArr[i] === "T" && forenameArr[i+1] === "H") {
        forenameArr[i] = "T";
        forenameArr.splice(i+1, 1);
      }
    }
    
    for (let i = 0; i < forenameArrLength; i++) {
     switch (forenameArr[i]) {
      case "A":
         if (forenameArr[i-1] == "??" && i == forenameArrLength - 1) { 
           forenameArr[i] = "??"; 
         } else { 
           forenameArr[i] = "??";
         }
       break;
      case "B":
       forenameArr[i] = "??";
       break;
       case "C":
       if (forenameArr[i-1] == "??" && forenameArr[i+1] == "A") {
         forenameArr[i] = "??";
       } else {
         forenameArr[i] = "??";
       }
       break;
       case "CH":
       forenameArr[i] = "??";
       break;
       case "D":
       forenameArr[i] = "??";
       break;
       case "E":
       forenameArr[i] = "??";
       break;
       case "EI":
       forenameArr[i] = "????";
       break;
       case "EU":
       forenameArr[i] = "????";
       break;
       case "F":
       forenameArr[i] = "??";
       break;
       case "G":
       forenameArr[i] = "??";
       break;
       case "H":
       forenameArr[i] = "??";
       break;
       case "I":
       forenameArr[i] = "??";
       break;
       case "IE":
       forenameArr[i] = "??";
       break;
       case "J":
       forenameArr[i] = "??";
       break;
       case "JU":
       forenameArr[i] = "??";
       break;
       case "JA":
       forenameArr[i] = "??";
       break;
       case "K":
       forenameArr[i] = "??";
       break;
       case "L":
         if (i == 0) { 
           forenameArr[i] = "??"; 
         } else { 
           forenameArr[i] = "????"; 
         }
       break;
       case "LL":
       forenameArr[i] = "????";
       break;
       case "M":
       forenameArr[i] = "??";
       break;
       case "N":
       forenameArr[i] = "??";
       break;
       case "NN":
       forenameArr[i] = "??";
       break;
       case "O":
       forenameArr[i] = "??";
       break;
       case "P":
       forenameArr[i] = "??";
       break;
       case "Q":
       forenameArr[i] = "??";
       break;
       case "QU":
       forenameArr[i] = "????";
       break;
       case "R":
       forenameArr[i] = "??";
       break;
       case "S":
       forenameArr[i] = "??";
       break;
       case "SCH":
       forenameArr[i] = "??";
       break;
       case "ST":
       forenameArr[i] = "????";
       break;
       case "SP":
       forenameArr[i] = "????";
       break;
       case "T":
       forenameArr[i] = "??";
       break;
       case "U":
       forenameArr[i] = "??";
       break;
       case "V":
       forenameArr[i] = "??";
       break;
       case "W":
       forenameArr[i] = "??";
       break;
       case "X":
       forenameArr[i] = "????";
       break;
       case "Y":
       forenameArr[i] = "??";
       break;
       case "Z":
       forenameArr[i] = "??";
       break;
       case "??":
       forenameArr[i] = "??";
       break;
       case "??":
       forenameArr[i] = "??";
       break;
       case "??":
       forenameArr[i] = "??";
       break;
       case "??":
       forenameArr[i] = "??";
       break;
     }
    }
     let newRussianForename = forenameArr.toString();
     newRussianForename = newRussianForename.toLowerCase();
     newRussianForename = newRussianForename.charAt(0).toUpperCase() + newRussianForename.slice(1);
     for (let i = 1; i < forenameArrLength; i++) {
       newRussianForename = newRussianForename.replace(",","");
     }
   
    //transcribe surname
    let surnameArr = surname.split("");
    let surnameArrLength = surnameArr.length;
    
    for (let i = 0; i < surnameArrLength; i++) {
     switch (surnameArr[i]) {
      case "A":
       surnameArr[i] = "??";
       break;
      case "B":
       surnameArr[i] = "??";
       break;
       case "C":
       surnameArr[i] = "??";
       break;
       case "D":
       surnameArr[i] = "??";
       break;
       case "E":
       surnameArr[i] = "??";
       break;
       case "F":
       surnameArr[i] = "??";
       break;
       case "G":
       surnameArr[i] = "??";
       break;
       case "H":
       surnameArr[i] = "??";
       break;
       case "I":
       surnameArr[i] = "??";
       break;
       case "J":
       surnameArr[i] = "??";
       break;
       case "K":
       surnameArr[i] = "??";
       break;
       case "L":
       surnameArr[i] = "????";
       break;
       case "M":
       surnameArr[i] = "??";
       break;
       case "N":
       surnameArr[i] = "??";
       break;
       case "O":
       surnameArr[i] = "??";
       break;
       case "P":
       surnameArr[i] = "??";
       break;
       case "Q":
       surnameArr[i] = "??";
       break;
       case "R":
       surnameArr[i] = "??";
       break;
       case "S":
       surnameArr[i] = "??";
       break;
       case "T":
       surnameArr[i] = "??";
       break;
       case "U":
       surnameArr[i] = "??";
       break;
       case "V":
       surnameArr[i] = "??";
       break;
       case "W":
       surnameArr[i] = "??";
       break;
       case "X":
       surnameArr[i] = "????";
       break;
       case "Y":
       surnameArr[i] = "??";
       break;
       case "Z":
       surnameArr[i] = "??";
       break;
       case "??":
       surnameArr[i] = "??";
       break;
       case "??":
       surnameArr[i] = "??";
       break;
       case "??":
       surnameArr[i] = "??";
       break;
       case "??":
       surnameArr[i] = "??";
       break;
     }
    }
   
     let newRussianSurname = surnameArr.toString();
     for (let i = 1; i < surnameArrLength; i++) {
       newRussianSurname = newRussianSurname.replace(",","");
     }
   
    //concatenate forename with surname
     let newRussianName = newRussianForename + " " + newRussianSurname;
   
    //implement name into HTML element
     document.querySelector("#result").innerHTML = newRussianName;
    
}