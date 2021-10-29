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
         if (forenameArr[i-1] == "И" && i == forenameArrLength - 1) { 
           forenameArr[i] = "Я"; 
         } else { 
           forenameArr[i] = "А";
         }
       break;
      case "B":
       forenameArr[i] = "Б";
       break;
       case "C":
       if (forenameArr[i-1] == "У" && forenameArr[i+1] == "A") {
         forenameArr[i] = "К";
       } else {
         forenameArr[i] = "Ц";
       }
       break;
       case "CH":
       forenameArr[i] = "Х";
       break;
       case "D":
       forenameArr[i] = "Д";
       break;
       case "E":
       forenameArr[i] = "Е";
       break;
       case "EI":
       forenameArr[i] = "ЕЙ";
       break;
       case "EU":
       forenameArr[i] = "ОЙ";
       break;
       case "F":
       forenameArr[i] = "Ф";
       break;
       case "G":
       forenameArr[i] = "Г";
       break;
       case "H":
       forenameArr[i] = "Г";
       break;
       case "I":
       forenameArr[i] = "И";
       break;
       case "IE":
       forenameArr[i] = "И";
       break;
       case "J":
       forenameArr[i] = "Й";
       break;
       case "JU":
       forenameArr[i] = "Ю";
       break;
       case "JA":
       forenameArr[i] = "Я";
       break;
       case "K":
       forenameArr[i] = "К";
       break;
       case "L":
         if (i == 0) { 
           forenameArr[i] = "Л"; 
         } else { 
           forenameArr[i] = "ЛЬ"; 
         }
       break;
       case "LL":
       forenameArr[i] = "ЛЛ";
       break;
       case "M":
       forenameArr[i] = "М";
       break;
       case "N":
       forenameArr[i] = "Н";
       break;
       case "NN":
       forenameArr[i] = "Н";
       break;
       case "O":
       forenameArr[i] = "О";
       break;
       case "P":
       forenameArr[i] = "П";
       break;
       case "Q":
       forenameArr[i] = "К";
       break;
       case "QU":
       forenameArr[i] = "КВ";
       break;
       case "R":
       forenameArr[i] = "Р";
       break;
       case "S":
       forenameArr[i] = "З";
       break;
       case "SCH":
       forenameArr[i] = "Ш";
       break;
       case "ST":
       forenameArr[i] = "ШТ";
       break;
       case "SP":
       forenameArr[i] = "ШП";
       break;
       case "T":
       forenameArr[i] = "Т";
       break;
       case "U":
       forenameArr[i] = "У";
       break;
       case "V":
       forenameArr[i] = "В";
       break;
       case "W":
       forenameArr[i] = "В";
       break;
       case "X":
       forenameArr[i] = "КС";
       break;
       case "Y":
       forenameArr[i] = "И";
       break;
       case "Z":
       forenameArr[i] = "Ц";
       break;
       case "Ä":
       forenameArr[i] = "Э";
       break;
       case "Ö":
       forenameArr[i] = "Ё";
       break;
       case "Ü":
       forenameArr[i] = "Ю";
       break;
       case "ß":
       forenameArr[i] = "З";
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
       surnameArr[i] = "А";
       break;
      case "B":
       surnameArr[i] = "Б";
       break;
       case "C":
       surnameArr[i] = "Ц";
       break;
       case "D":
       surnameArr[i] = "Д";
       break;
       case "E":
       surnameArr[i] = "Э";
       break;
       case "F":
       surnameArr[i] = "Ф";
       break;
       case "G":
       surnameArr[i] = "Г";
       break;
       case "H":
       surnameArr[i] = "Х";
       break;
       case "I":
       surnameArr[i] = "И";
       break;
       case "J":
       surnameArr[i] = "Й";
       break;
       case "K":
       surnameArr[i] = "К";
       break;
       case "L":
       surnameArr[i] = "ЛЬ";
       break;
       case "M":
       surnameArr[i] = "М";
       break;
       case "N":
       surnameArr[i] = "Н";
       break;
       case "O":
       surnameArr[i] = "О";
       break;
       case "P":
       surnameArr[i] = "П";
       break;
       case "Q":
       surnameArr[i] = "К";
       break;
       case "R":
       surnameArr[i] = "Р";
       break;
       case "S":
       surnameArr[i] = "С";
       break;
       case "T":
       surnameArr[i] = "Т";
       break;
       case "U":
       surnameArr[i] = "У";
       break;
       case "V":
       surnameArr[i] = "В";
       break;
       case "W":
       surnameArr[i] = "В";
       break;
       case "X":
       surnameArr[i] = "КС";
       break;
       case "Y":
       surnameArr[i] = "И";
       break;
       case "Z":
       surnameArr[i] = "Ц";
       break;
       case "Ä":
       surnameArr[i] = "Э";
       break;
       case "Ö":
       surnameArr[i] = "Ё";
       break;
       case "Ü":
       surnameArr[i] = "Ю";
       break;
       case "ß":
       surnameArr[i] = "З";
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