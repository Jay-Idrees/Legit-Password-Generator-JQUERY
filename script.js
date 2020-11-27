
// Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

      
//=====================================================================================
//                                JavaS DOM Plugs
//=====================================================================================

                                 // I N P U T S
                          //User communitcation vectors

        // pw length Message: form input box, confirm button 
        var pw_length_bar= document.querySelector('#pw_length_bar');
        // var pw_length_box= document.querySelectorAll('#pw_length_box');
       
        var pw_length_box= document.querySelector('#pw_length_box')
     
 
        var pw_length_bt= document.querySelector('#pw_length_bt');
     
        // Other pw characteristics modal: checkboxes x4 (uppercase, lower case, letter, number, special character), confirm button

        var pw_capital_checkbox= document.querySelector('#pw_capital_checkbox');
        var pw_lowercase_checkbox=document.querySelector('#pw_lowercase_checkbox')
        var pw_number_checkbox=document.querySelector('#pw_number_checkbox');
        var pw_symbol_checkbox=document.querySelector('#pw_symbol_checkbox');
        var pw_ingredients_bt=document.querySelector('#pw_ingredients_bt')

        
                                 // O U T P U T S    

         // Final password generator page: Generate button, Display textarea
         var pw_gen_bt=document.querySelector('#pw_gen_bt')
         var pw_display_area=document.querySelector("#password")
        // DOM element for pluggin into the copy button for copy password to the clipboard functionality
         var clipboard=document.querySelector('#clipboard')
//=====================================================================

// Variables for password ingredients




//=====================================================================================
//                                   Click Events 
//=====================================================================================

        $(document).ready(function(){
          $("#msg_pw_length").modal('show');
        });

   
        // Controling the display of the modals
            $("#pw_length_bt").click(function(){
              event.preventDefault();
             let pw_length= $('#pw_length_box').val();
              $("#msg_pw_length").modal('hide');
              $("#msg_pw_type").modal('show');
              
              // load_secondmodal()
    
            });
   
       
            $("#pw_ingredients_bt").click(function(){
              event.preventDefault();
              ('#password').empty

       // Creating variables for the uppercase, lowercase, number and symbol variables for the password ingredients

              var abc_lower='abcdefghijklmnopqrstuvwxyz'

              var abc_upper='ABCDEFGHIJKLMNOPQRSTUVWXYZ'

              var number='0123456789'

              var symbol='!@#$%^&*'

       // Capturing the password length from range-bar/text-box in the pw_length modal       
              var pw_length=pw_length_box.value

              var pw_ingredients='';
            
              // Pouring lower case letters to ingredients variable
              
                (pw_lowercase_checkbox.checked) ? pw_ingredients +=abc_lower : '';

              // Pouring upper case letters to the ingredients variable
              
                (pw_capital_checkbox.checked) ? pw_ingredients +=abc_upper : '';
              
              // Pouring numbers to the ingredients variable
              
                (pw_number_checkbox.checked) ? pw_ingredients +=number : '';
              
                // pouring symbols to the ingredients variable
              
                (pw_symbol_checkbox.checked) ? pw_ingredients +=symbol :'';
              
                // running the create password function to generate password and then displaying the value
                
                console.log(pw_ingredients)
                console.log(pw_length)

       

              create_pw (pw_length, pw_ingredients)
          
              $("#msg_pw_type").modal('hide');
              $("#pw_gen_page").modal('show');
            
      
              // $("#empty_check").modal('show');
             
         
        
            });

           
// Generate password function

        function create_pw(pw_length, pw_ingredients){

          var password=''

          for (var i=0;i<pw_length;i++){

          password += pw_ingredients.charAt(Math.floor(Math.random() * pw_ingredients.length));

          console.log('The final passwod is: ',password)
          $('#password').addClass('text-success font-weight-bold')
          $('#password').val(password)
          } //br close loop
          return password
       

        } //br-close create_pw function
                 



        // Controling the display of the modals
        $("#pw_gen_bt").click(function(){
          event.preventDefault();
          $("#msg_pw_length").modal('show');
          
          // load_secondmodal()

        });


        clipboard.addEventListener('click', () => {
          // console.log('click working')
          const copy_password = pw_display_area.value;
          // console.log(password)
          
          if(!copy_password) { return; }
          
          // pw_display_area.value = password;
          // document.body.appendChild(pw_display_area);
          pw_display_area.select();
          document.execCommand('copy');
          // alert("Your password has been copied")
          // textarea.remove();
          console.log(" The Password '", copy_password, "' has been copied to clipboard");
          $("#clipboard").hide();
          $("#msg_pw_copied").modal('show');

        });  
      

           
 


        $("#to_main_page").click(function(){
          event.preventDefault();
          $("#msg_pw_copied").modal('hide');
          $("#pw_gen_page").modal('show');
            
        });
     // Linking range bar to the text box in welcome window


    pw_length_bar.addEventListener('input', link );

    pw_length_box.addEventListener('input', link);



            function link(e){
              var value = e.target.value
              pw_length_bar.value = value
              pw_length_box.value = value
            }

    
        
         
        
//Alternative for controling modals with a function

                 // function load_secondmodal(){
        //   $('#msg_pw_length').modal('hide')
        //   console.log('hi2')
        //   $('#msg_pw_type').modal('show')
        // }

          // $(document).ready(function(){
          //   $("#pw_length_bt").on("click", load_secondmodal)
          // })



//=====================================================================================
//                               Event Sequence
//=====================================================================================


 // Prompt Welcome modal 
   
// Trigger 2nd modal for checkboxes regarding other pw characteristics

// Checking that at least one of the checkboxes is checked, trigger alert if not

// Display the password generator window

// Trigering the password generation episode on clicking the generate password button


  



      

