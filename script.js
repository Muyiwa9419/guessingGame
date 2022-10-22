<script>
  var enterButto = document.getElementById("enterButton");
  var againButton = document.getElementById("againButton");
  var output = document.getElementById("outputTest");
  var randomNumber = Math.ceil(Math.random()*3);
  function checkNumber(){
            var input = document.getElementById("userInput").value;
  if(input == randomNumber){
    output.innerHTML = "Great! Correct " + ", " + " it was " + randomNumber;
  output.style.color="green";
            }
            else if(input>randomNumber && input<3){
    output.innerHTML = "oops! You were wrong"
  }
  else if(input<randomNumber && input>1){
    output.innerHTML = "oops! you a wrong again"
  }
  else if(input<1){
    output.innerHTML = "It has to be between 1 and 3";
            }
  else if(isNaN(input)){
    output.innerHTML = "That's not a number!";
            }
  else{
    output.innerHTML = "It has to be between 1 and 3";
            }
        }
  enterButton.addEventListener("click", checkNumber);
  againButton.addEventListener("click", function(){

  })
</script>