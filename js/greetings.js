// 요소들
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// 중복으로 사용되는 string 변수로 저장
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// submit 기능
const onLoginSubmit = (event) => {
	event.preventDefault();
	console.log(loginInput.value);
	loginForm.classList.add(HIDDEN_CLASSNAME);
	const username = loginInput.value;
	localStorage.setItem(USERNAME_KEY, username);
	paintGreetings(username);
}

// greeting 값 넣고 none 값 없애기
function paintGreetings(username) {
	// 백틱 사용
	greeting.innerText = `Hello ${username}`;
	greeting.classList.remove(HIDDEN_CLASSNAME);
}

// 로컬스토리지 값을 들고옴
const savedUsername = localStorage.getItem(USERNAME_KEY);

// 로컬스토리지 값이 없다면 사용자에게 입력값을 받고 없으면 greeting 출력
if (savedUsername === null) {
	// show the form
	loginForm.classList.remove(HIDDEN_CLASSNAME);
	loginForm.addEventListener("submit", onLoginSubmit);
} else {
	// show the greetings
	paintGreetings(savedUsername);
}