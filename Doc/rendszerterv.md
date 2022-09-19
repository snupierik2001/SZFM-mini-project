# Átváltó rendszerterv

## 1. A Rendszer célja

A rendszer célja, hogy a diákoknak, hallgatóknak ne okozzon problémát a számológép használatával.

A felhasználó kap egy számológép modellt, amin könnyen tudja használni a matematikai műveleteket.

A felület fontos hogy bárhol elérhető legyen, stabilan futhasson lokálisan is.

A rendszer az eredmény gyors kiszámításra is képes.

Az eredményt a felhasználó kitudja másolni és azzal tovább dolgozni.

## 2. Projektterv

A projekt HTML, CSS és JavaScript nyelveken fog készülni.

A fejlesztőcsapat saját eszközökön fogja fejleszteni az alkalmazást, illetve a későbbi tesztelés is először ezeken az eszközökön fog végbemenni.

A fejlesztőcsapat három fejlesztőből áll, akik a nekik a csapatvezető által kiosztott projektrészért, illetve az egyénileg létrehozott részek teszteléséért is felelnek.

Személyenkénti projektrészek:
| Név              | Felelősségkör                                                                    |
| ---------------- | -------------------------------------------------------------------------------- |
| Huang Shen Qi      | HTML                                                                   |
| Silaghi Dávid     | CSS                                                                              |
| Árva Sándor Máté     | JavaScript |

### Mérföldkövek

    [M-01] - Szerepek egyértelműsítése és a projekthez szükséges állományok létrehozása, valamint a fájlok összekapcsolása

    [M-02] - A HTML weblap kinézete illetve a reszponzivitás megléte

    [M-03] - A JavaScript funkcionalitás HTML oldalba integrálása

    [M-04] - Tesztelés

    [M-05] - Kész állapot


### Ütemterv

    1. [M-01]-ben megfogalmazott mérföldkő elérése, ehhez egy discord meeting, ahol a csapatvezető pontosan kiosztja a feladatokat, és pontos határidőket szab a részfeladatok elkészítésre

    2. [M-02]-ben megfogalmazott mérföldkő elérése, azaz a HTML és CSS fejlesztők nekilátnak az oldal kinézete és reszponzivitása kidolgozásának

    3. [M-03]-ban megfogalmazott mérföldkő elérése, azaz a HTML és JavaScript összekapcsolása

    4. Kész állapot elérésére törekvés, illetve tesztek végrehajtása

## 3. Üzleti folyamatok modellje

### 3.1 Folyamatábra
![Folyamatábra](/Images/folyamat_abra.png)

### 3.2 Erőforrások
- Weboldal megjeleítése egyes eszközön
- Lokális- vagy távoli hálózati kapcsolat

### 3.3 Bemenet:
- Matematikai műveletek és számok

### 3.4 Entitások:
- A számológépes weboldal

### 3.5 Kimenet:
- A diákoknak, hallgatóknak ismert megoldás

### 3.6 Folyamat:
Iskolai/Céges vagy Helyi szerver segítségével megjelenítjük a számológépet a weboldalra =>
Diák/Hallgató ki választ egy matematikai műveletet, ha jó a megoldás, akkor a folyamat véget ért. Ha nem, akkor =>
A számológép kidobja a hibát és a diák/hallgató ki törli a hibás üzenetet egy gomb nyomással =>
Kiválaszt egy matematikai műveletet és folytatja tovább a számolást.

### 3.7 Példák
#### 3.7.1 Példa 1:
A diák/hallgató hatványozni akar és az alap `2`, a kitevő meg `4` =>
Beírja a `2-est` és a hatványozás gomb megnyomása után beírja a `4-est` =>
Eredmény kiíratása.

#### 3.7.2 Példa 2:
A diák/hallgató `0-val` osztani akarja az `1-est` =>
Beírja az `1-est` és az osztás gomb megnyomása után beírja a `0-át` =>
Nem fog tetszeni a számológépnek, ezért hiba üzenetet fog kidobni =>
A diák/hallgató a törlés gombnyomással kitörli a hiba üzenetet és folytatja tovább a számolást.

## 4. Követelmények

### [K01] Hordozhatóság
    A hordozhatóság a hálózatra való kihelyezéssel vagy a helyileg elérhető fájlokkal fog megvalósulni.
### [K02] Reszponzív dizájn
    A reszponzivitás a HTML és CSS segítségével lesz megvalósítva.
### [K03] Rendszerfüggetlenség
    A rendszerfüggőség a különböző böngészőben való futattással lesz kiküszöbölve.
