const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

const onLoginSubmit = (event) => {
	event.preventDefault();
	console.log(loginInput.value);
	loginForm.classList.add(HIDDEN_CLASSNAME);
	const username = loginInput.value;
	// 백틱 사용
	greeting.innerText = `Hello ${username}`;
	// greeting.innerText = "Hello " + username;
	greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);