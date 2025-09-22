---
title: Політний стек KARMA F405 V1. Інструкція користувача
description: >-
  Компактна та продуктивна інтегрована система для дронів з мікроконтролером
  STM32F405.


  Він забезпечує стабільний політ, точне керування та ефективне розподілення потужності до моторів.
date: 2025-09-18T16:58:00.000+03:00
category: Політні стеки
tags: []
image: /img/product-details-v2.png
draft: false
---
<style>
body{
font-family: Montserrat;
font-size:16px;
padding-top:10px;
padding-bottom:10px;
}
.article ol {
    list-style-type: none;
    counter-reset: num;
    margin: 0 0 0 45px;
    padding: 15px 0 5px 0;
    font-size: 16px;
}
.article ol li {
    position: relative;
    margin: 0 0 0 0;
    padding: 0 0 10px 0;
    line-height: 1.8;
}
.article ol li:before {
    content: counter(num);
    counter-increment: num;
    display: inline-block;
    position: absolute;
    top: 0;
    left: -38px;
    width: 28px;
    height: 28px;
    background: #fff;
    color: #000;
    text-align: center;
    line-height: 28px;
    font-size: 18px;
    border-radius: 50%;
    border: 1px solid #ba0108;
}
.article h1{
font-family:Unbounded;
font-size: 36px;
line-height: 30px;
padding-top:10px; 
padding-bottom:10px;
}
.article h2{
font-family: Montserrat;
border-bottom:1px solid #ba0108;
font-size: 24px;
text-align: left;
margin-top: 30px;
}
.article h3{
font-family: Montserrat;
    font-size: 18px;
    line-height: 18px;
    font-weight: bold;
    padding-top: 10px;
text-align: center;
margin-top: 30px;
}
</style>

<ol>

<li>Номер 1</li>

<li>Номер 2</li>

<li>Номер 3</li>

<li>Номер 4</li>
<li>Номер 5</li>
</ol>

<div class="article">

