const addBtn = document.querySelector('#btn-main');
const resetBtn = document.querySelector('.btn-list-reset');
const removeBtn = document.querySelector('.btn-remove-last');
const input = document.querySelector('.input-main');
const list = document.querySelector('.list-wrap');
const listUl = document.querySelector('ul');
const exercise = document.querySelectorAll('.ex');
const options = document.querySelector('.options');
const buttOp = document.querySelectorAll('button.options');


addBtn.addEventListener('click', () => {
const item = document.createElement('li');
item.textContent = input.value;
listUl.append(item);
input.value = '';

})

removeBtn.addEventListener('click', () => {
const lastItem = document.querySelector('li:last-child');
lastItem.remove();

})



for (let i = 0; i < exercise.length; i++) {
exercise[i].addEventListener('click', () => {
    
    
    const exItem = document.createElement('li');
    exItem.textContent = exercise[i].textContent;
    listUl.append(exItem);
  
    exercise[i].remove();

    
})}




resetBtn.addEventListener('click', () => {
    // const items2 = document.createElement('button');
    const resetList = document.querySelectorAll('li');
    for (let i = 0; i < resetList.length; i++) {
        
        // items2.textContent = resetList[i].textContent;
        // items2.classList.add('ex');

        // options.append(items2);
        

        resetList[i].remove();
        // left of HERE trying to get the buttons to return, but after return they are not re-clickable

    }
    
})


