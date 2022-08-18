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

// 4. query selector 
// const element = document.querySelector('#first');
// console.log(element.innerText)

// const classList = document.querySelector('.test');
// console.log(classList)

const classList = document.querySelectorAll('.test')[1];
console.log(classList)