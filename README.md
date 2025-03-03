# CarShop - Kreator Zamówień Samochodów
![s4](3.png)
## Opis projektu

CarShop to aplikacja webowa pozwalająca na skonfigurowanie i złożenie zamówienia na samochód według indywidualnych preferencji użytkownika. Projekt został stworzony jako ćwiczenie  mające na celu wykorzystanie narzędzi takich jak React, Material UI oraz json-server.

---

## Funkcjonalności

1. **Zarządzanie kategoriami i częściami**:
    - Dodawanie i usuwanie kategorii.
    - Dodawanie i usuwanie części w kategoriach.

2. **Kreator zamówienia**:
    - Przejście przez kolejne kroki kreatora w określonej kolejności.
    - Możliwość cofania się do wcześniejszych kroków.
    - Wybór części z każdej kategorii (przynajmniej jednej).

3. **Zarządzanie stanem aplikacji**:
    - Globalny stan aplikacji zarządzany za pomocą Zustand.
    - Przechowywanie konfiguracji zamówienia w local storage.

4. **Podsumowanie i zapis zamówienia**:
    - Formularz z danymi osobowymi użytkownika.
    - Podgląd i zapis zamówienia z jego szczegółami do bazy danych.

5. **Lista zamówień**:
    - Wyświetlenie wszystkich konfiguracji z danymi użytkownika, listą części oraz całkowitą wartością zamówienia.

---

## Wykorzystane technologie

- **React** - Biblioteka do budowy interfejsów użytkownika.
- **json-server** - Narzędzie do symulacji API.
- **Material UI** - Biblioteka komponentów UI.
- **Zustand** - Zarządzanie stanem aplikacji.
- **React Query** - Optymalne zarządzanie danymi i ich pobieranie.
- **Husky** - Narzędzie do automatyzacji formatowania kodu.

---
## Instalacja

1. Sklonuj repozytorium:

   ```bash
   git clone https://github.com/MariuszRudnik/Frontowcy-CarShop
   ```

   2.Zmień nazwę pliku .env.template na .env:

   ```bash
   mv .env.template .env
   ```

2. Przejdź do katalogu projektu:
   ```bash
   cd Frontowcy-CarShop
   ```
3. Zainstaluj zależności:
   ```bash
   pnpm install
   ```
4. Uruchom `json-server`:
   ```bash
   json-server --watch db.json
   ```
5. Uruchom aplikację:
   ```bash
   pnpm start dev
   ```

![s2](1.png)
![s3](2.png)
![s4](3.png)



### Wymagania wstępne:
- Node.js w wersji 18 lub nowszej.
- Zainstalowane narzędzie  `npm`, `pnpm` lub `yarn`.



