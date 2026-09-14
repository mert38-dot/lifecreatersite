/* ---------- dil metinleri ---------- */

const STRINGS = {
  tr: {
    welcomeTitle: 'Kişisel Yaşam<br>Mimarın',
    lead: 'Merhaba! Ben senin yaşam mimarınım. Kendi potansiyelini en üst düzeye çıkaracağın, sana en uygun yaşam tarzını birlikte tasarlayalım.',
    sub: 'Sadece 10 kısa soru — 2 dakikadan az sürer.',
    start: 'Başlayalım',
    back: 'Geri',
    next: 'Devam Et',
    seeResult: 'Sonucumu Gör',
    soru: 'Soru',
    loadingMessages: [
      'Cevapların analiz ediliyor…',
      'Enerji ritmin okunuyor…',
      'Sana en yakın yaşam tarzı belirleniyor…',
      'Rutinin şekilleniyor…',
    ],
    resultEyebrow: 'Senin için tasarlanan yaşam tarzı',
    routineTitle: 'Günlük Rutinin',
    modelsTitle: 'Bu Yolu Senden Önce Yürüyenler',
    restart: 'Baştan Başla',
    periods: { sabah: 'Sabah', ogle: 'Öğle', aksam: 'Akşam' },
  },
  en: {
    welcomeTitle: 'Your Personal<br>Life Architect',
    lead: 'Hi! I’m your life architect. Let’s design the lifestyle that fits you best and unlocks your full potential.',
    sub: 'Just 10 short questions — takes less than 2 minutes.',
    start: 'Get Started',
    back: 'Back',
    next: 'Continue',
    seeResult: 'See My Result',
    soru: 'Question',
    loadingMessages: [
      'Analyzing your answers…',
      'Reading your energy rhythm…',
      'Finding your closest lifestyle…',
      'Shaping your routine…',
    ],
    resultEyebrow: 'The lifestyle designed for you',
    routineTitle: 'Your Daily Routine',
    modelsTitle: 'Those Who Walked This Path Before You',
    restart: 'Start Over',
    periods: { sabah: 'Morning', ogle: 'Midday', aksam: 'Evening' },
  },
};

let LANG = 'tr';
try {
  const savedLang = localStorage.getItem('lifecraft-lang');
  if (savedLang === 'tr' || savedLang === 'en') LANG = savedLang;
} catch (e) { /* localStorage unavailable */ }

/* ---------- veri: sorular ---------- */

