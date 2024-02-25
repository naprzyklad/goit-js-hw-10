Żądania HTTP

Skorzystaj z publicznego The Cat API. Aby rozpocząć pracę, musisz się zarejestrować i uzyskać unikalny klucz dostępu, który należy dołączać do każdego żądania. Wejdź na stronę główną i poniżej kliknij przycisk Signup for free. Postępuj zgodnie z instrukcjami, a klucz zostanie wysłany na podany adres e-mail.
Musisz użyć klucza w nagłówku HTTP X-api-key. Zalecamy wykorzystanie axios i dodanie nagłówka dla wszystkich żądań.
import axios from "axios";
axios.defaults.headers.common["x-api-key"] = "твой ключ";


Kolekcja ras

Podczas ładowania strony powinno zostać wykonane żądanie HTTP w celu uzyskania kolekcji ras. Aby to zrealizować, należy wykonać żądanie GET do zasobu https://api.thecatapi.com/v1/breeds, który zwraca tablicę obiektów. W przypadku pomyślnego żądania, należy wypełnić select.breed-select opcjami tak, aby value opcji zawierało id rasy, a interfejs użytkownika wyświetlał nazwę rasy.
Napisz funkcję fetchBreeds(), która wysyła żądanie HTTP i zwraca obietnicę z tablicą ras - wynikiem żądania. Umieść ją w pliku cat-api.js i dokonaj nazwanego eksportu.



Informacje o kocie

Gdy użytkownik wybierze opcję w select, należy wykonać żądanie o pełnych informacjach o kocie do zasobu https://api.thecatapi.com/v1/images/search. Nie zapomnij podać w tym żądaniu parametru ciągu zapytania 'breed_ids' z identyfikatorem rasy.
Tak wyglądałby adres URL żądania pełnych informacji o psie według identyfikatora rasy.
https://api.thecatapi.com/v1/images/search?breed_ids=identyfikator_rasy
Napisz funkcję fetchCatByBreed(breedId), która oczekuje identyfikatora rasy, wykonuje żądanie HTTP i zwraca obietnicę z danymi o kocie - wynikiem żądania. Umieść ją w pliku cat-api.js i dokonaj nazwanego eksportu.
Jeśli żądanie zostanie pomyślnie wykonane, pod listą rozwijaną (select), w bloku div.cat-info pojawi się obraz oraz szczegółowe informacje o kocie: nazwa rasy, opis i temperament.


Obsługa stanu ładowania

Dopóki trwa jakiekolwiek żądanie HTTP, powinna być wyświetlana animacja ładowania - element p.loader. Gdy nie ma żadnych żądań lub gdy żądanie zostało zakończone, animację ładowania należy ukryć. W tym celu użyj dodatkowych klas CSS.
    Podczas wykonywania żądania listy ras, należy ukryć select.breed-select i wyświetlić p.loader.
    Podczas wykonywania żądania informacji o kocie, musisz ukryć div.cat-info i wyświetlić p.loader.
    Po zakończeniu wszystkich żądań, p.loader musi zostać ukryty.


Obsługa błędów

Jeśli użytkownik napotka błąd podczas dowolnego żądania HTTP, na przykład awarię sieci, utratę pakietów itp., czyli odrzucenie obietnicy, należy wyświetlić element p.error i ukrywać go dla każdego kolejnego żądania. W tym celu użyj dodatkowych klas CSS.
Aby przetestować poprawność wyświetlania błędu, wystarczy zmienić adres żądania, dodając na końcu dowolny znak. Na przykład zamiast https://api.thecatapi.com/v1/breeds użyj https://api.thecatapi.com/v1/breeds123. Żądanie pobrania listy ras zostanie odrzucone z błędem. Analogicznie w przypadku żądania informacji o kocie na podstawie rasy.

Interfejs

    Popracuj trochę nad formatowaniem elementów interfejsu.
    Zamiast select.breed-select możesz użyć dowolnej biblioteki oferującej ładne rozwijane listy, na przykład https://slimselectjs.com/
    Zamiast p.loader możesz użyć dowolnej biblioteki z estetycznymi animacjami ładowania CSS, na przykład https://cssloaders.github.io/
    Zamiast p.error możesz skorzystać z dowolnej biblioteki z pięknymi powiadomieniami, na przykład Notiflix