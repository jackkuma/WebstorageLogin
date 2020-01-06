window.addEventListener('load', () => {
  inputSpan.style.display = 'none';
  if (typeof(Storage)=='undefined'){
    alert('使用的瀏覽器不支援Web Storage T^T');
} else {
  if (localStorage.userName) {
    if (!sessionStorage.counter) {
      sessionStorage.counter = 1;
    } else {
      sessionStorage.counter++;
    }
    btnLogin.style.display = 'none';
    showLocalStorage.innerHTML = localStorage.userName + '您好，這是您第' + sessionStorage.counter + '次來到本畫面';
  }
  btnLogin.addEventListener('click', login);
  btnSend.addEventListener('click', sendOk);
  btnLogout.addEventListener('click', clearStorage);
}
})

function sendOk() {
  localStorage.userName = myName.value;
  location.reload();
}

function login() {
  inputSpan.style.display = '';
}

function clearStorage() {
  localStorage.clear();
  sessionStorage.clear();
  showLocalStorage.innerHTML = '您已成功登出!!';
  btnLogin.style.display = '';
  inputSpan.style.display = '';
}