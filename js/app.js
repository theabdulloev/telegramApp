let cls = document.getElementById("close");
let username = document.querySelector(".username");
let toggle = document.querySelector(".toggle");
let tg = window.Telegram.WebApp;

cls.addEventListener('click', () => {
    tg.close()
})
username.innerHTML = tg.initDataUnsafe?.user?.username;
username.innerHTML += JSON.stringify(tg)

tg.sendData('hello');
tg.showAlert('Привет')

toggle.addEvenListener('click',function(){
   if(tg.MainButton.isVisible){
    tg.MainButton.show()
   }
   else{
    tg.MainButton.hide()
   }
})

