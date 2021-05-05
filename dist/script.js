const $ = app.jquery;
$("#go").on("click", function(e){
    e.preventDefault();
    let data = {
        Title : $("#title").val(),
        Price : $("#price").val()
    };
    console.log(data);
    $.post("/addProducts", data, function(result){
        if(result){
            alert(result);
        }
    })
})
$("#update").on("click", function(e){
    e.preventDefault();
    let data = {
        Id    : $("#updateId").val(),
        Title : $("#updateTitle").val(),
        Price : $("#updatePrice").val()
    };
    console.log(data);
    $.post("/updateProduct", data, function(result){
        if(result){
            alert(result);
        }
    })
})
$("#delete").on("click", function(e){
    e.preventDefault();
    let data = {
        Id : $("#deleteId").val()
    }
    $.post("/deleteProduct", data, function(result){
        if(result){
            alert(result);
        }
    })
})