const QUESTIONS = [
  {
    key: 'priority',
    title: { tr: 'Hayattaki en büyük önceliğin nedir?', en: 'What matters most to you in life?' },
    options: [
      { value: 'basari', emoji: '🚀', label: { tr: 'Başarı — hedeflere ulaşmak, ilerlemek', en: 'Achievement — reaching goals, moving forward' } },
      { value: 'huzur',  emoji: '🕊️', label: { tr: 'Huzur — sakinlik, iç denge', en: 'Peace — calm, inner balance' } },
      { value: 'macera', emoji: '🧭', label: { tr: 'Macera — yeni deneyimler, keşif', en: 'Adventure — new experiences, discovery' } },
      { value: 'saglik', emoji: '💪', label: { tr: 'Sağlık — beden ve zihin bakımı', en: 'Health — caring for body and mind' } },
    ],
  },
  {
    key: 'energy',
    title: { tr: 'Günün hangi saatlerinde en enerjik hissediyorsun?', en: 'When during the day do you feel most energetic?' },
    options: [
      { value: 'sabah', emoji: '🌅', label: { tr: 'Sabah erken (05:00 – 09:00)', en: 'Early morning (5–9 AM)' } },
      { value: 'oglen', emoji: '☀️', label: { tr: 'Gün ortası (09:00 – 14:00)', en: 'Midday (9 AM–2 PM)' } },
      { value: 'aksam', emoji: '🌇', label: { tr: 'Öğleden sonra / akşamüstü', en: 'Afternoon / early evening' } },
      { value: 'gece',  emoji: '🌙', label: { tr: 'Gece geç saatler', en: 'Late at night' } },
    ],
  },
  {
    key: 'stress',
    title: { tr: 'Seni en çok ne yorar veya strese sokar?', en: 'What drains or stresses you the most?' },
    options: [
      { value: 'kalabalik',   emoji: '🌀', label: { tr: 'Kalabalık, sosyal yoğunluk', en: 'Crowds, social overload' } },
      { value: 'duzensizlik', emoji: '📦', label: { tr: 'Düzensizlik, kaos', en: 'Disorder, chaos' } },
      { value: 'zaman',       emoji: '⏱️', label: { tr: 'Zaman baskısı, son teslim tarihleri', en: 'Time pressure, deadlines' } },
      { value: 'monotonluk',  emoji: '🔁', label: { tr: 'Monotonluk, sıkılmak', en: 'Monotony, boredom' } },
      { value: 'fiziksel',    emoji: '🔋', label: { tr: 'Fiziksel yorgunluk, uykusuzluk', en: 'Physical fatigue, lack of sleep' } },
    ],
  },
  {
    key: 'freetime',
    title: { tr: 'Boş vaktinde üretmeyi mi, tüketmeyi mi, yoksa hareket etmeyi mi seversin?', en: 'In your free time, do you prefer creating, consuming, or moving?' },
    options: [
      { value: 'uretmek',  emoji: '🎨', label: { tr: 'Üretmek — yazmak, yaratmak, öğrenmek', en: 'Creating — writing, making, learning' } },
      { value: 'tuketmek', emoji: '🛋️', label: { tr: 'Tüketmek — dinlenmek, izlemek, okumak', en: 'Consuming — resting, watching, reading' } },
      { value: 'hareket',  emoji: '🏃', label: { tr: 'Hareket etmek — spor, dışarı çıkmak', en: 'Moving — sports, getting outside' } },
    ],
  },
  {
    key: 'workstyle',
    title: { tr: 'Çalışma tarzın nasıl?', en: 'What’s your working style?' },
    options: [
      { value: 'planli',     emoji: '📋', label: { tr: 'Planlı ve düzenli — listeler, takvimler', en: 'Planned and organized — lists, calendars' } },
      { value: 'esnek',      emoji: '🌊', label: { tr: 'Esnek ve spontane — akışına göre', en: 'Flexible and spontaneous — going with the flow' } },
      { value: 'sprint',     emoji: '⚡', label: { tr: 'Yoğun sprintler + dinlenme molaları', en: 'Intense sprints + rest breaks' } },
      { value: 'istikrarli', emoji: '🪨', label: { tr: 'Sakin ve istikrarlı, hep aynı tempo', en: 'Calm and steady, same pace always' } },
    ],
  },
  {
    key: 'social',
    title: { tr: 'Sosyal ortamda mı, yoksa yalnızken mi daha üretkensin?', en: 'Are you more productive around others, or alone?' },
    options: [
      { value: 'yalniz',    emoji: '🚪', label: { tr: 'Tamamen yalnızken', en: 'Completely alone' } },
      { value: 'kucuk',     emoji: '👥', label: { tr: 'Küçük, samimi gruplarda', en: 'In small, close-knit groups' } },
      { value: 'kalabalik', emoji: '🎉', label: { tr: 'Kalabalık, enerjik ortamlarda', en: 'In crowded, high-energy settings' } },
      { value: 'degisken',  emoji: '🔄', label: { tr: 'Değişken, duruma göre', en: 'It varies, depending on the situation' } },
    ],
  },
  {
    key: 'motivation',
    title: { tr: 'Seni en çok ne motive eder?', en: 'What motivates you the most?' },
    options: [
      { value: 'rekabet', emoji: '🏆', label: { tr: 'Rekabet ve başarı', en: 'Competition and achievement' } },
      { value: 'anlam',   emoji: '🌱', label: { tr: 'İç huzur ve anlam', en: 'Inner peace and meaning' } },
      { value: 'yenilik', emoji: '💡', label: { tr: 'Yenilik ve keşif', en: 'Novelty and discovery' } },
      { value: 'katki',   emoji: '🤝', label: { tr: 'Başkalarına katkı sağlamak', en: 'Contributing to others' } },
    ],
  },
  {
    key: 'sleep',
    title: { tr: 'Uyku düzenin nasıl?', en: 'What’s your sleep pattern like?' },
    options: [
      { value: 'erken',    emoji: '🌅', label: { tr: 'Erken yatar, erken kalkarım', en: 'Early to bed, early to rise' } },
      { value: 'gec',      emoji: '🌙', label: { tr: 'Geç yatar, geç kalkarım', en: 'Late to bed, late to rise' } },
      { value: 'duzensiz', emoji: '🌀', label: { tr: 'Düzensiz, güne göre değişir', en: 'Irregular, it depends on the day' } },
      { value: 'kaliteli', emoji: '⏳', label: { tr: 'Kısa ama kaliteli uyurum', en: 'Short but high-quality sleep' } },
    ],
  },
  {
    key: 'decision',
    title: { tr: 'Karar verirken en çok neye güvenirsin?', en: 'What do you trust most when making decisions?' },
    options: [
      { value: 'mantik',    emoji: '🧮', label: { tr: 'Mantık ve veri', en: 'Logic and data' } },
      { value: 'sezgi',     emoji: '✨', label: { tr: 'Sezgi ve iç ses', en: 'Intuition and gut feeling' } },
      { value: 'deneyim',   emoji: '📚', label: { tr: 'Geçmiş deneyim ve alışkanlık', en: 'Past experience and habit' } },
      { value: 'baskalari', emoji: '🗣️', label: { tr: 'Güvendiğim kişilerin fikri', en: 'The opinion of people I trust' } },
    ],
  },
  {
    key: 'idealday',
    title: { tr: 'İdeal bir günün nasıl geçer?', en: 'What does your ideal day look like?' },
    options: [
      { value: 'yogun',   emoji: '🔥', label: { tr: 'Yoğun ve üretken, dolu dolu', en: 'Busy and productive, packed full' } },
      { value: 'sakin',   emoji: '🍃', label: { tr: 'Sakin, amaçsız, akışına bırakılmış', en: 'Calm, aimless, going with the flow' } },
      { value: 'maceral', emoji: '🗺️', label: { tr: 'Maceralı, öngörülemez', en: 'Adventurous, unpredictable' } },
      { value: 'dengeli', emoji: '⚖️', label: { tr: 'Dengeli, rutin ama tatmin edici', en: 'Balanced, routine but fulfilling' } },
    ],
  },
];

/* ---------- veri: yaşam tarzı arketipleri ---------- */

