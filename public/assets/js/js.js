// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".change-devoured").on("click", function (event) {
    event.preventDefault();
    var id = $(this).data("id");
    var newDevour = $(this).data("newdevour");
    var newDevourState = {
      devour: newDevour,
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState,
    }).then(function () {
      console.log("changed devoured to", newDevour);
      location.reload();
    });
  });

  $(".create-form").on("submit", function (event) {
    event.preventDefault();

    var newBurg = {
      burger_name: $("#burg").val().trim(),
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurg,
    }).then(function () {
      console.log("created new burger");
      location.reload();
    });
  });
  $(".delete-burger").on("click", function (e) {
    e.preventDefault();
    var id = $(this).data("id");
    console.log(id);
    $.ajax("/api/burgers/" + id, {
      type: "DELETE",
    }).then(function () {
      console.log("deleted burger", id);
      location.reload();
    });
  });
});
