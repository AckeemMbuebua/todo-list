// let database=[];
// let TableTasks={
//     task:"",
//     statut:false
// }

// function completDada(value) {
//     task=inputValeur.value;
//     statut=false;
// }

// TableTasks.push(completDada);
// database.push(TableTasks);
// let Ligne=document.querySelector('#afficher');

// btn_add.addEventListener('click', completDada);
// console.log(database);
// console.log(TableTasks);

let tbody = document.querySelector("#afficher");
let inputValeur = document.querySelector('#inputValeur');
let btn_add = document.querySelector('#btn');

btn_add.addEventListener('click', addTask)

function addTask() {
    if (inputValeur.value.trim() != "") {

        let tr = document.createElement("tr");
        let th = document.createElement("th");
        let td = document.createElement("td");

        let manip = document.createElement("td")
        let btn1 = document.createElement("button")
        let btn2 = document.createElement("button")

        tr.classList.add("table-active");
        th.classList.add("row")
        btn1.classList.add("btn", "btn-success")
        btn2.classList.add("btn", "btn-danger")

        tbody.appendChild(tr);
        tr.appendChild(th);
        tr.appendChild(td);
        tr.appendChild(manip);

        manip.appendChild(btn1);
        manip.appendChild(btn2);
        btn1.innerText = "Edit"
        btn2.innerText = "Delete"
        btn2.id = 'supp';
        td.innerText = inputValeur.value
        inputValeur.value = "";
        localStorage['list'] = tbody.innerHTML;
        btn2.addEventListener('click', function (event) {
            tr.remove();
        })

        btn1.addEventListener('click', function (event) {
            let input = document.createElement('input');
            let i = 0;
            let valueRcup = td.innerText;
            td.innerText = ""
            console.log(valueRcup);
            input.value = valueRcup;
            td.appendChild(input);
            input.focus();
            input.addEventListener('blur', function name(params) {
                td.innerText = input.value;
            })
        })

    } else {
        alert("Saississez la tache dans la zone")
    }
}

