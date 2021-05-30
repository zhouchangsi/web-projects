const display = document.getElementById("display")

const key_num = document.getElementsByClassName("key_num")

var displayNum = ""
for (var i = 0; i < key_num.length; i++) {
  key_num[i].addEventListener("click", function () {
    displayNum += this.innerText
    display.innerText = displayNum
  })
}

const key_operator = document.getElementsByClassName("key_operator")
for(var i = 0; i < key_operator.length; i++) {
	key_operator[i].addEventListener("click", function() {
		displayNum += this.innerText
		display.innerText = displayNum
	})
}

const key_clear = document.getElementById("key_clear")
key_clear.addEventListener("click", function() {
	display.innerText = ""
	displayNum = ""
})
