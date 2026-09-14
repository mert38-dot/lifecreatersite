/* ---------- veri: sorular ---------- */

const QUESTIONS = [
  {
    key: 'priority',
    title: 'Hayattaki en büyük önceliğin nedir?',
    options: [
      { value: 'basari',      emoji: '🚀', label: 'Başarı — hedeflere ulaşmak, ilerlemek' },
      { value: 'huzur',       emoji: '🕊️', label: 'Huzur — sakinlik, iç denge' },
      { value: 'macera',      emoji: '🧭', label: 'Macera — yeni deneyimler, keşif' },
      { value: 'saglik',      emoji: '💪', label: 'Sağlık — beden ve zihin bakımı' },
    ],
  },
  {
    key: 'energy',
    title: 'Günün hangi saatlerinde en enerjik hissediyorsun?',
    options: [
      { value: 'sabah',  emoji: '🌅', label: 'Sabah erken (05:00 – 09:00)' },
      { value: 'oglen',  emoji: '☀️', label: 'Gün ortası (09:00 – 14:00)' },
      { value: 'aksam',  emoji: '🌇', label: 'Öğleden sonra / akşamüstü' },
      { value: 'gece',   emoji: '🌙', label: 'Gece geç saatler' },
    ],
  },
  {
    key: 'stress',
    title: 'Seni en çok ne yorar veya strese sokar?',
    options: [
      { value: 'kalabalik',    emoji: '🌀', label: 'Kalabalık, sosyal yoğunluk' },
      { value: 'duzensizlik',  emoji: '📦', label: 'Düzensizlik, kaos' },
      { value: 'zaman',        emoji: '⏱️', label: 'Zaman baskısı, son teslim tarihleri' },
      { value: 'monotonluk',   emoji: '🔁', label: 'Monotonluk, sıkılmak' },
      { value: 'fiziksel',     emoji: '🔋', label: 'Fiziksel yorgunluk, uykusuzluk' },
    ],
  },
  {
    key: 'freetime',
    title: 'Boş vaktinde üretmeyi mi, tüketmeyi mi, yoksa hareket etmeyi mi seversin?',
    options: [
      { value: 'uretmek',  emoji: '🎨', label: 'Üretmek — yazmak, yaratmak, öğrenmek' },
      { value: 'tuketmek', emoji: '🛋️', label: 'Tüketmek — dinlenmek, izlemek, okumak' },
      { value: 'hareket',  emoji: '🏃', label: 'Hareket etmek — spor, dışarı çıkmak' },
    ],
  },
  {
    key: 'workstyle',
    title: 'Çalışma tarzın nasıl?',
    options: [
      { value: 'planli',     emoji: '📋', label: 'Planlı ve düzenli — listeler, takvimler' },
      { value: 'esnek',      emoji: '🌊', label: 'Esnek ve spontane — akışına göre' },
      { value: 'sprint',     emoji: '⚡', label: 'Yoğun sprintler + dinlenme molaları' },
      { value: 'istikrarli', emoji: '🪨', label: 'Sakin ve istikrarlı, hep aynı tempo' },
    ],
  },
  {
    key: 'social',
    title: 'Sosyal ortamda mı, yoksa yalnızken mi daha üretkensin?',
    options: [
      { value: 'yalniz',    emoji: '🚪', label: 'Tamamen yalnızken' },
      { value: 'kucuk',     emoji: '👥', label: 'Küçük, samimi gruplarda' },
      { value: 'kalabalik', emoji: '🎉', label: 'Kalabalık, enerjik ortamlarda' },
      { value: 'degisken',  emoji: '🔄', label: 'Değişken, duruma göre' },
    ],
  },
  {
    key: 'motivation',
    title: 'Seni en çok ne motive eder?',
    options: [
      { value: 'rekabet', emoji: '🏆', label: 'Rekabet ve başarı' },
      { value: 'anlam',   emoji: '🌱', label: 'İç huzur ve anlam' },
      { value: 'yenilik', emoji: '💡', label: 'Yenilik ve keşif' },
      { value: 'katki',   emoji: '🤝', label: 'Başkalarına katkı sağlamak' },
    ],
  },
  {
    key: 'sleep',
    title: 'Uyku düzenin nasıl?',
    options: [
      { value: 'erken',    emoji: '🌅', label: 'Erken yatar, erken kalkarım' },
      { value: 'gec',      emoji: '🌙', label: 'Geç yatar, geç kalkarım' },
      { value: 'duzensiz', emoji: '🌀', label: 'Düzensiz, güne göre değişir' },
      { value: 'kaliteli', emoji: '⏳', label: 'Kısa ama kaliteli uyurum' },
    ],
  },
  {
    key: 'decision',
    title: 'Karar verirken en çok neye güvenirsin?',
    options: [
      { value: 'mantik',    emoji: '🧮', label: 'Mantık ve veri' },
      { value: 'sezgi',     emoji: '✨', label: 'Sezgi ve iç ses' },
      { value: 'deneyim',   emoji: '📚', label: 'Geçmiş deneyim ve alışkanlık' },
      { value: 'baskalari', emoji: '🗣️', label: 'Güvendiğim kişilerin fikri' },
    ],
  },
  {
    key: 'idealday',
    title: 'İdeal bir günün nasıl geçer?',
    options: [
      { value: 'yogun',   emoji: '🔥', label: 'Yoğun ve üretken, dolu dolu' },
      { value: 'sakin',   emoji: '🍃', label: 'Sakin, amaçsız, akışına bırakılmış' },
      { value: 'maceral', emoji: '🗺️', label: 'Maceralı, öngörülemez' },
      { value: 'dengeli', emoji: '⚖️', label: 'Dengeli, rutin ama tatmin edici' },
    ],
  },
];

