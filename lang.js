/* ══════════════════════════════════════════════════
   CashFlow UA — i18n  (UA / RU)
   Usage:  L('key')  or  L('key', arg1, arg2, ...)
   ══════════════════════════════════════════════════ */

const LANGS = {
  UA: {
    logoSub: 'Фінансова гра',
    save:    'Зберегти',
    cancel:  'Скасувати',
    close:   'Закрити',

    // ── Setup ──
    setupRoomLabel:   '🎮 Код кімнати',
    setupRoomHint:    'Попроси ведучого показати код кімнати',
    setupRoomSyncOff: 'Введи код → синхронізація з ведучим',
    setupRoomSyncOn:  (code) => `Кімната <strong>#${code}</strong> — підключиться після старту`,
    setupNameLabel:   "Ім'я гравця",
    setupNamePh:      "Введіть ваше ім'я...",
    setupEduLabel:    'Освіта — Раунд 1',
    setupEduUni:      'Університет',
    setupEduUniSub:   '4 спеціальності',
    setupEduStipend:  'Стипендія $30',
    setupEduCol:      'Технікум',
    setupEduColSub:   '6 спеціальностей',
    setupEduNone:     'Не навчатись',
    setupEduNoneSub:  'Квартира $200 · Без доходу',
    setupSpecLabel:   'Спеціальність',
    setupSpecUni:     'Спеціальність (університет)',
    setupSpecCol:     'Спеціальність (технікум)',
    setupStartBtn:    'Почати гру →',

    // ── Spec names ──
    specUniEco:    'Економічний',
    specUniLaw:    'Юридичний',
    specUniHum:    'Гуманітарний',
    specUniMed:    'Медичний',
    specColMech:   'Механік',
    specColCook:   'Кухар',
    specColTailor: 'Швея',
    specColElec:   'Електрик',
    specColBuild:  'Будівельник',
    specColAuto:   'Автомеханік',

    // ── Tabs ──
    tabOv:  'Звіт',
    tabInc: 'Доходи',
    tabExp: 'Витрати',
    tabCrs: 'Курси',
    tabTrn: 'Тренінги',

    // ── Header ──
    hdrCashLabel: 'Готівка',
    hdrRoundBadge: (n) => `Раунд ${n}`,
    hdrPassiveText: (amt) => `Пасив ${amt}`,

    // ── Overview ──
    ovCashLabel:   'Поточна готівка',
    ovLoanLabel:   'Сума займу',
    ovLoanBank:    'у банку',
    ovLoanMicro:   'у мікрокредиті',
    ovIncLabel:    'Дохід / раунд',
    ovExpLabel:    'Витрати / раунд',
    ovBalLabel:    'Сальдо',
    ovEndRoundBtn: 'Завершити місяць →',
    ovEduUni:      'Університет',
    ovEduCol:      'Технікум',
    ovEduNone:     'Без освіти',
    ovEduNoneSub:  'Навчання не розпочато',
    ovEduDiploma:  '✅ Диплом отримано',
    ovEduProgress: (done, total) => `Раунд ${done}/${total}`,
    ovStudyStartBtn: '📚 Почати навчання',
    ovStudyDropBtn:  (name, r) => `Закинути: ${name} (${r} р.)`,
    ovStudyGradBtn:  (name) => `🎓 Диплом: ${name}`,
    ovStudyGradBtnShort: '🎓 Диплом',
    ovStudyDropBtnShort: 'Закинути',

    // ── Income tab ──
    incTitle:      'Доходи',
    incAddBtn:     '+ Додати',
    incTotalLabel: 'Усього доходів',
    incHeadName:   'Назва / Тип',
    incHeadBase:   'База',
    incHeadMult:   'Кратн.',
    incHeadExtra:  'Дод.',
    incHeadFinal:  'Підсум.',
    incEmpty:      'Доходів поки немає',
    incActiveEmpty:'Активних доходів немає',
    incTypeEmployee:'Активний',
    incTypeStipend: 'Стипендія',
    incTypePassive: 'Пасивний',
    incCondPrefix:  ' · Умова: ',
    incPassiveCostInfo: (cost) => `придбано за $${cost}`,

    // ── Expenses tab ──
    expTitle:       'Витрати',
    expHeadItem:    'Стаття',
    expHeadAmt:     'Сума',
    expFood:        '🍕 Їжа',
    expComm:        "📱 Зв'язок",
    expTransport:   '🚌 Транспорт',
    expBasicTotal:  'Базові витрати',
    expFamilyTitle: "Сім'я",
    expPartner:     '💍 Партнер',
    expKids:        '👶 Діти',
    expKidsSub:     'макс. 3 · витрати на дитину:',
    expFamilyTotal: "Витрати сім'ї",
    expLoansTitle:  'Кредити',
    expBankName:    '🏦 Банк',
    expBankRate:    '3% річних · 1 рік = 1 раунд',
    expBankLimit:   'Ліміт: $3,000',
    expMicroName:   '💸 Мікрокредит',
    expMicroRate:   '30% річних · 1 рік = 1 раунд',
    expMicroLimit:  'Ліміт: $30,000',
    expLoanAmt:     'Сума позик',
    expLoanRem:     'Залишок боргу',
    expLoanAvail:   'Доступний ліміт',
    expLoanPay:     'Виплата за раунд',
    expRepayBtn:    '↓ Виплатити',
    expBorrowBtn:   '+ Взяти позику',
    expGrandTotal:  'Усього витрат',

    // ── Courses tab ──
    crsTitle:    'Курси',
    crsAddBtn:   '+ Додати',
    crsInfo:     'Курс збільшує <strong>Додаткову оплату</strong> у доходах де сфера збігається.',
    crsHeadName: 'Назва',
    crsHeadField:'Сфера',
    crsHeadPay:  '+Дохід',
    crsEmpty:    'Курсів поки немає',

    // ── Trainings tab ──
    trnTitle:    'Тренінги',
    trnAddBtn:   '+ Додати',
    trnInfo:     'Тренінг збільшує <strong>Множник</strong> для відповідного типу доходу.',
    trnHeadName: 'Назва',
    trnHeadEmp:  'Найм.',
    trnHeadSelf: 'На себе',
    trnHeadBiz:  'Бізнес',
    trnEmpty:    'Тренінгів поки немає',

    // ── Bottom bar ──
    barInc: 'Дохід',
    barExp: 'Витрати',
    barBal: 'Сальдо',

    // ── Income modal ──
    mIncTitle:        'Новий дохід',
    mIncActiveHint:   '⚠️ Під час навчання можна мати лише один активний дохід. Додавай пасивний.',
    mIncActiveLimitHint: (n) => `⚠️ Досягнуто ліміт активних доходів (${n}). Можна додати лише пасивний.`,
    mIncNameLabel:    'Назва',
    mIncNamePh:       'напр. Зарплата',
    mIncTypeLabel:    'Тип доходу',
    mIncTypeEmployee: 'Активний — Найманий (робота на дядю)',
    mIncTypeSelf:     'Активний — На себе',
    mIncTypePassive:  'Пасивний (стартап / бізнес)',
    mIncBaseLabel:    'Базова оплата ($)',
    mIncFieldLabel:      'Сфера (для курсів)',
    mIncFieldPh:         'напр. Фінанси, IT, Медицина…',
    mIncSubFieldLabel:   'Під-сфера (необов\'язково)',
    mIncSubFieldPh:      'напр. Java, Python…',
    mIncPassiveCostLabel:   'Вартість придбання ($)',
    mIncPassiveCostEnough:  (cash)  => `✓ Вистачає готівки ($${cash} доступно)`,
    mIncPassiveCostShort:   (short) => `⚠ Не вистачає $${short} — буде запропоновано кредит`,
    alertEnterCost:         'Введіть вартість придбання (більше $0)',
    mIncCondLabel:    "Умова для запуску (необов'язково)",
    mIncCondNone:     '— без умови —',
    mIncCondEdu:      'Освіта',
    mIncCondExp:      'Досвід роботи у сфері',
    mIncCondEduOpts: {
      university_eco:   'Університет — Економічний',
      university_law:   'Університет — Юридичний',
      university_hum:   'Університет — Гуманітарний',
      university_psy:   'Університет — Психологічний',
      college_mech:     'Технікум — Механік',
      college_cook:     'Технікум — Кухар',
      college_tailor:   'Технікум — Швея',
      college_elec:     'Технікум — Електрик',
      college_build:    'Технікум — Будівельник',
      college_auto:     'Технікум — Автомеханік',
    },
    mIncCondExpOpts: {
      beauty:       'Сфера краси',
      programming:  'Програмування',
      auto:         'Автомеханік',
      cooking:      'Кулінарія',
      construction: 'Будівництво',
      finance:      'Фінанси',
      law:          'Право',
      medicine:     'Медицина',
      trade:        'Торгівля',
    },

    // ── Course modal ──
    mCrsTitle:      'Новий курс',
    mCrsNameLabel:  'Назва курсу',
    mCrsNamePh:     'напр. Excel Advanced',
    mCrsFieldLabel:    'Сфера застосування',
    mCrsFieldPh:       'напр. Фінанси, IT…',
    mCrsSubFieldLabel: 'Під-сфера (необов\'язково)',
    mCrsSubFieldPh:    'напр. Java, Python…',
    mCrsPayLabel:      'Додаткова оплата ($)',

    // ── Training modal ──
    mTrnTitle:      'Новий тренінг',
    mTrnNameLabel:  'Назва тренінгу',
    mTrnNamePh:     'напр. Управління часом',
    mTrnEmpLabel:   'Множник для найманця (×)',
    mTrnSelfLabel:  'Множник для роботи на себе (×)',
    mTrnBizLabel:   'Множник для бізнесу (×)',

    // ── End round modal ──
    mEndTitle:      (n) => `Завершити місяць ${n}`,
    mEndCurLabel:   'Поточна готівка:',
    mEndIncLabel:   '+ Доходи:',
    mEndExpLabel:   '− Витрати:',
    mEndNewLabel:   '= Нова готівка:',
    mEndBadge:      (color, amt, pos) => `Сальдо <strong style="color:${color}">${amt}</strong> буде ${pos ? 'додано до' : 'знято з'} готівки`,
    mEndWarn:       "⚠️ Готівки не вистачить — при підтвердженні з'явиться вибір кредиту",
    mEndConfirmBtn: 'Підтвердити',

    // ── Debt modal ──
    mDebtTitle:     '💸 Бракує коштів',
    mDebtCash:      'Готівка:',
    mDebtBalance:   'Сальдо:',
    mDebtShortfall: 'Не вистачає:',
    mDebtNoCredit:  '❌ Кредитні ліміти вичерпано',
    mDebtBankrupt:  'Оголосити банкрутство',
    mDebtBankBtn:   (amt, avail) => `🏦 Взяти в банку ${amt} (залишок ліміту: ${avail})`,
    mDebtMicroBtn:  (amt, avail) => `💸 Взяти в мікрокредит ${amt} (залишок ліміту: ${avail})`,
    mDebtBothBtn:   (b, m) => `🏦💸 Банк ${b} + Мікрокредит ${m}`,

    // ── Borrow modal ──
    mBorrowTitle:         (name) => `Позика · ${name}`,
    mBorrowInfo:          (avail, rate) => `Доступний ліміт: <strong>$${avail}</strong> · Ставка: <strong>${rate}% / раунд</strong>`,
    mBorrowAmtLabel:      'Сума позики ($)',
    mBorrowInterestLabel: 'Виплата відсотків за раунд:',
    mBorrowConfirmBtn:    'Взяти позику',
    mBorrowLimitBtn:      'Ліміт вичерпано',

    // ── Repay modal ──
    mRepayTitle:         (name) => `Погасити · ${name}`,
    mRepayDebtLabel:     'Поточний борг:',
    mRepayCashLabel:     'Ваша готівка:',
    mRepayInterestLabel: 'Відсотки після погашення:',
    mRepayAmtLabel:      'Сума погашення ($)',
    mRepayConfirmBtn:    'Погасити',
    mRepayNoDebtBtn:     'Борг відсутній',
    mRepayErrInsuf:      (cash) => `❌ Недостатньо готівки. Доступно: $${cash}`,
    mRepayErrZero:       '❌ Введіть суму для погашення',

    // ── TX Log ──
    txlogBtn:              'Лог',
    txlogTitle:            'Лог транзакцій',
    txlogEmpty:            'Транзакцій ще немає',
    txlogCredit:           (v) => `кредит $${v}`,
    txlogLabelQuickIncome: 'Швидкий дохід',
    txlogLabelQuickExpense:'Швидка витрата',
    txlogLabelLoanBank:    'Позика: Банк',
    txlogLabelLoanMicro:   'Позика: Мікрокредит',
    txlogLabelRepayBank:   'Виплата: Банк',
    txlogLabelRepayMicro:  'Виплата: Мікрокредит',
    txlogLabelDeal:        (name) => `Угода: ${name}`,
    txlogLabelDealCollect: (name) => `Угода завершена: ${name}`,
    txlogLabelPassive:     (name) => `Стартап: ${name}`,
    txLogCash:             'готівка:',
    txLogRoundIncome:      (n) => `Місяць ${n}: дохід`,
    txLogRoundExpense:     (n) => `Місяць ${n}: витрата`,

    // ── Bankrupt modal ──
    mBankruptTitle:   '💀 Банкрутство',
    mBankruptNewGame: '🔄 Почати нову гру',
    mBankruptInfo:    (name, cash, bank, micro, total, round) =>
      `${name} не зміг розрахуватись з боргами.<br><br>` +
      `Готівка: <strong style="color:var(--text)">${cash}</strong><br>` +
      `Борг банку: <strong style="color:var(--text)">${bank}</strong><br>` +
      `Мікрокредит: <strong style="color:var(--text)">${micro}</strong><br>` +
      `Загальний борг: <strong style="color:var(--red)">${total}</strong><br><br>` +
      `Раунд ${round} · Гра завершена`,

    // ── Start study modal ──
    mStudyTitle:      'Почати навчання',
    mStudyPickLabel:  'Оберіть заклад',
    mStudyUniName:    'Університет',
    mStudyUniRounds:  '8 раундів',
    mStudyColName:    'Технікум',
    mStudyColRounds:  '4 раунди',
    mStudySpecLabel:  'Спеціальність',
    mStudySpecPick:   'Спочатку оберіть заклад',
    mStudyConfirmBtn: 'Розпочати навчання',

    // ── Multiplier modal ──
    mMultTitle:     'Множник доходу',
    mMultHeadTrn:   'Тренінг',
    mMultHeadVal:   'Значення',
    mMultHeadBonus: 'Бонус',
    mMultTotal:     'Разом',
    mMultEmpty:     'Немає активних тренінгів для цього типу доходу',
    mMultFormula:   'Формула:',
    mMultBase:      (base, mult, result) => `База ${base} × ${mult} = <strong style="color:var(--green)">${result}</strong>`,

    // ── Passive info ──
    passiveInfo: (amt, goal, pct, needed, list) =>
      `Пасивний дохід: ${amt}/раунд\nЦіль (Раунд 2): ${goal}\nПрогрес: ${pct}%\n` +
      (needed > 0 ? `Ще потрібно: ${needed}\n` : `✅ Ціль досягнута!\n`) +
      `\n${list}`,
    passiveInfoEmpty: '• немає пасивних доходів',
    passiveInfoItem:  (name, amt) => `• ${name}: ${amt}/раунд`,

    // ── JS alerts / confirms ──
    alertEnterName:       "Введіть ваше ім'я!",
    alertPickEdu:         'Оберіть тип освіти!',
    alertPickSpec:        'Оберіть спеціальність!',
    alertEnterAmt:        'Введіть суму позики',
    alertEnterName2:      'Введіть назву!',
    alertIncomeLimit:     'Досягнуто ліміт: максимум 2 активних доходи (Найманий / На себе / Стипендія).',
    alertStipendProtected:"Стипендія прив'язана до активного навчання і не може бути видалена вручну.\nЗакинь або завершити навчання щоб прибрати стипендію.",
    alertNoSlot:          'Немає вільного слоту для активного доходу.\nСпочатку звільни місце (видали дохід або отримай/закинь навчання).',
    alertNoSlotSimple:    'Немає вільного слоту для активного доходу.',
    alertPickInstitution: 'Оберіть заклад!',
    alertPickSpec2:       'Оберіть спеціальність!',
    alertAlreadyStudying: 'Ця спеціальність вже є в активному навчанні.',
    alertGraduate:        (name) => `🎓 Вітаємо! Диплом "${name}" отримано!`,
    alertDropStudy:       (name) => `Закинути навчання "${name}"?\nСтипендія зникне. Диплому не буде.`,
    alertPassiveGoal:     (amt) => `🎉 Пасивний дохід досяг ${amt}/раунд!\n\nУмова переходу виконана (мінімум $30,000).\nПерейти до Раунду 2?`,
    alertRound2Soon:      'Раунд 2 буде доступний у наступному оновленні. Продовжуй накопичувати!',
    alertResetConfirm:    'Скинути гру? Всі дані будуть видалені.',
    alertFirebaseCreate:  'Помилка створення кімнати. Перевір Firebase конфіг.',

    // ── GM panel ──
    gmBadge:        '🎮 Ведучий · GM Panel',
    gmLoginTitle:   'Підключитись до кімнати',
    gmRoomLabel:    'Код кімнати',
    gmCreateBtn:    'Створити нову',
    gmJoinBtn:      'Підключитись',
    gmHint:         '<strong>Створити нову</strong> — генерує код та відкриває кімнату<br><strong>Підключитись</strong> — відкриває існуючу кімнату за кодом',
    gmPlayerCount:  (n) => n === 1 ? `${n} гравець` : (n >= 2 && n <= 4) ? `${n} гравці` : `${n} гравців`,
    gmLeaveBtn:     '← Вийти',
    gmRoomBtn:      '⚙️ Кімната',
    gmClearBtn:     '🧹 Очистити всіх гравців',
    gmDeleteBtn:    '🗑️ Закрити кімнату повністю',
    gmEmptyTitle:   'Очікуємо гравців',
    gmEmptySub1:    'Дай гравцям цей код кімнати:',
    gmEmptySub2:    "Вони вводять його при старті гри<br>і з'являться тут автоматично",
    gmPlayersOnline:'Гравців онлайн',
    gmWaiting:      'Очікуємо гравців...',
    gmOnline:       'онлайн',
    gmOffline:      'офлайн',
    gmCash:         'Готівка',
    gmPassiveInc:   'Пасивний дохід',
    gmToRound2:     'до Раунду 2 · ',
    gmIncome:       'Дохід',
    gmExpenses:     'Витрати',
    gmBalance:      'Сальдо',
    gmExpand:       '▼ Всі деталі',
    gmCollapse:     '▲ Сховати деталі',
    gmLogBtn:       '📋 Лог',
    gmLogTitle:     '📋 Лог транзакцій',
    gmLogEmpty:     'Транзакцій ще немає або дані не синхронізовані',
    gmLogCredit:    (v) => `кредит $${v}`,
    gmTypeEmployee: 'Найманий',
    gmTypeSelf:     'На себе',
    gmTypeStipend:  'Стипендія',
    gmTypePassive:  'Пасивний',
    gmCondPrefix:   'Умова: ',
    gmDetailIncomes:  'Доходи',
    gmDetailExpenses: 'Витрати',
    gmDetailFood:     'Їжа',
    gmDetailComm:     "Зв'язок",
    gmDetailTransport:'Транспорт',
    gmDetailPartner:  '💍 Партнер',
    gmDetailKids:     (n, cost) => `👶 Діти (${n} × $${cost})`,
    gmDetailBank:     (rem) => `🏦 Банк (залишок $${rem})`,
    gmDetailMicro:    (rem) => `💸 Мікрокредит (залишок $${rem})`,
    gmDetailCourses:  (n) => `Курси (${n})`,
    gmDetailTrainings:(n) => `Тренінги (${n})`,
    gmAnomCashNeg:    (name, cash) => `${name}: готівка від'ємна ($${cash})`,
    gmAnomBankOver:   (name) => `${name}: борг банку перевищує ліміт`,
    gmAnomMicroOver:  (name) => `${name}: мікрокредит перевищує ліміт → банкрутство`,
    gmAnomKids:       (name) => `${name}: більше 3 дітей`,
    gmAnomIncomes:    (name, n) => `${name}: більше 2 активних доходів (${n})`,
    gmEduNoStudy:     'Без навчання',
    gmEduStudent:     'Студент',
    gmEduCompleted:   'Освіта отримана',
    gmEduUni:         'Університет',
    gmEduCol:         'Технікум',
    gmEduRounds:      (done, total) => `${done}/${total} раундів`,
    gmErrCreate:      'Помилка створення кімнати. Перевір Firebase конфіг.',
    gmErrJoin:        'Введи код кімнати (4+ символи)',
    gmFirebaseErr:    (msg) => `Firebase помилка: ${msg}`,
    gmConfirmKick:    (name) => `Видалити гравця "${name}" з кімнати?\nЦе не скине його локальний стан гри.`,
    gmErrKick:        'Помилка видалення. Перевір підключення.',
    gmConfirmClear:   (code, n) => `Очистити кімнату #${code}?\nБуде видалено ${n} гравців.`,
    gmErrClear:       'Помилка очистки. Перевір підключення.',
    gmConfirmDelete:  (code) => `УВАГА: Закрити кімнату #${code} повністю?\nВсі дані гравців будуть видалені з Firebase.\nЛокальний стан гравців (localStorage) залишиться.`,
    gmErrDelete:      'Помилка видалення кімнати.',
    gmKickTooltip:    'Видалити гравця з кімнати',

    // ── Housing labels (display) ──
    housingDorm: 'Гуртожиток',
    housingApt:  'Квартира',

    // ── Income type labels ──
    incTypeEmployee: 'Найманий',
    incTypeSelf:     'На себе',
    incTypePassive:  'Пасивний',
    incTypeStipend:  'Стипендія',

    // ── Deals ──
    dealsTitle:       'Угоди',
    dealsAddBtn:      '+ Укласти',
    dealsInfoHtml:    'Угода типу <strong>Купи-Продай</strong>: вкладаєш кошти зараз, отримуєш прибуток після закінчення терміну.',
    dealsEmpty:       'Активних угод немає',
    dealStatusReady:  '✅ Готово',
    dealStatusActive: (done, total) => `⏳ ${done}/${total} міс.`,
    dealLblInvested:  'Вкладено',
    dealLblProfit:    'Прибуток',
    dealLblTerm:      'Термін',
    dealMonths:       'міс.',
    dealCollectBtn:   (profit) => `💰 Отримати прибуток +$${profit}`,
    dealCancelTitle:  'Скасувати угоду',
    dealTermDisplay:  (done, total) => `${done} / ${total} міс.`,
    mDealTitle:       '🤝 Угода',
    mDealCreditInfo:  'Якщо коштів не вистачає — запропонуємо взяти кредит.',
    mDealNameLabel:   'Назва угоди',
    mDealNamePh:      'напр. Перепродаж авто',
    mDealInvLabel:    'Сума вкладення ($)',
    mDealProfLabel:   'Сума прибутку ($)',
    mDealTermLabel:   'Термін (місяців / раундів)',
    mDealMonths:      'міс.',
    mDealCostLbl:     'Спишеться зараз:',
    mDealGetLbl:      'Отримаєш через:',
    mDealNetLbl:      'Чистий прибуток:',
    mDealConfirmBtn:  'Укласти угоду',
    mDealErrName:     '❌ Введіть назву угоди',
    mDealErrInv:      '❌ Введіть суму вкладення',
    mDealErrProfit:   "❌ Прибуток не може бути від'ємним",
    alertDealCollect: (name, profit) => `✅ Угода "${name}" завершена!\n+$${profit} додано до готівки.`,
    alertDealCancel:  (name, invested) => `Скасувати угоду "${name}"?\nВкладені $${invested} повернуться до готівки.`,
    alertDealReadyCollect: 'Термін вийшов — отримай прибуток замість скасування.',

    // ── Quick income / expense ──
    qaIncomeBtn:    'Дохід',
    qaExpenseBtn:   'Витрата',
    qaIncomeTitle:  '💰 Разовий дохід',
    qaExpenseTitle: '💸 Разова витрата',
    qaAmtLabel:     'Сума ($)',
    qaDescLabel:    "Опис (необов'язково)",
    qaDescPh:       'напр. Продав річ',
    qaGmWarn:       '⚠️ Сума понад $1,000 — потрібне підтвердження Гейм Майстра.',
    qaAddBtn:       'Додати до готівки',
    qaExpenseInfo:  'Якщо готівки не вистачає — запропонуємо взяти кредит.',
    qaDeductBtn:    'Списати',
    qaAlertNoAmt:   'Введіть суму!',
    qaWaitGm:       'Очікуємо GM...',
    qaGmPending:    '⏳ Запит відправлено GM. Очікуємо підтвердження...',
    qaGmApproved:   (amt) => `✅ GM підтвердив! +$${amt} додано до готівки.`,
    qaGmRejected:   '❌ GM відхилив операцію.',
    qaErrNoAmt:     '❌ Введіть суму',

    // ── Tooltips ──
    passiveBadgeTitle: 'Натисни для деталей',
    resetTitle:        'Скинути гру',
  },

  RU: {
    logoSub: 'Финансовая игра',
    save:    'Сохранить',
    cancel:  'Отмена',
    close:   'Закрыть',

    // ── Setup ──
    setupRoomLabel:   '🎮 Код комнаты',
    setupRoomHint:    'Попроси ведущего показать код комнаты',
    setupRoomSyncOff: 'Введи код → синхронизация с ведущим',
    setupRoomSyncOn:  (code) => `Комната <strong>#${code}</strong> — подключится после старта`,
    setupNameLabel:   'Имя игрока',
    setupNamePh:      'Введите ваше имя...',
    setupEduLabel:    'Образование — Раунд 1',
    setupEduUni:      'Университет',
    setupEduUniSub:   '4 специальности',
    setupEduStipend:  'Стипендия $30',
    setupEduCol:      'Техникум',
    setupEduColSub:   '6 специальностей',
    setupEduNone:     'Не учиться',
    setupEduNoneSub:  'Квартира $200 · Без дохода',
    setupSpecLabel:   'Специальность',
    setupSpecUni:     'Специальность (университет)',
    setupSpecCol:     'Специальность (техникум)',
    setupStartBtn:    'Начать игру →',

    // ── Spec names ──
    specUniEco:    'Экономический',
    specUniLaw:    'Юридический',
    specUniHum:    'Гуманитарный',
    specUniMed:    'Медицинский',
    specColMech:   'Механик',
    specColCook:   'Повар',
    specColTailor: 'Швея',
    specColElec:   'Электрик',
    specColBuild:  'Строитель',
    specColAuto:   'Автомеханик',

    // ── Tabs ──
    tabOv:  'Отчет',
    tabInc: 'Доходы',
    tabExp: 'Расходы',
    tabCrs: 'Курсы',
    tabTrn: 'Тренинги',

    // ── Header ──
    hdrCashLabel:  'Наличные',
    hdrRoundBadge: (n) => `Раунд ${n}`,
    hdrPassiveText:(amt) => `Пассив ${amt}`,

    // ── Overview ──
    ovCashLabel:   'Наличные',
    ovLoanLabel:   'Сумма займа',
    ovLoanBank:    'в банке',
    ovLoanMicro:   'в микрокредите',
    ovIncLabel:    'Доход / раунд',
    ovExpLabel:    'Расходы / раунд',
    ovBalLabel:    'Сальдо',
    ovEndRoundBtn: 'Завершить месяц →',
    ovEduUni:      'Университет',
    ovEduCol:      'Техникум',
    ovEduNone:     'Без образования',
    ovEduNoneSub:  'Обучение не начато',
    ovEduDiploma:  '✅ Диплом получен',
    ovEduProgress: (done, total) => `Раунд ${done}/${total}`,
    ovStudyStartBtn: '📚 Начать обучение',
    ovStudyDropBtn:  (name, r) => `Бросить: ${name} (${r} р.)`,
    ovStudyGradBtn:  (name) => `🎓 Диплом: ${name}`,
    ovStudyGradBtnShort: '🎓 Диплом',
    ovStudyDropBtnShort: 'Бросить',

    // ── Income tab ──
    incTitle:      'Доходы',
    incAddBtn:     '+ Добавить',
    incTotalLabel: 'Всего доходов',
    incHeadName:   'Название / Тип',
    incHeadBase:   'База',
    incHeadMult:   'Кратн.',
    incHeadExtra:  'Доп.',
    incHeadFinal:  'Итого',
    incEmpty:      'Доходов пока нет',
    incActiveEmpty:'Активных доходов нет',
    incTypeEmployee:'Активный',
    incTypeStipend: 'Стипендия',
    incTypePassive: 'Пассивный',
    incCondPrefix:  ' · Условие: ',
    incPassiveCostInfo: (cost) => `куплено за $${cost}`,

    // ── Expenses tab ──
    expTitle:       'Расходы',
    expHeadItem:    'Статья',
    expHeadAmt:     'Сумма',
    expFood:        '🍕 Еда',
    expComm:        '📱 Связь',
    expTransport:   '🚌 Транспорт',
    expBasicTotal:  'Базовые расходы',
    expFamilyTitle: 'Семья',
    expPartner:     '💍 Партнёр',
    expKids:        '👶 Дети',
    expKidsSub:     'макс. 3 · расходы на ребёнка:',
    expFamilyTotal: 'Расходы семьи',
    expLoansTitle:  'Кредиты',
    expBankName:    '🏦 Банк',
    expBankRate:    '3% годовых · 1 год = 1 раунд',
    expBankLimit:   'Лимит: $3,000',
    expMicroName:   '💸 Микрокредит',
    expMicroRate:   '30% годовых · 1 год = 1 раунд',
    expMicroLimit:  'Лимит: $30,000',
    expLoanAmt:     'Сумма займов',
    expLoanRem:     'Остаток долга',
    expLoanAvail:   'Доступный лимит',
    expLoanPay:     'Выплата за раунд',
    expRepayBtn:    '↓ Выплатить',
    expBorrowBtn:   '+ Взять займ',
    expGrandTotal:  'Всего расходов',

    // ── Courses tab ──
    crsTitle:    'Курсы',
    crsAddBtn:   '+ Добавить',
    crsInfo:     'Курс увеличивает <strong>Дополнительную оплату</strong> в доходах где сфера совпадает.',
    crsHeadName: 'Название',
    crsHeadField:'Сфера',
    crsHeadPay:  '+Доход',
    crsEmpty:    'Курсов пока нет',

    // ── Trainings tab ──
    trnTitle:    'Тренинги',
    trnAddBtn:   '+ Добавить',
    trnInfo:     'Тренинг увеличивает <strong>Множитель</strong> для соответствующего типа дохода.',
    trnHeadName: 'Название',
    trnHeadEmp:  'Найм.',
    trnHeadSelf: 'На себя',
    trnHeadBiz:  'Бизнес',
    trnEmpty:    'Тренингов пока нет',

    // ── Bottom bar ──
    barInc: 'Доход',
    barExp: 'Расходы',
    barBal: 'Сальдо',

    // ── Income modal ──
    mIncTitle:        'Новый доход',
    mIncActiveHint:   '⚠️ Во время учёбы можно иметь только один активный доход. Добавляй пассивный.',
    mIncActiveLimitHint: (n) => `⚠️ Достигнут лимит активных доходов (${n}). Можно добавить только пассивный.`,
    mIncNameLabel:    'Название',
    mIncNamePh:       'напр. Зарплата',
    mIncTypeLabel:    'Тип дохода',
    mIncTypeEmployee: 'Активный — Наёмный (работа на дядю)',
    mIncTypeSelf:     'Активный — На себя',
    mIncTypePassive:  'Пассивный (стартап / бизнес)',
    mIncBaseLabel:    'Базовая оплата ($)',
    mIncFieldLabel:      'Сфера (для курсов)',
    mIncFieldPh:         'напр. Финансы, IT, Медицина…',
    mIncSubFieldLabel:   'Подсфера (необязательно)',
    mIncSubFieldPh:      'напр. Java, Python…',
    mIncPassiveCostLabel:   'Стоимость покупки ($)',
    mIncPassiveCostEnough:  (cash)  => `✓ Достаточно средств ($${cash} доступно)`,
    mIncPassiveCostShort:   (short) => `⚠ Не хватает $${short} — будет предложен кредит`,
    alertEnterCost:         'Введите стоимость покупки (больше $0)',
    mIncCondLabel:    'Условие для запуска (необязательно)',
    mIncCondNone:     '— без условия —',
    mIncCondEdu:      'Образование',
    mIncCondExp:      'Опыт работы в сфере',
    mIncCondEduOpts: {
      university_eco:   'Университет — Экономический',
      university_law:   'Университет — Юридический',
      university_hum:   'Университет — Гуманитарный',
      university_psy:   'Университет — Психологический',
      college_mech:     'Техникум — Механик',
      college_cook:     'Техникум — Повар',
      college_tailor:   'Техникум — Швея',
      college_elec:     'Техникум — Электрик',
      college_build:    'Техникум — Строитель',
      college_auto:     'Техникум — Автомеханик',
    },
    mIncCondExpOpts: {
      beauty:       'Сфера красоты',
      programming:  'Программирование',
      auto:         'Автомеханик',
      cooking:      'Кулинария',
      construction: 'Строительство',
      finance:      'Финансы',
      law:          'Право',
      medicine:     'Медицина',
      trade:        'Торговля',
    },

    // ── Course modal ──
    mCrsTitle:      'Новый курс',
    mCrsNameLabel:  'Название курса',
    mCrsNamePh:     'напр. Excel Advanced',
    mCrsFieldLabel:    'Сфера применения',
    mCrsFieldPh:       'напр. Финансы, IT…',
    mCrsSubFieldLabel: 'Подсфера (необязательно)',
    mCrsSubFieldPh:    'напр. Java, Python…',
    mCrsPayLabel:      'Дополнительная оплата ($)',

    // ── Training modal ──
    mTrnTitle:      'Новый тренинг',
    mTrnNameLabel:  'Название тренинга',
    mTrnNamePh:     'напр. Управление временем',
    mTrnEmpLabel:   'Множитель для наёмника (×)',
    mTrnSelfLabel:  'Множитель для работы на себя (×)',
    mTrnBizLabel:   'Множитель для бизнеса (×)',

    // ── End round modal ──
    mEndTitle:      (n) => `Завершить месяц ${n}`,
    mEndCurLabel:   'Текущие наличные:',
    mEndIncLabel:   '+ Доходы:',
    mEndExpLabel:   '− Расходы:',
    mEndNewLabel:   '= Новые наличные:',
    mEndBadge:      (color, amt, pos) => `Сальдо <strong style="color:${color}">${amt}</strong> будет ${pos ? 'добавлено к' : 'снято с'} наличных`,
    mEndWarn:       '⚠️ Наличных не хватит — при подтверждении появится выбор кредита',
    mEndConfirmBtn: 'Подтвердить',

    // ── Debt modal ──
    mDebtTitle:     '💸 Не хватает средств',
    mDebtCash:      'Наличные:',
    mDebtBalance:   'Сальдо:',
    mDebtShortfall: 'Не хватает:',
    mDebtNoCredit:  '❌ Кредитные лимиты исчерпаны',
    mDebtBankrupt:  'Объявить банкротство',
    mDebtBankBtn:   (amt, avail) => `🏦 Взять в банке ${amt} (остаток лимита: ${avail})`,
    mDebtMicroBtn:  (amt, avail) => `💸 Взять в микрокредит ${amt} (остаток лимита: ${avail})`,
    mDebtBothBtn:   (b, m) => `🏦💸 Банк ${b} + Микрокредит ${m}`,

    // ── Borrow modal ──
    mBorrowTitle:         (name) => `Займ · ${name}`,
    mBorrowInfo:          (avail, rate) => `Доступный лимит: <strong>$${avail}</strong> · Ставка: <strong>${rate}% / раунд</strong>`,
    mBorrowAmtLabel:      'Сумма займа ($)',
    mBorrowInterestLabel: 'Выплата процентов за раунд:',
    mBorrowConfirmBtn:    'Взять займ',
    mBorrowLimitBtn:      'Лимит исчерпан',

    // ── Repay modal ──
    mRepayTitle:         (name) => `Погасить · ${name}`,
    mRepayDebtLabel:     'Текущий долг:',
    mRepayCashLabel:     'Ваши наличные:',
    mRepayInterestLabel: 'Проценты после погашения:',
    mRepayAmtLabel:      'Сумма погашения ($)',
    mRepayConfirmBtn:    'Погасить',
    mRepayNoDebtBtn:     'Долг отсутствует',
    mRepayErrInsuf:      (cash) => `❌ Недостаточно наличных. Доступно: $${cash}`,
    mRepayErrZero:       '❌ Введите сумму для погашения',

    // ── TX Log ──
    txlogBtn:              'Лог',
    txlogTitle:            'Лог транзакций',
    txlogEmpty:            'Транзакций ещё нет',
    txlogCredit:           (v) => `кредит $${v}`,
    txlogLabelQuickIncome: 'Быстрый доход',
    txlogLabelQuickExpense:'Быстрая трата',
    txlogLabelLoanBank:    'Займ: Банк',
    txlogLabelLoanMicro:   'Займ: Микрокредит',
    txlogLabelRepayBank:   'Погашение: Банк',
    txlogLabelRepayMicro:  'Погашение: Микрокредит',
    txlogLabelDeal:        (name) => `Сделка: ${name}`,
    txlogLabelDealCollect: (name) => `Сделка завершена: ${name}`,
    txlogLabelPassive:     (name) => `Стартап: ${name}`,
    txLogCash:             'наличные:',
    txLogRoundIncome:      (n) => `Месяц ${n}: доход`,
    txLogRoundExpense:     (n) => `Месяц ${n}: расход`,

    // ── Bankrupt modal ──
    mBankruptTitle:   '💀 Банкротство',
    mBankruptNewGame: '🔄 Начать новую игру',
    mBankruptInfo:    (name, cash, bank, micro, total, round) =>
      `${name} не смог расплатиться с долгами.<br><br>` +
      `Наличные: <strong style="color:var(--text)">${cash}</strong><br>` +
      `Долг банку: <strong style="color:var(--text)">${bank}</strong><br>` +
      `Микрокредит: <strong style="color:var(--text)">${micro}</strong><br>` +
      `Общий долг: <strong style="color:var(--red)">${total}</strong><br><br>` +
      `Раунд ${round} · Игра завершена`,

    // ── Start study modal ──
    mStudyTitle:      'Начать обучение',
    mStudyPickLabel:  'Выберите заведение',
    mStudyUniName:    'Университет',
    mStudyUniRounds:  '8 раундов',
    mStudyColName:    'Техникум',
    mStudyColRounds:  '4 раунда',
    mStudySpecLabel:  'Специальность',
    mStudySpecPick:   'Сначала выберите заведение',
    mStudyConfirmBtn: 'Начать обучение',

    // ── Multiplier modal ──
    mMultTitle:     'Множитель дохода',
    mMultHeadTrn:   'Тренинг',
    mMultHeadVal:   'Значение',
    mMultHeadBonus: 'Бонус',
    mMultTotal:     'Итого',
    mMultEmpty:     'Нет активных тренингов для этого типа дохода',
    mMultFormula:   'Формула:',
    mMultBase:      (base, mult, result) => `База ${base} × ${mult} = <strong style="color:var(--green)">${result}</strong>`,

    // ── Passive info ──
    passiveInfo: (amt, goal, pct, needed, list) =>
      `Пассивный доход: ${amt}/раунд\nЦель (Раунд 2): ${goal}\nПрогресс: ${pct}%\n` +
      (needed > 0 ? `Ещё нужно: ${needed}\n` : `✅ Цель достигнута!\n`) +
      `\n${list}`,
    passiveInfoEmpty: '• нет пассивных доходов',
    passiveInfoItem:  (name, amt) => `• ${name}: ${amt}/раунд`,

    // ── JS alerts / confirms ──
    alertEnterName:       'Введите ваше имя!',
    alertPickEdu:         'Выберите тип образования!',
    alertPickSpec:        'Выберите специальность!',
    alertEnterAmt:        'Введите сумму займа',
    alertEnterName2:      'Введите название!',
    alertIncomeLimit:     'Достигнут лимит: максимум 2 активных дохода (Наёмный / На себя / Стипендия).',
    alertStipendProtected:'Стипендия привязана к активной учёбе и не может быть удалена вручную.\nБрось или заверши обучение чтобы убрать стипендию.',
    alertNoSlot:          'Нет свободного слота для активного дохода.\nСначала освободи место (удали доход или получи/брось учёбу).',
    alertNoSlotSimple:    'Нет свободного слота для активного дохода.',
    alertPickInstitution: 'Выберите заведение!',
    alertPickSpec2:       'Выберите специальность!',
    alertAlreadyStudying: 'Эта специальность уже есть в активном обучении.',
    alertGraduate:        (name) => `🎓 Поздравляем! Диплом "${name}" получен!`,
    alertDropStudy:       (name) => `Бросить обучение "${name}"?\nСтипендия исчезнет. Диплома не будет.`,
    alertPassiveGoal:     (amt) => `🎉 Пассивный доход достиг ${amt}/раунд!\n\nУсловие перехода выполнено (минимум $30,000).\nПерейти к Раунду 2?`,
    alertRound2Soon:      'Раунд 2 будет доступен в следующем обновлении. Продолжай накапливать!',
    alertResetConfirm:    'Сбросить игру? Все данные будут удалены.',
    alertFirebaseCreate:  'Ошибка создания комнаты. Проверь Firebase конфиг.',

    // ── GM panel ──
    gmBadge:        '🎮 Ведущий · GM Panel',
    gmLoginTitle:   'Подключиться к комнате',
    gmRoomLabel:    'Код комнаты',
    gmCreateBtn:    'Создать новую',
    gmJoinBtn:      'Подключиться',
    gmHint:         '<strong>Создать новую</strong> — генерирует код и открывает комнату<br><strong>Подключиться</strong> — открывает существующую комнату по коду',
    gmPlayerCount:  (n) => `${n} игрок` + (n === 1 ? '' : n < 5 ? 'а' : 'ов'),
    gmLeaveBtn:     '← Выйти',
    gmRoomBtn:      '⚙️ Комната',
    gmClearBtn:     '🧹 Очистить всех игроков',
    gmDeleteBtn:    '🗑️ Закрыть комнату полностью',
    gmEmptyTitle:   'Ожидаем игроков',
    gmEmptySub1:    'Дай игрокам этот код комнаты:',
    gmEmptySub2:    'Они вводят его при старте игры<br>и появятся здесь автоматически',
    gmPlayersOnline:'Игроков онлайн',
    gmWaiting:      'Ожидаем игроков...',
    gmOnline:       'онлайн',
    gmOffline:      'офлайн',
    gmCash:         'Наличные',
    gmPassiveInc:   'Пассивный доход',
    gmToRound2:     'до Раунда 2 · ',
    gmIncome:       'Доход',
    gmExpenses:     'Расходы',
    gmBalance:      'Сальдо',
    gmExpand:       '▼ Все детали',
    gmCollapse:     '▲ Скрыть детали',
    gmLogBtn:       '📋 Лог',
    gmLogTitle:     '📋 Лог транзакций',
    gmLogEmpty:     'Транзакций ещё нет или данные не синхронизированы',
    gmLogCredit:    (v) => `кредит $${v}`,
    gmTypeEmployee: 'Наёмный',
    gmTypeSelf:     'На себя',
    gmTypeStipend:  'Стипендия',
    gmTypePassive:  'Пассивный',
    gmCondPrefix:   'Условие: ',
    gmDetailIncomes:  'Доходы',
    gmDetailExpenses: 'Расходы',
    gmDetailFood:     'Еда',
    gmDetailComm:     'Связь',
    gmDetailTransport:'Транспорт',
    gmDetailPartner:  '💍 Партнёр',
    gmDetailKids:     (n, cost) => `👶 Дети (${n} × $${cost})`,
    gmDetailBank:     (rem) => `🏦 Банк (остаток $${rem})`,
    gmDetailMicro:    (rem) => `💸 Микрокредит (остаток $${rem})`,
    gmDetailCourses:  (n) => `Курсы (${n})`,
    gmDetailTrainings:(n) => `Тренинги (${n})`,
    gmAnomCashNeg:    (name, cash) => `${name}: наличные отрицательные ($${cash})`,
    gmAnomBankOver:   (name) => `${name}: долг банку превышает лимит`,
    gmAnomMicroOver:  (name) => `${name}: микрокредит превышает лимит → банкротство`,
    gmAnomKids:       (name) => `${name}: более 3 детей`,
    gmAnomIncomes:    (name, n) => `${name}: более 2 активных доходов (${n})`,
    gmEduNoStudy:     'Без обучения',
    gmEduStudent:     'Студент',
    gmEduCompleted:   'Образование получено',
    gmEduUni:         'Университет',
    gmEduCol:         'Техникум',
    gmEduRounds:      (done, total) => `${done}/${total} раундов`,
    gmErrCreate:      'Ошибка создания комнаты. Проверь Firebase конфиг.',
    gmErrJoin:        'Введи код комнаты (4+ символа)',
    gmFirebaseErr:    (msg) => `Firebase ошибка: ${msg}`,
    gmConfirmKick:    (name) => `Удалить игрока "${name}" из комнаты?\nЭто не сбросит его локальное состояние игры.`,
    gmErrKick:        'Ошибка удаления. Проверь подключение.',
    gmConfirmClear:   (code, n) => `Очистить комнату #${code}?\nБудет удалено ${n} игроков.`,
    gmErrClear:       'Ошибка очистки. Проверь подключение.',
    gmConfirmDelete:  (code) => `ВНИМАНИЕ: Закрыть комнату #${code} полностью?\nВсе данные игроков будут удалены из Firebase.\nЛокальное состояние игроков (localStorage) останется.`,
    gmErrDelete:      'Ошибка удаления комнаты.',
    gmKickTooltip:    'Удалить игрока из комнаты',

    // ── Housing labels (display) ──
    housingDorm: 'Общежитие',
    housingApt:  'Квартира',

    // ── Income type labels ──
    incTypeEmployee: 'Наёмный',
    incTypeSelf:     'На себя',
    incTypePassive:  'Пассивный',
    incTypeStipend:  'Стипендия',

    // ── Deals ──
    dealsTitle:       'Сделки',
    dealsAddBtn:      '+ Заключить',
    dealsInfoHtml:    'Сделка типа <strong>Купи-Продай</strong>: вкладываешь деньги сейчас, получаешь прибыль после истечения срока.',
    dealsEmpty:       'Активных сделок нет',
    dealStatusReady:  '✅ Готово',
    dealStatusActive: (done, total) => `⏳ ${done}/${total} мес.`,
    dealLblInvested:  'Вложено',
    dealLblProfit:    'Прибыль',
    dealLblTerm:      'Срок',
    dealMonths:       'мес.',
    dealCollectBtn:   (profit) => `💰 Получить прибыль +$${profit}`,
    dealCancelTitle:  'Отменить сделку',
    dealTermDisplay:  (done, total) => `${done} / ${total} мес.`,
    mDealTitle:       '🤝 Сделка',
    mDealCreditInfo:  'Если средств не хватает — предложим взять кредит.',
    mDealNameLabel:   'Название сделки',
    mDealNamePh:      'напр. Перепродажа авто',
    mDealInvLabel:    'Сумма вложения ($)',
    mDealProfLabel:   'Сумма прибыли ($)',
    mDealTermLabel:   'Срок (месяцев / раундов)',
    mDealMonths:      'мес.',
    mDealCostLbl:     'Спишется сейчас:',
    mDealGetLbl:      'Получишь через:',
    mDealNetLbl:      'Чистая прибыль:',
    mDealConfirmBtn:  'Заключить сделку',
    mDealErrName:     '❌ Введите название сделки',
    mDealErrInv:      '❌ Введите сумму вложения',
    mDealErrProfit:   '❌ Прибыль не может быть отрицательной',
    alertDealCollect: (name, profit) => `✅ Сделка "${name}" завершена!\n+$${profit} добавлено к наличным.`,
    alertDealCancel:  (name, invested) => `Отменить сделку "${name}"?\nВложенные $${invested} вернутся к наличным.`,
    alertDealReadyCollect: 'Срок истёк — получи прибыль вместо отмены.',

    // ── Quick income / expense ──
    qaIncomeBtn:    'Доход',
    qaExpenseBtn:   'Расход',
    qaIncomeTitle:  '💰 Разовый доход',
    qaExpenseTitle: '💸 Разовый расход',
    qaAmtLabel:     'Сумма ($)',
    qaDescLabel:    'Описание (необязательно)',
    qaDescPh:       'напр. Продал вещь',
    qaGmWarn:       '⚠️ Сумма свыше $1,000 — требуется подтверждение Гейм Мастера.',
    qaAddBtn:       'Добавить к наличным',
    qaExpenseInfo:  'Если наличных не хватает — предложим взять кредит.',
    qaDeductBtn:    'Списать',
    qaAlertNoAmt:   'Введите сумму!',
    qaWaitGm:       'Ожидаем GM...',
    qaGmPending:    '⏳ Запрос отправлен GM. Ожидаем подтверждения...',
    qaGmApproved:   (amt) => `✅ GM подтвердил! +$${amt} добавлено к наличным.`,
    qaGmRejected:   '❌ GM отклонил операцию.',
    qaErrNoAmt:     '❌ Введите сумму',

    // ── Tooltips ──
    passiveBadgeTitle: 'Нажми для деталей',
    resetTitle:        'Сбросить игру',
  },
};

