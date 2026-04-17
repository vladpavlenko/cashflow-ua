# CashFlow UA — Гід по коду index.html

> Референс для самостійного редагування файлу.
> Бекграунд: Java/TypeScript backend, без досвіду фронтенду.

---

## Структура файлу — 4 великі блоки

```
index.html
├── 1. <head>          — мета + Firebase + CSS    (рядки 1–242)
├── 2. <body> HTML     — розмітка UI              (рядки 243–700)
├── 3. Модалки HTML    — попап-вікна              (рядки 700–820)
└── 4. <script> JS     — вся логіка               (рядки 820–1074)
```

---

## Блок 1 — HEAD

### Мета-теги (рядки 1–12)
Налаштування PWA для iOS/Android. **Не чіпай.**

### Firebase модуль (рядки 18–72)
Це окремий `<script type="module">` — ізольований від решти коду спеціально.
Єдиний спосіб зв'язку з основним JS — через глобальні змінні на `window`:

```js
window._fbInit    // ініціалізація підключення
window._fbSync    // відправка даних гравця
window._fbReady   // прапор: чи підключено Firebase
```

Думай про це як окремий клас з публічним інтерфейсом.

### CSS (рядки 74–242)

#### CSS змінні — головні кольори
Визначені один раз у `:root`, використовуються скрізь.
Змінюєш тут — змінюється у всьому файлі.

```css
:root {
  --bg:        #08090f;   /* фон сторінки */
  --surface:   #111420;   /* фон карток */
  --elevated:  #1a1e30;   /* фон полів вводу */
  --border:    #252840;   /* рамки */
  --gold:      #f5a623;   /* акцент, кнопки, активні елементи */
  --green:     #22c55e;   /* доходи, позитив */
  --red:       #ef4444;   /* витрати, борги, помилки */
  --blue:      #60a5fa;   /* код кімнати */
  --text:      #e8ecf5;   /* основний текст */
  --sub:       #8892aa;   /* допоміжний сірий текст */
}
```

Використання у CSS: `color: var(--gold);`
Використання у JS (inline styles): `style.color = 'var(--red)'`

#### Клас .hidden — найважливіший клас
```css
.hidden { display: none !important; }
```
Це головний механізм показу/приховування всього в додатку —
екранів, модалок, рядків, блоків.

#### Як знайти стиль елемента
1. Знайди елемент у HTML — він має `class="щось"`
2. Знайди `.щось { }` у блоці `<style>`
3. Відредагуй там

Приклад: хочеш змінити кнопку "Почати гру" → знайди `.btn-primary` в CSS.

---

## Блок 2 — HTML розмітка

### Два головних екрани
Завжди один з них прихований через `.hidden`:

```html
<div id="setup-screen">  <!-- екран входу: ім'я, кімната, освіта -->
<div id="main-screen">   <!-- основний екран гри -->
```

Перемикання між ними відбувається у `startGame()` і `init()`.

### Структура main-screen (зверху вниз)

```
┌─────────────────────────────┐
│  app-header                 │  ← шапка: ім'я, раунд, готівка, reset
├─────────────────────────────┤
│  tab-bar                    │  ← вкладки
├─────────────────────────────┤
│                             │
│  content                    │  ← контент активної вкладки
│  (прокручується)            │
│                             │
├─────────────────────────────┤
│  sum-bar (fixed)            │  ← фіксована панель: Дохід/Витрати/Сальдо
└─────────────────────────────┘
```

### Вкладки
Кожна вкладка — це `<div class="tab-pane" id="pane-XX">`.
Активна вкладка видима, решта мають `.hidden`.
Перемикає функція `setTab('ov' | 'inc' | 'exp' | 'crs' | 'trn')`.

| id вкладки | Зміст |
|------------|-------|
| `pane-ov`  | Огляд — готівка, дохід, витрати, сальдо |
| `pane-inc` | Доходи — таблиця з розрахунком |
| `pane-exp` | Витрати — житло, сім'я, кредити |
| `pane-crs` | Курси |
| `pane-trn` | Тренінги |

### Головний патерн: id → JS оновлює текст

```html
<!-- HTML: просто заглушка з id, початкове значення не важливе -->
<div class="cash-value" id="hdr-cash">$500</div>
```

```js
// JS: знаходить елемент за id і оновлює текст
document.getElementById('hdr-cash').textContent = fmt(S.cash);
```

`id` — це адреса елемента. JS пише в нього через `textContent`.
Це аналог того як у Java оновлюєш поле об'єкта через setter.

