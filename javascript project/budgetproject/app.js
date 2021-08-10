const dropDownMenu1 = document.querySelector
("#Monthly-Savings .dropdown");
const dropDownMenu2 = document.querySelector
("#Monthly-Expenses .dropdown");
const dropDownMenu3 = document.querySelector
("#Annual-Expenses .dropdown");
const dropDownMenu4 = document.querySelector
("#Income .dropdown");
const dropDownMenu5 = document.querySelector
("#BudgetReview .dropdown");

allDropDowns = [dropDownMenu1, dropDownMenu2, dropDownMenu3,
    dropDownMenu4, dropDownMenu5];
    console.log(allDropDowns);

allDropDowns.forEach(function(drop){
    drop.addEventListener('click', function(){
        

        if(drop.parentElement.parentElement.id ==="Monthly-Savings"){
            document.querySelectorAll("#Monthly-Savings .form-group")
            .forEach(function (drop){
                drop.classList.toggle("show");
            })
        }
    });
    
});
allDropDowns.forEach(function(drop){
    drop.addEventListener('click', function(){
        

        if(drop.parentElement.parentElement.id ==="Monthly-Expenses"){
            document.querySelectorAll("#Monthly-Expenses .form-group")
            .forEach(function (drop){
                drop.classList.toggle("show");
            })
        }
    });
    
});
allDropDowns.forEach(function(drop){
    drop.addEventListener('click', function(){
        

        if(drop.parentElement.parentElement.id ==="Annual-Expenses"){
            document.querySelectorAll("#Annual-Expenses .form-group")
            .forEach(function (drop){
                drop.classList.toggle("show");
            })
        }
    });
    
});
allDropDowns.forEach(function(drop){
    drop.addEventListener('click', function(){
       

        if(drop.parentElement.parentElement.id ==="Income"){
            document.querySelectorAll("#Income .form-group")
            .forEach(function (drop){
                drop.classList.toggle("show");
            })
        }
    });
    
});
allDropDowns.forEach(function(drop){
    drop.addEventListener('click', function(){

        if(drop.parentElement.parentElement.id === "BudgetReview"){
            document.querySelectorAll("#BudgetReview .form-group")
            .forEach(function(drop){
                drop.classList.toggle("show");
            })
        }
    })
});

