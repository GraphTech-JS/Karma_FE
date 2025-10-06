---
title: Інструкція на політний стек KARMA F405 V1
slug: null
description: |-
  Польотний стек, розроблений з метою удосконалення,
  де це можливо, від надійних і ефективних технічних
  рішень до покращеної ергономіки складання.
  KARMA F405V1 перший крок у пошуках досконалості.
date: 2025-10-05T21:20:00.000+03:00
category: flight-stacks
tags:
  - manual
image: /img/steki-instructio.jpg
draft: false
---
<p class="text-center"><strong>Польотний стек, розроблений з метою удосконалення,
де це можливо, від надійних і ефективних технічних
рішень до покращеної ергономіки складання.
KARMA F405V1 перший крок у пошуках досконалості.</strong></p>
<h2>ХАРАКТЕРИСТИКИ</h2>

<style>
body{ font-family: Montserrat; font-size:16px; padding-top:10px; padding-bottom:10px; } 
 h3{ font-family: Montserrat; font-size: 18px; line-height: 18px; font-weight: bold !important; text-align: center; margin-top: 30px !important;
 } 
table {
   
border-collapse: collapse !important;
font-size:30px !important;



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

</style>

<div class="text-center">
<h3>
КОНТРОЛЕР ПОЛЬОТУ

</h3>

<table style="width:100%">
<tr><td><strong>MCU</strong></td><td>STM32F405</td></tr>
<tr><td><strong>IMU</strong></td><td>ICM-42688-P</td></tr>
<tr><td><strong>Барометр</strong></td><td>BMP280</td></tr>
<tr><td><strong>BEC</strong></td><td>5V 4A</td></tr>
<tr><td><strong>Кріплення</strong></td><td>30.5 х 30.5</td></tr>
<tr><td><strong>Розміри</strong></td><td>48.5 х 40</td></tr>
<tr><td><strong>CamSwitch</strong></td><td>так</td></tr>
<tr><td><strong>Blackbox</strong></td><td>MicroSD</td></tr>
<tr><td><strong>LC-фільтр<br>
живлення камер</strong>
</td><td>так</td></tr>
<tr><td><strong>LC-фільтр<br>
живлення VTX</strong></td><td>так</td></tr>
<tr><td><strong>Дозволений
струм від батареї</strong></td><td>2.4А</td></tr>
</table>

![контролер польоту](/img/kontroler_polotu.png "політний контролер")

<br>
<br>

<h3>
РЕГУЛЯТОР ОБЕРТІВ

</h3>
<table style="width:100%">
<tr><td><strong>Живлення</strong></td><td>4s-6s</td></tr>
<tr><td><strong>Струм</strong></td><td>150A</td></tr>
<tr><td><strong>MCU</strong></td><td>72Mhz 32Bit</td></tr>
<tr><td><strong>Прошивка</strong></td><td>AM32</td></tr>
<tr><td><strong>Кріплення</strong></td><td>30.5 х 30.5</td></tr>

</table>

![регулятор обертів КАРМА](/img/regulator_obertiv.png "регулятор обертів Карма")


<br>
<br>
<h3>РОЗМІРИ ПОЛІТНИХ СТЕКІВ</h3>



![розміри політних стеків](/img/rozmiri.jpg "розміри польотників")


<h3>ПІДКЛЮЧЕННЯ ПЕРИФЕРІЇ</h3>


![Підключення периферії](/img/pidkluchennia_stekiv.jpg "Підключення периферії")


<h3>ЕЛЕМЕНТИ</h3>




![Елементи політних стеків](/img/photo_2025-10-06_09-45-03.jpg "Елементи політників")


<h3>ІНДИКАЦІЯ</h3>



![індикація політних стеків](/img/indikacia.jpg)


<h3>ДІАГРАМА ПІДКЛЮЧЕННЯ</h3>



![Діаграма підключення](/img/diagrama_pidkluchennya.jpg "діаграма підключення політних стеків")

<p>
 <strong>ВІДОМІ НЕДОЛІКИ</strong>
</p>


<p>

Користувацькі сигнальні лінії не споряджені 
струмообмежувальними опорами. У разі замикання лінії під час 
монтажу з подальшим увімкненням пристрою, можливий вихід з 
ладу мікро-контролера на платі FC. Необхідна додаткова увага з 
контролю якості пайки. Виправлення заплановане у версії v1.1

</p>


<h3>КОМПЛЕКТАЦІЯ ПОЛІТНИХ СТЕКІВ KARMA FLIGHTS</h3>


![Комплектація політних стеків](/img/komplektacii.jpg "Комплектація політників")




<table style="width:100%">
<tr><td><img width="35" height="35" src="/img/list-guide-one.png" alt="" style="filter:none;box-shadow:none">&nbsp;
&nbsp;<strong>Контролер польоту</strong></td><td>
1 шт.</td></tr>
<tr><td><img width="35" height="35" src="/img/list-guide-two.png" alt="" style="filter:none;box-shadow:none">&nbsp;
&nbsp;<strong> Регулятор обертів</strong></td><td>
1 шт.</td></tr>
<tr><td><img width="35" height="35" src="/img/list-guide-three.png" alt="" style="filter:none;box-shadow:none">&nbsp;
&nbsp;<strong>Конденсатор 1500uF 50V</strong></td><td>
2 шт.</td></tr>
<tr><td><img width="35" height="35" src="/img/list-guide-four.png" alt="" style="filter:none;box-shadow:none">&nbsp;
&nbsp;<strong> Роз’єм XT60
</strong></td><td>
1 шт.</td></tr>
<tr><td><img width="35" height="35" src="/img/list-guide-five.png" alt="" style="filter:none;box-shadow:none">&nbsp;
&nbsp;<strong>Проводи живлення 12AWG 10см</strong></td><td>
2 шт.</td></tr>
<tr><td><img width="35" height="35" src="/img/list-guide-six.png" alt="" style="filter:none;box-shadow:none">&nbsp;
&nbsp;<strong Провід сигнальний FC<>ESC (JST SH 8p)</strong></td><td>
1 шт.</td></tr>
<tr><td><img width="35" height="35" src="/img/list-guide-seven.png" alt="" style="filter:none;box-shadow:none">&nbsp;
&nbsp;<strong> Провід надлишкового живлення FC<>ESC (JST SH 4p)
</strong></td><td>
1 шт.</td></tr>
<tr><td><img width="35" height="35" src="/img/list-guide-eight.png" alt="" style="filter:none;box-shadow:none">&nbsp;
&nbsp;<strong> Силіконові поглиначі вібрації
</strong></td><td>
8 шт.</td></tr>
<tr><td><img width="35" height="35" src="/img/list-guide-nine.png" alt="" style="filter:none;box-shadow:none">&nbsp;
&nbsp;<strong> Гайка
</strong></td><td>
4 шт.</td></tr>
<tr><td><img width="35" height="35" src="/img/list-guide-ten.png" alt="" style="filter:none;box-shadow:none">&nbsp;
&nbsp;<strong> Гвинт
</strong></td><td>
4 шт.</td></tr>

</table>






</div>
