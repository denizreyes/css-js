document.getElementById('dropdown-icon').addEventListener('click', showDropdown);

let open = false;
function showDropdown(){
    if(!open){
        document.querySelector('.dropdown').style.display = 'flex';
        document.querySelector('.dropdown-head').style.display = 'block';
        document.getElementById('dropdown-icon').style.transform = 'rotate(180deg)';
        setTimeout(function(){
            document.querySelector('.dropdown').style.height = '200px';
            document.querySelector('.dropdown-head').style.height = '25px';
        });
        open = true;
    }else{
        document.querySelector('.dropdown').style.display = 'none';
        document.querySelector('.dropdown').style.height = '0';
        document.querySelector('.dropdown-head').style.display = 'none';
        document.querySelector('.dropdown-head').style.height = '0';
        document.getElementById('dropdown-icon').style.transform = 'rotate(0)';
        open = false;
    }
}