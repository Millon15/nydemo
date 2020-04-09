# nydemo
#### New year javascript demo with wishes


 I decided to relax, remember ZX speccy and slightly refresh JS ...
 Each point of the scroller is an element of space with its own properties: coordinates, state.
 Points of scroller are static, there is a scroll of states.
 All states are reflected in the real visible properties of the DOM.
 It is important that the 'reflow' is triggered in the browser.
 Before scrolling, each character is mapped to a bitmap from the library of 8-bit fonts.
 After that, it is bitwise taken into the array and transferred to the column with the extreme right coordinates of the scroller.
 Approximately how it is done when copying from the register of flags (overflow bit) when scrolling the Z80 Accumulator register on ZX Speccy.
 For saving memory and acceleration, space points methods moved to prototype.

To run you need to just clone and open the `index.html` or go to the https://millon15.github.io/nydemo/

Sound by *-=Dubmood=-*(2003): http://www.pouet.net/user.php?who=2100

8 Bit ZX graphic art: based on picture by *-=TeeRay=-*(1997): https://zxart.ee/eng/authors/t/teeray/
