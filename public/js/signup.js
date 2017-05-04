$('.form').find('input, textarea').on('keyup blur focus', function (e) {
 
 var $this = $(this),
     label = $this.prev('label');

      if (e.type === 'keyup') {
            if ($this.val() === '') {
         label.removeClass('active highlight');
       } else {
         label.addClass('active highlight');
       }
   } else if (e.type === 'blur') {
       if( $this.val() === '' ) {
           label.removeClass('active highlight');
            } else {
            label.removeClass('highlight');  
            }  
   } else if (e.type === 'focus') {
     
     if( $this.val() === '' ) {
           label.removeClass('highlight');
            }
     else if( $this.val() !== '' ) {
            label.addClass('highlight');
            }
   }
});

$('.tab a').on('click', function (e) {
 
 e.preventDefault();
 
 $(this).parent().addClass('active');
 $(this).parent().siblings().removeClass('active');
 
 target = $(this).attr('href');

 $('.tab-content > div').not(target).hide();
 
 $(target).fadeIn(600);
 
});

$('#submitone').on('click', function () {
 console.log("Entry");
 window.location.href = 'index.html';

});

$('#login').on('click', function(){
   window.location.href = 'login.html';
});






















// module.exports = function validate() {
      
//    if( document.myForm.Name.value == "" )
//    {
//       alert( "Please provide your first name!" );
//       document.myForm.first_name.focus() ;
//       return false;
//    }
//     if( document.myForm.last_name.value == "" )
//    {
//       alert( "Please provide your last name!" );
//       document.myForm.last_name.focus() ;
//       return false;
//    }

//    if( document.myForm.user_name.value == "" )
//    {
//       alert( "Please provide a user name!" );
//       document.myForm.user_name.focus() ;
//       return false;
//    }
//     if( document.myForm.email_address.value == "" )
//    {
//       alert( "Please provide a Email Address!" );
//       document.myForm.email_address.focus() ;
//       return false;
//    }

//      if( document.myForm.password.value == "" )
//    {
//       alert( "Please provide a password!" );
//       document.myForm.password.focus() ;
//       return false;
//    }
// }//end function

// };