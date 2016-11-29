
document.querySelector("#inject-html button").addEventListener('click',function(){
  // TASK #1
  var answerBoxEl = document.querySelector('#inject-html .answer-box')
  answerBoxEl.innerHTML = "<h2>this is a pain in the butt</h2>"

})

// TASK #2
document.querySelector("#double button").addEventListener('click',function(){
  var answerPTagWithValue = document.querySelector('#compoundInvestment').innerText
  var nonStringNumber = parseInt(answerPTagWithValue)
  //console.log(nonStringNumber)
   document.querySelector('#compoundInvestment').innerText = nonStringNumber * 2
})

 // TASK #3
var counter = 0;
document.querySelector("#color-circle button").addEventListener('click',function(){

 //console.log(counter)
   var circleBw = document.querySelector(".exercise-container #circle-bw")
   var circleColor = circleBw.style

   if(counter === 0){
      circleBw.style.background = "#000";
       counter++;
   }
   else if(counter === 1){
      circleBw.style.background = "#FFF";
      counter--;
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
   // console.log(widthNum)
    var heightNum = parseInt(heightNumString)
    if (widthNum < 320 && heightNum < 320) {

        document.querySelector(".circle-red").style.width = widthNum * 2 + "px"
        document.querySelector(".circle-red").style.height = heightNum * 2 + "px"
    } else {
        document.querySelector(".circle-red").style.width = "40px"
        document.querySelector(".circle-red").style.height = "40px"
    }
})

// TASK #5
var userList = document.querySelector('#user-list')
document.querySelector("#remove button").addEventListener('click',function(){
   var allElements = document.querySelectorAll('#user-list li')
   for(var i = 0; i< allElements.length; i++){
      var thisNextStep = allElements[i]
      if(thisNextStep.classList.contains('active') !== true){
         userList.removeChild(thisNextStep)
      }
   }

})

// TASK #6    ...90 % ish
document.querySelector("#reverse-squares button").addEventListener('click', function() {
    var accessableBoxParent = document.querySelector("#reverse-squares .answer-box")

    var accessableBoxList = document.querySelectorAll("#reverse-squares .answer-box span")
    console.log(accessableBoxList)
    for (var i = accessableBoxList.length - 1; i >= 0; i--) {
        accessableBoxParent.removeChild(accessableBoxList[i])
        accessableBoxParent.appendChild(accessableBoxList[i])
    } /// remove and append child
})

// TASK #7
document.querySelector("#pig-latin button").addEventListener('click',function(){
   let problemToSolve = document.querySelectorAll('#tasks li')
   for (var i = 0; i < problemToSolve.length; i++){
      let disArrCrnt = problemToSolve[i].innerHTML
      let newString = ''
      for (var a = disArrCrnt.length -1; a >= 0; a = a -1){
         newString = newString + disArrCrnt[a]
      }
      problemToSolve[i].innerHTML = newString
   }



})

document.querySelector("#cycle-image button").addEventListener('click',function(){
   //TASK #8
})
