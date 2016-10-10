
document.querySelector("#inject-html button").addEventListener('click',function(){
  // TASK #1
  var answerBoxEl = document.querySelector('#inject-html .answer-box')
  answerBoxEl.innerHTML = "<h2>this is a pain in the butt</h2>"

})

document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2
  var answerPTagWithValue = document.querySelector('#compoundInvestment').innerText
  var nonStringNumber = parseInt(answerPTagWithValue)
  console.log(nonStringNumber)
   document.querySelector('#compoundInvestment').innerText = nonStringNumber * 2

})
 // TASK #3  toggling isnt fun...
document.querySelector("#color-circle button").addEventListener('click',function(){

  var circleBw = document.querySelector(".exercise-container #circle-bw")
  var circleColor = circleBw.style

  if(circleBw.background !== "#000"){
      circleBw.style.background = "#000"
  }
  else {
      document.querySelector(".exercise-container #circle-bw").style.background = "#FFF"
   }

})
// TASK #4
document.querySelector("#blow-up button").addEventListener('click', function() {
    // document.querySelector("div .circle-red").style.background = "blue"
    var redCircleEl = document.querySelector(".circle-red")
    var redCircleElStyles = window.getComputedStyle(redCircleEl)
    var widthNumString = redCircleElStyles.width.slice(0, -2)
    var heightNumString = redCircleElStyles.height.slice(0, -2)
    var widthNum = parseInt(widthNumString)
    var heightNum = parseInt(heightNumString)

    if (widthNum <= 320 && heightNum <= 320) {

        document.querySelector(".circle-red").style.width = widthNum * 2 + "px"
        document.querySelector(".circle-red").style.height = heightNum * 2 + "px"
    } else {
        document.querySelector(".circle-red").style.width = "40px"
        document.querySelector(".circle-red").style.height = "40px"
    }
})

// TASK #5
document.querySelector("#remove button").addEventListener('click',function(){

})
// TASK #6
document.querySelector("#reverse-squares button").addEventListener('click',function(){
  ////////////
})
// TASK #7 hit later today
document.querySelector("#pig-latin button").addEventListener('click',function(){
  var listOfRegStrings = document.querySelector("ul#tasks")
  var stringsFromListItterated = listOfRegStrings[i]
  console.log(stringsFromListItterated)
  var backwardsSTRINGS = []
  for (var i = stringsFromListItterated.length - 1; i >= 0; i--){
     backwardsSTRINGS.push(stringsFromListItterated[i])
 }
})

document.querySelector("#cycle-image button").addEventListener('click',function(){
   //TASK #8
})