/* ── Runtime ── */
let _lang = (typeof localStorage !== 'undefined' && localStorage.getItem('cf_lang')) || 'UA';

function L(key, ...args) {
  const dict = LANGS[_lang] || LANGS.UA;
  const val  = dict[key] !== undefined ? dict[key] : (LANGS.UA[key] ?? key);
  return typeof val === 'function' ? val(...args) : val;
}

function setLang(code) {
  _lang = code;
  if (typeof localStorage !== 'undefined') localStorage.setItem('cf_lang', code);
  applyLang();
  // Trigger full re-render if the game is running
  if (typeof renderAll === 'function') renderAll();
  if (typeof renderDashboard === 'function') renderDashboard();
  // Notify page-specific hooks
  window.dispatchEvent(new CustomEvent('cf-lang-changed'));
}

function getLang() { return _lang; }

function applyLang() {
  // Update text nodes
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = L(key);
  });
  // Update innerHTML (for strings with <strong> etc.)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    el.innerHTML = L(el.getAttribute('data-i18n-html'));
  });
  // Update placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    el.placeholder = L(el.getAttribute('data-i18n-ph'));
  });
  // Update title attributes
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    el.title = L(el.getAttribute('data-i18n-title'));
  });
  // Highlight active lang button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === _lang);
  });
}
