document.addEventListener('DOMContentLoaded', function (){
    const title = document.getElementById('title');
    const description = document.getElementById('description');
    const btn = document.getElementById('add');

    btn.onclick = function () {
        console.log('Title:', title.value);
        console.log('Description:', description.value);
    }
});