const ARCHETYPES = [
  {
    id: 'zen',
    name: { tr: 'Zen Üretkenliği', en: 'Zen Productivity' },
    emoji: '🧘',
    tagline: { tr: 'Sakin bir zihin, keskin bir odak.', en: 'A calm mind, a sharp focus.' },
    match: { priority: ['huzur', 'saglik'], energy: ['sabah', 'oglen'], stress: ['zaman', 'duzensizlik'], freetime: ['uretmek'],
      workstyle: ['istikrarli', 'planli'], social: ['yalniz', 'kucuk'], motivation: ['anlam'], sleep: ['erken', 'kaliteli'], decision: ['sezgi', 'mantik'], idealday: ['sakin', 'dengeli'] },
    why: {
      tr: 'Huzuru önceliklendiriyor, gün ışığında en verimli haline geçiyor ve kaostan uzak durduğunda üretkenliğin katlanıyor. Bu sana sakinlikten güç alan, dağınıklığa yer bırakmayan bir ritim kazandırır.',
      en: 'You prioritize peace, hit your stride in daylight hours, and your output multiplies when you stay clear of chaos. This gives you a rhythm that draws strength from calm and leaves no room for clutter.',
    },
    routine: {
      sabah: {
        tr: ['10 dakikalık sessiz nefes/meditasyon ile güne başla', 'Telefona bakmadan önce günün en önemli 1 işini belirle', 'Hafif bir kahvaltı ve doğal ışıkta birkaç dakika'],
        en: ['Start the day with 10 minutes of quiet breathing or meditation', 'Decide today’s single most important task before checking your phone', 'A light breakfast and a few minutes in natural light'],
      },
      ogle: {
        tr: ['En zor işini enerjinin tepe noktasında (öğlene kadar) bitir', '25-30 dakikalık odak blokları + kısa molalar', 'Öğle arasında ekransız, sessiz bir yürüyüş'],
        en: ['Finish your hardest task while your energy is at its peak (before noon)', '25–30 minute focus blocks with short breaks', 'A quiet, screen-free walk during your lunch break'],
      },
      aksam: {
        tr: ['Gün sonunda 3 satırlık minnettarlık notu', 'Ekranları erken kapat, kitap veya sessiz müzik', 'Sabit bir uyku saatiyle günü kapat'],
        en: ['A 3-line gratitude note at the end of the day', 'Switch off screens early — a book or quiet music instead', 'Close the day with a consistent bedtime'],
      },
    },
    models: [
      { name: { tr: 'Steve Jobs', en: 'Steve Jobs' }, role: { tr: 'Apple kurucu ortağı', en: 'Apple co-founder' }, detail: { tr: 'Zen Budizm ve meditasyon pratiğini yıllarca sürdürdü; sadeliği hem yaşamına hem ürün tasarımına taşıdı.', en: 'He kept up a Zen Buddhist meditation practice for years, carrying that simplicity into both his life and his product design.' } },
      { name: { tr: 'Arianna Huffington', en: 'Arianna Huffington' }, role: { tr: 'Girişimci, yazar', en: 'Entrepreneur, author' }, detail: { tr: 'Dinlenmenin ve uykunun üretkenlikle çelişmediğini, aksine onu beslediğini savunarak Thrive Global’i kurdu.', en: 'She founded Thrive Global on the belief that rest and sleep don’t compete with productivity — they fuel it.' } },
      { name: { tr: 'Yuval Noah Harari', en: 'Yuval Noah Harari' }, role: { tr: 'Tarihçi, yazar', en: 'Historian, author' }, detail: { tr: 'Günlük meditasyon pratiğinin en yoğun yazım dönemlerinde bile net düşünmesini sağladığını sıkça anlatır.', en: 'He often says his daily meditation practice keeps his thinking clear even during his most intense writing periods.' } },
    ],
  },
  {
    id: 'gecekusu',
    name: { tr: 'Dinamik Gecekuşu', en: 'Dynamic Night Owl' },
    emoji: '🌙',
    tagline: { tr: 'Şehir uyurken, sen inşa ediyorsun.', en: 'While the city sleeps, you build.' },
    match: { priority: ['basari', 'macera'], energy: ['gece'], stress: ['monotonluk'], freetime: ['uretmek', 'hareket'],
      workstyle: ['sprint', 'esnek'], social: ['degisken', 'yalniz'], motivation: ['yenilik', 'rekabet'], sleep: ['gec'], decision: ['sezgi'], idealday: ['yogun', 'maceral'] },
    why: {
      tr: 'Enerjin gece saatlerinde zirve yapıyor ve monotonluktan sıkılıyorsun. Günü klasik bir sabah rutinine sıkıştırmak yerine, kendi doğal ritmine göre kurulmuş yoğun ve yaratıcı bir akış seni çok daha ileri taşır.',
      en: 'Your energy peaks at night and monotony wears you down fast. Instead of squeezing your day into a conventional morning routine, an intense, creative flow built around your own natural rhythm takes you much further.',
    },
    routine: {
      sabah: {
        tr: ['Alarm yok — vücudun uyandığında kalk', 'Hafif, hızlı bir kahvaltı ile güne yumuşak giriş', 'Gündelik işleri ve iletişimi öğleye kadar topla'],
        en: ['No alarm — get up when your body wakes up', 'Ease into the day with a light, quick breakfast', 'Batch errands and communication before noon'],
      },
      ogle: {
        tr: ['Toplantılar ve rutin işler için ayrılmış blok', 'Kısa bir güç uykusu (power nap) enerji rezervini tazeler', 'Ertesi gecenin planını netleştir'],
        en: ['A dedicated block for meetings and routine tasks', 'A short power nap tops up your energy reserves', 'Map out the plan for tonight’s session'],
      },
      aksam: {
        tr: ['Şehir sakinleşirken derin odak seansı başlasın', 'En yaratıcı / en zor işini gece saatlerine sakla', 'Ekranı kapatmadan önce kısa bir soğuma molası ver'],
        en: ['Start a deep-focus session as the city quiets down', 'Save your most creative or hardest work for the night', 'Give yourself a short wind-down before switching off screens'],
      },
    },
    models: [
      { name: { tr: 'Winston Churchill', en: 'Winston Churchill' }, role: { tr: 'Devlet adamı, yazar', en: 'Statesman, writer' }, detail: { tr: 'Gece yarısından sonra saatlerce çalışır, en önemli kararlarını ve yazılarını bu saatlerde şekillendirirdi.', en: 'He worked for hours past midnight, shaping his most important decisions and writing during those late hours.' } },
      { name: { tr: 'Elon Musk', en: 'Elon Musk' }, role: { tr: 'Girişimci', en: 'Entrepreneur' }, detail: { tr: 'Yoğun proje dönemlerinde çalışmasını gece saatlerine kadar uzattığını defalarca paylaştı.', en: 'He has repeatedly described stretching his work deep into the night during intense project periods.' } },
      { name: { tr: 'Marissa Mayer', en: 'Marissa Mayer' }, role: { tr: 'Eski Yahoo CEO’su', en: 'Former Yahoo CEO' }, detail: { tr: 'Kariyerinin başında en yaratıcı işlerini gece geç saatlerde yaptığını anlatmasıyla tanınır.', en: 'She’s known for saying that early in her career, she did her most creative work late at night.' } },
    ],
  },
  {
    id: 'minimalist',
    name: { tr: 'Minimalist Odak', en: 'Minimalist Focus' },
    emoji: '◻️',
    tagline: { tr: 'Daha azıyla, daha derini yakala.', en: 'Do less, go deeper.' },
    match: { priority: ['huzur'], energy: ['sabah', 'oglen'], stress: ['kalabalik', 'duzensizlik'], freetime: ['tuketmek', 'uretmek'],
      workstyle: ['planli', 'istikrarli'], social: ['yalniz'], motivation: ['anlam'], sleep: ['kaliteli', 'erken'], decision: ['mantik'], idealday: ['sakin', 'dengeli'] },
    why: {
      tr: 'Kalabalık ve düzensizlik seni yoruyor, huzur en büyük önceliğin. Gündemini sadeleştirip gerçekten önemli olan birkaç şeye alan açmak, hem zihnini hem zamanını rahatlatır.',
      en: 'Crowds and disorder wear you down, and peace is your top priority. Simplifying your agenda and making room for the few things that truly matter frees up both your mind and your time.',
    },
    routine: {
      sabah: {
        tr: ['Güne tek bir net niyetle başla ("bugün önemli olan tek şey…")', 'Bildirimler kapalı, sade bir kahvaltı', 'Gün için en fazla 3 öncelik belirle'],
        en: ['Start the day with one clear intention ("the one thing that matters today is…")', 'Notifications off, a simple breakfast', 'Set no more than 3 priorities for the day'],
      },
      ogle: {
        tr: ['Tek seferde tek iş — çoklu görevden kaçın', 'Masanı ve dijital alanını sade tut', 'Gereksiz toplantı/etkileşimleri nazikçe azalt'],
        en: ['One task at a time — avoid multitasking', 'Keep your desk and digital space uncluttered', 'Gently cut back on unnecessary meetings and interactions'],
      },
      aksam: {
        tr: ['Günün fazlalıklarını (eşya, görev, mesaj) tasfiye et', 'Sessiz bir aktivite: okuma, yürüyüş, günlük tutma', 'Yarının 3 önceliğini önceden yaz'],
        en: ['Clear out the day’s excess — belongings, tasks, messages', 'A quiet activity: reading, walking, journaling', 'Write down tomorrow’s 3 priorities in advance'],
      },
    },
    models: [
      { name: { tr: 'Steve Jobs', en: 'Steve Jobs' }, role: { tr: 'Apple kurucu ortağı', en: 'Apple co-founder' }, detail: { tr: 'Aynı kıyafeti giyerek bile gündelik kararları azaltıp zihnini asıl işine ayırdığını anlatırdı.', en: 'He’d explain that even wearing the same outfit every day cut down on daily decisions, freeing his mind for the work that mattered.' } },
      { name: { tr: 'Naval Ravikant', en: 'Naval Ravikant' }, role: { tr: 'Yatırımcı, yazar', en: 'Investor, writer' }, detail: { tr: 'Sadelik ve "daha az ama derin" felsefesini hem iş hayatına hem kişisel yaşamına taşımasıyla tanınır.', en: 'He’s known for carrying a philosophy of simplicity — "less but deeper" — into both his work and his personal life.' } },
      { name: { tr: 'Marie Kondo', en: 'Marie Kondo' }, role: { tr: 'Yazar, düzen uzmanı', en: 'Author, organizing expert' }, detail: { tr: 'Fiziksel ve zihinsel sadeleşmenin huzuru doğrudan artırdığını dünyaya öğretti.', en: 'She taught the world that physical and mental decluttering directly increases peace of mind.' } },
    ],
  },
  {
    id: 'savasci',
    name: { tr: 'Savaşçı Disiplini', en: 'Warrior Discipline' },
    emoji: '⚔️',
    tagline: { tr: 'Disiplin, motivasyonun bittiği yerde başlar.', en: 'Discipline begins where motivation runs out.' },
    match: { priority: ['basari', 'saglik'], energy: ['sabah'], stress: ['zaman', 'fiziksel'], freetime: ['hareket'],
      workstyle: ['planli', 'sprint'], social: ['kucuk', 'yalniz'], motivation: ['rekabet'], sleep: ['erken'], decision: ['mantik', 'deneyim'], idealday: ['yogun'] },
    why: {
      tr: 'Başarı ve sağlık senin için öncelikli, sabahları güçlüsün ve harekete geçmeyi seviyorsun. Net, disiplinli ve fiziksel olarak zorlayıcı bir rutin seni en iyi versiyonuna taşır.',
      en: 'Achievement and health are your priorities, mornings are your strong suit, and you love taking action. A clear, disciplined, physically demanding routine brings out your best version.',
    },
    routine: {
      sabah: {
        tr: ['Sabit ve erken bir kalkış saati (hafta sonu dahil)', 'Yoğun bir antrenman veya soğuk duş ile bedeni uyandır', 'Günün 1 numaralı hedefini yüksek sesle veya yazılı belirle'],
        en: ['A fixed, early wake-up time (weekends included)', 'Wake your body with an intense workout or a cold shower', 'State your #1 goal for the day out loud or in writing'],
      },
      ogle: {
        tr: ['En zor işi enerji tepe noktasında bitir', 'Kısa, verimli öğünler — uzun molalardan kaçın', 'Planlanmamış zamana izin verme, blokla çalış'],
        en: ['Finish the hardest task while your energy peaks', 'Short, efficient meals — avoid long breaks', 'Don’t leave time unplanned — work in blocks'],
      },
      aksam: {
        tr: ['Hafif hareket (yürüyüş/germe) ile bedeni sakinleştir', 'Günü değerlendir: ne işe yaradı, ne yaramadı', 'Erken ve sabit bir uyku saati disiplinini koru'],
        en: ['Wind your body down with light movement — a walk or stretching', 'Review the day: what worked, what didn’t', 'Keep a disciplined, early, fixed bedtime'],
      },
    },
    models: [
      { name: { tr: 'Kobe Bryant', en: 'Kobe Bryant' }, role: { tr: 'Basketbolcu', en: 'Basketball player' }, detail: { tr: '"Mamba Mentality" felsefesiyle sabah 4’te başlayan antrenmanları kariyerinin efsanesi haline geldi.', en: 'His "Mamba Mentality" philosophy and 4 AM training sessions became the stuff of legend in his career.' } },
      { name: { tr: 'Tim Cook', en: 'Tim Cook' }, role: { tr: 'Apple CEO’su', en: 'Apple CEO' }, detail: { tr: 'Sabah 04:00 civarında uyanıp spor yaparak güne disiplinli bir başlangıç yapmasıyla bilinir.', en: 'He’s known for waking around 4 AM and exercising, giving his day a disciplined start.' } },
      { name: { tr: 'David Goggins', en: 'David Goggins' }, role: { tr: 'Ultra maratoncu, yazar', en: 'Ultramarathoner, author' }, detail: { tr: 'Zihinsel dayanıklılığı fiziksel disiplinle inşa etme felsefesini milyonlara ilham vererek anlattı.', en: 'He built a philosophy of forging mental toughness through physical discipline, inspiring millions along the way.' } },
    ],
  },
  {
    id: 'maceraci',
    name: { tr: 'Maceracı Ruh', en: 'Adventurous Spirit' },
    emoji: '🧭',
    tagline: { tr: 'Konfor alanı, senin için bir durak, varış değil.', en: 'For you, comfort zones are a stop, not a destination.' },
    match: { priority: ['macera'], energy: ['aksam', 'oglen'], stress: ['monotonluk'], freetime: ['hareket'],
      workstyle: ['esnek'], social: ['degisken', 'kalabalik'], motivation: ['yenilik'], sleep: ['duzensiz', 'gec'], decision: ['sezgi'], idealday: ['maceral'] },
    why: {
      tr: 'Macera en büyük önceliğin ve monotonluk seni en çok yoran şey. Yaşamını tekrar eden bir rutine değil, keşfe ve harekete açık bir yapıya oturtmak seni canlı tutar.',
      en: 'Adventure is your top priority and monotony wears you out fastest. Building your life around openness to discovery and movement — not a repetitive routine — keeps you feeling alive.',
    },
    routine: {
      sabah: {
        tr: ['Esnek bir kalkış — güne katı bir plan dayatma', 'Kısa bir açık hava molası (balkon, bahçe, sokak)', 'Haftalık "yeni bir şey" hedefini gözden geçir'],
        en: ['A flexible wake-up — don’t force a rigid plan on the day', 'A short outdoor break — balcony, garden, street', 'Check in on your weekly "try something new" goal'],
      },
      ogle: {
        tr: ['Rutin işleri toparla, ama tek bir şablona bağlı kalma', 'Farklı bir ortamda çalış/molanı ver (kafe, park, yeni rota)', 'Fiziksel harekete zaman ayır: yürüyüş, bisiklet, spor'],
        en: ['Handle routine tasks, but don’t lock into one template', 'Work or take your break somewhere different — a café, a park, a new route', 'Make time for physical movement: walking, cycling, sport'],
      },
      aksam: {
        tr: ['Haftada en az bir kez alışılmadık bir aktivite planla', 'Yeni insanlarla / yeni yerlerle tanışmaya açık kal', 'Günü, öğrendiğin bir şeyi not ederek kapat'],
        en: ['Plan at least one unusual activity a week', 'Stay open to meeting new people and new places', 'Close the day by noting something you learned'],
      },
    },
    models: [
      { name: { tr: 'Richard Branson', en: 'Richard Branson' }, role: { tr: 'Girişimci', en: 'Entrepreneur' }, detail: { tr: 'Kitesurften uzay girişimciliğine, riski ve keşfi iş felsefesinin merkezine koydu.', en: 'From kitesurfing to space entrepreneurship, he put risk and discovery at the center of his business philosophy.' } },
      { name: { tr: 'Alex Honnold', en: 'Alex Honnold' }, role: { tr: 'Dağcı', en: 'Rock climber' }, detail: { tr: 'Free solo tırmanışlarıyla konfor alanının çok ötesinde bir yaşamı gündelik pratiğe dönüştürdü.', en: 'Through free solo climbing, he turned a life far beyond the comfort zone into daily practice.' } },
      { name: { tr: 'Yvon Chouinard', en: 'Yvon Chouinard' }, role: { tr: 'Patagonia kurucusu', en: 'Founder of Patagonia' }, detail: { tr: 'Doğaya ve maceraya olan tutkusunu doğrudan iş modeline dönüştürerek yaşadı.', en: 'He built his life by turning a passion for nature and adventure directly into a business model.' } },
    ],
  },
  {
    id: 'sefkatli',
    name: { tr: 'Şefkatli Denge', en: 'Compassionate Balance' },
    emoji: '🌿',
    tagline: { tr: 'Kendine ve çevrene nazik bir ritim.', en: 'A gentle rhythm, for yourself and those around you.' },
    match: { priority: ['huzur', 'saglik'], energy: ['oglen', 'aksam'], stress: ['kalabalik'], freetime: ['tuketmek'],
      workstyle: ['istikrarli'], social: ['kucuk'], motivation: ['katki', 'anlam'], sleep: ['kaliteli', 'duzensiz'], decision: ['baskalari', 'sezgi'], idealday: ['dengeli', 'sakin'] },
    why: {
      tr: 'Huzur ve sağlık öncelikli, sosyal yoğunluk seni yoruyor. Kendine şefkat gösteren, dinlenmeye yer açan ve dengeyi zorlamadan kuran bir yaşam tarzı seninle en iyi örtüşüyor.',
      en: 'Peace and health come first, and social overload wears you down. A lifestyle that treats you gently, makes room for rest, and builds balance without forcing it suits you best.',
    },
    routine: {
      sabah: {
        tr: ['Aceleye getirmeden, yavaş bir başlangıç', 'Su iç, birkaç dakika hareket et, güne yumuşak gir', 'Gün için 1-2 makul, esnek hedef belirle'],
        en: ['A slow start, no rushing', 'Drink water, move for a few minutes, ease into the day', 'Set 1–2 reasonable, flexible goals for the day'],
      },
      ogle: {
        tr: ['Sosyal etkileşimleri küçük ve seçici tut', 'Kısa molalarla enerjini koru, kendini zorlama', 'Sakin bir ortamda, tek başına yemek arası'],
        en: ['Keep social interactions small and selective', 'Protect your energy with short breaks — don’t push yourself', 'A lunch break alone, somewhere quiet'],
      },
      aksam: {
        tr: ['Dinlendirici bir aktivite: izlemek, okumak, sıcak duş', 'Kendine 1 nazik cümle söyle (öz-şefkat pratiği)', 'Ekranları erken kapatıp bedenini dinlendir'],
        en: ['A restful activity — watching, reading, a warm shower', 'Say one kind sentence to yourself (a self-compassion practice)', 'Switch off screens early and let your body rest'],
      },
    },
    models: [
      { name: { tr: 'Michelle Obama', en: 'Michelle Obama' }, role: { tr: 'Yazar, eski First Lady', en: 'Author, former First Lady' }, detail: { tr: 'Sağlığı ve kendine bakımı, toplumsal sorumluluklarla birlikte yürütülebilecek bir denge olarak savunur.', en: 'She advocates for health and self-care as a balance that can run alongside public responsibility.' } },
      { name: { tr: 'Oprah Winfrey', en: 'Oprah Winfrey' }, role: { tr: 'Medya yapımcısı', en: 'Media producer' }, detail: { tr: 'Minnettarlık günlüğü ve öz-şefkat pratiklerini onlarca yıldır kamuoyuyla paylaşıyor.', en: 'She has shared gratitude journaling and self-compassion practices publicly for decades.' } },
      { name: { tr: '14. Dalai Lama', en: 'The 14th Dalai Lama' }, role: { tr: 'Manevi lider', en: 'Spiritual leader' }, detail: { tr: 'Şefkati hem kendine hem başkalarına yönelik günlük bir pratik olarak öğretisinin merkezine koyar.', en: 'He places compassion — toward oneself and others — at the center of his teaching as a daily practice.' } },
    ],
  },
  {
    id: 'yaratici',
    name: { tr: 'Yaratıcı Akış', en: 'Creative Flow' },
    emoji: '🎨',
    tagline: { tr: 'İlham bekleme, ona giden yolu inşa et.', en: 'Don’t wait for inspiration — build the road to it.' },
    match: { priority: ['basari', 'macera'], energy: ['gece', 'aksam'], stress: ['monotonluk', 'duzensizlik'], freetime: ['uretmek'],
      workstyle: ['esnek', 'sprint'], social: ['degisken', 'yalniz'], motivation: ['yenilik'], sleep: ['gec', 'duzensiz'], decision: ['sezgi'], idealday: ['yogun', 'maceral'] },
    why: {
      tr: 'Üretmekten güç alıyorsun, monotonluk seni bunaltıyor ve enerjin günün geç saatlerine doğru yükseliyor. Katı bir programdan çok, seni akışa sokan esnek ama disiplinli bir yaratım ritmi sana en çok fayda sağlar.',
      en: 'You draw strength from creating, monotony overwhelms you, and your energy rises later in the day. Rather than a rigid schedule, a flexible but disciplined creative rhythm that gets you into flow serves you best.',
    },
    routine: {
      sabah: {
        tr: ['İlham toplama zamanı: okuma, gezinme, gözlem', 'Zihni işgal etmeyen basit işleri sabaha ayır', 'Günün "yaratım penceresini" netleştir'],
        en: ['Gather inspiration: read, wander, observe', 'Save low-effort tasks for the morning, ones that don’t occupy your mind', 'Define today’s "creative window"'],
      },
      ogle: {
        tr: ['Küçük deneyler ve taslaklar için zaman ayır', 'Rutin/idari işleri bu dilime sıkıştır', 'Kısa bir mola ile zihnini dinlendir'],
        en: ['Set aside time for small experiments and drafts', 'Squeeze routine/admin work into this slot', 'Rest your mind with a short break'],
      },
      aksam: {
        tr: ['Asıl yaratıcı işini en yüksek enerjinle yap', 'Dış müdahaleleri (bildirim, mesaj) kapat', 'Günü, yarına bırakılan bir fikirle bitir'],
        en: ['Do your real creative work at your highest energy', 'Shut out interruptions — notifications, messages', 'End the day with an idea left for tomorrow'],
      },
    },
    models: [
      { name: { tr: 'Haruki Murakami', en: 'Haruki Murakami' }, role: { tr: 'Yazar', en: 'Author' }, detail: { tr: 'Sıkı bir disiplinle sabah yazar, koşar ve yaratıcı enerjisini fiziksel rutinle besler.', en: 'He writes in the morning with strict discipline, runs, and fuels his creative energy through physical routine.' } },
      { name: { tr: 'Pablo Picasso', en: 'Pablo Picasso' }, role: { tr: 'Ressam', en: 'Painter' }, detail: { tr: 'Gece saatlerinde çalışmayı tercih ederek en üretken dönemlerini bu ritme borçlu olduğunu söylerdi.', en: 'He preferred working at night and said he owed his most productive periods to that rhythm.' } },
      { name: { tr: 'Beyoncé', en: 'Beyoncé' }, role: { tr: 'Sanatçı', en: 'Artist' }, detail: { tr: 'Yaratıcı süreçlerinde uzun, yoğun ve disiplinli prova/çalışma bloklarıyla tanınır.', en: 'She’s known for long, intense, disciplined rehearsal and work blocks in her creative process.' } },
    ],
  },
  {
    id: 'sakinguc',
    name: { tr: 'Sakin Güç', en: 'Calm Strength' },
    emoji: '🏔️',
    tagline: { tr: 'Güç, gösterişte değil süreklilikte.', en: 'Strength lives in consistency, not in showing off.' },
    match: { priority: ['saglik'], energy: ['sabah', 'oglen'], stress: ['fiziksel'], freetime: ['hareket', 'tuketmek'],
      workstyle: ['istikrarli'], social: ['kucuk', 'yalniz'], motivation: ['anlam', 'katki'], sleep: ['erken', 'kaliteli'], decision: ['deneyim', 'mantik'], idealday: ['dengeli'] },
    why: {
      tr: 'Sağlık en büyük önceliğin ve fiziksel yorgunluk seni en çok zorlayan şey. Aşırıya kaçmadan, sürdürülebilir ve bedenini önceleyen istikrarlı bir ritim sana en çok değer katar.',
      en: 'Health is your top priority and physical fatigue is what challenges you most. A steady, sustainable rhythm that puts your body first, without ever going to extremes, adds the most value to your life.',
    },
    routine: {
      sabah: {
        tr: ['Yeterli uykudan sonra sakin bir uyanış', 'Hafif germe veya kısa bir yürüyüş', 'Dengeli, doyurucu bir kahvaltı'],
        en: ['A calm wake-up after enough sleep', 'Light stretching or a short walk', 'A balanced, satisfying breakfast'],
      },
      ogle: {
        tr: ['Uzun oturuşlara ara veren kısa hareket molaları', 'Bol su, düzenli ve sade öğünler', 'Enerji düştüğünde zorlamadan kısa bir mola'],
        en: ['Short movement breaks that interrupt long sitting', 'Plenty of water, regular and simple meals', 'A short break when energy dips — without forcing it'],
      },
      aksam: {
        tr: ['Orta tempolu bir egzersiz (yürüyüş, yüzme, yoga)', 'Ekranı erken bırakıp bedeni dinlendir', 'Sabit bir uyku saatiyle toparlanmaya öncelik ver'],
        en: ['A moderate-paced exercise — walking, swimming, yoga', 'Put screens away early and let your body rest', 'Prioritize recovery with a consistent bedtime'],
      },
    },
    models: [
      { name: { tr: 'LeBron James', en: 'LeBron James' }, role: { tr: 'Basketbolcu', en: 'Basketball player' }, detail: { tr: 'Vücut bakımına yıllık büyük bir yatırım yaparak uzun ömürlü bir performansı sürdürülebilir kılıyor.', en: 'He invests heavily in body maintenance every year, making long-term performance sustainable.' } },
      { name: { tr: 'Novak Djokovic', en: 'Novak Djokovic' }, role: { tr: 'Tenisçi', en: 'Tennis player' }, detail: { tr: 'Beslenme, uyku ve toparlanmayı performansının temel taşı olarak görür.', en: 'He treats nutrition, sleep, and recovery as the cornerstones of his performance.' } },
      { name: { tr: 'Arnold Schwarzenegger', en: 'Arnold Schwarzenegger' }, role: { tr: 'Sporcu, oyuncu', en: 'Athlete, actor' }, detail: { tr: 'Onlarca yıldır süren istikrarlı bir sağlık ve antrenman disiplinini kamuoyuyla paylaşmaya devam ediyor.', en: 'He continues to share a health and training discipline he has kept up consistently for decades.' } },
    ],
  },
];

