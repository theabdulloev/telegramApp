let cls = document.getElementById("close");

let tg = window.Telegram.WebApp;

cls.addEventListener('click', () => {
    tg.close()
})
