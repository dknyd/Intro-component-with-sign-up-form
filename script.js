function activeState(){
	const firstName = document.querySelector(".firstName");
	const lastName = document.querySelector(".lastName");
	const emailAddress = document.querySelector(".emailAddress");
	const password = document.querySelector(".password");
	const body = document.querySelector("body");
	
	const errorContainerFirstName = document.querySelector(".errorContainerFirstName");
	const errorContainerLastName = document.querySelector(".errorContainerLastName");
	const errorContainerEmailAddress = document.querySelector(".errorContainerEmailAddress");
	const errorContainerPassword = document.querySelector(".errorContainerPassword");

	if (window.innerWidth > 1000){

		if (!firstName.value.trim() && errorContainerFirstName.children.length < 2) {
		const newDiv = document.createElement("div");
	    const newImg = document.createElement("IMG");
		const newParagraph = document.createElement("p");
	    errorContainerFirstName.appendChild(newDiv);
		newDiv.appendChild(newImg);
		newDiv.appendChild(newParagraph);
			 errorContainerFirstName.style.height = "8rem"; 
		newImg.src = "images/icon-error.svg";
		newImg.style.width = "2rem";
		newImg.style.height = "2rem";
		newDiv.style.position = "relative";
		newDiv.style.left = "28rem";
		newDiv.style.bottom = "5rem";
		firstName.style.color = "red";
		firstName.style.borderColor = "red";
		newParagraph.innerHTML = "First Name can not be empty";
		newParagraph.style.position = "relative";
		newParagraph.style.right = "13rem";
		newParagraph.style.top = "1rem";
		newParagraph.style.color = "red";
		} 
		
		if (!lastName.value.trim() && errorContainerLastName.children.length < 2) {
		const newDiv = document.createElement("div");
	    const newImg = document.createElement("IMG");
		const newParagraph = document.createElement("p");
	    errorContainerLastName.appendChild(newDiv);
		newDiv.appendChild(newImg);
		newDiv.appendChild(newParagraph);
		errorContainerLastName.style.height = "8rem"; 
		newImg.src = "images/icon-error.svg";
		newImg.style.width = "2rem";
		newImg.style.height = "2rem";
		newDiv.style.position = "relative";
		newDiv.style.left = "28rem";
		newDiv.style.bottom = "5rem";
		lastName.style.color = "red";
		lastName.style.borderColor = "red";
		newParagraph.innerHTML = "Last Name can not be empty";
		newParagraph.style.position = "relative";
		newParagraph.style.right = "13rem";
		newParagraph.style.top = "1rem";
		newParagraph.style.color = "red";
		}
	
		if (!emailAddress.value.trim() && errorContainerEmailAddress.children.length < 2) {
		const newDiv = document.createElement("div");
	    const newImg = document.createElement("IMG");
		const newParagraph = document.createElement("p");
	    errorContainerEmailAddress.appendChild(newDiv);
		newDiv.appendChild(newImg);
		newDiv.appendChild(newParagraph);
		errorContainerEmailAddress.style.height = "8rem"; 
		newImg.src = "images/icon-error.svg";
		newImg.style.width = "2rem";
		newImg.style.height = "2rem";
		newDiv.style.position = "relative";
		newDiv.style.left = "28rem";
		newDiv.style.bottom = "5rem";
		emailAddress.style.color = "red";
		emailAddress.style.borderColor = "red";
		newParagraph.innerHTML = "Email Address can not be empty";
		newParagraph.style.position = "relative";
		newParagraph.style.right = "13rem";
		newParagraph.style.top = "1rem";
		newParagraph.style.color = "red";
		}
		
		if (!password.value.trim() && errorContainerPassword.children.length < 2) {
		const newDiv = document.createElement("div");
	    const newImg = document.createElement("IMG");
		const newParagraph = document.createElement("p");
	    errorContainerPassword.appendChild(newDiv);
		newDiv.appendChild(newImg);
		newDiv.appendChild(newParagraph);
		errorContainerPassword.style.height = "8rem"; 
		newImg.src = "images/icon-error.svg";
		newImg.style.width = "2rem";
		newImg.style.height = "2rem";
		newDiv.style.position = "relative";
		newDiv.style.left = "28rem";
		newDiv.style.bottom = "5rem";
		password.style.color = "red";
		password.style.borderColor = "red";
		newParagraph.innerHTML = "Email Address can not be empty";
		newParagraph.style.position = "relative";
		newParagraph.style.right = "13rem";
		newParagraph.style.top = "1rem";
		newParagraph.style.color = "red";
		}
	} else{
		if (!firstName.value.trim() && errorContainerFirstName.children.length < 2) {
		const newDiv = document.createElement("div");
	    const newImg = document.createElement("IMG");
		const newParagraph = document.createElement("p");
	    errorContainerFirstName.appendChild(newDiv);
		newDiv.appendChild(newImg);
		newDiv.appendChild(newParagraph);
		errorContainerFirstName.style.height = "8rem"; 
		newImg.src = "images/icon-error.svg";
		newImg.style.width = "2rem";
		newImg.style.height = "2rem";
		newDiv.style.position = "relative";
		newDiv.style.left = "18rem";
		newDiv.style.bottom = "4.5rem";
		firstName.style.color = "red";
		firstName.style.borderColor = "red";
		newParagraph.innerHTML = "First Name can not be empty";
		newParagraph.style.position = "relative";
		newParagraph.style.right = "12rem";
		newParagraph.style.top = "0rem";
		newParagraph.style.color = "red";
		} 

		if (!lastName.value.trim() && errorContainerLastName.children.length < 2) {
		const newDiv = document.createElement("div");
	    const newImg = document.createElement("IMG");
		const newParagraph = document.createElement("p");
	    errorContainerLastName.appendChild(newDiv);
		newDiv.appendChild(newImg);
		newDiv.appendChild(newParagraph);
		errorContainerLastName.style.height = "8rem"; 
		newImg.src = "images/icon-error.svg";
		newImg.style.width = "2rem";
		newImg.style.height = "2rem";
		newDiv.style.position = "relative";
		newDiv.style.left = "18rem";
		newDiv.style.bottom = "4.5rem";
		lastName.style.color = "red";
		lastName.style.borderColor = "red";
		newParagraph.innerHTML = "First Name can not be empty";
		newParagraph.style.position = "relative";
		newParagraph.style.right = "12rem";
		newParagraph.style.top = "0rem";
		newParagraph.style.color = "red";
		} 

		if (!emailAddress.value.trim() && errorContainerEmailAddress.children.length < 2) {
		const newDiv = document.createElement("div");
	    const newImg = document.createElement("IMG");
		const newParagraph = document.createElement("p");
	    errorContainerEmailAddress.appendChild(newDiv);
		newDiv.appendChild(newImg);
		newDiv.appendChild(newParagraph);
		errorContainerEmailAddress.style.height = "8rem"; 
		newImg.src = "images/icon-error.svg";
		newImg.style.width = "2rem";
		newImg.style.height = "2rem";
		newDiv.style.position = "relative";
		newDiv.style.left = "18rem";
		newDiv.style.bottom = "4.5rem";
		emailAddress.style.color = "red";
		emailAddress.style.borderColor = "red";
		newParagraph.innerHTML = "First Name can not be empty";
		newParagraph.style.position = "relative";
		newParagraph.style.right = "12rem";
		newParagraph.style.top = "0rem";
		newParagraph.style.color = "red";
		} 

		if (!password.value.trim() && errorContainerPassword.children.length < 2) {
		const newDiv = document.createElement("div");
	    const newImg = document.createElement("IMG");
		const newParagraph = document.createElement("p");
	    errorContainerPassword.appendChild(newDiv);
		newDiv.appendChild(newImg);
		newDiv.appendChild(newParagraph);
		errorContainerPassword.style.height = "8rem"; 
		newImg.src = "images/icon-error.svg";
		newImg.style.width = "2rem";
		newImg.style.height = "2rem";
		newDiv.style.position = "relative";
		newDiv.style.left = "18rem";
		newDiv.style.bottom = "4.5rem";
		password.style.color = "red";
		password.style.borderColor = "red";
		newParagraph.innerHTML = "First Name can not be empty";
		newParagraph.style.position = "relative";
		newParagraph.style.right = "12rem";
		newParagraph.style.top = "0rem";
		newParagraph.style.color = "red";
		} 
	}
	
}
