async function getCatFact() {
    const Fact = await fetch('https://catfact.ninja/fact')
        .then(res => res.json());

    alert(`${Fact.fact}`);
}
