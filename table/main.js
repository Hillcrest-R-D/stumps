const firstNames = ["Joe", "Bob", "Jim", "Mac", "Evan", "Dan", "Bill"];
const lastNames = ["Smith", "Doe", "Anderson", "Bool", "Dynamite", "Wunder"];

function addRows(){
    let tbody = document.getElementById("tableux");
    let id = 1;
    firstNames.forEach(
        (first) => {
            lastNames.forEach (
                (last) => {
                    let trow = document.createElement("tr");
                    let id_td = document.createElement("td");
                    let first_td = document.createElement("td");
                    let last_td = document.createElement("td");
                    id_td.innerText = id; 
                    trow.append(id_td);
                    first_td.innerText = first;
                    trow.append(first_td);
                    last_td.innerText = last; 
                    trow.append(last_td);
                    console.log(tbody)
                    tbody.append(trow);
                    id ++;      
                }
            )
        }
    )
}