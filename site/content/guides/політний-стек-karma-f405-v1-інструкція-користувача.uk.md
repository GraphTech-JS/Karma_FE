---
title: Політний стек KARMA FLIGHTS. Інструкції користувача.
description: >-
  Компактна та продуктивна інтегрована система для дронів з мікроконтролером
  STM32F405.


  Він забезпечує стабільний політ, точне керування та ефективне розподілення потужності до моторів.
date: 2025-09-18T16:58:00.000+03:00
category: Політні стеки
tags: []
image: /img/product-details-v2.png
draft: false
slug: KARMA F405 V1 Flight Stack. User Manual
---
<style> 

body{ font-family: Montserrat; font-size:16px; padding-top:10px; padding-bottom:10px; } .article ol { list-style-type: none; counter-reset: num; margin: 0 0 0 45px; padding: 15px 0 5px 0; font-size: 16px; } .article ol li { position: relative; margin: 0 0 0 0; padding: 0 0 10px 0; line-height: 1.9; } .article ol li:before { content: counter(num); counter-increment: num; display: inline-block; position: absolute; top: -8px; left: -38px; width: 28px; height: 28px; background: #fff; color: #000; text-align: center; line-height: 28px; font-size: 18px; border-radius: 50%; border: 1px solid #ba0108; } .article h1{ font-family:Unbounded; font-size: 32px !important; line-height: 32px; padding-top:10px; padding-bottom:10px; } 

.article h2{ font-family: Montserrat; border-bottom:1px solid #ba0108; font-size: 24px; text-align: left; margin-top: 35px !important;
 font-weight: bold !important; 

 } 

.article h3{ font-family: Montserrat; font-size: 18px; line-height: 18px; font-weight: bold !important; text-align: center; margin-top: 30px; } 

</style>

<ol>

<li>Номер 1</li>

<li>Номер 2</li>

<li>Номер 3</li>

<li>Номер 4</li>
<li>Номер 5</li>
</ol>

<div class="article">
<p class="text-[15px] md:text-[16px] font-[Montserrat]" style="padding-top:10px; padding-bottom:10px;">Польотний стек, розроблений з метою удосконалення,
де це можливо, від надійних і ефективних технічних
рішень до покращеної ергономіки складання.
KARMA F405V1 перший крок у пошуках досконалості.
</p>
<h2>ХАРАКТЕРИСТИКА</h2>
<h3>КОНТРОЛЕР ПОЛЬОТУ</h3>
<table class="w-full h-\\\\\\\\\\[588px] border-separate border-spacing-0 border border-black rounded-\\\\\\\\\\[5px] overflow-hidden" role="table" aria-label="Технічні характеристики KARMA F405 V1 - основні параметри"><caption class="sr-only">Основні технічні характеристики політного стеку KARMA F405 V1</caption><tbody><tr><td class="font-[Inter] text-[20px] font-medium text-[#020303] h-[51px] px-[19px] lg:px-[34px] border-r border-black border-b border-black">MCU</td><td class="font-[Montserrat] text-[20px] text-[#020303] h-[51px] px-[19px] lg:px-[34px] border-b border-black">STM32F405</td></tr><tr><td class="font-[Inter] text-[20px] font-medium text-[#020303] h-[51px] px-[19px] lg:px-[34px] border-r border-black border-b border-black w-[clamp(200px,20vw,255px)]">IMU</td><td class="font-[Montserrat] text-[20px] text-[#020303] h-[51px] px-[19px] lg:px-[34px] w-[clamp(200px,20vw,255px)] border-b border-black">ICM-42688-P</td></tr><tr><td class="font-[Inter] text-[20px] font-medium text-[#020303] h-[51px] px-[19px] lg:px-[34px] border-r border-black border-b border-black w-[clamp(200px,20vw,255px)]">Барометр</td><td class="font-[Montserrat] text-[20px] text-[#020303] h-[51px] px-[19px] lg:px-[34px] w-[clamp(200px,20vw,255px)] border-b border-black">BMP280</td></tr><tr><td class="font-[Inter] text-[20px] font-medium text-[#020303] h-[51px] px-[19px] lg:px-[34px] border-r border-black border-b border-black w-[clamp(200px,20vw,255px)]">BEC </td><td class="font-[Montserrat] text-[20px] text-[#020303] h-[51px] px-[19px] lg:px-[34px] w-[clamp(200px,20vw,255px)] border-b border-black">5V 4A</td></tr><tr><td class="font-[Inter] text-[20px] font-medium text-[#020303] h-[51px] px-[19px] lg:px-[34px] border-r border-black border-b border-black w-[clamp(200px,20vw,255px)]">Кріплення</td><td class="font-[Montserrat] text-[20px] text-[#020303] h-[51px] px-[19px] lg:px-[34px] w-[clamp(200px,20vw,255px)] border-b border-black">30.5 х 30.5</td></tr><tr><td class="font-[Inter] text-[20px] font-medium text-[#020303] h-[51px] px-[19px] lg:px-[34px] border-r border-black border-b border-black w-[clamp(200px,20vw,255px)]">Розміри</td><td class="font-[Montserrat] text-[20px] text-[#020303] h-[51px] px-[19px] lg:px-[34px] w-[clamp(200px,20vw,255px)] border-b border-black">48.5 х 40</td></tr><tr><td class="font-[Inter] text-[20px] font-medium text-[#020303] h-[51px] px-[34px] border-r border-black border-b border-black w-[clamp(200px,20vw,255px)]">CamSwitch</td><td class="font-[Montserrat] text-[20px] text-[#020303] h-[51px] px-[19px] lg:px-[34px] w-[clamp(200px,20vw,255px)] border-b border-black">так</td></tr><tr><td class="font-[Inter] text-[20px] font-medium text-[#020303] h-[51px] px-[19px] lg:px-[34px] border-r border-black border-b border-black w-[clamp(200px,20vw,255px)]">Blackbox</td><td class="font-[Montserrat] text-[20px] text-[#020303] h-[51px] px-[19px] lg:px-[34px] w-[clamp(200px,20vw,255px)] border-b border-black">MicroSD</td></tr>
<tr><td class="font-[Inter] text-[20px] font-medium text-[#020303] h-[51px] px-[34px] border-r border-black border-b border-black w-[clamp(200px,20vw,255px)]">LC-фільтр
живлення камер</td><td class="font-[Montserrat] text-[20px] text-[#020303] h-[51px] px-[19px] lg:px-[34px] w-[clamp(200px,20vw,255px)] border-b border-black">так</td></tr><tr><td class="font-[Inter] text-[20px] font-medium text-[#020303] h-[51px] px-[19px] lg:px-[34px] border-r border-black border-b border-black w-[clamp(200px,20vw,255px)]">Blackbox</td><td class="font-[Montserrat] text-[20px] text-[#020303] h-[51px] px-[19px] lg:px-[34px] w-[clamp(200px,20vw,255px)] border-b border-black">так</td></tr>
<tr><td class="font-[Inter] text-[20px] font-medium text-[#020303] h-[51px] px-[34px] border-r border-black border-b border-black w-[clamp(200px,20vw,255px)]">LC-фільтр
живлення VTX</td><td class="font-[Montserrat] text-[20px] text-[#020303] h-[51px] px-[19px] lg:px-[34px] w-[clamp(200px,20vw,255px)] border-b border-black">так</td></tr>
<tr><td class="font-[Montserrat] text-[20px] font-medium text-[#020303] h-[51px] px-[19px] lg:px-[34px] border-r border-black w-[clamp(200px,20vw,255px)]">Дозволений струм від батареї</td><td class="font-[Montserrat] text-[20px] text-[#020303] h-[51px] px-[19px] lg:px-[34px] w-[clamp(200px,20vw,255px)]">2.4 A</td></tr></tbody></table>
<h3>РЕГУЛЯТОР ОБЕРТІВ</h3>
<table class="max-w-\\\\\\\\\\\[500px] md:max-w-\\\\\\\\\\\[410px] w-full border-separate border-spacing-0 border border-black rounded-\\\\\\\\\\\[5px] overflow-hidden" role="table" aria-label="Технічні характеристики KARMA F405 V1 - живлення та кріплення"><caption class="sr-only">Параметри живлення та кріплення політного стеку KARMA F405 V1</caption><tbody><tr><td class="font-[Unbounded] text-[16px] text-[#020303] h-[44px] pl-[30px] py-[8px] border-r border-black border-b border-black w-[clamp(120px,35vw,175px)] text-start md:text-center">Живлення</td><td class="font-[Montserrat] text-[16px] text-[#020303] h-[44px] pl-[30px] py-[8px] border-b border-black w-[clamp(120px,35vw,175px)] text-start md:text-center">4s-6s</td></tr><tr><td class="font-[Unbounded] text-[16px] text-[#020303] h-[44px] pl-[30px] py-[8px] border-r border-black border-b border-black w-[clamp(120px,35vw,175px)] text-start md:text-center">Струм</td><td class="font-[Montserrat] text-[16px] text-[#020303] h-[44px] pl-[30px] py-[8px] border-b border-black w-[clamp(120px,35vw,175px)] text-start md:text-center">4x50A</td></tr><tr><td class="font-[Unbounded] text-[16px] text-[#020303] h-[44px] pl-[30px] py-[8px] border-r border-black border-b border-black w-[clamp(120px,35vw,175px)] text-start md:text-center">MCU</td><td class="font-[Montserrat] text-[16px] text-[#020303] h-[44px] pl-[30px] py-[8px] border-b border-black w-[clamp(120px,35vw,175px)] text-start md:text-center">72Mhz 32Bit</td></tr><tr><td class="font-[Unbounded] text-[16px] text-[#020303] h-[44px] pl-[30px] py-[8px] border-r border-black border-b border-black w-[clamp(120px,35vw,175px)] text-start md:text-center">Прошивка</td><td class="font-[Montserrat] text-[16px] text-[#020303] h-[44px] pl-[30px] py-[8px] border-b border-black w-[clamp(120px,35vw,175px)] text-start md:text-center">AM32</td></tr><tr><td class="font-[Unbounded] text-[16px] text-[#020303] h-[44px] pl-[30px] py-[8px] border-r border-black w-[clamp(120px,35vw,175px)] text-start md:text-center">Кріплення</td><td class="font-[Montserrat] text-[16px] text-[#020303] h-[44px] pl-[30px] py-[8px] w-[clamp(120px,35vw,175px)] text-start md:text-center">30.5 x 30.5</td></tr></tbody></table>

<h3>РОЗМІРИ</h3>

![розміри  політних стеків](/img/karma-f405-v1_2.jpg)

<h2>КОМПЛЕКТАЦІЯ ПОЛІТНИХ СТЕКІВ</h2>


<table class="max-w-\\\\\\\\\\\[500px] md:max-w-\\\\\\\\\\\[410px] w-full border-separate border-spacing-0 border border-black rounded-\\\\\\\\\\\[5px] overflow-hidden" role="table" aria-label="Технічні характеристики KARMA F405 V1 - живлення та кріплення"><caption class="sr-only">Параметри живлення та кріплення політного стеку KARMA F405 V1</caption><tbody><tr><td class="font-[Unbounded] text-[16px] text-[#020303] h-[44px] pl-[30px] py-[8px] border-r border-black border-b border-black w-[clamp(120px,35vw,175px)] text-start md:text-left">

<img width="35" height="35" src="/img/list-guide-one.png" alt="" style="filter: none; box-shadow: none; float:left;line-height:1.8;" />
&nbsp;&nbsp;Контролер польоту
</td><td class="font-[Montserrat] text-[16px] text-[#020303] h-[44px] pl-[30px] py-[8px] border-b border-black w-[clamp(120px,35vw,175px)] text-start md:text-center">
1 шт.
</td></tr>
<tr><td class="font-[Unbounded] text-[16px] text-[#020303] h-[44px] pl-[30px] py-[8px] border-r border-black border-b border-black w-[clamp(120px,35vw,175px)] text-start md:text
md:text-left">
<img width="35" height="35" src="/img/list-guide-two.png" alt="" style="filter: none; box-shadow: none; float:left;line-height:1.8;" />
&nbsp;&nbsp;
Регулятор обертів</td>
<td class="font-[Montserrat] text-[16px] text-[#020303] h-[44px] pl-[30px] py-[8px] border-b border-black w-[clamp(120px,35vw,175px)] text-start md:text-center">1 шт.</td></tr>
<tr><td class="font-[Unbounded] text-[16px] text-[#020303] h-[44px] pl-[30px] py-[8px] border-r border-black border-b border-black w-[clamp(120px,35vw,175px)] text-start md:text-left">
<img width="35" height="35" src="/img/list-guide-three.png" alt="" style="filter: none; box-shadow: none; float:left;line-height:1.8;" />
&nbsp;&nbsp;Конденсатор 1500uF 35V</td>
<td class="font-[Montserrat] text-[16px] text-[#020303] h-[44px] pl-[30px] py-[8px] border-b border-black w-[clamp(120px,35vw,175px)] text-start md:text-center">2 шт.</td></tr>
<tr><td class="font-[Unbounded] text-[16px] text-[#020303] h-[44px] pl-[30px] py-[8px] border-r border-black border-b border-black w-[clamp(120px,35vw,175px)] text-start md:text-left">
<img width="35" height="35" src="/img/list-guide-four.png" alt="" style="filter: none; box-shadow: none; float:left;line-height:1.8;"/>
&nbsp;&nbsp;Роз’єм XT60</td>
<td class="font-[Montserrat] text-[16px] text-[#020303] h-[44px] pl-[30px] py-[8px] border-b border-black w-[clamp(120px,35vw,175px)] text-start md:text-center">1 шт.</td></tr>
<tr><td class="font-[Unbounded] text-[16px] text-[#020303] h-[44px] pl-[30px] py-[8px] border-r border-black border-b border-black w-[clamp(120px,35vw,175px)] text-start md:text-left">
<img width="35" height="35" src="/img/list-guide-five.png" alt="" style="filter: none; box-shadow: none; float:left;line-height:1.8;" />
&nbsp;&nbsp;Проводи живлення 12AWG 10см</td>
<td class="font-[Montserrat] text-[16px] text-[#020303] h-[44px] pl-[30px] py-[8px] border-b border-black w-[clamp(120px,35vw,175px)] text-start md:text-center">2 шт.</td></tr>
<tr><td class="font-[Unbounded] text-[16px] text-[#020303] h-[44px] pl-[30px] py-[8px] border-r border-black border-b border-black w-[clamp(120px,35vw,175px)] text-start md:text-left">
<img width="35" height="35" src="/img/list-guide-six.png" alt="" style="filter: none; box-shadow: none; float:left;line-height:1.8;" />
&nbsp;&nbsp;Провід сигнальний FC<>ESC (JST SH 8p)</td>
<td class="font-[Montserrat] text-[16px] text-[#020303] h-[44px] pl-[30px] py-[8px] border-b border-black w-[clamp(120px,35vw,175px)] text-start md:text-center">1 шт.</td></tr>
<tr><td class="font-[Unbounded] text-[16px] text-[#020303] h-[44px] pl-[30px] py-[8px] border-r border-black border-b border-black w-[clamp(120px,35vw,175px)] text-start md:text-left">
<img width="35" height="35" src="/img/list-guide-seven.png" alt="" style="filter: none; box-shadow: none; float:left;line-height:1.8;" />
&nbsp;&nbsp;Провід надлишкового живлення FC<>ESC (JST SH 4p)</td>
<td class="font-[Montserrat] text-[16px] text-[#020303] h-[44px] pl-[30px] py-[8px] border-b border-black w-[clamp(120px,35vw,175px)] text-start md:text-center">1 шт.</td></tr>
<tr><td class="font-[Unbounded] text-[16px] text-[#020303] h-[44px] pl-[30px] py-[8px] border-r border-black border-b border-black w-[clamp(120px,35vw,175px)] text-start md:text-left">
<img width="35" height="35" src="/img/list-guide-eight.png" alt="" style="filter: none; box-shadow: none; float:left;line-height:1.8;" />
&nbsp;&nbsp;Силіконові поглиначі вібрації</td>
<td class="font-[Montserrat] text-[16px] text-[#020303] h-[44px] pl-[30px] py-[8px] border-b border-black w-[clamp(120px,35vw,175px)] text-start md:text-center">8 шт.</td></tr>
<tr><td class="font-[Unbounded] text-[16px] text-[#020303] h-[44px] pl-[30px] py-[8px] border-r border-black border-b border-black w-[clamp(120px,35vw,175px)] text-start md:text-left">
<img width="35" height="35" src="/img/list-guide-nine.png" alt="" style="filter: none; box-shadow: none; float:left;line-height:1.8;" />
&nbsp;&nbsp;Гайка</td>
<td class="font-[Montserrat] text-[16px] text-[#020303] h-[44px] pl-[30px] py-[8px] border-b border-black w-[clamp(120px,35vw,175px)] text-start md:text-center">4 шт.</td></tr>
<tr><td class="font-[Unbounded] text-[16px] text-[#020303] h-[44px] pl-[30px] py-[8px] border-r border-black border-b border-black w-[clamp(120px,35vw,175px)] text-start md:text-left">
<img width="35" height="35" src="/img/list-guide-ten.png" alt="" style="filter: none; box-shadow: none; float:left;line-height:1.8;" />
&nbsp;&nbsp;Гвинт</td>
<td class="font-[Montserrat] text-[16px] text-[#020303] h-[44px] pl-[30px] py-[8px] border-b border-black w-[clamp(120px,35vw,175px)] text-start md:text-center">4 шт.</td></tr>
</tbody></table>
</div>
</div>
<div class="text-center"><button class="readmore__toggle"  type="button"  aria-expanded="false" aria-controls="rm-1">Читати далі</button></div>
<div class="readmore__fade" aria-hidden="true"></div>
</div> </article>
<article class="post"> <h2>Політний стек KARMA F405 V1.1. Інструкція користувача. </h2>
<div class="readmore" data-collapsed-height="140"> 
<div class="readmore__content" id="rm-1" aria-hidden="true"> 
<div class="article">
 <p>Удосконалений політний стек. Ще потужніший, ще витриваліший.</p>
 <p>
KARMA F405V1.1 - другий крок у пошуках досконалості.
</p>
 </div>
<div class="text-center"><button class="readmore__toggle"  type="button"  aria-expanded="false" aria-controls="rm-1">Читати далі</button></div>
<div class="readmore__fade" aria-hidden="true"></div>
</div> 
</article>
<script>
;(function(){
  const components = document.querySelectorAll('.readmore');
  components.forEach((root, idx) => { 
    const content = root.querySelector('.readmore__content'); 
    const btn = root.querySelector('.readmore__toggle'); 
    const fade = root.querySelector('.readmore__fade'); 
    const collapsed = Math.max( 
      0, 
      parseInt(root.getAttribute('data-collapsed-height') || '160', 10) 
    ); 
    // Ініціалізація згорнутого стану 
    content.style.maxHeight = collapsed + 'px'; 
    content.setAttribute('aria-hidden', 'true'); 
    btn.setAttribute('aria-expanded', 'false'); 
    const labelOpen = 'Читати далі'; 
    const labelClose = 'Згорнути'; 
    btn.textContent = labelOpen; 
    let isAnimating = false; 
    let expanded = false; 
    const open = () => { 
      if (isAnimating || expanded) return; 
      isAnimating = true; 
      root.classList.add('is-expanded'); 
      // Початок: з поточного (collapsed px) до фактичної висоти контенту 
      const startHeight = content.offsetHeight; 
      content.style.maxHeight = startHeight + 'px'; // фіксуємо, щоб плавно перейти 
      // У наступному кадрі виставимо кінцеве значення 
      requestAnimationFrame(() => { 
        const target = content.scrollHeight; 
        content.style.maxHeight = target + 'px'; 
      }); 
      const onEnd = (e) => { 
        if (e.propertyName !== 'max-height') return; 
        content.style.maxHeight = 'none'; // знімаємо обмеження після анімації 
        content.removeEventListener('transitionend', onEnd); 
        btn.setAttribute('aria-expanded', 'true'); 
        content.setAttribute('aria-hidden', 'false'); 
        btn.textContent = labelClose; 
        isAnimating = false; 
        expanded = true; 
      }; 
      content.addEventListener('transitionend', onEnd); 
    }; 
    const close = () => { 
      if (isAnimating || !expanded) return; 
      isAnimating = true; 
      root.classList.remove('is-expanded'); 
      // З none → в конкретне число: спочатку зафіксуємо поточну висоту 
      const startHeight = content.scrollHeight; 
      content.style.maxHeight = startHeight + 'px'; 
      // У наступному кадрі стиснемо до collapsed px 
      requestAnimationFrame(() => { 
        content.style.maxHeight = collapsed + 'px'; 
      }); 
      const onEnd = (e) => { 
        if (e.propertyName !== 'max-height') return; 
        content.removeEventListener('transitionend', onEnd); 
        btn.setAttribute('aria-expanded', 'false'); 
        content.setAttribute('aria-hidden', 'true'); 
        btn.textContent = labelOpen; 
        isAnimating = false; 
        expanded = false; 
      }; 
      content.addEventListener('transitionend', onEnd); 
    }; 
    btn.addEventListener('click', () => (expanded ? close() : open())); 
    // Підтримка ресайзу: якщо блок розгорнутий, оновлюємо max-height до актуального scrollHeight 
    let resizeRaf = null; 
    window.addEventListener('resize', () => { 
      if (!expanded || isAnimating) return; 
      if (resizeRaf) cancelAnimationFrame(resizeRaf); 
      resizeRaf = requestAnimationFrame(() => { 
        // Під час розгорнутого стану стоїть 'none' — коротко повернемо px, щоб анімовано адаптуватись 
        content.style.maxHeight = content.scrollHeight + 'px'; 
      });
    });
  });
})();
; // <-- Добавлена точка с запятой в конце
</script>