/* ---------- eşleştirme motoru ---------- */

const WEIGHTS = {
  priority: 2, energy: 1, stress: 1.5, freetime: 1.5,
  workstyle: 1, social: 1, motivation: 1.5, sleep: 1, decision: 0.75, idealday: 1.25,
};

function pickArchetype(answers) {
  let best = null;
  let bestScore = -Infinity;

  for (const archetype of ARCHETYPES) {
    let score = 0;
    for (const key of Object.keys(WEIGHTS)) {
      if (archetype.match[key].includes(answers[key])) {
        score += WEIGHTS[key];
      }
    }
    if (score > bestScore) {
      bestScore = score;
      best = archetype;
    }
  }
  return best;
}

/* ---------- durum ---------- */

const state = {
  step: 0,
  answers: {},
};

/* ---------- dom ---------- */

const screens = {
  welcome: document.getElementById('screen-welcome'),
  quiz: document.getElementById('screen-quiz'),
  loading: document.getElementById('screen-loading'),
  result: document.getElementById('screen-result'),
};

const questionsEl = document.getElementById('questions');
const progressFill = document.getElementById('progress-fill');
const progressLabel = document.getElementById('progress-label');
const btnBack = document.getElementById('btn-back');
const btnNext = document.getElementById('btn-next');

