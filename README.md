# Angular Course 🧩🔥

Ten projekt zawiera kurs Angulara wraz z backendem w Spring Boot oraz projektami ćwiczeniowymi.

## 📁 Struktura projektu

```
angular-course-main/
└── course/
    ├── 01-starter-files             # Pliki startowe do ćwiczeń
    ├── 02-backend                   # Serwer backendowy (Spring Boot + MySQL)
    ├── 03-frontend                  # Główny projekt Angular
    ├── my-first0angular-project     # Prosty projekt startowy
    ├── sales-project                # Kolejny z projektów ćwiczeniowych
```

## 🛠 Technologie

### Frontend
- Angular 14+
- TypeScript
- RxJS
- Angular CLI
- HTML, SCSS

### Backend
- Java 17+
- Spring Boot
- Spring Web, Spring Data JPA
- MySQL (zarządzany przez MySQL Workbench)

## 🚀 Jak uruchomić

### Frontend Angular
1. Przejdź do katalogu projektu (np. `03-frontend` lub `sales-project`):
   ```bash
   cd course/03-frontend
   ```

2. Zainstaluj zależności:
   ```bash
   npm install
   ```

3. Uruchom aplikację:
   ```bash
   ng serve
   ```

4. Otwórz w przeglądarce:
   ```
   http://localhost:4200
   ```

### Backend (Spring Boot + MySQL)
1. Przejdź do katalogu `02-backend`:
   ```bash
   cd course/02-backend
   ```

2. Skonfiguruj bazę danych w MySQL Workbench:
   - Utwórz bazę danych (np. `angular_course`)
   - Zaktualizuj dane dostępowe w `application.properties`

3. Uruchom aplikację:
   ```bash
   ./mvnw spring-boot:run
   ```

4. Aplikacja backendowa będzie dostępna pod:
   ```
   http://localhost:8080
   ```

## ✅ Wymagania

- Node.js 18+
- Angular CLI (`npm install -g @angular/cli`)
- Java 17+
- Maven
- MySQL + MySQL Workbench
- Git (opcjonalnie)

## 📌 Notatki

- Każdy folder to osobny krok lub projekt w kursie.
- Projekty możesz uruchamiać niezależnie.
- Backend oparty jest o Spring Boot, a dane przechowywane są w bazie MySQL.

---

💡 Stworzono jako materiał edukacyjny dla kursu Angular + Spring Boot.