### Шаблон нового поля вводу (для модалок)

```html
<div class="f-field">
  <label class="f-label">Назва поля</label>
  <input type="number" class="f-input" id="свій-унікальний-id" placeholder="0" min="0">
</div>
```

---

## Блок 3 — Модалки

Всі модалки сховані через `.hidden` і живуть наприкінці `<body>`,
після основного контенту.

### Список модалок

| id | Призначення |
|----|-------------|
| `m-inc`      | Додати дохід |
| `m-crs`      | Додати курс |
| `m-trn`      | Додати тренінг |
| `m-end`      | Підтвердження кінця раунду |
| `m-debt`     | Вибір кредиту при нестачі коштів |
| `m-bankrupt` | Банкрутство — кінець гри |
| `m-borrow`   | Взяти позику (в будь-який момент) |
| `m-repay`    | Погасити борг |

### Відкрити / закрити модалку

```js
openModal('m-inc')   // прибирає клас .hidden → модалка видима
closeModal('m-inc')  // додає клас .hidden → модалка прихована
```

Клік поза модалкою (на темний оверлей) також закриває через `overlayClose()`.

### Структура модалки

```html
<div class="modal-overlay hidden" id="m-XXX"
     onclick="overlayClose(event, 'm-XXX')">   ← клік поза = закрити
  <div class="modal">                           ← біле вікно знизу
    <div class="modal-title">Заголовок</div>

    <!-- Поля вводу -->
    <div class="f-field">
      <label class="f-label">Мітка</label>
      <input class="f-input" id="my-input">
    </div>

    <!-- Кнопки -->
    <button class="btn-primary" onclick="saveXxx()">Зберегти</button>
    <button class="btn-cancel"  onclick="closeModal('m-XXX')">Скасувати</button>
  </div>
</div>
```

### Як додати нове поле в існуючу модалку
1. Знайди `id` потрібної модалки (наприклад `m-inc`)
2. Всередині `<div class="modal">` додай `f-field` блок (шаблон вище)
3. У відповідній функції збереження (наприклад `saveIncome()`) зчитай значення:
   ```js
   const myValue = parseFloat(document.getElementById('my-input').value) || 0;
   ```

---

## Блок 4 — JavaScript логіка

### Стан гри — об'єкт S

Це головний об'єкт, аналог entity або DTO. Вся гра — читання і запис у `S`.

```js
let S = {
  // Базові поля
  playerName: '',     // ім'я гравця
  roomCode:   '',     // код Firebase кімнати
  cash:       500,    // поточна готівка
  round:      1,      // поточний раунд

  // Освіта
  education:  null,   // 'university' | 'college' | 'none'
  specialty:  null,   // об'єкт спеціальності { id, name, icon, field }

  // Масив доходів (кожен — окремий об'єкт)
  incomes: [
    // { id, type, name, basePay, field }
    // type: 'employee' | 'self' | 'stipend' | 'passive'
  ],

  // Витрати (плоский об'єкт)
  exp: {
    housingLabel: 'Гуртожиток',
    housingBase:  100,
    housingType:  'self',  // 'self' | 'partner' | 'split'
    food:         30,
    comm:         10,
    transport:    20,
    hasWife:      false,
    wifeAmt:      0,
    kids:         0,       // 0..3
  },

  // Кредити
  loans: {
    bankAmt:   0,   // загальна сума позик у банку (накопичувально)
    bankRem:   0,   // залишок боргу банку (зменшується при погашенні)
    microAmt:  0,   // загальна сума мікрокредитів
    microRem:  0,   // залишок мікрокредиту
  },

  // Масиви підсилювачів
  courses:   [],  // { id, name, field, pay }
  trainings: [],  // { id, name, mEmp, mSelf, mBiz }

  tab: 'ov',      // активна вкладка
}
```

### Функції розрахунку (чиста математика, без UI)

```js
totalInc()  // → сума всіх доходів з урахуванням курсів і тренінгів
totalExp()  // → сума всіх витрат (включно відсотки по кредитам)
bal()       // → totalInc() - totalExp()  (сальдо за раунд)
fmt(n)      // → число в рядок "$123"  (Math.abs, без знаку)
fmtS(n)    // → число в рядок "+$123" або "−$123"  (зі знаком)
```

### Як рахується дохід (механіка курсів і тренінгів)

```js
// Для кожного доходу:
finalIncome = (basePay + additionalPay) * multiplier

// additionalPay — сума всіх курсів де field збігається зі сферою доходу
// multiplier — добуток всіх тренінгів для цього типу доходу
```

