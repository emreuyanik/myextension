document.addEventListener('DOMContentLoaded', function () {
    const inputEl = document.getElementById('input-el');
    const inputBtn = document.getElementById('input-btn');
    const deleteBtn = document.getElementById('delete-btn');
    const ulEl = document.getElementById('ul-el');

    // Load saved links from local storage on page load
    const savedLinks = JSON.parse(localStorage.getItem('savedLinks')) || [];
    savedLinks.forEach(link => {
        addLink(link);
    });

    // Save the link when the "SAVE LINK" button is clicked
    inputBtn.addEventListener('click', function () {
        const url = inputEl.value.trim();
        if (url !== '') {
            addLink(url);
            saveLinks();
            inputEl.value = '';
        }
    });

    // Delete all links when the "DELETE ALL" button is clicked
    deleteBtn.addEventListener('click', function () {
        ulEl.innerHTML = '';
        saveLinks([]);
    });

    // Add a link to the list
    function addLink(url) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = url;
        a.target = '_blank';
        a.textContent = url;
        li.appendChild(a);
        ulEl.appendChild(li);

        // Open the link in a new tab when the link is clicked
        a.addEventListener('click', function (event) {
            event.preventDefault();
            window.open(url, '_blank');
        });
    }

    // Save the links to local storage
    function saveLinks(links) {
        localStorage.setItem('savedLinks', JSON.stringify(links));
    }
});
