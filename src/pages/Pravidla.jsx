import TableOfContents from "../components/TableOfContents.jsx";
import {useRef} from "react";

export default function Pravidla() {
    const contentRef = useRef(null);

    return (
        <>
            <main ref={contentRef}>
                <TableOfContents contentRef={contentRef}/>
                <section>
                    <h3>Všeobecné pravidlá</h3>
                    <ul>
                        <li>Počas akcie platia riadne zákony SR. Pri podozrení na ich porušenie budú oslovené
                            kompetentné orgány SR.
                        </li>
                        <li>Pre plynulý a bezpečný priebeh hry je nutné riadiť sa pokynmi organizátora.</li>
                        <ul>
                            <li>V prípade, že svojím problematickým chovaním bude hráč nebezpečný pre ostatných
                                účastníkov alebo priebeh akcie, vyhradzuje si organizátor právo vylúčiť jednotlivca
                                alebo celú jeho skupinu z akcie, bez nároku na vrátenie účastníckeho poplatku.
                            </li>
                        </ul>
                        <li><b>V skratke nebuďte hovada - neničte prírodu a majetok okolo seba, dbajte o zdravie
                            ostatných, ideálne aj to svoje, a riaďte sa tým, čo vám vraví organizátor.</b></li>
                        <br/>
                        <li>Minimálny vek pre účasť na akcii stanovujeme 18 rokov dovŕšených v deň konania akcie.</li>
                        <ul>
                            <li>Mladší účastníci len v sprievode zákonného zástupcu. Minimálny vek v sprievode zákonného
                                zástupcu nie je stanovený, silne dúfam v schopnosť rodiča posúdiť technickú spôsobilosť
                                svojej ratolesti účastniť sa našej akcie. Treba rátať s tým, že je tam riziko
                                zablúdených šípov, možno aj ranu mečom či zašlápnutie, ak nepochopí, že od boja sa treba
                                držať ďalej (ak sa účastní ako bojová postava, mečom určite dostane), a v neposlednom
                                rade je tam šanca, že sa priučí novým slovám.
                            </li>
                            <li>Ak by ste mali záujem o family friendly puzzle hunt, ktorý by bol čisto kategória
                                detí, a ste ochotní ho vymyslieť, kontaktujte Chlebíka, môžme to skúsiť prebrať.
                            </li>
                        </ul>
                    </ul>
                </section>
                <section>
                    <h3>Pravidlá hry</h3>
                    <ul>
                        <li>Hra má dve roviny - LARP, a šifrovačku.</li>
                        <ul>
                            <li><a href="https://sk.wikipedia.org/wiki/LARP">LARP</a> predstavuje časť hry, kde
                                účastníci stvárňujú svoje postavy, a so svojou družinou sa snažia splniť svoje úlohy a
                                ciele
                            </li>
                            <li>Mechanika, akou budú družiny dostávať informácie o ceste zo štartovnej do
                                cieľovej lokácie, je bežne označovaná pojmom <a
                                    href="https://cs.wikipedia.org/wiki/%C5%A0ifrovac%C3%AD_hra">Šifrovačka</a>. <br/>
                                V priebehu hry budú môcť členovia družiny zadávať do systému riešenia jednotlivých
                                šifier, aby si overili, že ju vyriešili správne, a zaznamenali čas, v ktorom ju
                                vylúštili. Výsledok šifry bude slovo, veta, súradnice, alebo iná informácia, ktorá vas
                                nasmeruje na miesto, kde nájdete ďalšiu šifru (alebo cieľ). Pre hladký priebeh bude teda
                                potrebné mať mobil s internetovým pripojením, prípadne offline mapy (silne doporučujem
                                mapy.cz).
                            </li>
                            <li>Nie je našim zámerom, aby družiny za každú cenu vyriešili všetky šifry, preto aby sme
                                predišli tomu, aby sa niektorá družina komplet zasekla, budeme v pravidelných
                                intervaloch zverejňovať ich riešenia.
                            </li>
                            <li>Náročnosť oboch herných rovín by mala byť nízka. Pod šiframi si môžete predstaviť niečo
                                jednoduché, typu sudoku, hádanky či slovné prešmyčky, možno cézarová šifra. LARPové
                                postavy sú jednoduché, a mimo základných medziľudských interakcii, ktoré na hre
                                podstúpite ako Vaša postava, by sa nemali ocitnúť v zložitých situáciach (morálne,
                                emocionálne, či akokoľvek inak zložitých...).
                            </li>
                        </ul>

                        <li>Hra začína 9:00 na lokácii určenej organizátorom, končí príchodom do cieľa určeného
                            organizátorom, alebo najneskôr 18:00. Po vyhlásení víťaza následuje utáborenie a nočná hra
                            pre hráčov, ktorí o ňu prejavia záujem
                        </li>
                        <li>Družine, ktorá sa nedostaví včas na štart, zaniká nárok na účasť v hre</li>
                        <li>Na hre rozlišujeme niekoľko typov účastníkov:</li>
                        <ul>
                            <li>Hráč - účastník akcie, ktorý bol riadne registrovaný, je členom družiny, a hra hru
                                pripravenú organizátormi
                            </li>
                            <li>NPC - účastník stvárňujúci postavu, ktorá dotvára hru informáciami, predmetmi, či
                                chovaním, ktoré mu bolo vopred dané
                            </li>
                            <li>Creep - slúžia na bojové strety, môžu stvárniť rôznych nepriateľov od lapkov
                                až po monštrá, ktoré nepôjde poraziť triviálnym spôsobom
                            </li>
                        </ul>
                    </ul>
                </section>
                <section>
                    <h3>Družiny</h3>
                    <ul>
                        <li>Družinou rozumieme najmenšiu jednotku, v akej je možné účastniť sa akcie.</li>
                        <li>Skladá sa zo 4 až 5 hráčov, a má svojho veliteľa. Každý člen družiny je absolútne oddaný
                            družine a poslušný jej veliteľovi.
                        </li>
                        <li><b>Počas hry je zakázané rozdeľovať sa vrámci družiny, meniť členov či veliteľov.</b></li>
                        <li>Lore/Background má v prvom rade družina, background postavy nie je povinný.</li>
                        <li>Družiny môžu byť bojové, či nebojové. Nebojové družiny budú viditeľne označené, nesmú byť
                            ozbrojené, a je zakázané ich napádať.
                        </li>
                    </ul>
                </section>
                <section>
                    <h3>Postavy</h3>
                    <ul>
                        <li>Postavou rozumieme fiktívnu osobu zasadenú do herného sveta, ktorú hráč stvárňuje počas
                            akcie.
                        </li>
                        <li>Každá postava <b>musí</b> byť vrámci registrácie schválená organizátorom.
                        </li>
                        <li>Každá hráčska postava <b>musí</b> byť členom nejakej družiny, v ktorej sa bude pohybovať a
                            fungovať
                            počas celej akcie.
                        </li>
                        <li>Každá hráčska postava stvárňuje nejaké Povolanie - viď sekcia povolania.
                        </li>
                        <li>Postava <b>môže</b> mať napísaný background - jej históriu, príbeh, motivácie či ambície.
                        </li>
                    </ul>
                    <h4>Kostým a zbrane</h4>
                    <ul>
                        <li>Súčasťou postavy je aj kostým hráča, ktorý dotvára fantasy svet akcie, a dáva prvý dojem o
                            tom, čo je postava zač.
                        </li>
                        <li>Obecne platí pravidlo "je lepšie mať dobrý kostým sedliaka, než zlý kostým rytiera".
                        </li>
                        <li>Pokiaľ je postava bojová, môže si priniesť na akciu aj LARPové zbrane. Tými rozumieme
                            zbrane, ktoré majú pevné jadro, na ktorom je vrstva mäkčenia, zmierňujúca tvrdosť zásahov a
                            teda predchádzajúca zraneniam. Podrobnejšie info v sekcii <a href="#bzz">Boj, Zbrane a
                                Zbroje</a>.
                        </li>
                    </ul>
                    <h4>Kostýmové minimum</h4>
                    <ul>
                        <li>Akciu mienime ako priateľskú pre začiatočníkov, a teda nevyžadujeme žiadne premakané
                            kostýmy. Úplne minimalistickým kostýmom môže byť proste tričko, nohavice a topánky
                            prírodných farieb, bez kriklavých prvkov či potlače, prípadne plachta s dierou na hlavu,
                            ktorú zviažete opaskom okolo pása. Pokiaľ ste v tomto hobby úplne noví a
                            neviete si poradiť s kostýmom, obraťte sa na organizátorov či FB event, poradíme, odkážeme
                            vás ďalej, s trochou šťastia vám aj vybavíme nejaké kusy kostýmu.
                        </li>
                        <li><b>Absolútnym základom sú vždy pevné a prechodené topánky. Terén bude prevažne nespevnená
                            cesta
                            lesom či lúkou, s prevýšením, podvrtnuté členky, kolená, alebo otlaky vás vedia vyradiť z
                            akcie veľmi rýchlo.</b>
                        </li>
                        <li><i>Neexistuje špatné počasí, jenom špatně vybavený člověk</i> - v prípade dažďa či iného
                            extrémneho počasia akciu samozrejme zrušíme, ale byť pripravený na nehlásenú prietrž či
                            chladné počasie sa oplatí vždy - mať so sebou pršiplášť, deku, a extra vrstvy oblečenia je
                            zodpovedné rozhodnutie. Vybavenie, ktoré si takto beriete na cestu so sebou, je
                            najjednoduchšie niesť v žobradle (ktoré je fakt jednoduché na ušitie),
                            zamotané do deky, ktorú prehodíte cez rameno, prípadne v krosne. Moderné batohy prosím aspoň
                            prehoďte plachtou alebo kusom látky, nech to nie je pasca na oko.
                        </li>
                    </ul>
                    <h4>Povolania</h4>
                    <ul>
                        <li>Povolanie je kategorický popis toho, aké schopnosti postava má, čo za dobrodruha je, a aký
                            život viedla doteraz. Rozlišujeme 4 základné typy:
                        </li>
                        <ol>
                            <li>Bojovník</li>
                            <ul>
                                <li>postava zbehlá v boji. Do začiatku má +1 život</li>
                                <li>nemá obmedzenie na zbrane a zbroje</li>
                            </ul>
                            <li>Klerik</li>
                            <ul>
                                <li>postava schopná použiť moc, ktorú jej dalo jej božstvo</li>
                                <li>najrozšírenejším náboženstvom je Cirkev Otca a Matky, so symbolmi slnka a holubice,
                                    klerici tohto božstva pridajú dvom členom svojej skupiny +1 život
                                </li>
                                <li>bojová skupina môže mať max. 1 klerika. Pokiaľ chce klerik slúžiť inému náboženstvu,
                                    musí byť vodcom družiny, a prebrať svoju postavu s organizátorom
                                </li>
                                <li>nemá obmedzenie na zbrane a zbroje</li>
                            </ul>
                            <li>Učeň</li>
                            <ul>
                                <li>postava, ktorá zasvätila svoj život štúdiu, často hľadajú alternatívy, ktoré by
                                    mohli nahradiť mesačnú mágiu
                                </li>
                                <li>nádejná škola mágie je elementálna mágia, ktorú sem priniesli mudrci z Dalgaru</li>
                                <li>disponujú jedným až dvoma kúzlami</li>
                                <li>používajú len krátke zbrane, nemajú zbroje. Epické mágovské palice vítané</li>
                            </ul>
                            <li>Sedliak</li>
                            <ul>
                                <li>nebojová postava. Každá armáda je len tak silná, ako jej zásobovanie, prostý ľud si
                                    to odmaká vždy najviac. Obchodníci, cetkári, klampiari, farmári.... že nie ste
                                    bojoví ešte neznamená, že nemôžete byť zaujímaví :)
                                </li>
                            </ul>
                        </ol>
                    </ul>
                </section>
                <section>
                    <h3 id="bzz">Boj, Zbrane a Zbroje</h3>
                    <ul>
                        <li>Boj je jedna z hlavných mechaník, na ktorých je postavená naša hra. K nemu slúžia zbrane,
                            štíty a zbroje, ktoré sú uspôsobené k zamedzeniu zranení. U zbraní obecne platí, že časť
                            zbrane, ktorou hráč útočí a seká, musí byť dostatočne mäkčená na to, aby obranca nedostal
                            ranu pevným jadrom zbrane, obvykle sa udáva 2-3cm mäkčenia na čepeli meča, u kopie to býva
                            aspoň 5cm mäkčenia na hrote, ale každú zbraň posudzujeme samostatne. Zabehnutým štandardom
                            sú zbrane od <a href="https://www.fakesteel.cz">Fakesteel</a>, prípadne lacnejšia varianta
                            sú zbrane z <a href="https://hurka.uhobitu.cz">Hůrky</a>.
                        </li>
                        <li>
                            Bez ohľadu na to, čo za zbraň držíte, treba vždy myslieť na to, že je jedno, ako moc je
                            mäkčená, stále za ňou dá ublížiť. Dobrá rana vie poslať človeka k zemi, naraziť kĺb či
                            urobiť modrinu na pár dní, preto je nutné zásahy adekvátne tlmiť.
                        </li>
                    </ul>
                    <h4>Výzva k boju</h4>
                    <p>Je zakázané bez varovania útočiť na iné družiny - dobrodruhovia Aggalionu ešte nezabudli, ako sa
                        biť so cťou a úctou voči svojim oponentom. Ak teda chcete iniciovať boj, niekto z vašej družiny
                        (pravdepodobne veliteľ) predstaví seba a svoju družinu, a prednesie výzvu k boju:
                    </p>
                    <blockquote>"Ja, Chlebo III., mrhač pšenice čo mohla byť pivom, kapitán Dobrodruhov s hendikepom,
                        vyzývam vás k súboju!"
                    </blockquote>
                    <p>Na takúto môžu byť tri typy reakcii:</p>
                    <blockquote>"1) Som Rohlík z Rohlenky, vodca Modrých plášťov, a tvoju výzvu príjmam!"</blockquote>
                    <p>Nájdete si pekné miesto, a pustíte sa do akcie. Víťazná družina získa nápovedu družiny, ktorá
                        prehrala. Navyše sa môže porazená družina rozhodnúť, že víťazov obdarí nejakou cennosťou, za ich
                        chrabrosť, zručnosť, či iné cnosti.
                    </p>
                    <br/>
                    <blockquote>2) "Svorní chlapci odmietajú tvoju výzvu"</blockquote>
                    <p>Je tenká čiara medzi odvahou a hlúposťou, avšak tí chytrí ju vidia veľmi jasne. Občas nemá boj
                        zmysel, a teda neostáva, než ho odmietnuť. V takom prípade družina, ktorá súboj odmietla, musí v
                        hanbe ostať stáť 5 minút na mieste, kde sú, a nechať vyzývateľov, aby ich predbehli.
                    </p>
                    <br/>
                    <blockquote>3) "Nemáš na viac, než mlátiť prostý ľud?"</blockquote>
                    <p>Vyzývať nebojové skupiny pozostávajúce zo sedliakov a remeselníkov fakt nie je chovanie hodné
                        dobrodruha. Nič sa nedeje, obe družiny pokračujú svojou cestou.
                    </p>
                    <h3>Prepad</h3>
                    <p>Keby boli všetci iba dobrí a čestní.... bola by to nuda, že ano? <br/>
                        Pokiaľ chce družina nastrojiť pascu, a zaútočiť s výhodou na inú družinu, môže ju prepadnúť. Ak
                        sa družina skryje pri ceste tak, že si ju iná okoidúca družina nevšimne, môžu momente, ako
                        prejdú okolo, ohlásiť <i>"PREPAD!"</i>. Prepadnutá družina bude mať v tomto boji nevýhodu -
                        každá
                        bojujúca postava v tejto družine má práve 1 život, neaplikujú sa na ňu žiadne výhody a bonusy.
                        Brániaca sa skupina musí zakričať odpoveď, ktorou potvrdí, že je pripravená k boju; <i>"Bránte
                            sa!"</i>
                        alebo <i>"Na nich!"</i> úplne stačí. <br/>
                        Ak si družina všimne iných hráčov, a chce predísť tomu, aby boli prepadnutá, taktne ich upozorní
                        na to, že o nich vie, a že sa necítia z ich chovania komfortne. Podstatné je, aby bola brániaca
                        sa skupina tou, ktorá iniciuje konverzáciu, výzvu, a podobne:</p>
                    <blockquote>"Hej ty tam, vylez tej húštiny, a ukáž svoju tvár!".</blockquote>
                    <h4>Životový systém</h4>
                    <p>Každá postava má nejaký počet "životov", predstavujúci počet zranení, ktoré môže utŕžiť, než je
                        vyradená z boja. Vzáklade má každá postava 1 život, životy navyše udeľujeme za kostým, či zbroj.
                        Pokiaľ chcete odhad počtu životov predom, môžete nám poslať fotku kostýmu, dáme vám vyjadrenie.
                        Za dobrý kostým bude možné dostať až 2 body životov navyše, za zbroj potom ďalšie 2. Hráč v
                        premakanom kostýme a v ťažkej zbroji teda môže mať až 5 životov.
                    </p>
                    <h4>Koniec boja, smrť, útek</h4>
                    <p>Pri boji treba myslieť na základne pravidlo, že sa družina nesmie rozdeliť. Taktický ústup či
                        útek je možný len do momentu, kedy padne prvý člen družiny, potom je možné bojovať len pri ňom,
                        a zaniká možnosť úteku. Boj končí, keď sa jedna družina vzdá, alebo keď nemá bojaschopné
                        postavy. Postava prestáva byť bojaschopnou, keď počet jej životov klesne na 0.
                    </p>
                    <p>Dobrou správou je, že postavy na tejto hre neumierajú. Sú to predsalen statní hrdinovia, ktorí
                        čosi vydržia. Po tom, čo je skupina porazená, odovzdá svoju nápovedu súperovi, a nechá ich ísť
                        napred. Potrvá im zhruba 10 minút ošetriť si zranenia, doplniť sily a vydať sa ďalej na cestu.
                        Naopak víťazná strana pozbiera svojich ranených, ale je schopná pokračovať v pochode okamžite.
                    </p>
                    <h4>Zásahové plochy</h4>
                    <p>Hráme na tzv. "dlhý neoprén". Zásahová plocha je teda celý trup, ruky od ramien po zápästia a
                        nohy od panvy k pätám. Triafať hlavu a rozkrok je zakázané... zásah síce okamžite vyhrá duel, a
                        občas to tam proste padne, ale ak na vás budú pravidelne sťažnosti, môže to viesť až k vylúčeniu
                        z akcie.
                    </p>
                    <h4>Rudá stop</h4>
                    <p>Mimo zbraní samotných vie byť nebezpečný aj terén, v ktorom bojujete. Aj u nás teda platí obecne
                        používané pravidlo "RUDÁ STOP", kde zakričaním týchto slov (často stačí len STOP) zastavíte hru,
                        aby ste predišli zraneniu, prípadne vyriešili, že sa niekomu niečo stalo. Obdobne, ak počujete,
                        že niekto kričí "RUDÁ STOP", ste povinní prestať hrať, a zistiť, čo sa deje, prípadne pomôcť
                        akokoľvek ste schopní.
                    </p>
                    <h4>Zbrane</h4>
                    <p>Rozlišujeme štyri typy zbraní:</p>
                    <ol>
                        <li><b>Strelné a vrhacie</b></li>
                        <ul>
                            <li>Luky a kuše s náťahom do 15 kg</li>
                            <li>Projektily ošetrené letkou, bambula s priemerom aspoň 5cm</li>
                        </ul>
                        <li><b>Príručné</b> - dýky a tesáky do 60cm - <b>jediný typ zbraní povolený na nočný boj</b>
                        </li>
                        <li><b>Krátke</b> - zbrane do 90cm</li>
                        <ul>
                            <li>Kombinácie dvoch krátkych zbraní sú povolené</li>
                        </ul>
                        <li><b>Dlhé</b> - zbrane nad 90cm, do 200cm</li>
                        <ul>
                            <li>Zbrane sú buď bodné, sečné, alebo pádne, nie kombinácie - halapartne sú teda zakázané,
                                nízku šancu na schválenie majú tiež zbrane na reťazi (cepy či řemdihy)
                            </li>
                        </ul>
                    </ol>
                    <h4>Štíty</h4>
                    <ol>
                        <li><b>Malé</b> - najväčší namerateľný rozmer 60cm (priemer u okrúhlych štítov, uhlopriečka u
                            hranatých)
                        </li>
                        <li><b>Veľké</b> - nad 60cm. Hráč s veľkým štítom <b>musí mať helmu</b>, a ráta si hlavu ako
                            zásahovú plochu
                        </li>
                    </ol>
                    <h4>Zbroje</h4>
                    <ol>
                        <li><b>Ľahké</b> - prešívaná alebo kožená zbroj chrániaca väčšinu tela, pridá +1 život</li>
                        <li><b>Ťažké</b> - kovová zbroj (krúžky, šupiny, pláty) chrániaca väčšinu tela, pridá +2 životy
                        </li>
                        <ul>
                            <li>Vzhľadom na kondičnú náročnosť akcie, silne nedoporučujeme ťažké zbroje :)</li>
                        </ul>
                    </ol>
                </section>
            </main>
        </>
    )
}