```js
addPay(inc)    // рахує додаткову оплату від курсів
mult(inc)      // рахує множник від тренінгів
fi(inc)        // = (basePay + addPay) * mult  — фінальна сума доходу
```

### Функції рендерингу (читають S, пишуть у DOM)

```js
renderAll()   // головна — викликає всі нижче
renderHdr()   // оновлює шапку (ім'я, раунд, готівка)
renderBar()   // оновлює нижню панель (дохід/витрати/сальдо)
rOv()         // вкладка Огляд
rInc()        // вкладка Доходи
rExp()        // вкладка Витрати
rCrs()        // вкладка Курси
rTrn()        // вкладка Тренінги
```

**Правило:** після будь-якої зміни `S` завжди викликається `renderAll()`.

### Патерн будь-якої дії — завжди однаковий

```js
function doSomething() {
  // 1. Змінити стан
  S.cash -= 100;
  S.exp.kids += 1;

  // 2. Зберегти локально (localStorage)
  save();

  // 3. Синхронізувати з Firebase (debounced, 800ms)
  fbSync();

  // 4. Перемалювати увесь UI
  renderAll();
}
```

### Збереження стану

```js
save()   // JSON.stringify(S) → localStorage
load()   // localStorage → JSON.parse → Object.assign(S, ...)
```

Це як серіалізувати об'єкт у файл і прочитати назад.
Відбувається автоматично при кожній зміні і при старті (`init()`).

### Firebase синхронізація

```js
fbSync()   // debounced (800ms) — відправляє snapshot S у Firebase
           // якщо Firebase не підключено (_fbActive = false) — нічого не робить
```

Гравець не помічає різниці — гра працює однаково з Firebase і без.

### Механіка кінця раунду

```js
confirmRound()
  // Рахує _balanceSnapshot = bal()
  // projected = S.cash + _balanceSnapshot
  //   ↓ >= 0 → finishRound()
  //   ↓ < 0  → _pendingShortfall = |projected|, openDebtModal()

finishRound()
  // S.cash += _balanceSnapshot  ← застосовує ЗАФІКСОВАНИЙ баланс
  // S.round++
  // Очищає _pendingShortfall і _balanceSnapshot
  // save() → fbSync() → renderAll()
```

**Чому snapshot а не живий bal():**
Щоб відсотки на щойно взятий кредит не впливали на поточний раунд.
Вони будуть враховані тільки в наступному.

---

## Шпаргалка: що і де шукати

| Задача | Де шукати |
|--------|-----------|
| Змінити текст кнопки | Знайди елемент у HTML за id або класом |
| Змінити колір елемента | Знайди клас у CSS, або змінну `--gold/--green/--red` |
| Додати поле в модалку | Знайди `id` модалки → додай `f-field` блок |
| Прочитати значення з input | `parseFloat(document.getElementById('id').value) \|\| 0` |
| Змінити логіку розрахунку | Функції `totalInc()`, `totalExp()`, `bal()` |
| Додати нову дію | Патерн: змінити `S` → `save()` → `fbSync()` → `renderAll()` |
| Показати/сховати елемент | `element.classList.add('hidden')` / `.remove('hidden')` |
| Знайти елемент у JS | `document.getElementById('id')` |
| Змінити текст елемента | `element.textContent = 'новий текст'` |
| Додати/прибрати клас | `element.classList.add('red')` / `.remove('red')` |

---

## Типові CSS класи для нових елементів

```html
<!-- Заголовок секції з кнопкою праворуч -->
<div class="sec-hdr">
  <div class="sec-title">Назва</div>
  <button class="btn-add">+ Додати</button>
</div>

<!-- Інфо-підказка (сіра плашка) -->
<div class="info-badge">Текст підказки з <strong>акцентом</strong></div>

<!-- Рядок: назва ліворуч, значення праворуч -->
<div class="exp-row">
  <div class="row-name">Назва рядка</div>
  <div class="col-final red-val">$50</div>
</div>

<!-- Підсумковий рядок -->
<div class="total-row">
  <div class="total-lbl">Усього</div>
  <div class="total-val green">$200</div>
</div>

<!-- Кнопки -->
<button class="btn-primary">Головна дія</button>
<button class="btn-cancel">Скасувати</button>
<button class="btn-add">+ Додати</button>
<button class="btn-borrow">+ Взяти позику</button>
<button class="btn-repay">↓ Виплатити</button>
```

---

*Останнє оновлення: Раунд 1, після реалізації кредитів і погашення боргу*
