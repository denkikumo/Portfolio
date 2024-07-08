function changeDiv() {
    const unselectedbtn = document.getElementById('unselectedbtn');
    const selectedbtn = document.getElementById('selectedbtn');
    unselectedbtn.classList.add('selected');
    unselectedbtn.classList.remove('unselected');
    selectedbtn.classList.add('unselected')
    selectedbtn.classList.remove('selected')

    document.getElementById('img-container-before').style.display = 'none';
    document.getElementById('img-container-after').style.display = 'flex';
}

function changeDivBack() {
    const unselectedbtn = document.getElementById('unselectedbtn');
    const selectedbtn = document.getElementById('selectedbtn');
    unselectedbtn.classList.add('unselected');
    unselectedbtn.classList.remove('selected');
    selectedbtn.classList.add('selected')
    selectedbtn.classList.remove('unselected')

    document.getElementById('img-container-before').style.display = 'flex';
    document.getElementById('img-container-after').style.display = 'none';
}