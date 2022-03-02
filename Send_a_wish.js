
function send(name,wishes){
    let i = localStorage.length;
    localStorage.setItem("msg"+i, name);
    i++;
   localStorage.setItem("msg"+i, wishes);
    window.open('./index.html').send(name,wishes)
    
}

