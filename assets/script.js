$(document).ready(function() {
   $('.saveBtn').on('click', function(){
      
      const time = $(this).attr('id');

      const text = $(this).siblings('.description').val();

      localStorage.setItem(time, text);

   });

   //grab from localStorage and populate the text area with correct time/text

   for (let i = 9; i <= 17; i++) {
      $(`#${i}`).siblings('.description').val(localStorage.getItem(`${i}`));
   }

   $('#currentDay').text(new Date().toDateString());

   let currentTime = new Date().getHours();
   console.log(currentTime);
   
   for (let i = 9; i <=17; i++) {
      let timeId = $('.saveBtn').attr(`#${i}`);
      console.log(timeId);
      
      if (currentTime < timeId) {
         $('.description').addClass('past');
      } else if (currentTime = timeId) {
         $('.description').addClass('present');
      } else {
         $('.description').addClass('future');
      }
   }




});