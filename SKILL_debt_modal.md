# SKILL: Модалка "Бракує коштів" — канонічний паттерн

## Суть

Одна модалка `m-debt` / функція `openDebtModal()` обслуговує **всі** ситуації
нестачі коштів. Новий контекст додається в два місця: **налаштування** і
**завершення** (`afterDebtResolved`).

---

## Глобальні змінні

```js
let _pendingShortfall = 0;   // скільки ще треба позичити
let _balanceSnapshot  = 0;   // знімок: що застосувати до S.cash після погашення
let _debtContext      = 'round_end'; // активний контекст
```

---

## Як додати новий контекст — 4 кроки

### Крок 1. Перевірка: чи вистачає готівки

```js
if (S.cash >= cost) {
  S.cash -= cost;           // вистачає → списати одразу
  // ... решта дії
} else {
  // не вистачає → запускаємо борговий потік
}
```

### Крок 2. Налаштування (в else-гілці)

**Не змінювати `S.cash` тут.** Просто:

```js
_pendingShortfall = cost - S.cash;   // скільки не вистачає
_balanceSnapshot  = -cost;           // повна сума витрати (від'ємна)
_debtContext      = 'my_new_context';
// зберегти pending-об'єкт у let _pendingXxx = ...
openDebtModal();
```

> ⚠ Ніколи не обнуляти `S.cash = 0` перед `openDebtModal()`.
> Кнопки боргу роблять `S.cash += amount` — якщо cash вже 0,
> після позики в cash залишиться лишня сума.

### Крок 3. Кнопки боргу (вже реалізовано, не чіпати)

```js
S.loans.bankRem += amount;
S.cash          += amount;   // ← cash зростає на суму позики
_pendingShortfall -= amount;
if (_pendingShortfall <= 0) afterDebtResolved();
else openDebtModal();        // ще не вистачає — ще раз
```

### Крок 4. `afterDebtResolved()` — додати новий else-if

```js
} else if (_debtContext === 'my_new_context') {
  S.cash -= cost;              // ← списати повну суму витрати
  // або: S.cash -= _pendingXxx.cost;
  // додати об'єкт у стан (S.incomes, S.deals тощо)
  _pendingShortfall = 0;
  _debtContext      = 'round_end';
  closeModal('m-debt');
  save(); fbSync(); renderAll();
}
```

---

## Таблиця всіх контекстів

| `_debtContext`     | `_balanceSnapshot`   | Що робить `afterDebtResolved()`              |
|--------------------|----------------------|----------------------------------------------|
| `round_end`        | `bal()` (сальдо раунду) | `finishRound()` → `S.cash += _balanceSnapshot` |
| `quick_expense`    | `-amount`            | `S.cash += _balanceSnapshot` (= S.cash - amount) |
| `deal`             | `-invested`          | `S.cash -= _pendingDeal.invested`            |
| `passive_purchase` | `-purchaseCost`      | `S.cash -= _pendingPassiveIncome.purchaseCost` |

### Два паттерни в `afterDebtResolved()`

**Паттерн A — зняти через об'єкт** (deal, passive_purchase):
```js
S.cash -= _pendingXxx.cost;
S.someArray.push(_pendingXxx);
_pendingXxx = null;
```

**Паттерн B — зняти через snapshot** (quick_expense):
```js
S.cash += _balanceSnapshot; // snapshot від'ємний → фактично знімає
```

> `round_end` використовує `_balanceSnapshot` всередині `finishRound()`.

---

## Трасування прикладу (passive_purchase)

```
S.cash = 100, purchaseCost = 300

Налаштування:
  _pendingShortfall = 300 - 100 = 200
  _balanceSnapshot  = -300
  S.cash            = 100  ← не чіпаємо

Кнопка "Взяти в банку 200":
  S.loans.bankRem += 200
  S.cash          = 100 + 200 = 300
  _pendingShortfall = 0 → afterDebtResolved()

afterDebtResolved():
  S.cash -= 300   → S.cash = 0   ✓
  S.incomes.push(income)
```

---

## Типові помилки

| Помилка | Симптом | Причина |
|---------|---------|---------|
| `S.cash = 0` перед `openDebtModal()` | Після позики cash = shortfall замість 0 | Кнопки додають до cash, але початковий cash вже вкрадено |
| Не знімати cost у `afterDebtResolved()` | Cash зростає на суму позики замість 0 | Борг зарахований, але витрата не списана |
| Знімати cost **до** `openDebtModal()` | Від'ємний cash під час діалогу боргу | Витрату треба списувати тільки після погашення shortfall |
