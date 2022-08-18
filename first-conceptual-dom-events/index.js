// 1. tag name method
/*
 const tagList = document.getElementsByTagName('h2');

        // for (const h2 of tagList) {
        //     console.log(h2.innerText)
        // }

        for (let i = 0; i < tagList.length; i++) {
            const element = tagList[i];
            console.log(element.innerText)
        }
 */


// 2. clasname method
/*
 const classList = document.getElementsByClassName('test');
for (const classTag of classList) {
    console.log(classTag.innerText)
}
*/

// 3. id name method
/*
 const h1 = document.getElementById('first');
// console.log(h1.innerText = 'playing with dom')
console.log(h1.style.color = 'red')
 */

/*
 // 4. query selector 
// const element = document.querySelector('#first');
// console.log(element.innerText)

// const classList = document.querySelector('.test');
// console.log(classList)

const classList = document.querySelectorAll('.test')[1];
console.log(classList)
 */

/* 


// Dynamic style- manipulate CSS with javascript 

const h1 = document.getElementById('first');
h1.style.color = 'red';
h1.style.backgroundColor = 'skyBlue';
h1.style.padding = '10px';
 */

/* 
//  add & remove class
const h1 = document.getElementById('first');
h1.classList.add('third');

h1.classList.remove('third'); 
*/

/*
 // create element and append child
const div = document.getElementById('half');
const h2 = document.createElement('h2');
h2.innerText = 'I am created by js5 and added';
h2.style.color = 'blue'

div.appendChild(h2) 
*/

/*
 // innertext vs innerHtml
const div = document.getElementById('half');
console.log(div.innerHTML)

console.log(div.innerText) 
*/

// get & set atribute 
const div = document.getElementById('half');
console.log(div.getAttribute('id'))
console.log(div.setAttribute('class', 'yellow'))

