// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".change-eat").on("click", function (event) {
       
        var id = $(this).data("id");
        var eaten = $(this).data("eaten");

        var newEatState = {
            devoured: 1
        };

        // Send the PUT request.
        $.ajax("/burgers/" + id, {
            type: "PUT",
            data: newEatState
        }).then(
            function () {
                $("li").fadeOut();
                console.log("changed eat to", eaten);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burg").val().trim(),
            devoured: 0
        };

        // Send the POST request.
        $.ajax("/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });


});
