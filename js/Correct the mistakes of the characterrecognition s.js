// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

// =====================================================================================================

function correct(string) {
  let regexS = /5/gi;
  let changeLetterS = string.replace(regexS, "S");

  let regexI = /1/gi;
  let changeLetterI = changeLetterS.replace(regexI, "I");

  let regexO = /0/gi;
  let changeLetterO = changeLetterI.replace(regexO, "O");

  console.log(changeLetterO);

  return changeLetterO;
}

correct("L0ND0N");
correct("DUBL1N");
correct("51NGAP0RE");
correct("BUDAPE5T");
correct("PAR15");
