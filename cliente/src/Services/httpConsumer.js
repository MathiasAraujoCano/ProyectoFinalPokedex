const url = "http://localhost:4000/pokemon";

export const getInfo = (onSuccess, onFinish) =>
    fetch(url)
    .then(response => response.json())
    .then(onSuccess)
    .finally(onFinish);