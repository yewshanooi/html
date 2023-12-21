// Event to automatically display toast when "Click me" button is clicked
async function getCatFact() {
    const Fact = await fetch('https://catfact.ninja/fact')
        .then(res => res.json());

        var wordCount = Fact.fact.split(" ").length;  

    var element = document.getElementById("myToast");
    var myToast = new bootstrap.Toast(element, { autohide: false });
        element.querySelector('.toast-body').innerText = Fact.fact;
        element.querySelector('.me-small').innerText = wordCount + " words";
        myToast.show();
}

// Event to check whether a button is clicked
async function submitButton() {
    alert('You have clicked on the Search button!');
}
