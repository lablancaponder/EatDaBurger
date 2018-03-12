// // Make sure we wait to attach our handlers until the DOM is fully loaded.
// $(function() {
//     $("#add-burger").on("click", function(event) {
//       var id = $(this).data("id");
//       var newBurger = $(this).data("newBurger");
  
//       var newEatState = {
//         devoured: eaten
//       };

//       $("#allBurgers").on("click", "#devour-burger", function(event) {
//         var id = $(this).data("id");
//         var eaten = $(this).data("eaten");
    
//         var newEatState = {
//           devoured: eaten
//         };
        

        
  
//       // Send the PUT request.
//       $.ajax("/api/burgers/" + id, {
//         type: "PUT",
//         data: newEatState
//       }).then(
//         function() {
//           console.log("Burger has been ", newBurger);
//           // Reload the page to get the updated list
//           location.reload();
//         }
//       );
//     });
  

//       // Send the POST request.
//       $.ajax("/api/burgers", {
//         type: "POST",
//         data: newBurger
//       }).then(
//         function() {
//           console.log(newBurger, " has been added!");
//           // Reload the page to get the updated list
//           location.reload();
//         }
      
    
//          );
//       });
//      });
    
  

  // Waits Until The DOM Is Fully Loaded
$(document).ready(function() {


    $("#add-burger").on("click", function(event) {

      event.preventDefault();
  

      var newBurger = {
        burger_name: $("#burger").val(),
      };
  
     
      if (newBurger.burger_name != "") {
        // Send The POST Request
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            console.log("added new burger");
 
            location.reload();
          }
        );

    
      }
    });
    

    $("#burger-menu").on("click", "#devour-burger", function(event) {
      var id = $(this).data("id");
      var eaten = $(this).data("eaten");
  
      var newEatState = {
        devoured: eaten
      };
  
      // Send the PUT Request
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newEatState
      }).then(
        function() {
          console.log("changed devoured to", eaten);
          // Reload The Page To Get The Updated List
          location.reload();
        }
      );
    });
  });


