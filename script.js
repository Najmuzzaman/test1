function showTitle() {
    alert(document.getElementById('main-title').innerText);
}
function ChangeTitle() {
    const title=document.getElementById('main-title');
    title.textContent = 'New Title!';
    console.log('chnage title by getElementById');
}

function showMessage() {
    //const message = document.querySelector('.message');
    const message = document.getElementsByClassName('message');
    alert(message.length);
    //alert(message[0].innerText);
}

function getbyTagName(tagName) {
    const message = document.getElementsByTagName(tagName);
    var text=document.getElementById('input-field').value;
    message[0].innerText = text;
    message[0].style.color = 'red';
    console.log('tag function called and innertext changed inputed text');
}

function changeTitle() {
    const title = document.getElementById('main-title');
    title.innerText = 'Hello World!';
    alert('Title changed!');
}
function backgroundcolorchangewithtag(tagname,colorname) {
    const message = document.getElementsByTagName(tagname);
    for (let i = 0; i < message.length; i++) {
        message[i].style.backgroundColor = colorname;
    }    
    console.log('background color changed to '+colorname+" and tagname is "+tagname); 
}

function backgroundcolorchange(colorname) {
    document.body.style.backgroundColor = colorname;
    console.log('background color changed to '+colorname);
}
