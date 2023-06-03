const box = document.getElementById("box");
const list = document.getElementById("list");

function add() {

    if (box.value === '') {
        alert("Enter the Content ");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = box.value;
        list.appendChild(li);
        let crossIcon = document.createElement("i");
        crossIcon.classList.add("fas", "fa-times");

        li.appendChild(crossIcon);
        list.appendChild(li);
    }
    box.value = "";
    SaveData();

}

list.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        SaveData();
    }
    else if (e.target.tagName === "I") {
        e.target.parentElement.remove();
        SaveData();
    }

}, false);

function SaveData() {
    localStorage.setItem("data", list.innerHTML);
}

function showTask() {
    list.innerHTML = localStorage.getItem("data")
}
showTask();