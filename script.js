const container = document.querySelector('body');

const para = document.createElement('p');
para.textContent = 'Hey I’m red!';

const heading = document.createElement('h3');
heading.textContent = 'Hey I’m blue!';

container.appendChild(para);
container.appendChild(heading);

const div = document.createElement('div')
const divv = document.querySelector('div')
const head2 = document.createElement('h1')
head2.textContent = 'Im in a Div'
const para2 = document.createElement('p')
para2.textContent= 'Mee Too!'
divv.appendChild(head2)
divv.appendChild(para2)
divv.setAttribute('style', ' background: pink; border :solid ; border-color: blue;' ); 


