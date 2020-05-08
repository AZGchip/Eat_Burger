// waits until dom is fully loaded before functions can be used
$(function(){
    // on click of any thing with the class "eat"
    $(".eat").on("click",function(event){
        event.stopPropagation();
        //gets clicked element's data-id
        let burgId = $(this).data("id");
        
        //PUT Request to update a burger's "eaten" status to true
        $.ajax( {
            method: "PUT",
            url: "/eat/" + burgId
          }).then(
            function() {
              // Reload the page to get the updated database info
              location.reload();
            }
          );
    })
    $(".add-burger").on("submit",function(event){
      event.preventDefault();
      let burgerName = $("#burger").val().trim();
      $.ajax( {
        method: "POST",
        url: "/add/" + burgerName
      }).then(
        function() {
          // Reload the page to get the updated database info
          location.reload();
        }
      );
    });
}
)