<h1>Політний стек KARMA F405 V1. Інструкція користувача. </h1>
<p class="text-[15px] md:text-[16px] font-[Montserrat]" style="padding-top:10px; padding-bottom:10px;">Польотний стек, розроблений з метою удосконалення,
де це можливо, від надійних і ефективних технічних
рішень до покращеної ергономіки складання.
KARMA F405V1 перший крок у пошуках досконалості.
</p>
<h2>ХАРАКТЕРИСТИКА</h2>
<h3>КОНТРОЛЕР ПОЛЬОТУ</h3>
<table class="w-full h-\\\\\\\\[588px] border-separate border-spacing-0 border border-black rounded-\\\\\\\\[5px] overflow-hidden" role="table" aria-label="Технічні характеристики KARMA F405 V1 - основні параметри"><caption class="sr-only">Основні технічні характеристики політного стеку KARMA F405 V1</caption><tbody><tr><td class="font-[Inter] text-[20px] font-medium text-[#020303] h-[51px] px-[19px] lg:px-[34px] border-r border-black border-b border-black">MCU</td><td class="font-[Montserrat] text-[20px] text-[#020303] h-[51px] px-[19px] lg:px-[34px] border-b border-black">STM32F405</td></tr><tr><td class="font-[Inter] text-[20px] font-medium text-[#020303] h-[51px] px-[19px] lg:px-[34px] border-r border-black border-b border-black w-[clamp(200px,20vw,255px)]">IMU</td><td class="font-[Montserrat] text-[20px] text-[#020303] h-[51px] px-[19px] lg:px-[34px] w-[clamp(200px,20vw,255px)] border-b border-black">ICM-42688-P</td></tr><tr><td class="font-[Inter] text-[20px] font-medium text-[#020303] h-[51px] px-[19px] lg:px-[34px] border-r border-black border-b border-black w-[clamp(200px,20vw,255px)]">Барометр</td><td class="font-[Montserrat] text-[20px] text-[#020303] h-[51px] px-[19px] lg:px-[34px] w-[clamp(200px,20vw,255px)] border-b border-black">BMP280</td></tr><tr><td class="font-[Inter] text-[20px] font-medium text-[#020303] h-[51px] px-[19px] lg:px-[34px] border-r border-black border-b border-black w-[clamp(200px,20vw,255px)]">BEC </td><td class="font-[Montserrat] text-[20px] text-[#020303] h-[51px] px-[19px] lg:px-[34px] w-[clamp(200px,20vw,255px)] border-b border-black">5V 4A</td></tr><tr><td class="font-[Inter] text-[20px] font-medium text-[#020303] h-[51px] px-[19px] lg:px-[34px] border-r border-black border-b border-black w-[clamp(200px,20vw,255px)]">Кріплення</td><td class="font-[Montserrat] text-[20px] text-[#020303] h-[51px] px-[19px] lg:px-[34px] w-[clamp(200px,20vw,255px)] border-b border-black">30.5 х 30.5</td></tr><tr><td class="font-[Inter] text-[20px] font-medium text-[#020303] h-[51px] px-[19px] lg:px-[34px] border-r border-black border-b border-black w-[clamp(200px,20vw,255px)]">Розміри</td><td class="font-[Montserrat] text-[20px] text-[#020303] h-[51px] px-[19px] lg:px-[34px] w-[clamp(200px,20vw,255px)] border-b border-black">48.5 х 40</td></tr><tr><td class="font-[Inter] text-[20px] font-medium text-[#020303] h-[51px] px-[34px] border-r border-black border-b border-black w-[clamp(200px,20vw,255px)]">CamSwitch</td><td class="font-[Montserrat] text-[20px] text-[#020303] h-[51px] px-[19px] lg:px-[34px] w-[clamp(200px,20vw,255px)] border-b border-black">так</td></tr><tr><td class="font-[Inter] text-[20px] font-medium text-[#020303] h-[51px] px-[19px] lg:px-[34px] border-r border-black border-b border-black w-[clamp(200px,20vw,255px)]">Blackbox</td><td class="font-[Montserrat] text-[20px] text-[#020303] h-[51px] px-[19px] lg:px-[34px] w-[clamp(200px,20vw,255px)] border-b border-black">MicroSD</td></tr>
<tr><td class="font-[Inter] text-[20px] font-medium text-[#020303] h-[51px] px-[34px] border-r border-black border-b border-black w-[clamp(200px,20vw,255px)]">LC-фільтр
живлення камер</td><td class="font-[Montserrat] text-[20px] text-[#020303] h-[51px] px-[19px] lg:px-[34px] w-[clamp(200px,20vw,255px)] border-b border-black">так</td></tr><tr><td class="font-[Inter] text-[20px] font-medium text-[#020303] h-[51px] px-[19px] lg:px-[34px] border-r border-black border-b border-black w-[clamp(200px,20vw,255px)]">Blackbox</td><td class="font-[Montserrat] text-[20px] text-[#020303] h-[51px] px-[19px] lg:px-[34px] w-[clamp(200px,20vw,255px)] border-b border-black">так</td></tr>
<tr><td class="font-[Inter] text-[20px] font-medium text-[#020303] h-[51px] px-[34px] border-r border-black border-b border-black w-[clamp(200px,20vw,255px)]">LC-фільтр
живлення VTX</td><td class="font-[Montserrat] text-[20px] text-[#020303] h-[51px] px-[19px] lg:px-[34px] w-[clamp(200px,20vw,255px)] border-b border-black">так</td></tr>
<tr><td class="font-[Montserrat] text-[20px] font-medium text-[#020303] h-[51px] px-[19px] lg:px-[34px] border-r border-black w-[clamp(200px,20vw,255px)]">Дозволений струм від батареї</td><td class="font-[Montserrat] text-[20px] text-[#020303] h-[51px] px-[19px] lg:px-[34px] w-[clamp(200px,20vw,255px)]">2.4 A</td></tr></tbody></table>
<h3>РЕГУЛЯТОР ОБЕРТІВ</h3>
<table class="max-w-\\\\\\\\\[500px] md:max-w-\\\\\\\\\[410px] w-full border-separate border-spacing-0 border border-black rounded-\\\\\\\\\[5px] overflow-hidden" role="table" aria-label="Технічні характеристики KARMA F405 V1 - живлення та кріплення"><caption class="sr-only">Параметри живлення та кріплення політного стеку KARMA F405 V1</caption><tbody><tr><td class="font-[Unbounded] text-[16px] text-[#020303] h-[44px] pl-[30px] py-[8px] border-r border-black border-b border-black w-[clamp(120px,35vw,175px)] text-start md:text-center">Живлення</td><td class="font-[Montserrat] text-[16px] text-[#020303] h-[44px] pl-[30px] py-[8px] border-b border-black w-[clamp(120px,35vw,175px)] text-start md:text-center">4s-6s</td></tr><tr><td class="font-[Unbounded] text-[16px] text-[#020303] h-[44px] pl-[30px] py-[8px] border-r border-black border-b border-black w-[clamp(120px,35vw,175px)] text-start md:text-center">Струм</td><td class="font-[Montserrat] text-[16px] text-[#020303] h-[44px] pl-[30px] py-[8px] border-b border-black w-[clamp(120px,35vw,175px)] text-start md:text-center">4x50A</td></tr><tr><td class="font-[Unbounded] text-[16px] text-[#020303] h-[44px] pl-[30px] py-[8px] border-r border-black border-b border-black w-[clamp(120px,35vw,175px)] text-start md:text-center">MCU</td><td class="font-[Montserrat] text-[16px] text-[#020303] h-[44px] pl-[30px] py-[8px] border-b border-black w-[clamp(120px,35vw,175px)] text-start md:text-center">72Mhz 32Bit</td></tr><tr><td class="font-[Unbounded] text-[16px] text-[#020303] h-[44px] pl-[30px] py-[8px] border-r border-black border-b border-black w-[clamp(120px,35vw,175px)] text-start md:text-center">Прошивка</td><td class="font-[Montserrat] text-[16px] text-[#020303] h-[44px] pl-[30px] py-[8px] border-b border-black w-[clamp(120px,35vw,175px)] text-start md:text-center">AM32</td></tr><tr><td class="font-[Unbounded] text-[16px] text-[#020303] h-[44px] pl-[30px] py-[8px] border-r border-black w-[clamp(120px,35vw,175px)] text-start md:text-center">Кріплення</td><td class="font-[Montserrat] text-[16px] text-[#020303] h-[44px] pl-[30px] py-[8px] w-[clamp(120px,35vw,175px)] text-start md:text-center">30.5 x 30.5</td></tr></tbody></table>

