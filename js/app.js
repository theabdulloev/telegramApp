let cls = document.getElementById("close");
let username = document.querySelector(".username")
let tg = window.Telegram.WebApp;

cls.addEventListener('click', () => {
    tg.close()
})
username.innerHTML = tg.initDataUnsafe?.user?.username;