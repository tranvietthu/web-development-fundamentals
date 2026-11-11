function init(){
	var html_btn = document.getElementById("btn");
	html_btn.onclick = convert_button_click;

	var h2 = document.getElementById("click_h2");
	h2.onclick = h2_click; 

}

function h2_click(){
	var h2_content = document.getElementById("h2_content");
	h2_content.textContent = "you clicked h2!!!"

}


function print_conversion(usd, vnd){
	var html_message = document.getElementById("message");
	html_message.textContent = "You enter: " + usd + "USD, this is converted to VND: " + vnd + "k";
}


function convert_button_click(){
	var usd = prompt("enter USD: ");
	var vnd = usd*23;
	// var html_message = document.getElementById('message')
	// html_message.textContent = "You enter: " + usd + "(USD), VND: " + vnd
	print_conversion(usd, vnd)
}

window.onload = init;
