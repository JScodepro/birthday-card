
function send(name,wishes){
    let i = localStorage.length;
    localStorage.setItem("msg"+i, name);
    i++;
   localStorage.setItem("msg"+i, wishes);
    window.open('./card.html').send(name,wishes)
    
}

