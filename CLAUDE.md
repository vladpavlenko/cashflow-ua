# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

CashFlow UA — PWA-трекер для настільної гри CashFlow. Vanilla JS, без фреймворків, без білду. Два HTML-файли: `index.html` (гравець) та `gm.html` (ведучий/GM).

## Запуск

Немає build-step. Відкрити в браузері напряму або через локальний сервер:

```bash
python -m http.server 8080
# або
npx serve .
```

Після редагування JS/CSS — hard refresh (`Ctrl+Shift+R`) через Service Worker кеш. При змінах в `sw.js` — збільшити версію кешу: `const CACHE = 'cashflow-v2'`.

## Архітектура

### Два незалежні файли

| Файл | Роль | Firebase |
|------|------|---------|
| `index.html` | Гравець: стан, UI, розрахунки | `set()` — пише snapshot |
| `gm.html` | Ведучий: читає всіх гравців кімнати | `onValue()` — слухає зміни |
| `lang.js` | i18n словник UA/RU, функція `L('key')` | — |

### Firebase — ізольований модуль

У кожному HTML Firebase підключається у `<script type="module">` — ізольований від основного JS. Зв'язок із головним кодом тільки через `window`:

```js
// index.html: гравець пише
window._fbInit(roomCode, playerName)
window._fbSync(payload)       // debounced 800ms
window._fbReady               // bool

// gm.html: ведучий читає
window._gmConnect(roomCode)
window._gmOnUpdate(data)      // callback → головний JS
```

### Головний стан — об'єкт `S` (index.html)

Єдине джерело правди. Вся гра — це читання і запис у `S`.

```js
S = {
  cash, round, playerName, roomCode,
  educations[],        // масив { id, type, spec, roundsLeft, completed, stipendId }
  incomes[],           // масив { id, type, name, basePay, field, condition? }
  exp: { housingBase, food, comm, transport, hasWife, wifeAmt, kids, kidCost },
  loans: { bankAmt, bankRem, microAmt, microRem },
  courses[],           // { id, name, field, pay }
  trainings[],         // { id, name, mEmp, mSelf, mBiz }
  tab,                 // активна вкладка: 'ov'|'inc'|'exp'|'crs'|'trn'
}
```

### Патерн будь-якої дії

```js
S.cash -= amount;   // 1. змінити стан
save();             // 2. localStorage
fbSync();           // 3. Firebase (debounced)
renderAll();        // 4. перемалювати UI
```

### Розрахунок доходів

```
finalIncome = (basePay + addPay(inc)) × mult(inc)

addPay  — сума курсів де course.field === income.field
mult    — добуток тренінгів для типу income.type (mEmp|mSelf|mBiz)
```

Функції: `totalInc()`, `totalExp()`, `bal()`, `fi(inc)`.

### Рендеринг

`renderAll()` завжди викликається після зміни `S`. Під-функції: `renderHdr()`, `renderBar()`, `rOv()`, `rInc()`, `rExp()`, `rCrs()`, `rTrn()`.

### Кінець раунду — snapshot-патерн

`openEndRound()` фіксує `_balanceSnapshot = bal()`. `confirmRound()` застосовує зафіксований баланс (`S.cash += _balanceSnapshot`), щоб кредити взяті під час діалогу погашення не змінили підсумок раунду.

## UI система

### Навігація

Нижній таб-бар (`.bottom-tab-bar`). Вкладки: `btab-ov`, `btab-inc`, `btab-exp`, `btab-crs`, `btab-trn`. Панелі: `pane-ov` ... `pane-trn`. `setTab(id)` перемикає `.active` на `btab-*` і `.hidden` на `pane-*`.

### Модалки

Відкрити/закрити: `openModal('m-inc')` / `closeModal('m-inc')`. Список: `m-inc`, `m-crs`, `m-trn`, `m-end`, `m-debt`, `m-borrow`, `m-repay`, `m-bankrupt`, `m-start-study`, `m-mult`.

### CSS — glassmorphism

Картки використовують `backdrop-filter: blur()` + `rgba` фони. Нові картки мають використовувати `var(--glass-bg)` / `var(--glass-border)` замість `var(--surface)` / `var(--border)`. `backdrop-filter` не працює якщо батьківський елемент має `overflow: hidden`.

Змінні: `--glass-bg`, `--glass-border`, `--glass-hover`, `--tab-h: 68px`.

### i18n

```js
L('key')          // повертає рядок з поточної мови
L('key', arg)     // для функцій-шаблонів
```

**Правила (обов'язково):**
- Будь-який видимий текст у UI — тільки через `L('key')` у JS або `data-i18n="key"` в HTML. Хардкод тексту напряму в HTML/JS заборонений.
- При додаванні нового рядка — додати ключ в **обидва** об'єкти `LANGS.UA` і `LANGS.RU` у `lang.js` одночасно.
- При перейменуванні/зміні існуючого тексту — оновити ключ в **обох** мовах. Зміна тільки однієї мови = баг.
