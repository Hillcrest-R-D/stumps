const firstNames = ["Joe", "Bob", "Jim", "Mac", "Evan", "Dan", "Bill"];
const lastNames = ["Smith", "Doe", "Anderson", "Bool", "Dynamite", "Wunder"];

document.getElementById("col1").addEventListener("click", function() {expand("col1")})

document.getElementById("col2").addEventListener("click", function() {expand("col2")})

document.getElementById("col3").addEventListener("click", function() {expand("col3")})


function expand(id) {
    var col = document.getElementById(id);
    var cols = col.parentElement
    switch (Number(id[3])) {
        case 1:
            cols.style.gridTemplateColumns = "90% 5% 5%";
            break 
        case 2:
            cols.style.gridTemplateColumns = "5% 90% 5%";
            break 
        case 3:
            cols.style.gridTemplateColumns = "5% 5% 90%";
            break
    }
         
    
    var exp_col = document.getElementsByClassName("expanded")[0];
    exp_col.classList.remove("expanded");
    exp_col.style.gridColumn = 'auto';
    exp_col.children[1].hidden = true;
    col.classList.add("expanded");
    // col.style.transition = "all .5s linear";
    // col.style.gridColumnStart = Number(id[3]);
    // col.style.gridColumnEnd = Number(13-(3-id[3]));
    col.children[1].attributes.removeNamedItem("hidden");
}