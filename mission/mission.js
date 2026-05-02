
let selectElem = document.querySelector('#theme-select');
let logo = document.querySelector('#logo');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        document.body.style.background = '#333';
        document.body.style.color = '#fff';
        document.querySelector("#content").style.background = '#222';
        logo.src = 'https://wddbyui.github.io/wdd131/images/byui-logo-white.png';
    } else {
        document.body.style.background = '#fff';
        document.body.style.color = '#000';
        document.querySelector("#content").style.background = '#f4f4f4';
        logo.src = 'https://wddbyui.github.io/wdd131/images/byui-logo-blue.webp';
    }
}           
                    