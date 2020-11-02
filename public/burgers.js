$(function(){
  $("#submit").on("click", function(event){
    event.preventDefault();

    const newBurg = {
      burger_name: $("#burger-name").val().trim()
    }
    $.ajax("api/burgers", {
      type: "POST",
      data: newBurg
    }).then(()=>{
      console.log("New burger added");
      location.reload()
    })
  })
  $(".devour").on("click", function(e){
    e.preventDefault();
    const id = $this.data("id");
    const devoured = $(this).data("devoured");
    console.log(id)
    console.log(devoured)

    const ifDevoured = {devoured:devoured};

    $.ajax(`/api/burgers/${id}`, {
      type: "PUT",
      data: ifDevoured
    }).then(() => {
      location.reload()
    })
  })
  $(".delete").on("click", function(e){
    e.preventDefault();
    var id = $(this).data("id")
    console.log(id)

    $.ajax(`api/burger/${id}`, {
      type: "DELETE",
    }).then(()=>{
      location.reload()
    })
  })
})