var array;


array = ['APPLE', 'ORANGE', 'BANANA'];


document.getElementById('button').addEventListener('click', (event) => {
  if (!array.length) {
    event.target.setAttribute("id", !true);
  } else {
    let element_list = document.getElementById('list');
    let new_li = document.createElement('li');
    new_li.innerText = array.shift();

    element_list.appendChild(new_li);
  }

});
