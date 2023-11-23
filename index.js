let score = 0; // Declare score outside the function

function next(questionNumId, qid) {
    let DOMqDiv = document.getElementById(questionNumId);
    let NextQuestionNumId = questionNumId + 1;
    if (questionNumId === 5) {
        // If questionNumId is 4, you can return or do nothing to exit the function
        return;
    } else {
        let NextDOMQDiv = document.getElementById(NextQuestionNumId);

        DOMqDiv.classList.add("hidden");
        NextDOMQDiv.classList.remove("hidden");
    }

    let qx = document.getElementById(qid);

    if (qx.checked) {
        console.log("it worked!");
        score++;
    } else {
        console.log("it failed");
    }

    console.log(score);
}
