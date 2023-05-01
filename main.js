const phrases = [
    '',
    'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.',
    'Procure acender uma vela em vez de amaldiçoar a escuridão',
    'A vida trará coisas boas se tiver paciência',
    'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si',
    'Não compense na ira o que lhe falta na razão,',
    'A maior de todas as torres começa no solo',
    'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida',
    'Siga os bons e aprenda com eles',
    'São os nossos amigos que nos ensinam as mais valiosas lições',
    'Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos'
];

let randomNumber = Math.round(Math.random() * (phrases.length -1));

const fortuneCookie = document.querySelector('#fortuneCookie');
const btnReset = document.querySelector('#btnReset');
const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');

function toggleScreen() {
    screen1.classList.toggle('hide');
    screen2.classList.toggle('hide');
}

fortuneCookie.addEventListener('click', () => {
    toggleScreen();
    document.querySelector('.luck p').innerText = phrases[randomNumber]
});

btnReset.addEventListener('click', () => {
    toggleScreen();
    randomNumber = Math.round(Math.random() * (phrases.length -1));

});