function showScreen(name) {
  Object.values(screens).forEach(s => s.classList.remove('active'));
  screens[name].classList.add('active');
}

/* soruları oluştur (metinler applyQuestionTexts ile dolduruluyor) */
QUESTIONS.forEach((q, qi) => {
  const wrap = document.createElement('div');
  wrap.className = 'question';
  wrap.dataset.index = qi;

  const h2 = document.createElement('h2');
  wrap.appendChild(h2);

  const opts = document.createElement('div');
  opts.className = 'options';

  q.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'option';
    btn.dataset.value = opt.value;

    const emojiSpan = document.createElement('span');
    emojiSpan.className = 'option-emoji';
    emojiSpan.textContent = opt.emoji;

    const labelSpan = document.createElement('span');
    labelSpan.className = 'option-label';

    btn.appendChild(emojiSpan);
    btn.appendChild(labelSpan);
    btn.addEventListener('click', () => selectOption(qi, q.key, opt.value, btn));
    opts.appendChild(btn);
  });

  wrap.appendChild(opts);
  questionsEl.appendChild(wrap);
});

function applyQuestionTexts() {
  QUESTIONS.forEach((q, qi) => {
    const wrap = questionsEl.querySelector(`.question[data-index="${qi}"]`);
    wrap.querySelector('h2').textContent = q.title[LANG];
    const buttons = wrap.querySelectorAll('.option');
    q.options.forEach((opt, oi) => {
      buttons[oi].querySelector('.option-label').textContent = opt.label[LANG];
    });
  });
}

