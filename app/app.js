/**
 Created by Eugene Anufriev (2019) https://www.linkedin.com/in/eugene-anufriev-521b347b/
 Sound by -=Dubmood=- (2003): http://www.pouet.net/user.php?who=2100
 8 Bit ZX graphic art: based on picture by -=TeeRay=- (1997): https://zxart.ee/eng/authors/t/teeray/

 I decided to relax, remember ZX speccy and slightly refresh JS ...
 Each point of the scroller is an element of space with its own properties: coordinates, state.
 Points of scroller are static, there is a scroll of states.
 All states are reflected in the real visible properties of the DOM.
 It is important that the 'reflow' is triggered in the browser.
 Before scrolling, each character is mapped to a bitmap from the library of 8-bit fonts.
 After that, it is bitwise taken into the array and transferred to the column with the extreme right coordinates of the scroller.
 Approximately how it is done when copying from the register of flags (overflow bit) when scrolling the Z80 Accumulator register on ZX Speccy.
 For saving memory and acceleration, space points methods moved to prototype.
 **/

let audio = document.getElementById('coolstuff');
let string = '             ▁▂▃▄▅▆▇█▁▂▃▄▅▆▇█▁▂▃▄▅▆▇█▞▚▞▚▞▚▞▚▞▚▞▚▞▚▞▚▞▚▞▚ ⑨ ⑧ ⑦ ⑥ ⑤ ④ ③ ② ① ⓪ ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ ' +
    'It`s time to start New Year wishes to all my friends, collegues and just acquaintances !'  +
    '▁▂▃▄▅▆▇█▁▂▃▄▅▆▇█▁▂▃▄▅▆▇█▞▚▞▚▞▚▞▚▞▚▞▚▞▚  Thanks to every person that interact with me during ②⓪①⑨ in any kind ! '+
    '▁▂▃▄▅▆▇█▁▂▃▄▅▆▇█▁▂▃▄▅▆▇█▁▂▃▄▅▆▇█▞▚▞▚▞▚▞▚▞▚▞▚ Hope you have had a lot of FUN from your personal challanges, independent of result`s (it`s not a final day !). ' +
    '▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ ' +
    'Let`s remember good mood in 2019! On my side it`s so simple with gift project named MobiGift (WalletFactory) and my family.' +
    ' ██████████████  Oh, and your support of course ! ██████████████' +
    ' Wish You all all the best ! New Horizons in ②⓪②⓪ ! Abilities to reach your new lines ! ▁▂▃▄▅▆▇█▁▂▃▄▅▆▇█▁▂▃▄▅▆▇█' +
    ' Will be happy in ②⓪②⓪ ! ▞▚▞▚▞▚▞▚▞▚▞▚▞▚▞▚▞▚▞▚▞▚▞▚▞▚▞▚▞▚▞▚▞▚▞▚▞▚▞▚' +
    ' Все буде Українa ! Ψ Ψ Ψ Ψ Ψ   ' +
    '▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒◢◣◤◥◢◣◤◥◢◣◤◥◢◣◤◥◢◣◤◥◢◣◤◥◢◣◤◥◢◣◤◥◢◣◤◥▚▞▚▞▚▞▚▞▚▞▚▞▚▞▚▞▚▞▚▞' +
    '◢◣◤◥←∄∓ √⊄¿⎙⑀ █████████████████████████████████████████████                    ';



let scroller = new Scroller('scroller', 'scroller', string);

document.getElementById('start').addEventListener("click", function () {
    scenario();
}, false);

function scenario() {
    // start music and show stuff
    audio.play();
    audio.volume = 0.4;
    document.getElementById('start').style.display = 'none';
    document.getElementById('main').style.visibility = 'visible';
    // prepare scroller
    scroller.fillMap();// fill scroller bitmap by points
    scroller.mapper.fillMap();// fill source bitmap by points
    makeHandlers();
    setTimeout('scrollerTransformer()', 5700);
    scroller.runTime(); // run scroller
    setTimeout('startRotator()', 25100); // start yoba bitmap rotator !
}

function makeHandlers() {
    // 'click on scroll pixel' effect handler
    let pixels = document.getElementsByClassName('default');
    for (let i = 0; i < pixels.length; i++) {
        pixels[i].addEventListener("click", function () {
            scroller.onSpace(this.id);
        }, false)
    }
}

function scrollerTransformer() {
    scrollerTransform();
}

function startRotator() {
    document.getElementById('bitmap').style.visibility = 'visible';
    rotatorMove();
}