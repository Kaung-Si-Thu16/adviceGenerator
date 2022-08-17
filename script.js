const title = document.querySelector("#title");
const content = document.querySelector("#advice");

const clickHandler = async () => {
    const response = await fetch("https://api.adviceslip.com/advice")
    const data = await response.json()

    const id = data.slip.id;
    const advice = data.slip.advice;

    title.innerHTML = `Advice #${id}`;
    content.innerHTML = advice;
}