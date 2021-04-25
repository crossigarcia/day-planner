$(document).ready(function() {
   $('.saveBtn').on('click', function(){
      
      const time = $(this).attr('id');

      const text = $(this).siblings('.description').val();

      localStorage.setItem(time, text);

   });

   for (let i = 9; i <= 17; i++) {
      $(`#${i}`).siblings('.description').val(localStorage.getItem(`${i}`));
   }

   $('#currentDay').text(new Date().toDateString());

   let currentTime = new Date().getHours();

   let colorCode = function() {
      $('.saveBtn').each(function() {
         if (parseInt($(this).attr('id')) < currentTime) {
            $(this).siblings('.description').addClass('past');
         } else if (parseInt($(this).attr('id')) === currentTime) {
            $(this).siblings('.description').addClass('present');
         } else {
            $(this).siblings('.description').addClass('future');
         }
      });
   }

   colorCode();

   setInterval(colorCode, 5000);

});

