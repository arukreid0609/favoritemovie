let ta = document.getElementById("ta");
let tr = ta.getElementsByTagName("tr")[0];

let tt = document.createElement("tr");
tt.innerText = "はじめて";
ta.append(tt);

for (let index = 0; index < 5; index++) {
    ta.append(tr.cloneNode(true));
    let tt = document.createElement("tr");
    ta.append(tt);
    console.log(tr);
}