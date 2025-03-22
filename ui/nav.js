let nav_parent = document.getElementById('nav');
// console.log(screen.width);
let is_menu_open = false;
if (screen.width < 400){
    // load for android
    nav_parent.innerHTML = `
        <nav>
            <logo>Skylinespark</logo>
            <div id='nav-opt'>
                <button id='theme-btn' onclick='change_theme()'>
                    🌗︎
                </button>
                <button id='menu-btn' onclick='menu()'>
                    ⋮
                </button>
            </div>
        </nav>
    <div id='nav-opt-out'>
        <button onclick='window.open("/")'> Home </button>
        <button onclick='window.open("/products/");'> Products </button>
        <button onclick='window.open("/pages/")'> Pages </button>
    </div>
    `;


    // document.getElementById('menu-btn').addEventListener('click', ()=>{
    //     if (is_menu_open === false) {
    //         document.getElementById('nav-opt-out').style.display = 'block';
    //         document.getElementById('nav-opt-out').style.opacity = 1;
    //         is_menu_open = true;
    //     }
    //     if (is_menu_open) 
    //         document.getElementById('nav-opt-out').style.opacity = 0,
    //         document.getElementById('nav-opt-out').style.display = 'none',
    //         is_menu_open = false;

    //     console.log (is_menu_open)
    // });
}
else {
    // console.log (screen.width)
    // load for pc
    nav_parent.innerHTML = `
        <nav>
            <logo>Skylinespark</logo>
            <div id='nav-opt'>
                <button class='page' onclick='window.open("/")'> Home </button>
                <button class='page' onclick='window.open("/products/");'> Products </button>
                <button class='page' onclick='window.open("/pages")'> Pages </button>
                <button class='page' onclick='change_theme()'> 🌗︎ </button>
            </div>
        </nav>
    `;
}



function menu(){
    if (is_menu_open === false){
        is_menu_open = true;
        document.getElementById('nav-opt-out').style.height = 'auto';
        document.getElementById('nav-opt-out').style.opacity = '1';
    }
    else if (is_menu_open){
        is_menu_open = false;
        document.getElementById('nav-opt-out').style.height = '0px';
        document.getElementById('nav-opt-out').style.opacity = '0';
    }
}



let theme = '';
if (localStorage.getItem('theme') != null){
    theme = localStorage.getItem('theme')
}
else theme = 'light', localStorage.setItem('theme', 'light');

console.log (theme);


document.getElementById('theme').href = `/config/theme/theme-${theme}.css`;


function change_theme (){
    if (theme == 'light'){
        document.getElementById('theme').href = '/config/theme/theme-dark.css';
        theme = 'dark';
        localStorage.setItem ('theme', theme);
        // GTG_applyRippleEffect('button', 'rgba(255, 255, 255, 0.1)')
    }
    else if (theme == 'dark'){
        document.getElementById('theme').href = '/config/theme/theme-light.css';
        theme = 'light';
        localStorage.setItem ('theme', theme);
        // GTG_applyRippleEffect('button', 'rgba(0, 0, 0, 0.1)')
    }
}