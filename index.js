let score = 0;
let subbmit = 0;

async function next(currentId, qid) {
    // Get all checkboxes with the specified name
    let checkboxes = document.querySelectorAll('input[name="' + qid + '"]');

    // Uncheck all checkboxes
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });

    let DOMqDiv = document.getElementById(currentId);
    console.log("currentId", currentId);
    DOMqDiv.classList.add("hidden");
    let nextId = currentId + 1;

    if (nextId >= 6) {
        nextId = 5;
        DOMqDiv.classList.add("hidden");
    }

    let NextDOMQDiv = document.getElementById(nextId);
    NextDOMQDiv.classList.remove("hidden");
    let qx = document.getElementById(qid);

    if (qx.checked) {
        score++;
        subbmit++;
        console.log("riktig svar")
        if (score >= 5) {
            score = 4;
        }
    } else {
        console.log("feil svar")
        subbmit++;
    }

    console.log("subbmit" + subbmit)
    if (subbmit == 4) {
        console.log("active");
        answer = (score * 100) / 4; // Calculate the percentage
        document.getElementById("qanswer").innerHTML = "du fekk " + answer + "% rett!";
        console.log(score);
    } else {
        console.log("not active")
    }
}
