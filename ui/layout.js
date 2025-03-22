if (screen.width <= 500) {
    if (theme == 'light') GTG_applyRippleEffect('button', 'rgba(0, 0, 0, 0.1)');
    if (theme == 'dark') GTG_applyRippleEffect('button', 'rgba(255, 255, 255, 0.1)');
}
else {
    document.getElementById('skymod').style.width = '100%';
    document.getElementById('usage').style.width = '100%';
}
if (screen.width > 600){
    document.getElementById('skymod').style.width = '300px';
    document.getElementById('usage').style.width = '300px';
    document.getElementById('skymod').classList.add('card')
    document.getElementById('usage').classList.add('card')
}
