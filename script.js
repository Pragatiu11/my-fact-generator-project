// script.js
document.getElementById('generateBtn').addEventListener('click', function() {
    const facts = [
        "You are a passionate dancer.",
        "You love the snow and enjoy winter activities.",
        "You have a deep connection with the ocean."
    ];

    const factsContainer = document.getElementById('facts');
    factsContainer.innerHTML = '';

    facts.forEach(fact => {
        const factElement = document.createElement('p');
        factElement.textContent = fact;
        factsContainer.appendChild(factElement);
    });
});
