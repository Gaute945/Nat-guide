function next(questionNumId) {
    let DOMqDiv = document.getElementById(questionNumId);
    let NextQuestionNumId = questionNumId + 1;
    let NextDOMQDiv = document.getElementById(NextQuestionNumId);

    DOMqDiv.classList.add("hidden");
    NextDOMQDiv.classList.remove("hidden");
}