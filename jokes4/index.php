<!DOCTYPE html>
<html>
   <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1, minimal-ui">
      <title>Briefs form</title>
      <link rel="stylesheet" href="./static/dist/bundle.css">


      <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
   </head>
   <body>

      <div class="wrapper">
         <!--{{start_form}}-->
         <div id="roulette"></div>
         <div class="ass__container">
            <h2 class="ass__title">Стяните трусики – найдите скидку</h2>
            <div class="ass__container--body">
               <div class="ass" id="ass1"> <img loading="lazy" src="./static/images/Pants1.png" alt="" class="ass__img underpants__animation"> <span class="ass__discount">100%</span> </div>
               <div class="ass" id="ass2"> <img loading="lazy" src="./static/images/Pants3.png" alt="" class="ass__img underpants__animation"> <span class="ass__discount">100%</span> </div>
               <div class="ass" id="ass3"> <img loading="lazy" src="./static/images/Pants2.png" alt="" class="ass__img underpants__animation"> <span class="ass__discount">100%</span> </div>
            </div>
         </div>
         <div class="order_block">
            <div><img loading="lazy" src="./static/order_tube3.png" style="width:100%;max-width:300px;"></div>
            <h3>Все что Вам нужно – это ввести имя и номер телефона.<br>Поторопитесь! У Вас осталось времени:<br><span class="time_remains" id="min">10</span> : <span class="time_remains" id="sec">00</span> </h3>
            <form id="order_form"><input name="order[fio]" type="text" class="input-roulette" id="input-name" placeholder="Введите ваше имя" maxlength="50" autocomplete="name"> <input name="order[phone]" type="tel" class="input-roulette" id="input-phone" placeholder="Введите номер" autocomplete="tel" required> <input type="submit" class="submit-roulette" onclick="$(this).closest('form').submit();return false;" value="ПОЛУЧИТЬ БЕСПЛАТНО"> <input type="hidden" name="order[specifications]" value="" /> <input type="hidden" name="order[discount]" value=""> </form>
         </div>
         <div class="spin-result-wrapper">
            <div class="pop-up-window">
               <div class="close-popup"></div> <span class=pop-up-heading style="font-size: 40px;margin-bottom:5px;display:block;color:black;">Поздравляем!</span>
               <p class="ruletka-p pop-up-text" style="text-indent:0;line-height:1.4;font-size: 22px!important; font-weight:400;text-align:center!important;margin:0px 0px 20px!important;font-family: open sans;">Вы выиграли скидку
                  <font style="color: red;">100%</font> и можете забрать «Erosen» абсолютно <span style="color:red;">бесплатно!</span> </p> <a href="#roulette" class=pop-up-button style="margin-top:20px;color:white;">OK</a> </div>
         </div>
         <!--{{end_form}}-->
      </div>
            
      <script src="./static/dist/bundle.js"></script>
   </body>
</html>