/* ---------- veri: yaşam tarzı arketipleri ---------- */

const ARCHETYPES = [
  {
    id: 'zen',
    name: 'Zen Üretkenliği',
    emoji: '🧘',
    tagline: 'Sakin bir zihin, keskin bir odak.',
    match: { priority: ['huzur', 'saglik'], energy: ['sabah', 'oglen'], stress: ['zaman', 'duzensizlik'], freetime: ['uretmek'],
      workstyle: ['istikrarli', 'planli'], social: ['yalniz', 'kucuk'], motivation: ['anlam'], sleep: ['erken', 'kaliteli'], decision: ['sezgi', 'mantik'], idealday: ['sakin', 'dengeli'] },
    why: 'Huzuru önceliklendiriyor, gün ışığında en verimli haline geçiyor ve kaostan uzak durduğunda üretkenliğin katlanıyor. Bu sana sakinlikten güç alan, dağınıklığa yer bırakmayan bir ritim kazandırır.',
    routine: {
      Sabah: ['10 dakikalık sessiz nefes/meditasyon ile güne başla', 'Telefona bakmadan önce günün en önemli 1 işini belirle', 'Hafif bir kahvaltı ve doğal ışıkta birkaç dakika'],
      Öğle: ['En zor işini enerjinin tepe noktasında (öğlene kadar) bitir', '25-30 dakikalık odak blokları + kısa molalar', 'Öğle arasında ekransız, sessiz bir yürüyüş'],
      Akşam: ['Gün sonunda 3 satırlık minnettarlık notu', 'Ekranları erken kapat, kitap veya sessiz müzik', 'Sabit bir uyku saatiyle günü kapat'],
    },
    models: [
      { name: 'Steve Jobs', role: 'Apple kurucu ortağı', detail: 'Zen Budizm ve meditasyon pratiğini yıllarca sürdürdü; sadeliği hem yaşamına hem ürün tasarımına taşıdı.' },
      { name: 'Arianna Huffington', role: 'Girişimci, yazar', detail: 'Dinlenmenin ve uykunun üretkenlikle çelişmediğini, aksine onu beslediğini savunarak Thrive Global\'i kurdu.' },
      { name: 'Yuval Noah Harari', role: 'Tarihçi, yazar', detail: 'Günlük meditasyon pratiğinin en yoğun yazım dönemlerinde bile net düşünmesini sağladığını sıkça anlatır.' },
    ],
  },
  {
    id: 'gecekusu',
    name: 'Dinamik Gecekuşu',
    emoji: '🌙',
    tagline: 'Şehir uyurken, sen inşa ediyorsun.',
    match: { priority: ['basari', 'macera'], energy: ['gece'], stress: ['monotonluk'], freetime: ['uretmek', 'hareket'],
      workstyle: ['sprint', 'esnek'], social: ['degisken', 'yalniz'], motivation: ['yenilik', 'rekabet'], sleep: ['gec'], decision: ['sezgi'], idealday: ['yogun', 'maceral'] },
    why: 'Enerjin gece saatlerinde zirve yapıyor ve monotonluktan sıkılıyorsun. Günü klasik bir sabah rutinine sıkıştırmak yerine, kendi doğal ritmine göre kurulmuş yoğun ve yaratıcı bir akış seni çok daha ileri taşır.',
    routine: {
      Sabah: ['Alarm yok — vücudun uyandığında kalk', 'Hafif, hızlı bir kahvaltı ile güne yumuşak giriş', 'Gündelik işleri ve iletişimi öğleye kadar topla'],
      Öğle: ['Toplantılar ve rutin işler için ayrılmış blok', 'Kısa bir güç uykusu (power nap) enerji rezervini tazeler', 'Ertesi gecenin planını netleştir'],
      Akşam: ['Şehir sakinleşirken derin odak seansı başlasın', 'En yaratıcı / en zor işini gece saatlerine sakla', 'Ekranı kapatmadan önce kısa bir soğuma molası ver'],
    },
    models: [
      { name: 'Winston Churchill', role: 'Devlet adamı, yazar', detail: 'Gece yarısından sonra saatlerce çalışır, en önemli kararlarını ve yazılarını bu saatlerde şekillendirirdi.' },
      { name: 'Elon Musk', role: 'Girişimci', detail: 'Yoğun proje dönemlerinde çalışmasını gece saatlerine kadar uzattığını defalarca paylaştı.' },
      { name: 'Marissa Mayer', role: 'Eski Yahoo CEO\'su', detail: 'Kariyerinin başında en yaratıcı işlerini gece geç saatlerde yaptığını anlatmasıyla tanınır.' },
    ],
  },
  {
    id: 'minimalist',
    name: 'Minimalist Odak',
    emoji: '◻️',
    tagline: 'Daha azıyla, daha derini yakala.',
    match: { priority: ['huzur'], energy: ['sabah', 'oglen'], stress: ['kalabalik', 'duzensizlik'], freetime: ['tuketmek', 'uretmek'],
      workstyle: ['planli', 'istikrarli'], social: ['yalniz'], motivation: ['anlam'], sleep: ['kaliteli', 'erken'], decision: ['mantik'], idealday: ['sakin', 'dengeli'] },
    why: 'Kalabalık ve düzensizlik seni yoruyor, huzur en büyük önceliğin. Gündemini sadeleştirip gerçekten önemli olan birkaç şeye alan açmak, hem zihnini hem zamanını rahatlatır.',
    routine: {
      Sabah: ['Güne tek bir net niyetle başla ("bugün önemli olan tek şey…")', 'Bildirimler kapalı, sade bir kahvaltı', 'Gün için en fazla 3 öncelik belirle'],
      Öğle: ['Tek seferde tek iş — çoklu görevden kaçın', 'Masanı ve dijital alanını sade tut', 'Gereksiz toplantı/etkileşimleri nazikçe azalt'],
      Akşam: ['Günün fazlalıklarını (eşya, görev, mesaj) tasfiye et', 'Sessiz bir aktivite: okuma, yürüyüş, günlük tutma', 'Yarının 3 önceliğini önceden yaz'],
    },
    models: [
      { name: 'Steve Jobs', role: 'Apple kurucu ortağı', detail: 'Aynı kıyafeti giyerek bile gündelik kararları azaltıp zihnini asıl işine ayırdığını anlatırdı.' },
      { name: 'Naval Ravikant', role: 'Yatırımcı, yazar', detail: 'Sadelik ve "daha az ama derin" felsefesini hem iş hayatına hem kişisel yaşamına taşımasıyla tanınır.' },
      { name: 'Marie Kondo', role: 'Yazar, düzen uzmanı', detail: 'Fiziksel ve zihinsel sadeleşmenin huzuru doğrudan artırdığını dünyaya öğretti.' },
    ],
  },
  {
    id: 'savasci',
    name: 'Savaşçı Disiplini',
    emoji: '⚔️',
    tagline: 'Disiplin, motivasyonun bittiği yerde başlar.',
    match: { priority: ['basari', 'saglik'], energy: ['sabah'], stress: ['zaman', 'fiziksel'], freetime: ['hareket'],
      workstyle: ['planli', 'sprint'], social: ['kucuk', 'yalniz'], motivation: ['rekabet'], sleep: ['erken'], decision: ['mantik', 'deneyim'], idealday: ['yogun'] },
    why: 'Başarı ve sağlık senin için öncelikli, sabahları güçlüsün ve harekete geçmeyi seviyorsun. Net, disiplinli ve fiziksel olarak zorlayıcı bir rutin seni en iyi versiyonuna taşır.',
    routine: {
      Sabah: ['Sabit ve erken bir kalkış saati (hafta sonu dahil)', 'Yoğun bir antrenman veya soğuk duş ile bedeni uyandır', 'Günün 1 numaralı hedefini yüksek sesle veya yazılı belirle'],
      Öğle: ['En zor işi enerji tepe noktasında bitir', 'Kısa, verimli öğünler — uzun molalardan kaçın', 'Planlanmamış zamana izin verme, blokla çalış'],
      Akşam: ['Hafif hareket (yürüyüş/germe) ile bedeni sakinleştir', 'Günü değerlendir: ne işe yaradı, ne yaramadı', 'Erken ve sabit bir uyku saati disiplinini koru'],
    },
    models: [
      { name: 'Kobe Bryant', role: 'Basketbolcu', detail: '"Mamba Mentality" felsefesiyle sabah 4\'te başlayan antrenmanları kariyerinin efsanesi haline geldi.' },
      { name: 'Tim Cook', role: 'Apple CEO\'su', detail: 'Sabah 04:00 civarında uyanıp spor yaparak güne disiplinli bir başlangıç yapmasıyla bilinir.' },
      { name: 'David Goggins', role: 'Ultra maratoncu, yazar', detail: 'Zihinsel dayanıklılığı fiziksel disiplinle inşa etme felsefesini milyonlara ilham vererek anlattı.' },
    ],
  },
  {
    id: 'maceraci',
    name: 'Maceracı Ruh',
    emoji: '🧭',
    tagline: 'Konfor alanı, senin için bir durak, varış değil.',
    match: { priority: ['macera'], energy: ['aksam', 'oglen'], stress: ['monotonluk'], freetime: ['hareket'],
      workstyle: ['esnek'], social: ['degisken', 'kalabalik'], motivation: ['yenilik'], sleep: ['duzensiz', 'gec'], decision: ['sezgi'], idealday: ['maceral'] },
    why: 'Macera en büyük önceliğin ve monotonluk seni en çok yoran şey. Yaşamını tekrar eden bir rutine değil, keşfe ve harekete açık bir yapıya oturtmak seni canlı tutar.',
    routine: {
      Sabah: ['Esnek bir kalkış — güne katı bir plan dayatma', 'Kısa bir açık hava molası (balkon, bahçe, sokak)', 'Haftalık "yeni bir şey" hedefini gözden geçir'],
      Öğle: ['Rutin işleri toparla, ama tek bir şablona bağlı kalma', 'Farklı bir ortamda çalış/molanı ver (kafe, park, yeni rota)', 'Fiziksel harekete zaman ayır: yürüyüş, bisiklet, spor'],
      Akşam: ['Haftada en az bir kez alışılmadık bir aktivite planla', 'Yeni insanlarla / yeni yerlerle tanışmaya açık kal', 'Günü, öğrendiğin bir şeyi not ederek kapat'],
    },
    models: [
      { name: 'Richard Branson', role: 'Girişimci', detail: 'Kitesurften uzay girişimciliğine, riski ve keşfi iş felsefesinin merkezine koydu.' },
      { name: 'Alex Honnold', role: 'Dağcı', detail: 'Free solo tırmanışlarıyla konfor alanının çok ötesinde bir yaşamı gündelik pratiğe dönüştürdü.' },
      { name: 'Yvon Chouinard', role: 'Patagonia kurucusu', detail: 'Doğaya ve maceraya olan tutkusunu doğrudan iş modeline dönüştürerek yaşadı.' },
    ],
  },
  {
    id: 'sefkatli',
    name: 'Şefkatli Denge',
    emoji: '🌿',
    tagline: 'Kendine ve çevrene nazik bir ritim.',
    match: { priority: ['huzur', 'saglik'], energy: ['oglen', 'aksam'], stress: ['kalabalik'], freetime: ['tuketmek'],
      workstyle: ['istikrarli'], social: ['kucuk'], motivation: ['katki', 'anlam'], sleep: ['kaliteli', 'duzensiz'], decision: ['baskalari', 'sezgi'], idealday: ['dengeli', 'sakin'] },
    why: 'Huzur ve sağlık öncelikli, sosyal yoğunluk seni yoruyor. Kendine şefkat gösteren, dinlenmeye yer açan ve dengeyi zorlamadan kuran bir yaşam tarzı seninle en iyi örtüşüyor.',
    routine: {
      Sabah: ['Aceleye getirmeden, yavaş bir başlangıç', 'Su iç, birkaç dakika hareket et, güne yumuşak gir', 'Gün için 1-2 makul, esnek hedef belirle'],
      Öğle: ['Sosyal etkileşimleri küçük ve seçici tut', 'Kısa molalarla enerjini koru, kendini zorlama', 'Sakin bir ortamda, tek başına yemek arası'],
      Akşam: ['Dinlendirici bir aktivite: izlemek, okumak, sıcak duş', 'Kendine 1 nazik cümle söyle (öz-şefkat pratiği)', 'Ekranları erken kapatıp bedenini dinlendir'],
    },
    models: [
      { name: 'Michelle Obama', role: 'Yazar, eski First Lady', detail: 'Sağlığı ve kendine bakımı, toplumsal sorumluluklarla birlikte yürütülebilecek bir denge olarak savunur.' },
      { name: 'Oprah Winfrey', role: 'Medya yapımcısı', detail: 'Minnettarlık günlüğü ve öz-şefkat pratiklerini onlarca yıldır kamuoyuyla paylaşıyor.' },
      { name: '14. Dalai Lama', role: 'Manevi lider', detail: 'Şefkati hem kendine hem başkalarına yönelik günlük bir pratik olarak öğretisinin merkezine koyar.' },
    ],
  },
  {
    id: 'yaratici',
    name: 'Yaratıcı Akış',
    emoji: '🎨',
    tagline: 'İlham bekleme, ona giden yolu inşa et.',
    match: { priority: ['basari', 'macera'], energy: ['gece', 'aksam'], stress: ['monotonluk', 'duzensizlik'], freetime: ['uretmek'],
      workstyle: ['esnek', 'sprint'], social: ['degisken', 'yalniz'], motivation: ['yenilik'], sleep: ['gec', 'duzensiz'], decision: ['sezgi'], idealday: ['yogun', 'maceral'] },
    why: 'Üretmekten güç alıyorsun, monotonluk seni bunaltıyor ve enerjin günün geç saatlerine doğru yükseliyor. Katı bir programdan çok, seni akışa sokan esnek ama disiplinli bir yaratım ritmi sana en çok fayda sağlar.',
    routine: {
      Sabah: ['İlham toplama zamanı: okuma, gezinme, gözlem', 'Zihni işgal etmeyen basit işleri sabaha ayır', 'Günün "yaratım penceresini" netleştir'],
      Öğle: ['Küçük deneyler ve taslaklar için zaman ayır', 'Rutin/idari işleri bu dilime sıkıştır', 'Kısa bir mola ile zihnini dinlendir'],
      Akşam: ['Asıl yaratıcı işini en yüksek enerjinle yap', 'Dış müdahaleleri (bildirim, mesaj) kapat', 'Günü, yarına bırakılan bir fikirle bitir'],
    },
    models: [
      { name: 'Haruki Murakami', role: 'Yazar', detail: 'Sıkı bir disiplinle sabah yazar, koşar ve yaratıcı enerjisini fiziksel rutinle besler.' },
      { name: 'Pablo Picasso', role: 'Ressam', detail: 'Gece saatlerinde çalışmayı tercih ederek en üretken dönemlerini bu ritme borçlu olduğunu söylerdi.' },
      { name: 'Beyoncé', role: 'Sanatçı', detail: 'Yaratıcı süreçlerinde uzun, yoğun ve disiplinli prova/çalışma bloklarıyla tanınır.' },
    ],
  },
  {
    id: 'sakinguc',
    name: 'Sakin Güç',
    emoji: '🏔️',
    tagline: 'Güç, gösterişte değil süreklilikte.',
    match: { priority: ['saglik'], energy: ['sabah', 'oglen'], stress: ['fiziksel'], freetime: ['hareket', 'tuketmek'],
      workstyle: ['istikrarli'], social: ['kucuk', 'yalniz'], motivation: ['anlam', 'katki'], sleep: ['erken', 'kaliteli'], decision: ['deneyim', 'mantik'], idealday: ['dengeli'] },
    why: 'Sağlık en büyük önceliğin ve fiziksel yorgunluk seni en çok zorlayan şey. Aşırıya kaçmadan, sürdürülebilir ve bedenini önceleyen istikrarlı bir ritim sana en çok değer katar.',
    routine: {
      Sabah: ['Yeterli uykudan sonra sakin bir uyanış', 'Hafif germe veya kısa bir yürüyüş', 'Dengeli, doyurucu bir kahvaltı'],
      Öğle: ['Uzun oturuşlara ara veren kısa hareket molaları', 'Bol su, düzenli ve sade öğünler', 'Enerji düştüğünde zorlamadan kısa bir mola'],
      Akşam: ['Orta tempolu bir egzersiz (yürüyüş, yüzme, yoga)', 'Ekranı erken bırakıp bedeni dinlendir', 'Sabit bir uyku saatiyle toparlanmaya öncelik ver'],
    },
    models: [
      { name: 'LeBron James', role: 'Basketbolcu', detail: 'Vücut bakımına yıllık büyük bir yatırım yaparak uzun ömürlü bir performansı sürdürülebilir kılıyor.' },
      { name: 'Novak Djokovic', role: 'Tenisçi', detail: 'Beslenme, uyku ve toparlanmayı performansının temel taşı olarak görür.' },
      { name: 'Arnold Schwarzenegger', role: 'Sporcu, oyuncu', detail: 'Onlarca yıldır süren istikrarlı bir sağlık ve antrenman disiplinini kamuoyuyla paylaşmaya devam ediyor.' },
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

/* soruları oluştur */
QUESTIONS.forEach((q, qi) => {
  const wrap = document.createElement('div');
  wrap.className = 'question';
  wrap.dataset.index = qi;

  const h2 = document.createElement('h2');
  h2.textContent = q.title;
  wrap.appendChild(h2);

  const opts = document.createElement('div');
  opts.className = 'options';

  q.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'option';
    btn.dataset.value = opt.value;
    btn.innerHTML = `<span class="option-emoji">${opt.emoji}</span><span class="option-label">${opt.label}</span>`;
    btn.addEventListener('click', () => selectOption(qi, q.key, opt.value, btn));
    opts.appendChild(btn);
  });

  wrap.appendChild(opts);
  questionsEl.appendChild(wrap);
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

  progressFill.style.width = `${((state.step + 1) / QUESTIONS.length) * 100}%`;
  progressLabel.textContent = `Soru ${state.step + 1} / ${QUESTIONS.length}`;

  btnBack.style.visibility = state.step === 0 ? 'hidden' : 'visible';

  const currentKey = QUESTIONS[state.step].key;
  btnNext.disabled = !state.answers[currentKey];
  if (state.step === QUESTIONS.length - 1) {
    btnNext.innerHTML = 'Sonucumu Gör <span class="arrow">✦</span>';
  } else {
    btnNext.innerHTML = 'Devam Et <span class="arrow">→</span>';
  }
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

const LOADING_MESSAGES = [
  'Cevapların analiz ediliyor…',
  'Enerji ritmin okunuyor…',
  'Sana en yakın yaşam tarzı belirleniyor…',
  'Rutinin şekilleniyor…',
];

function finishQuiz() {
  showScreen('loading');
  const loadingTextEl = document.getElementById('loading-text');
  let i = 0;
  loadingTextEl.textContent = LOADING_MESSAGES[0];
  const cycle = setInterval(() => {
    i = (i + 1) % LOADING_MESSAGES.length;
    loadingTextEl.style.opacity = 0;
    setTimeout(() => {
      loadingTextEl.textContent = LOADING_MESSAGES[i];
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

function renderResult(a) {
  document.getElementById('result-emoji').textContent = a.emoji;
  document.getElementById('result-name').textContent = a.name;
  document.getElementById('result-tagline').textContent = a.tagline;
  document.getElementById('result-why').textContent = a.why;

  const routineGrid = document.getElementById('routine-grid');
  routineGrid.innerHTML = '';
  Object.entries(a.routine).forEach(([period, items]) => {
    const block = document.createElement('div');
    block.className = 'routine-block';
    const h4 = document.createElement('h4');
    h4.textContent = period;
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
      <div class="model-name">${m.name}</div>
      <div class="model-role">${m.role}</div>
      <div class="model-detail">${m.detail}</div>
    `;
    modelsGrid.appendChild(card);
  });
}