<h3>РОЗМІРИ</h3>

![розміри  політних стеків](/img/karma-f405-v1_2.jpg)

<h2>КОМПЛЕКТАЦІЯ ПОЛІТНИХ СТЕКІВ</h2>

![Комплектація](/img/komplektacia.jpg)

<table class="max-w-\\\\\\\\\[500px] md:max-w-\\\\\\\\\[410px] w-full border-separate border-spacing-0 border border-black rounded-\\\\\\\\\[5px] overflow-hidden" role="table" aria-label="Технічні характеристики KARMA F405 V1 - живлення та кріплення"><caption class="sr-only">Параметри живлення та кріплення політного стеку KARMA F405 V1</caption><tbody><tr><td class="font-[Unbounded] text-[16px] text-[#020303] h-[44px] pl-[30px] py-[8px] border-r border-black border-b border-black w-[clamp(120px,35vw,175px)] text-start md:text-center">

<img width="35" height="35" src="/img/list-guide-one.png" alt="" style="filter: none; box-shadow: none; float:left;lime-height:1.8;" />
&nbsp;&nbsp;Контролер польоту

</td><td class="font-[Montserrat] text-[16px] text-[#020303] h-[44px] pl-[30px] py-[8px] border-b border-black w-[clamp(120px,35vw,175px)] text-start md:text-center">
1 шт.
</td></tr>
<tr><td class="font-[Unbounded] text-[16px] text-[#020303] h-[44px] pl-[30px] py-[8px] border-r border-black border-b border-black w-[clamp(120px,35vw,175px)] text-start md:text-center">
<img width="35" height="35" src="/img/list-guide-two.png" alt="" style="filter: none; box-shadow: none; float:left;lime-height:1.8;" />
&nbsp;&nbsp;
Регулятор обертів</td>
<td class="font-[Montserrat] text-[16px] text-[#020303] h-[44px] pl-[30px] py-[8px] border-b border-black w-[clamp(120px,35vw,175px)] text-start md:text-center">1 шт.</td></tr>
<tr><td class="font-[Unbounded] text-[16px] text-[#020303] h-[44px] pl-[30px] py-[8px] border-r border-black border-b border-black w-[clamp(120px,35vw,175px)] text-start md:text-center">
<img width="35" height="35" src="/img/list-guide-three.png" alt="" style="filter: none; box-shadow: none; float:left;lime-height:1.8;" />
&nbsp;&nbsp;Конденсатор 1500uF 35V</td>
<td class="font-[Montserrat] text-[16px] text-[#020303] h-[44px] pl-[30px] py-[8px] border-b border-black w-[clamp(120px,35vw,175px)] text-start md:text-center">2 шт.</td></tr>
<tr><td class="font-[Unbounded] text-[16px] text-[#020303] h-[44px] pl-[30px] py-[8px] border-r border-black border-b border-black w-[clamp(120px,35vw,175px)] text-start md:text-center">
<img width="35" height="35" src="/img/list-guide-four.png" alt="" style="filter: none; box-shadow: none; float:left;lime-height:1.8;"/>
&nbsp;&nbsp;Роз’єм XT60</td>
<td class="font-[Montserrat] text-[16px] text-[#020303] h-[44px] pl-[30px] py-[8px] border-b border-black w-[clamp(120px,35vw,175px)] text-start md:text-center">1 шт.</td></tr>
<tr><td class="font-[Unbounded] text-[16px] text-[#020303] h-[44px] pl-[30px] py-[8px] border-r border-black border-b border-black w-[clamp(120px,35vw,175px)] text-start md:text-center">
<img width="35" height="35" src="/img/list-guide-five.png" alt="" style="filter: none; box-shadow: none; float:left;lime-height:1.8;" />
&nbsp;&nbsp;Проводи живлення 12AWG 10см</td>
<td class="font-[Montserrat] text-[16px] text-[#020303] h-[44px] pl-[30px] py-[8px] border-b border-black w-[clamp(120px,35vw,175px)] text-start md:text-center">2 шт.</td></tr>

