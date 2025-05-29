# Witaj w aplikacji YouTube Clone! 👋

To jest projekt stworzony w [Expo](https://expo.dev) za pomocą [`create-expo-app`](https://www.npmjs.com/package/create-expo-app), rozwijany przez **Adriana Majchera**.

Ta aplikacja służy do przeglądania filmów z YouTube i ich odtwarzania, wykorzystując mocki danych (na razie) oraz przygotowanie do integracji z zewnętrznym API.

---

## Jak zacząć? (Instalacja i uruchamianie)

Aby uruchomić aplikację na swoim urządzeniu, wykonaj poniższe kroki:

1.  **Sklonuj repozytorium** (jeśli jeszcze tego nie zrobiłeś):

    ```bash
    git clone https://github.com/majcherrr87/ReactNativeVideoApp.git
    ```

2.  **Zainstaluj zależności projektu:**

    ```bash
    npm install
    ```

3.  **Uruchom aplikację:**

    - **Na Androidzie (emulator / fizyczne urządzenie):**

      ```bash
      npx expo run:android
      ```

      _(To polecenie zbuduje i zainstaluje aplikację bezpośrednio na Twoim urządzeniu. NIE skanuj kodu QR w aplikacji Expo Go, uruchom aplikację bezpośrednio z listy aplikacji na urządzeniu.)_

    - **Na iOS (symulator / fizyczne urządzenie, tylko na macOS):**

      ```bash
      npx expo run:ios
      ```

      _(Podobnie jak w Androidzie, ta komenda zbuduje i zainstaluje aplikację bezpośrednio. NIE używaj Expo Go.)_

    - **W trybie przeglądarki internetowej (brak obsługi wideo):**
      ```bash
      npx expo start --web
      ```
      _(Pamiętaj, że odtwarzanie wideo w przeglądarce może być ograniczone lub nie działać poprawnie z `react-native-video`.)_

---

## Struktura projektu

Ten projekt wykorzystuje [file-based routing](https://docs.expo.dev/router/introduction) z Expo Router. Możesz rozwijać aplikację, edytując pliki w katalogu **app**.

---
