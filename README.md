# A jegyszámítóról

A programot elsősorban azért hoztam létre, mert sokszor több percet kellett számolgatnom egy-egy dolgozat előtt, hogy legalább milyen jóra kell megírnom ahhoz, hogy egy bizonyos érték felett maradjon az átlagom.

Ezt a feladatot hivatott elvégezni a jegyszámító, amellyel könnyedén nyomon követheted az átlagaid alakulását, és előre tudod majd, hogy milyen eredményt kell elérned, hogy meglegyen az áhított átlag.

# A program használata

A jegyszámító tiszta JavaScriptre épül, így elméletileg a teljes oldal letöltése után lokálisan is használható.

Tantárgy hozzáadása
-------------------
A táblázat legalsó sorában egy bemeneti mezőt találunk `új tantárgy neve` szöveggel, ebbe beírva a tantárgy nevét, majd a `+` gombra kattintva az új sor megjelenik a táblázatban.

Jegy hozzáadása
---------------
A táblázatban minden tantárgy sorában a jegyek mellett találunk egy `+` gombot, erre kattintva lehet az adott tantárgyhoz egy új jegyet hozzáadni.

Jegy módosítása
---------------
A táblázatban bármely jegyre kattintva a táblázat alatt megjelenik egy kis űrlap, melyben a jegy adatait módosíthatjuk, vagy ki is törölhetjük azt.

Bemeneti szöveg írása
---------------------
Ha valaki gyorsabb módszernek gondolja a bemeneti szöveg megírását a kattintgatásnál, erre is van lehetőség. A szintaktikája meglehetősen egyszerű, a tantárgy neve után egy kettőspont következik, ezt követően pedig szóközzel elválasztva a jegyek. A jegyek a következő formátumban kerülnek megadásra: először a jegy típusának kezdőbetűje, majd a jegy értéke. Az egyes tantárgyi szekciók egy `|` jellel vannak elválasztva. Minderre egy példa:

    földrajz: v3 n3 k2 | matematika: t3 d4 t3/4 | történelem: k1 n4 t3

(Megjegyzés: az utolsó tantárgy után opcionálisan írható egy lezáró `|` is).