function applyWelcomeTexts() {
  document.getElementById('welcome-title').innerHTML = STRINGS[LANG].welcomeTitle;
  document.getElementById('lead-text').textContent = STRINGS[LANG].lead;
  document.getElementById('sub-text').textContent = STRINGS[LANG].sub;
  document.getElementById('btn-start').innerHTML = `${STRINGS[LANG].start} <span class="arrow">→</span>`;
}

function applyResultChrome() {
  document.getElementById('result-eyebrow').textContent = STRINGS[LANG].resultEyebrow;
  document.getElementById('routine-title').textContent = STRINGS[LANG].routineTitle;
  document.getElementById('models-title').textContent = STRINGS[LANG].modelsTitle;
  document.getElementById('btn-restart').innerHTML = `↺ ${STRINGS[LANG].restart}`;
}

function updateQuizChrome() {
  progressFill.style.width = `${((state.step + 1) / QUESTIONS.length) * 100}%`;
  progressLabel.textContent = `${STRINGS[LANG].soru} ${state.step + 1} / ${QUESTIONS.length}`;
  btnBack.textContent = `← ${STRINGS[LANG].back}`;
  btnBack.style.visibility = state.step === 0 ? 'hidden' : 'visible';

  const currentKey = QUESTIONS[state.step].key;
  btnNext.disabled = !state.answers[currentKey];
  if (state.step === QUESTIONS.length - 1) {
    btnNext.innerHTML = `${STRINGS[LANG].seeResult} <span class="arrow">✦</span>`;
  } else {
    btnNext.innerHTML = `${STRINGS[LANG].next} <span class="arrow">→</span>`;
  }
}

