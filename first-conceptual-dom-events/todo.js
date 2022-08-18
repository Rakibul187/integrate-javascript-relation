let count = 0;
document.getElementById('input-btn').addEventListener('click', function () {
    count++;
    const inputValue = document.getElementById('input-value').value;
    const mainContainer = document.getElementById('content-container');
    const tableContainer = document.createElement('tr');
    tableContainer.innerHTML = `
    <th scope="row">${count}</th>
                <td>${inputValue}</td>
                <td>
                <button class="btn btn-success dlt-btn">Delete</button>
                    <button class="btn btn-secondary">Edit</button>
                </td>
    `;
    mainContainer.appendChild(tableContainer)
    count++;
    document.getElementById('input-value').value = '';
    const dltBtn = document.getElementsByClassName('dlt-btn');
    for (const btn of dltBtn) {
        btn.addEventListener('click', function (event) {
            // console.log(event.target.parentNode.parentNode)
            // event.target.parentNode.parentNode.remove(event.target.parentNode.parentNode)
            // tableContainer.innerHTML = '';
            event.target.parentNode.parentNode.display = 'none'
        })
    }
});

/*
 const age = 22;
const name = 'rakib';
console.log(`amer name ${name} amer boyos ${age}`)
*/

// 2:43m porjonto hoiche & toodo ektu vul ache