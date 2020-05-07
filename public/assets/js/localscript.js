// waits until dom is fully loaded before functions can be used
$(function(){
    // on click of any thing with the class "eat"
    $(".eat").on("click",function(event){
        event.stopPropagation();
        //gets clicked element's data-id
        let burgId = $(this).data("id");
        
        //PUT Request to update a burger's "eaten" status to true
        $.ajax("/eat" + id, {
            type: "PUT",
            data: newSleepState
          }).then(
            function() {
              console.log("changed sleep to", newSleep);
              // Reload the page to get the updated list
              location.reload();
            }
          );
    })
}
)