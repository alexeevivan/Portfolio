(()=>{"use strict";const e=JSON.parse('{"главная":"Главная","галерея":"Галерея","фотоотчеты":"Фотоотчеты","ресторан":"Ресторан","faq":"FAQ","контакты":"Контакты","en":"en","en__inner":"en","контактный_номер":"Контактный номер","ежедневно":"Ежедневно","наш_адрес":"Наш адрес","немига_5":"ул. Немига,5","мы_в_сети":"Мы в сети","правила_караоке":"Правила караоке Jel\'sa","вокал_индастрит":"ООО «Вокал Индастрит»","политика_конфиденциальности":"Политика Конфиденциальности"}'),n=JSON.parse('{"главная":"main","галерея":"gallery","фотоотчеты":"album","ресторан":"restaurant","faq":"FAQ","контакты":"contacts","en":"ru","en__inner":"ru","контактный_номер":"contact number","ежедневно":"Everyday","наш_адрес":"our address","немига_5":"5, Nemiga street","мы_в_сети":"We\'re in a social media","правила_караоке":"Jel\'sa karaoke rules","вокал_индастрит":"«Vokal Indastreet» LLC","политика_конфиденциальности":"Privacy Policy"}');function t(e){localStorage.setItem("selectedLanguage",e)}function a(t){const a="en"===t?n:e;document.getElementById("gallery-link").innerText=a.галерея,document.getElementById("photo-reports-link").innerText=a.фотоотчеты,document.getElementById("restaurant-link").innerText=a.ресторан,document.getElementById("faq-link").innerText=a.faq,document.getElementById("contacts-link").innerText=a.контакты,document.getElementById("langSwap__inner").innerText=a.en,document.getElementById("langSwap-mobile__inner").innerText=a.en__inner,document.getElementById("m-gallery-link").innerText=a.галерея,document.getElementById("m-photo-reports-link").innerText=a.фотоотчеты,document.getElementById("m-restaurant-link").innerText=a.ресторан,document.getElementById("m-faq-link").innerText=a.faq,document.getElementById("m-contacts-link").innerText=a.контакты,document.getElementById("contact-number").innerText=a.контактный_номер,document.getElementById("schedule").innerText=a.ежедневно,document.getElementById("our-address").innerText=a.наш_адрес,document.getElementById("address").innerText=a.немига_5,document.getElementById("online").innerText=a.мы_в_сети,document.getElementById("karaoke-rules").innerText=a.правила_караоке,document.getElementById("company_name").innerText=a.вокал_индастрит,document.getElementById("privacy-policy").innerText=a.политика_конфиденциальности}const r=document.getElementById("langSwap");r.addEventListener("click",(()=>{const e="ru"===r.dataset.language?"en":"ru";t(e),r.dataset.language=e,a(e)}));const l=document.getElementById("langSwap-mobile");l.addEventListener("click",(()=>{const e="ru"===l.dataset.language?"en":"ru";t(e),l.dataset.language=e,a(e)}));a(localStorage.getItem("selectedLanguage")||"ru")})();