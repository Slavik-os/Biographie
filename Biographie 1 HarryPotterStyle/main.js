var dropdown = document.getElementById('DropDown');
var dropLinks = document.getElementById("nav-items");
dropdown.addEventListener('click' ,()=>{
    if (dropLinks.style.display=='flex') {
        dropLinks.style.display='none';
    }
    else {
        dropLinks.style.display='flex';
    }
});