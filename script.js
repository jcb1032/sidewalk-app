function ent(e) {
    var tx = document.querySelector('#txt');
    if (e.keyCode === 13) {
        document.querySelector('#content').innerHTML += `<div class='bubble bubble-right color-green'><p class='bubble-txt'>${tx.value}</p><p class='bubble-timestamp'>${new Date().getHours() }:${new Date().getMinutes()}</p></div>`;
        document.querySelector('#content').scrollBy({
            top: 999,
            left: 0,
            behavior: 'smooth'
        });
        tx.value = '';
    }
}
document.onkeyup = ent;
