---
title: KARMA 900/2400 DUAL BAND GEMINI PWM RX V2.1
description: A compact, high-performance receiver designed for stable and
  flexible control across a wide frequency range. Despite its miniature form
  factor, the receiver supports up to 4 antennas, allowing optimized signal
  reception and ensuring reliable connectivity even in challenging RF
  environments.
date: 2026-04-21T10:21:00.000+03:00
category: politni-steky
draft: false
---
<p class="text-center"><strong>A compact, high-performance receiver designed for stable and flexible control across a wide frequency range. Despite its miniature form factor, the receiver supports up to 4 antennas, allowing optimized signal reception and ensuring reliable connectivity even in challenging RF environments.</strong></p>
<h2>KARMA 900/2400 DUAL BAND GEMINI PWM RX V2.1
</h2>

<style>
body{ font-family: Montserrat; font-size:16px; padding-top:10px; padding-bottom:10px; } 
 h3{ font-family: Montserrat; font-size: 24px !important; line-height: 30px; font-weight: bold !important; text-align: center; margin-top: 30px !important;
 } 
table {
   
border-collapse: collapse !important;
font-size:26px !important;


}
table th, table td {
    border: 1px solid black !important;
}
table th, table td {
    padding: 15px !important;
    text-align: left !important;
     height:50px !important;
}
th{
font-weight:bold;
}
ul li {text-align:left !important;}
li::before {  content: "•"; 
color: red;   
display: inline-block;   
width: 2em; 
 margin-left: -1em;}



</style>

<h3>КОРОТКИЙ ОПИС СИЛЬНИХ СТОРІН RX</h3>
<ul>
<li>Наявність  2-х трансиверів з можливістю 
підключення 4х антен різної полярізації для 
роботи одночасно в діапазонах 900/2400MHz.</li>
<li>Наявність 3-x PWM каналів.</li>
<li>Приймач оснащений функцією «E» - enable , 
для забезпечення опції «ждун».</li>
<li>Термостабільний генератор опорної частоти. 
</li>
</ul>
<div class="text-center">
<h3>
ХАРАКТЕРИСТИКИ
</h3>

<table style="width:100%;font-size:22px;font-family: Montserrat;">
<tr><td><strong>ТРАНСИВЕРИ  </strong></td><td><strong>LR1121 </strong></td></tr>
<tr><td><strong>MCU</strong></td><td>ESP32-PICO-D4</td></tr>
<tr><td><strong>Підключення антен </strong></td><td>IPEX1, 2x2.4GHz та 2x900MHz 
</td></tr>
<tr><td><strong>Робочі діапазони </strong></td><td>LB – 150-960МГц <br>
HB – 1900-2500МГц</td></tr>
<tr><td><strong>Потужність телеметрії </strong></td><td>>0,1Вт потужності на канал</td></tr>
<tr><td><strong>Живлення  </strong></td><td>3.6-5.5В 
</td></tr>
<tr><td><strong>Протоколи 
</strong></td><td>Crossfire\ERLS</td></tr>
<tr><td><strong>Габарити</strong></td><td>30\\*19\\*4 мм</td></tr>
</table>
<br>
<br>

<h3>
СХЕМАТИЧНИЙ ОПИС ТА
ПРИЗНАЧЕННЯ ІНТЕРФЕЙСІВ

</h3>

![СХЕМАТИЧНИЙ ОПИС ТА ПРИЗНАЧЕННЯ ІНТЕРФЕЙСІВ](/img/resiver.jpg)

<ul>

<li>Піни «1», «2», «3» на які дублюються основні сигнали керування Roll, Pitch та Yaw, та які можуть бути програмно змінені при використанні відповідної прошивки. </li>

<li>Пін «E» - enable. Використовується у кастомних прошивках та дозволяє керувати дискретним станом зовнішньої переферії, наприклад бортовою системою – польотним контролером, ESC, відеопередавачем, активуючи або деактивуючи цю систему для збереження енергії батареї живлення, що розроблено спеціально для режиму «ждун». Цей вихід «Е» налаштовуються на певний канал керування для активації з пульта оператора. Порт керування даною функцією IO4.   </li>

<li>Кнопка та піни «BUTTON» мають однакове призначення , а саме зміну режимів роботи пристрою користувачем (див. Таблиця індикація та “BIND”). </li>

</ul>

<h3>СХЕМАТИЧНЕ ПІДКЛЮЧЕННЯ ДО V1 ТА V2</h3>

![СХЕМАТИЧНЕ ПІДКЛЮЧЕННЯ ДО V1 ТА V2](/img/rs_shema.jpg)

<div class="flex items-center justify-center flex-col">

<img class="text-center" src="/img/table_resiver.jpg">
</div>
<p>Для зміни режиму роботи RX на WiFi або Bind, необхідно 
підключити живлення, та після проходження самодіагностики 
RX, необхідно затиснути кнопку або замкнути піни “BUTTON” та 
тримати в такому стані поки не зміниться індикація світлодіода 
на відповідний необхідний режим. </p>

<h3>БАЗОВА КОНФІГУРАЦІЯ BF</h3>
<p>Для налаштування приймача в Betaflight необхідно: <br>
1. У вкладці «Порти», обрати відповідний порт ,послідовний 
Rx до якого підключено приймач.</p>
<div class="flex items-center justify-center flex-col">

<img class="text-center" src="/img/rf_konfig-.jpg">
</div>
<p>2. У вкладці «Приймач» обрати режим приймача та    
    постачальника послідовного приймача</p>
<div class="flex items-center justify-center flex-col">

<img class="text-center" src="/img/rf_konfig2.jpg">

</div>
<p><a href="/catalog/karma-f405-v2-flight-stack/">Купити KARMA 900/2400 DUAL BAND GEMINI PWM RX V2.1</a><br></p>
<p><a href="/assets/Karma_F435V1_UA.pdf">Завантажити інструкцію користувача (PDF)</a></p>
</div>
