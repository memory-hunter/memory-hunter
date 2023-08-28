function renderMarkdown() {
    document.body.innerHTML = md.html(document.body.innerHTML);
    document.body.style.display = 'block';
}