function setLanguage(lang) {
  if (lang !== 'tr' && lang !== 'en') return;
  LANG = lang;
  try { localStorage.setItem('lifecraft-lang', lang); } catch (e) { /* ignore */ }
  document.documentElement.lang = lang;
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));

  applyWelcomeTexts();
  applyQuestionTexts();
  updateQuizChrome();
  applyResultChrome();

  if (screens.result.classList.contains('active')) {
    renderResult(pickArchetype(state.answers));
  }
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

function selectOption(qIndex, key, value, btnEl) {
  state.answers[key] = value;

  const wrap = questionsEl.querySelector(`.question[data-index="${qIndex}"]`);
  wrap.querySelectorAll('.option').forEach(o => o.classList.remove('selected'));
  btnEl.classList.add('selected');

  btnNext.disabled = false;
}

function renderStep(direction = 'forward') {
  const allQuestions = questionsEl.querySelectorAll('.question');
  allQuestions.forEach((q, i) => {
    q.classList.remove('anim-right', 'anim-left');
    q.classList.toggle('active', i === state.step);
  });

  const current = questionsEl.querySelector(`.question[data-index="${state.step}"]`);
  void current.offsetWidth; // reflow, so the entrance animation replays every time
  current.classList.add(direction === 'back' ? 'anim-left' : 'anim-right');

  updateQuizChrome();
}

