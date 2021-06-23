export default function deleteBtn(idBtn, content) {
    const btnDeleteBtn = document.createElement('button');
    btnDeleteBtn.append('Delete button');
    btnDeleteBtn.setAttribute('class', 'Button Button--danger')
    content.appendChild(btnDeleteBtn);

    btnDeleteBtn.addEventListener('click', function(){
        document.querySelector(`#btn${idBtn}`).remove()
        document.querySelector(`#controlBtn${idBtn}`).remove()
    })
}