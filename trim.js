const trim = () => {
    const nodes = document.querySelectorAll("#thread > div > div.relative.flex > div.flex > section");

    [...nodes].reverse().slice(10).forEach(node => {
        node.style.display = 'none';
    });
};

const button = document.createElement('button');

button.addEventListener('click', trim);

button.innerHTML = 'TRIM';

button.style.background = 'skyblue';
button.style.border = 'none';
button.style.borderRadius = '8px 0 0 8px';
button.style.padding = '15px 10px';
button.style.cursor = 'pointer';

button.style.position = 'fixed';
button.style.right = '0';
button.style.top = '50%';

document.body.appendChild(button);