### [K04] Gyors működés
    Mivel böngészőben elérhető lesz az alkalmazás, így biztosítva van a gyors működés.
### [K05] Helyi adatfeldolgozás
    A számítások lokálisan, JavaScript-ben fognak futni.
### [K06] Pontos számítás
    A számítások a számítógép által lesznek elvégezve, így azok pontosak és konzisztensek lesznek.

## 5. Funkcionális terv

### 5.1. Az elkészítendő rendszer tulajdonságai
Egy weboldal, mely
* hordozható (statikus), hogy lokálisan is használni lehessen
* reszponzív, hogy mobil eszközökről is kényelmesen használható legyen

### 5.1. Rendszerszereplők
* Weboldal
* Szerver - kliens által biztosított

### 5.2. Rendszerhasználati esetek és lefutásaik

#### 5.2.1 Számológép használata
Legyen a weboldalon 0-9-ig számozott gombok [1], amik megnyomásával az eredmény jelzőn fognak számok megjelenni [4].
Továbbá legyenek műveleti gombok amik megnyomásával, a már beírt számon hajthatunk végre matematikai műveleteket [3].
Majd ha végeztünk a számok és a műveletek megadásával, akkor majd meg lehet nyomni a végeredmény gombot [2], amely ennek hatására kiírja az eredmményt.
![Számológép](/Images/Calculator.png)

#### 5.2.2 Példa: használati eset
Kezdjük a legegyszerűbb esettel mikor két nagy számot akarunk összeadni legyen ez 158776 és 544664. Először írjuk be a 158776-ot, utána válasszuk ki a nekünk megfelelő műveletett, ami az összeadás lesz. Ezekután beírhatjuk a 544664-et, majd ha már végeztünk és nem akarunk további műveleteket végezni akkor ahhoz, hogy megtudjuk az eredményünket meg kel nyomjuk az eredmény gombot. Miután megnyomtuk az eredmény gombot látjuk majd az eredmény jelzön meglátjuk a megfejtést, ami 703440 lesz.

## 6. Fizikai környezet
Az alkalmazás web platformra készül.
* Megvásárolt komponens nincs
* Kliens által biztosított eszközök:
    * Webszerver
* Fejlesztői eszközök:
    * Visual Studio Code
    * git
* Tesztelési környezet:
    * Microsoft Edge
    * Brave
    * Google Chrome

## 7. Architekturális terv
A rendszer alapja egy HTML, CSS és JavaScript fájlok lesznek.
A HTML és a CSS fájlok a megjelenítésért felelnek. A JavaScript-ben lesznek a matematikai függvények, amelyek a számításokat végzi majd.

Az alábbi képen lehet szemléltetni a rendszert:

![Folyamatábra](/Images/Architekturalis.png)

## 8. Implementációs terv
Nincsen szükség implementációs tervre, mert minden átlátható.

## 9. Adatbázis terv
Nincsen szükség adatbázis tervre, mert a programhoz nem szükséges.

## 10. Teszt terv

A teszt célja a számológép és egyes weboldal funkciók helyes működésének tesztelése, illetve a rendszer platformfüggetlenségéről való megbizonyosodás.

### Teszt jegyzet sablon
* Tesztelő neve:
* Tesztelt rendszer:
* Rendszer amin a teszt végbement:
* Kapott eredmény:
* Várt eredmény: 
* Teszt konkluzió: 
* Egyéb megjegyzés:

### Számológép helyességének tesztelése
A program megírása után előszőr azt fogják tesztelni, hogy működik-e a számológép.
A számológépet manuálisan fogják tesztelni a fejlesztők, ahol különböző matematikai műveleteket fognak használni.
Ha az eredmény megegyezik a várt eredményyel, akkor a teszt sikeresnek lesz elkönyvelve. Ellenkező esetben a teszt sikertelennek lesz elkönyvelve es a számológép hibás.

## 11. Telepítési terv
Kétféle módon van lehetőség használni, ebből adódóan pedig kétféle telepítési mód van.

### Online telepítés:
* A fájlok feltöltése egy weboldal hostolására alkalmas szerverre és az ehhez kapcsolódó beállítások elvégzése.
* Ezután a weboldal elérhető bármely webböngészővel (Microsoft Edge, Brave, Google Chrome, stb.).

### Offline telepítés:
* Weboldal fájljainak letöltése személyi eszközre, mint pl: számítógép.

## 12. Karbantartási terv
A weboldal egyszerűsége miatt nem igényel aktív karbantartást, elegendő a működés során felmerülő hibák javítása és alkalmankénti frissítés.
