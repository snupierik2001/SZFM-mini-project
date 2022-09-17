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
- Diákok, hallgatók

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

### 3.7 Folyamatábra
![Folyamatábra](/Images/folyamat_abra.png)

### 3.8 Példák
#### 3.8.1 Példa 1:
A diák/hallgató hatványozni akar és az alap `2`, a kitevő meg `4` =>
Beírja a `2-est` és a hatványozás gomb megnyomása után beírja a `4-est` =>
Eredmény kiíratása.

#### 3.8.2 Példa 2:
A diák/hallgató `0-val` osztani akarja az `1-est` =>
Beírja az `1-est` és az osztás gomb megnyomása után beírja a `0-át` =>
Nem fog tetszeni a számológépnek, ezért hiba üzenetet fog kidobni =>
A diák/hallgató a törlés gombnyomással kitörli a hiba üzenetet és folytatja tovább a számolást.