let myLibrary = [];
let knjige = document.getElementById('bookcontainer');

function Book(title, author) {
  this.title = title;
  this.author = author;
}

      let count = 0;
function addBookToLibrary(book) {
  myLibrary.push(book);

    while (knjige.firstChild) {
        knjige.removeChild(knjige.firstChild);
    }

      for (const element of myLibrary){
    let knjigaNaslov = document.createElement('p');
    let knjigaAuthor = document.createElement('p');
    let dltBtn = document.createElement('button');
    let status = document.createElement('button');
    status.textContent = 'not read'
    dltBtn.textContent = 'delete';
    let naslov = element.title;
    let author = element.author;
    knjigaNaslov.textContent = naslov;
    knjigaAuthor.textContent = author;
    let knjiga = document.createElement('div');
    knjiga.dataset.num = count;
    knjiga.classList.add('cont');
    knjiga.appendChild(knjigaNaslov);
    knjiga.appendChild(knjigaAuthor);
    knjiga.appendChild(dltBtn);
    knjiga.appendChild(status);
    knjige.appendChild(knjiga);
    count++;
    status.addEventListener('click', function (){
      if (status.textContent == 'not read'){
        status.textContent = 'read';
      } else {
        status.textContent = 'not read';
      }
    })
    let count2 = count - 1;
    let dlt;
    dltBtn.addEventListener('click', function (){
      let frmArr = Array.from(knjige.children);


      dlt = knjige.childNodes[count2];
      dlt.parentNode.removeChild(dlt);
      myLibrary.splice(dlt, 1);
})

              
  }
count = 0;
}


document.getElementById('btn').addEventListener('click', function(){
    document.getElementById('input').classList.toggle('hidden');
})


document.getElementById('submit').addEventListener('click', function(){
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let book = new Book(title, author);
    addBookToLibrary(book);
    document.getElementById('input').classList.toggle('hidden');
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
})