btnBack.addEventListener('click', () => {
  if (state.step > 0) {
    state.step -= 1;
    renderStep('back');
  }
});

btnNext.addEventListener('click', () => {
  if (state.step < QUESTIONS.length - 1) {
    state.step += 1;
    renderStep('forward');
  } else {
    finishQuiz();
  }
});

document.getElementById('btn-start').addEventListener('click', () => {
  showScreen('quiz');
  renderStep();
});

document.getElementById('btn-restart').addEventListener('click', () => {
  state.step = 0;
  state.answers = {};
  questionsEl.querySelectorAll('.option').forEach(o => o.classList.remove('selected'));
  showScreen('welcome');
});

function finishQuiz() {
  showScreen('loading');
  const loadingTextEl = document.getElementById('loading-text');
  const messages = STRINGS[LANG].loadingMessages;
  let i = 0;
  loadingTextEl.textContent = messages[0];
  const cycle = setInterval(() => {
    i = (i + 1) % messages.length;
    loadingTextEl.style.opacity = 0;
    setTimeout(() => {
      loadingTextEl.textContent = messages[i];
      loadingTextEl.style.opacity = 1;
    }, 200);
  }, 550);

  setTimeout(() => {
    clearInterval(cycle);
    const archetype = pickArchetype(state.answers);
    renderResult(archetype);
    showScreen('result');
  }, 1800);
}

const PERIOD_KEYS = ['sabah', 'ogle', 'aksam'];

function renderResult(a) {
  document.getElementById('result-emoji').textContent = a.emoji;
  document.getElementById('result-name').textContent = a.name[LANG];
  document.getElementById('result-tagline').textContent = a.tagline[LANG];
  document.getElementById('result-why').textContent = a.why[LANG];

  const routineGrid = document.getElementById('routine-grid');
  routineGrid.innerHTML = '';
  PERIOD_KEYS.forEach(periodKey => {
    const items = a.routine[periodKey][LANG];
    const block = document.createElement('div');
    block.className = 'routine-block';
    const h4 = document.createElement('h4');
    h4.textContent = STRINGS[LANG].periods[periodKey];
    const ul = document.createElement('ul');
    items.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      ul.appendChild(li);
    });
    block.appendChild(h4);
    block.appendChild(ul);
    routineGrid.appendChild(block);
  });

  const modelsGrid = document.getElementById('models-grid');
  modelsGrid.innerHTML = '';
  a.models.forEach(m => {
    const card = document.createElement('div');
    card.className = 'model-card';
    card.innerHTML = `
      <div class="model-name">${m.name[LANG]}</div>
      <div class="model-role">${m.role[LANG]}</div>
      <div class="model-detail">${m.detail[LANG]}</div>
    `;
    modelsGrid.appendChild(card);
  });

  applyResultChrome();
}

/* ---------- ilk yükleme ---------- */

document.documentElement.lang = LANG;
document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === LANG));
applyWelcomeTexts();
applyQuestionTexts();
updateQuizChrome();
applyResultChrome();