<tr><td class="font-[Unbounded] text-[16px] text-[#020303] h-[44px] pl-[30px] py-[8px] border-r border-black border-b border-black w-[clamp(120px,35vw,175px)] text-start md:text-center">
<img width="35" height="35" src="/img/list-guide-six.png" alt="" style="filter: none; box-shadow: none; float:left;lime-height:1.8;" />
&nbsp;&nbsp;Провід сигнальний FC<>ESC (JST SH 8p)</td>
<td class="font-[Montserrat] text-[16px] text-[#020303] h-[44px] pl-[30px] py-[8px] border-b border-black w-[clamp(120px,35vw,175px)] text-start md:text-center">1 шт.</td></tr>
<tr><td class="font-[Unbounded] text-[16px] text-[#020303] h-[44px] pl-[30px] py-[8px] border-r border-black border-b border-black w-[clamp(120px,35vw,175px)] text-start md:text-center">
<img width="35" height="35" src="/img/list-guide-seven.png" alt="" style="filter: none; box-shadow: none; float:left;lime-height:1.8;" />
&nbsp;&nbsp;Провід надлишкового живлення FC<>ESC (JST SH 4p)</td>
<td class="font-[Montserrat] text-[16px] text-[#020303] h-[44px] pl-[30px] py-[8px] border-b border-black w-[clamp(120px,35vw,175px)] text-start md:text-center">1 шт.</td></tr>
<tr><td class="font-[Unbounded] text-[16px] text-[#020303] h-[44px] pl-[30px] py-[8px] border-r border-black border-b border-black w-[clamp(120px,35vw,175px)] text-start md:text-center">
<img width="35" height="35" src="/img/list-guide-eight.png" alt="" style="filter: none; box-shadow: none; float:left;lime-height:1.8;" />
&nbsp;&nbsp;Силіконові поглиначі вібрації</td>
<td class="font-[Montserrat] text-[16px] text-[#020303] h-[44px] pl-[30px] py-[8px] border-b border-black w-[clamp(120px,35vw,175px)] text-start md:text-center">8 шт.</td></tr>
<tr><td class="font-[Unbounded] text-[16px] text-[#020303] h-[44px] pl-[30px] py-[8px] border-r border-black border-b border-black w-[clamp(120px,35vw,175px)] text-start md:text-center">
<img width="35" height="35" src="/img/list-guide-nine.png" alt="" style="filter: none; box-shadow: none; float:left;lime-height:1.8;" />
&nbsp;&nbsp;Гайка</td>
<td class="font-[Montserrat] text-[16px] text-[#020303] h-[44px] pl-[30px] py-[8px] border-b border-black w-[clamp(120px,35vw,175px)] text-start md:text-center">4 шт.</td></tr>
<tr><td class="font-[Unbounded] text-[16px] text-[#020303] h-[44px] pl-[30px] py-[8px] border-r border-black border-b border-black w-[clamp(120px,35vw,175px)] text-start md:text-center">
<img width="35" height="35" src="/img/list-guide-ten.png" alt="" style="filter: none; box-shadow: none; float:left;lime-height:1.8;" />
&nbsp;&nbsp;Гвинт</td>
<td class="font-[Montserrat] text-[16px] text-[#020303] h-[44px] pl-[30px] py-[8px] border-b border-black w-[clamp(120px,35vw,175px)] text-start md:text-center">4 шт.</td></tr>
</tbody></table>
</div>

![]()

![]()
