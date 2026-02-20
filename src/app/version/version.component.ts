import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-version',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="screen">
      <h2>Wersja</h2>
      <p>Informacje o wersji aplikacji. (Placeholder)</p>
      <div>Misja apki:</div>
      <div>Nie chodzi o produktywność, a o ulżenie głowie :)</div>
      <div>
        Większość zakłada planowanie z wyprzedzeniem, dyscyplinę, konsekwencję,
        deadline'y, serie itp.
      </div>
      <div>
        Tu byśmy chcieli wejść w motto że czasami wystarczy zrobic jedną małą
        rzecz. I być z siebie zadowolonym.
      </div>
      <div>Wyróżniki:</div>
      <div>
        Fokus na tu i teraz, jeden główny widok, brak przeładowania, miliona
        filtrów i chaosu wizualnego.
      </div>
      <div>
        Nie zarządzamy całym życiem, pomagamy zrobić następny krok (ewentualnie
        do rozszerzenia: 3 różne moduły, właśnie takie na konkretny dzień +
        średni na tydzień + high level na kwartał np).
      </div>
      <div>
        Zachęta do rozbijania zadać, jaka jest najmniejsza rzecz, którą możesz
        zrobić, zamiast wielkiego projektu.
      </div>
      <div>
        Żadnych "kar w stylu strike'ów", "czerwonych alarmów" itp. SKupiuenie na
        tym że mały progres też sie liczy.
      </div>
      <div>
        Spokojna kolorystyka, brak agresywnych badge'y, brak czerwieni jako
        koloru głównego :D
      </div>
      <div>Jedna akcja główna (+).</div>
      <div>
        W wersji na telefon: lista, postęp, dodaj zadanie i koniec! W sumie może
        na desktop też...
      </div>
      <div>Brak kanbana (to juz za dużychaos).</div>
      <div>
        "Zdejmij to z głowy" a nei "zró więcej" -> róznica w komunikacji.
      </div>

      <div>Pomysły na teraz:</div>
      <div>
        1) Rozbijanie wbudowane we flow a nie jako ukryta opcja: po kliknięćiu w
        zadanie jakiś przycisk: "Zbyt duże?" Po kliknięciu: Jaka jest
        najmniejsza rzecz, którą możesz zrobić teraz?" i jakies miukrokori,
        subtaski.-3- max 5 mikrokroków, bez zbyt chaotycznego rozbijania.
      </div>
      <div>
        2) Tryb zrób jedną rzecz, jakby "Focus mode" Przycisk, pokaż mi jedną
        rzecz. Apka mogłaby wybierac losowo zadanie i pokazywać je w izolowanym
        widou, bez list filtró itp. Tytuł, mikro-korki, przycisk ZROBIONE.
      </div>
      <div>
        3) Wsparcie w moemncie paraliżu: "Nie wiem od czego zacząć" -> losuje
        jedno małe zadanie albo najłatwiejsze albo najkrótsze i dajemy komunikat
        jakiś uspokajający xd
      </div>
      <div>
        4) Po zapisaniu, ok o tym możesz już nie myśleć lub opcja "czy coś w
        zwiazku z tym jeszcze musimy zrobić później?"
      </div>
      <div>
        5) Zamaist 'rejected' czy 'odrzucone' dajmy "to nie aż tak ważne,
        odpuszczam"
      </div>
      <div>
        6) Alerty przy 3+ zadaniu coś w stylu "Na pewno musisz zrobić tego aż
        tyle? Wszystko to jest na dzisiaj? Nic nie może zaczekać?" + może jakieś
        samouczki priorytetyzowania jako tooltip lub oddzielny modal. Limity
        przy 5+ na przykład? Komunikat: „Masz już dużo na głowie. Może coś
        najpierw domkniemy ?”
      </div>
      <div>
        7) Statystyki bez oceniania, skupienie sie na tym co zrobione a nie co
        zostało : )
      </div>
      <div>8) Mikro-feedbacki</div>
    </section>
  `,
  styleUrls: ['./version.component.css'],
})
export class VersionComponent {}
