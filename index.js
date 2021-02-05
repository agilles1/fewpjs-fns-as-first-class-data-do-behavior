/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(time){
  const hour = time.split(":")[0]
  const hourI = parseInt(hour)
  if (hourI < 12) {
    greeting = "Good Morning"
  } else if (hourI >= 12 && hourI <= 17) {
    greeting = "Good Afternoon"
  } else {
    greeting = "Good Evening"
  }
  return greeting
}

function displayMessage(string){
  greeting = document.getElementById("greeting")
  greeting.innerHTML = string
}