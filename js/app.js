let cls = document.getElementById("close");
let username = document.querySelector(".username");
let btn = document.querySelector("btn");
let tg = window.Telegram.WebApp;
tg.expand();
cls.addEventListener('click', () => {
    tg.close()
})
username.innerHTML = tg.initDataUnsafe?.user?.username;
username.innerHTML += JSON.stringify(tg)






btn.addEventListener('click',function(){
    tg.MainButton.show()
})
