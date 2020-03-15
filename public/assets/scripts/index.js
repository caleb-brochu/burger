  console.log("js running")
$(function(){   
    $(".add_burger").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.

        event.preventDefault();

        console.log($("#burg").val().trim())
        const newBurger = {
        burger_name: $("#burg").val().trim(),
        devoured: 0
        };

        // Send the POST request.
        $.ajax("/api/burger", {
        type: "POST",
        data: newBurger
        }).then(
        function() {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
        }
        );
    });
    $(".devoure").on("click", function(event) {
        // Make sure to preventDefault on a submit event.
        let burgerId = $(this).attr("data-id");
        let eatBurger = {
            id: burgerId,
        }
        // Send the POST request.
        $.ajax(`/api/burger/${burgerId}`, {
        type: "PUT",
        data: eatBurger
        }).then(
            function() {
                console.log("burger has been devoured");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});