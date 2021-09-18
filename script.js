var billAmt = document.querySelector("#billAmt");
var cashGiven = document.querySelector("#cashGiven");
var changeBtn = document.querySelector("#changeBtn");
var nextBtn = document.querySelector("#nextBtn");
var inputCash = document.querySelector(".inputCash")
var noOfNote = document.querySelectorAll(".noOfNote");
var notes = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
var numberOfNotes = [0,0,0,0,0,0,0,0,0,0];


changeBtn.addEventListener('click', function calculateChange(){
  var cashDifference = cashGiven.value - billAmt.value;
  if(cashDifference < 0){
    alert("Kuch laj sharam karo");
    return;
  }
  calculateNotes(cashDifference);
});

nextBtn.addEventListener('click', function showNextInput(){
  inputCash.style.display = "flex";
});

function calculateNotes(cash){
  var i = 0;
  for(note of notes){
    if(cash/note >= 1){
      numberOfNotes[i] = Math.floor(cash/note);
      cash = cash%note;
      console.log(numberOfNotes[i])
    }
    noOfNote[i].innerHTML = numberOfNotes[i];
    i++;
  }
  return numberOfNotes;
}
