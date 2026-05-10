const VOCAB = [
  {
    "ru": "я",
    "translit": "ya",
    "de": "ich",
    "pos": "pron"
  },
  {
    "ru": "ты",
    "translit": "ty",
    "de": "du",
    "pos": "pron"
  },
  {
    "ru": "он",
    "translit": "on",
    "de": "er",
    "pos": "pron"
  },
  {
    "ru": "она",
    "translit": "ona",
    "de": "sie",
    "pos": "pron"
  },
  {
    "ru": "мы",
    "translit": "my",
    "de": "wir",
    "pos": "pron"
  },
  {
    "ru": "вы",
    "translit": "vy",
    "de": "ihr/Sie",
    "pos": "pron"
  },
  {
    "ru": "они",
    "translit": "oni",
    "de": "sie",
    "pos": "pron"
  },
  {
    "ru": "это",
    "translit": "eto",
    "de": "das/dies",
    "pos": "pron"
  },
  {
    "ru": "тот",
    "translit": "tot",
    "de": "jener",
    "pos": "pron"
  },
  {
    "ru": "этот",
    "translit": "etot",
    "de": "dieser",
    "pos": "pron"
  },
  {
    "ru": "кто",
    "translit": "kto",
    "de": "wer",
    "pos": "pron"
  },
  {
    "ru": "что",
    "translit": "chto",
    "de": "was",
    "pos": "pron"
  },
  {
    "ru": "где",
    "translit": "gde",
    "de": "wo",
    "pos": "adv"
  },
  {
    "ru": "когда",
    "translit": "kogda",
    "de": "wann",
    "pos": "adv"
  },
  {
    "ru": "как",
    "translit": "kak",
    "de": "wie",
    "pos": "adv"
  },
  {
    "ru": "почему",
    "translit": "pochemu",
    "de": "warum",
    "pos": "adv"
  },
  {
    "ru": "зачем",
    "translit": "zachem",
    "de": "wozu",
    "pos": "adv"
  },
  {
    "ru": "да",
    "translit": "da",
    "de": "ja",
    "pos": "part"
  },
  {
    "ru": "нет",
    "translit": "net",
    "de": "nein",
    "pos": "part"
  },
  {
    "ru": "не",
    "translit": "ne",
    "de": "nicht",
    "pos": "part"
  },
  {
    "ru": "и",
    "translit": "i",
    "de": "und",
    "pos": "conj"
  },
  {
    "ru": "или",
    "translit": "ili",
    "de": "oder",
    "pos": "conj"
  },
  {
    "ru": "но",
    "translit": "no",
    "de": "aber",
    "pos": "conj"
  },
  {
    "ru": "в",
    "translit": "v",
    "de": "in",
    "pos": "prep"
  },
  {
    "ru": "на",
    "translit": "na",
    "de": "auf/an",
    "pos": "prep"
  },
  {
    "ru": "с",
    "translit": "s",
    "de": "mit/von",
    "pos": "prep"
  },
  {
    "ru": "к",
    "translit": "k",
    "de": "zu",
    "pos": "prep"
  },
  {
    "ru": "у",
    "translit": "u",
    "de": "bei/haben",
    "pos": "prep"
  },
  {
    "ru": "из",
    "translit": "iz",
    "de": "aus",
    "pos": "prep"
  },
  {
    "ru": "за",
    "translit": "za",
    "de": "hinter/für",
    "pos": "prep"
  },
  {
    "ru": "для",
    "translit": "dlya",
    "de": "für",
    "pos": "prep"
  },
  {
    "ru": "по",
    "translit": "po",
    "de": "nach/auf",
    "pos": "prep"
  },
  {
    "ru": "под",
    "translit": "pod",
    "de": "unter",
    "pos": "prep"
  },
  {
    "ru": "над",
    "translit": "nad",
    "de": "über",
    "pos": "prep"
  },
  {
    "ru": "до",
    "translit": "do",
    "de": "bis/vor",
    "pos": "prep"
  },
  {
    "ru": "после",
    "translit": "posle",
    "de": "nach",
    "pos": "prep"
  },
  {
    "ru": "без",
    "translit": "bez",
    "de": "ohne",
    "pos": "prep"
  },
  {
    "ru": "при",
    "translit": "pri",
    "de": "bei/während",
    "pos": "prep"
  },
  {
    "ru": "о",
    "translit": "o",
    "de": "über",
    "pos": "prep"
  },
  {
    "ru": "об",
    "translit": "ob",
    "de": "über",
    "pos": "prep"
  },
  {
    "ru": "от",
    "translit": "ot",
    "de": "von",
    "pos": "prep"
  },
  {
    "ru": "же",
    "translit": "zhe",
    "de": "doch/nämlich",
    "pos": "part"
  },
  {
    "ru": "ли",
    "translit": "li",
    "de": "ob",
    "pos": "part"
  },
  {
    "ru": "бы",
    "translit": "by",
    "de": "würde",
    "pos": "part"
  },
  {
    "ru": "только",
    "translit": "tolko",
    "de": "nur",
    "pos": "adv"
  },
  {
    "ru": "уже",
    "translit": "uzhe",
    "de": "schon",
    "pos": "adv"
  },
  {
    "ru": "ещё",
    "translit": "eshchyo",
    "de": "noch",
    "pos": "adv"
  },
  {
    "ru": "очень",
    "translit": "ochen",
    "de": "sehr",
    "pos": "adv"
  },
  {
    "ru": "тут",
    "translit": "tut",
    "de": "hier",
    "pos": "adv"
  },
  {
    "ru": "там",
    "translit": "tam",
    "de": "dort",
    "pos": "adv"
  },
  {
    "ru": "сейчас",
    "translit": "seychas",
    "de": "jetzt",
    "pos": "adv"
  },
  {
    "ru": "потом",
    "translit": "potom",
    "de": "später",
    "pos": "adv"
  },
  {
    "ru": "сегодня",
    "translit": "segodnya",
    "de": "heute",
    "pos": "adv"
  },
  {
    "ru": "вчера",
    "translit": "vchera",
    "de": "gestern",
    "pos": "adv"
  },
  {
    "ru": "завтра",
    "translit": "zavtra",
    "de": "morgen",
    "pos": "adv"
  },
  {
    "ru": "всегда",
    "translit": "vsegda",
    "de": "immer",
    "pos": "adv"
  },
  {
    "ru": "иногда",
    "translit": "inogda",
    "de": "manchmal",
    "pos": "adv"
  },
  {
    "ru": "никогда",
    "translit": "nikogda",
    "de": "nie",
    "pos": "adv"
  },
  {
    "ru": "можно",
    "translit": "mozhno",
    "de": "man darf/es ist möglich",
    "pos": "adv"
  },
  {
    "ru": "нельзя",
    "translit": "nelzya",
    "de": "man darf nicht",
    "pos": "adv"
  },
  {
    "ru": "надо",
    "translit": "nado",
    "de": "man muss",
    "pos": "adv"
  },
  {
    "ru": "нужно",
    "translit": "nuzhno",
    "de": "es ist nötig",
    "pos": "adv"
  },
  {
    "ru": "быть",
    "translit": "byt",
    "de": "sein",
    "pos": "verb"
  },
  {
    "ru": "есть",
    "translit": "yest",
    "de": "essen / es gibt",
    "pos": "verb"
  },
  {
    "ru": "иметь",
    "translit": "imet",
    "de": "haben",
    "pos": "verb"
  },
  {
    "ru": "мочь",
    "translit": "moch",
    "de": "können",
    "pos": "verb"
  },
  {
    "ru": "хотеть",
    "translit": "khotet",
    "de": "wollen",
    "pos": "verb"
  },
  {
    "ru": "идти",
    "translit": "idti",
    "de": "gehen",
    "pos": "verb"
  },
  {
    "ru": "ехать",
    "translit": "yekhat",
    "de": "fahren",
    "pos": "verb"
  },
  {
    "ru": "приходить",
    "translit": "prikhodit",
    "de": "kommen",
    "pos": "verb"
  },
  {
    "ru": "делать",
    "translit": "delat",
    "de": "machen",
    "pos": "verb"
  },
  {
    "ru": "сказать",
    "translit": "skazat",
    "de": "sagen",
    "pos": "verb"
  },
  {
    "ru": "говорить",
    "translit": "govorit",
    "de": "sprechen",
    "pos": "verb"
  },
  {
    "ru": "видеть",
    "translit": "videt",
    "de": "sehen",
    "pos": "verb"
  },
  {
    "ru": "смотреть",
    "translit": "smotret",
    "de": "anschauen",
    "pos": "verb"
  },
  {
    "ru": "слушать",
    "translit": "slushat",
    "de": "zuhören",
    "pos": "verb"
  },
  {
    "ru": "слышать",
    "translit": "slyshat",
    "de": "hören",
    "pos": "verb"
  },
  {
    "ru": "знать",
    "translit": "znat",
    "de": "wissen/kennen",
    "pos": "verb"
  },
  {
    "ru": "понимать",
    "translit": "ponimat",
    "de": "verstehen",
    "pos": "verb"
  },
  {
    "ru": "думать",
    "translit": "dumat",
    "de": "denken",
    "pos": "verb"
  },
  {
    "ru": "любить",
    "translit": "lyubit",
    "de": "lieben/mögen",
    "pos": "verb"
  },
  {
    "ru": "брать",
    "translit": "brat",
    "de": "nehmen",
    "pos": "verb"
  },
  {
    "ru": "дать",
    "translit": "dat",
    "de": "geben",
    "pos": "verb"
  },
  {
    "ru": "жить",
    "translit": "zhit",
    "de": "leben",
    "pos": "verb"
  },
  {
    "ru": "работать",
    "translit": "rabotat",
    "de": "arbeiten",
    "pos": "verb"
  },
  {
    "ru": "учиться",
    "translit": "uchitsya",
    "de": "lernen",
    "pos": "verb"
  },
  {
    "ru": "учить",
    "translit": "uchit",
    "de": "lehren/lernen",
    "pos": "verb"
  },
  {
    "ru": "читать",
    "translit": "chitat",
    "de": "lesen",
    "pos": "verb"
  },
  {
    "ru": "писать",
    "translit": "pisat",
    "de": "schreiben",
    "pos": "verb"
  },
  {
    "ru": "открыть",
    "translit": "otkryt",
    "de": "öffnen",
    "pos": "verb"
  },
  {
    "ru": "закрыть",
    "translit": "zakryt",
    "de": "schließen",
    "pos": "verb"
  },
  {
    "ru": "спать",
    "translit": "spat",
    "de": "schlafen",
    "pos": "verb"
  },
  {
    "ru": "вставать",
    "translit": "vstavat",
    "de": "aufstehen",
    "pos": "verb"
  },
  {
    "ru": "сидеть",
    "translit": "sidet",
    "de": "sitzen",
    "pos": "verb"
  },
  {
    "ru": "стоять",
    "translit": "stoyat",
    "de": "stehen",
    "pos": "verb"
  },
  {
    "ru": "лежать",
    "translit": "lezhat",
    "de": "liegen",
    "pos": "verb"
  },
  {
    "ru": "ждать",
    "translit": "zhdat",
    "de": "warten",
    "pos": "verb"
  },
  {
    "ru": "искать",
    "translit": "iskat",
    "de": "suchen",
    "pos": "verb"
  },
  {
    "ru": "найти",
    "translit": "nayti",
    "de": "finden",
    "pos": "verb"
  },
  {
    "ru": "покупать",
    "translit": "pokupat",
    "de": "kaufen",
    "pos": "verb"
  },
  {
    "ru": "платить",
    "translit": "platit",
    "de": "bezahlen",
    "pos": "verb"
  },
  {
    "ru": "кушать",
    "translit": "kushat",
    "de": "essen",
    "pos": "verb"
  },
  {
    "ru": "пить",
    "translit": "pit",
    "de": "trinken",
    "pos": "verb"
  },
  {
    "ru": "готовить",
    "translit": "gotovit",
    "de": "kochen/vorbereiten",
    "pos": "verb"
  },
  {
    "ru": "начинать",
    "translit": "nachinat",
    "de": "beginnen",
    "pos": "verb"
  },
  {
    "ru": "заканчивать",
    "translit": "zakanchivat",
    "de": "beenden",
    "pos": "verb"
  },
  {
    "ru": "нравиться",
    "translit": "nravitsya",
    "de": "gefallen",
    "pos": "verb"
  },
  {
    "ru": "играть",
    "translit": "igrat",
    "de": "spielen",
    "pos": "verb"
  },
  {
    "ru": "помнить",
    "translit": "pomnit",
    "de": "sich erinnern",
    "pos": "verb"
  },
  {
    "ru": "забывать",
    "translit": "zabyvat",
    "de": "vergessen",
    "pos": "verb"
  },
  {
    "ru": "помогать",
    "translit": "pomogat",
    "de": "helfen",
    "pos": "verb"
  },
  {
    "ru": "просить",
    "translit": "prosit",
    "de": "bitten",
    "pos": "verb"
  },
  {
    "ru": "отвечать",
    "translit": "otvechat",
    "de": "antworten",
    "pos": "verb"
  },
  {
    "ru": "спрашивать",
    "translit": "sprashivat",
    "de": "fragen",
    "pos": "verb"
  },
  {
    "ru": "рассказывать",
    "translit": "rasskazyvat",
    "de": "erzählen",
    "pos": "verb"
  },
  {
    "ru": "чувствовать",
    "translit": "chuvstvovat",
    "de": "fühlen",
    "pos": "verb"
  },
  {
    "ru": "улыбаться",
    "translit": "ulybatsya",
    "de": "lächeln",
    "pos": "verb"
  },
  {
    "ru": "смеяться",
    "translit": "smeyatsya",
    "de": "lachen",
    "pos": "verb"
  },
  {
    "ru": "плакать",
    "translit": "plakat",
    "de": "weinen",
    "pos": "verb"
  },
  {
    "ru": "держать",
    "translit": "derzhat",
    "de": "halten",
    "pos": "verb"
  },
  {
    "ru": "носить",
    "translit": "nosit",
    "de": "tragen",
    "pos": "verb"
  },
  {
    "ru": "надевать",
    "translit": "nadevat",
    "de": "anziehen",
    "pos": "verb"
  },
  {
    "ru": "снимать",
    "translit": "snimat",
    "de": "abnehmen",
    "pos": "verb"
  },
  {
    "ru": "мыть",
    "translit": "myt",
    "de": "waschen",
    "pos": "verb"
  },
  {
    "ru": "чистить",
    "translit": "chistit",
    "de": "reinigen",
    "pos": "verb"
  },
  {
    "ru": "звонить",
    "translit": "zvonit",
    "de": "anrufen",
    "pos": "verb"
  },
  {
    "ru": "отправлять",
    "translit": "otpravlyat",
    "de": "schicken",
    "pos": "verb"
  },
  {
    "ru": "получать",
    "translit": "poluchat",
    "de": "bekommen",
    "pos": "verb"
  },
  {
    "ru": "показывать",
    "translit": "pokazyvat",
    "de": "zeigen",
    "pos": "verb"
  },
  {
    "ru": "менять",
    "translit": "menyat",
    "de": "ändern/wechseln",
    "pos": "verb"
  },
  {
    "ru": "решать",
    "translit": "reshat",
    "de": "entscheiden/lösen",
    "pos": "verb"
  },
  {
    "ru": "важно",
    "translit": "vazhno",
    "de": "wichtig",
    "pos": "adv"
  },
  {
    "ru": "легко",
    "translit": "legko",
    "de": "leicht",
    "pos": "adv"
  },
  {
    "ru": "трудно",
    "translit": "trudno",
    "de": "schwierig",
    "pos": "adv"
  },
  {
    "ru": "быстро",
    "translit": "bystro",
    "de": "schnell",
    "pos": "adv"
  },
  {
    "ru": "медленно",
    "translit": "medlenno",
    "de": "langsam",
    "pos": "adv"
  },
  {
    "ru": "хорошо",
    "translit": "khorosho",
    "de": "gut",
    "pos": "adv"
  },
  {
    "ru": "плохо",
    "translit": "plokho",
    "de": "schlecht",
    "pos": "adv"
  },
  {
    "ru": "правильно",
    "translit": "pravilno",
    "de": "richtig",
    "pos": "adv"
  },
  {
    "ru": "неправильно",
    "translit": "nepravilno",
    "de": "falsch",
    "pos": "adv"
  },
  {
    "ru": "много",
    "translit": "mnogo",
    "de": "viel",
    "pos": "adv"
  },
  {
    "ru": "мало",
    "translit": "malo",
    "de": "wenig",
    "pos": "adv"
  },
  {
    "ru": "больше",
    "translit": "bolshe",
    "de": "mehr",
    "pos": "adv"
  },
  {
    "ru": "меньше",
    "translit": "menshe",
    "de": "weniger",
    "pos": "adv"
  },
  {
    "ru": "вместе",
    "translit": "vmeste",
    "de": "zusammen",
    "pos": "adv"
  },
  {
    "ru": "отдельно",
    "translit": "otdelno",
    "de": "getrennt",
    "pos": "adv"
  },
  {
    "ru": "снова",
    "translit": "snova",
    "de": "wieder",
    "pos": "adv"
  },
  {
    "ru": "почти",
    "translit": "pochti",
    "de": "fast",
    "pos": "adv"
  },
  {
    "ru": "совсем",
    "translit": "sovsem",
    "de": "ganz/völlig",
    "pos": "adv"
  },
  {
    "ru": "просто",
    "translit": "prosto",
    "de": "einfach",
    "pos": "adv"
  },
  {
    "ru": "например",
    "translit": "naprimer",
    "de": "zum Beispiel",
    "pos": "adv"
  },
  {
    "ru": "дом",
    "translit": "dom",
    "de": "Haus",
    "pos": "noun"
  },
  {
    "ru": "квартира",
    "translit": "kvartira",
    "de": "Wohnung",
    "pos": "noun"
  },
  {
    "ru": "комната",
    "translit": "komnata",
    "de": "Zimmer",
    "pos": "noun"
  },
  {
    "ru": "кухня",
    "translit": "kukhnya",
    "de": "Küche",
    "pos": "noun"
  },
  {
    "ru": "ванна",
    "translit": "vanna",
    "de": "Bad/Badewanne",
    "pos": "noun"
  },
  {
    "ru": "дверь",
    "translit": "dver",
    "de": "Tür",
    "pos": "noun"
  },
  {
    "ru": "окно",
    "translit": "okno",
    "de": "Fenster",
    "pos": "noun"
  },
  {
    "ru": "стол",
    "translit": "stol",
    "de": "Tisch",
    "pos": "noun"
  },
  {
    "ru": "стул",
    "translit": "stul",
    "de": "Stuhl",
    "pos": "noun"
  },
  {
    "ru": "кровать",
    "translit": "krovat",
    "de": "Bett",
    "pos": "noun"
  },
  {
    "ru": "диван",
    "translit": "divan",
    "de": "Sofa",
    "pos": "noun"
  },
  {
    "ru": "лампа",
    "translit": "lampa",
    "de": "Lampe",
    "pos": "noun"
  },
  {
    "ru": "свет",
    "translit": "svet",
    "de": "Licht",
    "pos": "noun"
  },
  {
    "ru": "ключ",
    "translit": "klyuch",
    "de": "Schlüssel",
    "pos": "noun"
  },
  {
    "ru": "телефон",
    "translit": "telefon",
    "de": "Telefon",
    "pos": "noun"
  },
  {
    "ru": "компьютер",
    "translit": "kompyuter",
    "de": "Computer",
    "pos": "noun"
  },
  {
    "ru": "книга",
    "translit": "kniga",
    "de": "Buch",
    "pos": "noun"
  },
  {
    "ru": "тетрадь",
    "translit": "tetrad",
    "de": "Heft",
    "pos": "noun"
  },
  {
    "ru": "ручка",
    "translit": "ruchka",
    "de": "Stift",
    "pos": "noun"
  },
  {
    "ru": "бумага",
    "translit": "bumaga",
    "de": "Papier",
    "pos": "noun"
  },
  {
    "ru": "день",
    "translit": "den",
    "de": "Tag",
    "pos": "noun"
  },
  {
    "ru": "ночь",
    "translit": "noch",
    "de": "Nacht",
    "pos": "noun"
  },
  {
    "ru": "утро",
    "translit": "utro",
    "de": "Morgen",
    "pos": "noun"
  },
  {
    "ru": "вечер",
    "translit": "vecher",
    "de": "Abend",
    "pos": "noun"
  },
  {
    "ru": "неделя",
    "translit": "nedelya",
    "de": "Woche",
    "pos": "noun"
  },
  {
    "ru": "месяц",
    "translit": "mesyats",
    "de": "Monat",
    "pos": "noun"
  },
  {
    "ru": "год",
    "translit": "god",
    "de": "Jahr",
    "pos": "noun"
  },
  {
    "ru": "время",
    "translit": "vremya",
    "de": "Zeit",
    "pos": "noun"
  },
  {
    "ru": "час",
    "translit": "chas",
    "de": "Stunde/Uhr",
    "pos": "noun"
  },
  {
    "ru": "минута",
    "translit": "minuta",
    "de": "Minute",
    "pos": "noun"
  },
  {
    "ru": "секунда",
    "translit": "sekunda",
    "de": "Sekunde",
    "pos": "noun"
  },
  {
    "ru": "раз",
    "translit": "raz",
    "de": "Mal",
    "pos": "noun"
  },
  {
    "ru": "человек",
    "translit": "chelovek",
    "de": "Mensch",
    "pos": "noun"
  },
  {
    "ru": "люди",
    "translit": "lyudi",
    "de": "Leute",
    "pos": "noun"
  },
  {
    "ru": "мужчина",
    "translit": "muzhchina",
    "de": "Mann",
    "pos": "noun"
  },
  {
    "ru": "женщина",
    "translit": "zhenshchina",
    "de": "Frau",
    "pos": "noun"
  },
  {
    "ru": "ребёнок",
    "translit": "rebyonok",
    "de": "Kind",
    "pos": "noun"
  },
  {
    "ru": "семья",
    "translit": "semya",
    "de": "Familie",
    "pos": "noun"
  },
  {
    "ru": "мать",
    "translit": "mat",
    "de": "Mutter",
    "pos": "noun"
  },
  {
    "ru": "отец",
    "translit": "otets",
    "de": "Vater",
    "pos": "noun"
  },
  {
    "ru": "сын",
    "translit": "syn",
    "de": "Sohn",
    "pos": "noun"
  },
  {
    "ru": "дочь",
    "translit": "doch",
    "de": "Tochter",
    "pos": "noun"
  },
  {
    "ru": "брат",
    "translit": "brat",
    "de": "Bruder",
    "pos": "noun"
  },
  {
    "ru": "сестра",
    "translit": "sestra",
    "de": "Schwester",
    "pos": "noun"
  },
  {
    "ru": "друг",
    "translit": "drug",
    "de": "Freund",
    "pos": "noun"
  },
  {
    "ru": "подруга",
    "translit": "podruga",
    "de": "Freundin",
    "pos": "noun"
  },
  {
    "ru": "коллега",
    "translit": "kollega",
    "de": "Kollege",
    "pos": "noun"
  },
  {
    "ru": "начальник",
    "translit": "nachalnik",
    "de": "Chef",
    "pos": "noun"
  },
  {
    "ru": "учитель",
    "translit": "uchitel",
    "de": "Lehrer",
    "pos": "noun"
  },
  {
    "ru": "студент",
    "translit": "student",
    "de": "Student",
    "pos": "noun"
  },
  {
    "ru": "врач",
    "translit": "vrach",
    "de": "Arzt",
    "pos": "noun"
  },
  {
    "ru": "гость",
    "translit": "gost",
    "de": "Gast",
    "pos": "noun"
  },
  {
    "ru": "город",
    "translit": "gorod",
    "de": "Stadt",
    "pos": "noun"
  },
  {
    "ru": "страна",
    "translit": "strana",
    "de": "Land",
    "pos": "noun"
  },
  {
    "ru": "улица",
    "translit": "ulitsa",
    "de": "Straße",
    "pos": "noun"
  },
  {
    "ru": "дорога",
    "translit": "doroga",
    "de": "Weg/Straße",
    "pos": "noun"
  },
  {
    "ru": "машина",
    "translit": "mashina",
    "de": "Auto",
    "pos": "noun"
  },
  {
    "ru": "автобус",
    "translit": "avtobus",
    "de": "Bus",
    "pos": "noun"
  },
  {
    "ru": "поезд",
    "translit": "poyezd",
    "de": "Zug",
    "pos": "noun"
  },
  {
    "ru": "самолёт",
    "translit": "samolyot",
    "de": "Flugzeug",
    "pos": "noun"
  },
  {
    "ru": "метро",
    "translit": "metro",
    "de": "U-Bahn",
    "pos": "noun"
  },
  {
    "ru": "остановка",
    "translit": "ostanovka",
    "de": "Haltestelle",
    "pos": "noun"
  },
  {
    "ru": "станция",
    "translit": "stantsiya",
    "de": "Station",
    "pos": "noun"
  },
  {
    "ru": "магазин",
    "translit": "magazin",
    "de": "Geschäft",
    "pos": "noun"
  },
  {
    "ru": "рынок",
    "translit": "rynok",
    "de": "Markt",
    "pos": "noun"
  },
  {
    "ru": "банк",
    "translit": "bank",
    "de": "Bank",
    "pos": "noun"
  },
  {
    "ru": "офис",
    "translit": "ofis",
    "de": "Büro",
    "pos": "noun"
  },
  {
    "ru": "школа",
    "translit": "shkola",
    "de": "Schule",
    "pos": "noun"
  },
  {
    "ru": "университет",
    "translit": "universitet",
    "de": "Universität",
    "pos": "noun"
  },
  {
    "ru": "больница",
    "translit": "bolnitsa",
    "de": "Krankenhaus",
    "pos": "noun"
  },
  {
    "ru": "аптека",
    "translit": "apteka",
    "de": "Apotheke",
    "pos": "noun"
  },
  {
    "ru": "ресторан",
    "translit": "restoran",
    "de": "Restaurant",
    "pos": "noun"
  },
  {
    "ru": "кафе",
    "translit": "kafe",
    "de": "Café",
    "pos": "noun"
  },
  {
    "ru": "отель",
    "translit": "otel",
    "de": "Hotel",
    "pos": "noun"
  },
  {
    "ru": "вокзал",
    "translit": "vokzal",
    "de": "Bahnhof",
    "pos": "noun"
  },
  {
    "ru": "аэропорт",
    "translit": "aeroport",
    "de": "Flughafen",
    "pos": "noun"
  },
  {
    "ru": "работа",
    "translit": "rabota",
    "de": "Arbeit",
    "pos": "noun"
  },
  {
    "ru": "дело",
    "translit": "delo",
    "de": "Sache",
    "pos": "noun"
  },
  {
    "ru": "проблема",
    "translit": "problema",
    "de": "Problem",
    "pos": "noun"
  },
  {
    "ru": "вопрос",
    "translit": "vopros",
    "de": "Frage",
    "pos": "noun"
  },
  {
    "ru": "ответ",
    "translit": "otvet",
    "de": "Antwort",
    "pos": "noun"
  },
  {
    "ru": "идея",
    "translit": "ideya",
    "de": "Idee",
    "pos": "noun"
  },
  {
    "ru": "пример",
    "translit": "primer",
    "de": "Beispiel",
    "pos": "noun"
  },
  {
    "ru": "слово",
    "translit": "slovo",
    "de": "Wort",
    "pos": "noun"
  },
  {
    "ru": "фраза",
    "translit": "fraza",
    "de": "Satz/Phrase",
    "pos": "noun"
  },
  {
    "ru": "язык",
    "translit": "yazyk",
    "de": "Sprache/Zunge",
    "pos": "noun"
  },
  {
    "ru": "урок",
    "translit": "urok",
    "de": "Lektion",
    "pos": "noun"
  },
  {
    "ru": "курс",
    "translit": "kurs",
    "de": "Kurs",
    "pos": "noun"
  },
  {
    "ru": "ошибка",
    "translit": "oshibka",
    "de": "Fehler",
    "pos": "noun"
  },
  {
    "ru": "правило",
    "translit": "pravilo",
    "de": "Regel",
    "pos": "noun"
  },
  {
    "ru": "имя",
    "translit": "imya",
    "de": "Name",
    "pos": "noun"
  },
  {
    "ru": "фамилия",
    "translit": "familiya",
    "de": "Nachname",
    "pos": "noun"
  },
  {
    "ru": "адрес",
    "translit": "adres",
    "de": "Adresse",
    "pos": "noun"
  },
  {
    "ru": "номер",
    "translit": "nomer",
    "de": "Nummer",
    "pos": "noun"
  },
  {
    "ru": "деньги",
    "translit": "dengi",
    "de": "Geld",
    "pos": "noun"
  },
  {
    "ru": "цена",
    "translit": "tsena",
    "de": "Preis",
    "pos": "noun"
  },
  {
    "ru": "билет",
    "translit": "bilet",
    "de": "Ticket",
    "pos": "noun"
  },
  {
    "ru": "чек",
    "translit": "chek",
    "de": "Kassenbon",
    "pos": "noun"
  },
  {
    "ru": "сумка",
    "translit": "sumka",
    "de": "Tasche",
    "pos": "noun"
  },
  {
    "ru": "одежда",
    "translit": "odezhda",
    "de": "Kleidung",
    "pos": "noun"
  },
  {
    "ru": "рубашка",
    "translit": "rubashka",
    "de": "Hemd",
    "pos": "noun"
  },
  {
    "ru": "куртка",
    "translit": "kurtka",
    "de": "Jacke",
    "pos": "noun"
  },
  {
    "ru": "пальто",
    "translit": "palto",
    "de": "Mantel",
    "pos": "noun"
  },
  {
    "ru": "обувь",
    "translit": "obuv",
    "de": "Schuhe",
    "pos": "noun"
  },
  {
    "ru": "ботинки",
    "translit": "botinki",
    "de": "Schuhe/Stiefel",
    "pos": "noun"
  },
  {
    "ru": "носок",
    "translit": "nosok",
    "de": "Socke",
    "pos": "noun"
  },
  {
    "ru": "еда",
    "translit": "yeda",
    "de": "Essen",
    "pos": "noun"
  },
  {
    "ru": "завтрак",
    "translit": "zavtrak",
    "de": "Frühstück",
    "pos": "noun"
  },
  {
    "ru": "обед",
    "translit": "obed",
    "de": "Mittagessen",
    "pos": "noun"
  },
  {
    "ru": "ужин",
    "translit": "uzhin",
    "de": "Abendessen",
    "pos": "noun"
  },
  {
    "ru": "хлеб",
    "translit": "khleb",
    "de": "Brot",
    "pos": "noun"
  },
  {
    "ru": "молоко",
    "translit": "moloko",
    "de": "Milch",
    "pos": "noun"
  },
  {
    "ru": "вода",
    "translit": "voda",
    "de": "Wasser",
    "pos": "noun"
  },
  {
    "ru": "чай",
    "translit": "chay",
    "de": "Tee",
    "pos": "noun"
  },
  {
    "ru": "кофе",
    "translit": "kofe",
    "de": "Kaffee",
    "pos": "noun"
  },
  {
    "ru": "сок",
    "translit": "sok",
    "de": "Saft",
    "pos": "noun"
  },
  {
    "ru": "пиво",
    "translit": "pivo",
    "de": "Bier",
    "pos": "noun"
  },
  {
    "ru": "вино",
    "translit": "vino",
    "de": "Wein",
    "pos": "noun"
  },
  {
    "ru": "яблоко",
    "translit": "yabloko",
    "de": "Apfel",
    "pos": "noun"
  },
  {
    "ru": "банан",
    "translit": "banan",
    "de": "Banane",
    "pos": "noun"
  },
  {
    "ru": "овощ",
    "translit": "ovoshch",
    "de": "Gemüse",
    "pos": "noun"
  },
  {
    "ru": "фрукт",
    "translit": "frukt",
    "de": "Obst",
    "pos": "noun"
  },
  {
    "ru": "мясо",
    "translit": "myaso",
    "de": "Fleisch",
    "pos": "noun"
  },
  {
    "ru": "рыба",
    "translit": "ryba",
    "de": "Fisch",
    "pos": "noun"
  },
  {
    "ru": "сыр",
    "translit": "syr",
    "de": "Käse",
    "pos": "noun"
  },
  {
    "ru": "яйцо",
    "translit": "yaytso",
    "de": "Ei",
    "pos": "noun"
  },
  {
    "ru": "суп",
    "translit": "sup",
    "de": "Suppe",
    "pos": "noun"
  },
  {
    "ru": "салат",
    "translit": "salat",
    "de": "Salat",
    "pos": "noun"
  },
  {
    "ru": "рис",
    "translit": "ris",
    "de": "Reis",
    "pos": "noun"
  },
  {
    "ru": "картошка",
    "translit": "kartoshka",
    "de": "Kartoffel",
    "pos": "noun"
  },
  {
    "ru": "сахар",
    "translit": "sakhar",
    "de": "Zucker",
    "pos": "noun"
  },
  {
    "ru": "соль",
    "translit": "sol",
    "de": "Salz",
    "pos": "noun"
  },
  {
    "ru": "перец",
    "translit": "perets",
    "de": "Pfeffer",
    "pos": "noun"
  },
  {
    "ru": "рука",
    "translit": "ruka",
    "de": "Hand/Arm",
    "pos": "noun"
  },
  {
    "ru": "нога",
    "translit": "noga",
    "de": "Bein/Fuß",
    "pos": "noun"
  },
  {
    "ru": "голова",
    "translit": "golova",
    "de": "Kopf",
    "pos": "noun"
  },
  {
    "ru": "глаз",
    "translit": "glaz",
    "de": "Auge",
    "pos": "noun"
  },
  {
    "ru": "ухо",
    "translit": "ukho",
    "de": "Ohr",
    "pos": "noun"
  },
  {
    "ru": "нос",
    "translit": "nos",
    "de": "Nase",
    "pos": "noun"
  },
  {
    "ru": "рот",
    "translit": "rot",
    "de": "Mund",
    "pos": "noun"
  },
  {
    "ru": "лицо",
    "translit": "litso",
    "de": "Gesicht",
    "pos": "noun"
  },
  {
    "ru": "волосы",
    "translit": "volosy",
    "de": "Haare",
    "pos": "noun"
  },
  {
    "ru": "сердце",
    "translit": "serdtse",
    "de": "Herz",
    "pos": "noun"
  },
  {
    "ru": "тело",
    "translit": "telo",
    "de": "Körper",
    "pos": "noun"
  },
  {
    "ru": "здоровье",
    "translit": "zdorovye",
    "de": "Gesundheit",
    "pos": "noun"
  },
  {
    "ru": "болезнь",
    "translit": "bolezn",
    "de": "Krankheit",
    "pos": "noun"
  },
  {
    "ru": "лекарство",
    "translit": "lekarstvo",
    "de": "Medikament",
    "pos": "noun"
  },
  {
    "ru": "боль",
    "translit": "bol",
    "de": "Schmerz",
    "pos": "noun"
  },
  {
    "ru": "температура",
    "translit": "temperatura",
    "de": "Temperatur",
    "pos": "noun"
  },
  {
    "ru": "погода",
    "translit": "pogoda",
    "de": "Wetter",
    "pos": "noun"
  },
  {
    "ru": "солнце",
    "translit": "solntse",
    "de": "Sonne",
    "pos": "noun"
  },
  {
    "ru": "дождь",
    "translit": "dozhd",
    "de": "Regen",
    "pos": "noun"
  },
  {
    "ru": "снег",
    "translit": "sneg",
    "de": "Schnee",
    "pos": "noun"
  },
  {
    "ru": "ветер",
    "translit": "veter",
    "de": "Wind",
    "pos": "noun"
  },
  {
    "ru": "холод",
    "translit": "kholod",
    "de": "Kälte",
    "pos": "noun"
  },
  {
    "ru": "жара",
    "translit": "zhara",
    "de": "Hitze",
    "pos": "noun"
  },
  {
    "ru": "небо",
    "translit": "nebo",
    "de": "Himmel",
    "pos": "noun"
  },
  {
    "ru": "море",
    "translit": "more",
    "de": "Meer",
    "pos": "noun"
  },
  {
    "ru": "река",
    "translit": "reka",
    "de": "Fluss",
    "pos": "noun"
  },
  {
    "ru": "лес",
    "translit": "les",
    "de": "Wald",
    "pos": "noun"
  },
  {
    "ru": "гора",
    "translit": "gora",
    "de": "Berg",
    "pos": "noun"
  },
  {
    "ru": "цвет",
    "translit": "tsvet",
    "de": "Farbe",
    "pos": "noun"
  },
  {
    "ru": "красный",
    "translit": "krasnyy",
    "de": "rot",
    "pos": "adj"
  },
  {
    "ru": "синий",
    "translit": "siniy",
    "de": "blau",
    "pos": "adj"
  },
  {
    "ru": "зелёный",
    "translit": "zelyonyy",
    "de": "grün",
    "pos": "adj"
  },
  {
    "ru": "чёрный",
    "translit": "chyornyy",
    "de": "schwarz",
    "pos": "adj"
  },
  {
    "ru": "белый",
    "translit": "belyy",
    "de": "weiß",
    "pos": "adj"
  },
  {
    "ru": "большой",
    "translit": "bolshoy",
    "de": "groß",
    "pos": "adj"
  },
  {
    "ru": "маленький",
    "translit": "malenkiy",
    "de": "klein",
    "pos": "adj"
  },
  {
    "ru": "новый",
    "translit": "novyy",
    "de": "neu",
    "pos": "adj"
  },
  {
    "ru": "старый",
    "translit": "staryy",
    "de": "alt",
    "pos": "adj"
  },
  {
    "ru": "молодой",
    "translit": "molodoy",
    "de": "jung",
    "pos": "adj"
  },
  {
    "ru": "красивый",
    "translit": "krasivyy",
    "de": "schön",
    "pos": "adj"
  },
  {
    "ru": "хороший",
    "translit": "khoroshiy",
    "de": "gut",
    "pos": "adj"
  },
  {
    "ru": "плохой",
    "translit": "plokhoy",
    "de": "schlecht",
    "pos": "adj"
  },
  {
    "ru": "интересный",
    "translit": "interesnyy",
    "de": "interessant",
    "pos": "adj"
  },
  {
    "ru": "важный",
    "translit": "vazhnyy",
    "de": "wichtig",
    "pos": "adj"
  },
  {
    "ru": "свободный",
    "translit": "svobodnyy",
    "de": "frei",
    "pos": "adj"
  },
  {
    "ru": "занятый",
    "translit": "zanyatyy",
    "de": "beschäftigt",
    "pos": "adj"
  },
  {
    "ru": "готовый",
    "translit": "gotovyy",
    "de": "bereit",
    "pos": "adj"
  },
  {
    "ru": "правый",
    "translit": "pravyy",
    "de": "rechts",
    "pos": "adj"
  },
  {
    "ru": "левый",
    "translit": "levyy",
    "de": "links",
    "pos": "adj"
  },
  {
    "ru": "первый",
    "translit": "pervyy",
    "de": "erste",
    "pos": "adj"
  },
  {
    "ru": "последний",
    "translit": "posledniy",
    "de": "letzte",
    "pos": "adj"
  },
  {
    "ru": "следующий",
    "translit": "sleduyushchiy",
    "de": "nächste",
    "pos": "adj"
  },
  {
    "ru": "каждый",
    "translit": "kazhdyy",
    "de": "jeder",
    "pos": "adj"
  },
  {
    "ru": "другой",
    "translit": "drugoy",
    "de": "anderer",
    "pos": "adj"
  },
  {
    "ru": "такой",
    "translit": "takoy",
    "de": "solcher",
    "pos": "adj"
  },
  {
    "ru": "весь",
    "translit": "ves",
    "de": "ganz/alle",
    "pos": "adj"
  },
  {
    "ru": "самый",
    "translit": "samyy",
    "de": "am meisten / der ...ste",
    "pos": "adj"
  },
  {
    "ru": "русский",
    "translit": "russkiy",
    "de": "russisch",
    "pos": "adj"
  },
  {
    "ru": "немецкий",
    "translit": "nemetskiy",
    "de": "deutsch",
    "pos": "adj"
  },
  {
    "ru": "мой",
    "translit": "moy",
    "de": "mein",
    "pos": "pron"
  },
  {
    "ru": "твой",
    "translit": "tvoy",
    "de": "dein",
    "pos": "pron"
  },
  {
    "ru": "его",
    "translit": "yego",
    "de": "sein",
    "pos": "pron"
  },
  {
    "ru": "её",
    "translit": "yeyo",
    "de": "ihr",
    "pos": "pron"
  },
  {
    "ru": "наш",
    "translit": "nash",
    "de": "unser",
    "pos": "pron"
  },
  {
    "ru": "ваш",
    "translit": "vash",
    "de": "euer/Ihr",
    "pos": "pron"
  },
  {
    "ru": "их",
    "translit": "ikh",
    "de": "ihr",
    "pos": "pron"
  },
  {
    "ru": "себя",
    "translit": "sebya",
    "de": "sich",
    "pos": "pron"
  },
  {
    "ru": "который",
    "translit": "kotoryy",
    "de": "welcher",
    "pos": "pron"
  },
  {
    "ru": "никто",
    "translit": "nikto",
    "de": "niemand",
    "pos": "pron"
  },
  {
    "ru": "ничто",
    "translit": "nichto",
    "de": "nichts",
    "pos": "pron"
  },
  {
    "ru": "всё",
    "translit": "vsyo",
    "de": "alles",
    "pos": "pron"
  },
  {
    "ru": "все",
    "translit": "vse",
    "de": "alle",
    "pos": "pron"
  },
  {
    "ru": "один",
    "translit": "odin",
    "de": "eins/ein",
    "pos": "num"
  },
  {
    "ru": "два",
    "translit": "dva",
    "de": "zwei",
    "pos": "num"
  },
  {
    "ru": "три",
    "translit": "tri",
    "de": "drei",
    "pos": "num"
  },
  {
    "ru": "четыре",
    "translit": "chetyre",
    "de": "vier",
    "pos": "num"
  },
  {
    "ru": "пять",
    "translit": "pyat",
    "de": "fünf",
    "pos": "num"
  },
  {
    "ru": "шесть",
    "translit": "shest",
    "de": "sechs",
    "pos": "num"
  },
  {
    "ru": "семь",
    "translit": "sem",
    "de": "sieben",
    "pos": "num"
  },
  {
    "ru": "восемь",
    "translit": "vosem",
    "de": "acht",
    "pos": "num"
  },
  {
    "ru": "девять",
    "translit": "devyat",
    "de": "neun",
    "pos": "num"
  },
  {
    "ru": "десять",
    "translit": "desyat",
    "de": "zehn",
    "pos": "num"
  },
  {
    "ru": "сто",
    "translit": "sto",
    "de": "hundert",
    "pos": "num"
  },
  {
    "ru": "пожалуйста",
    "translit": "pozhaluysta",
    "de": "bitte",
    "pos": "expr"
  },
  {
    "ru": "спасибо",
    "translit": "spasibo",
    "de": "danke",
    "pos": "expr"
  },
  {
    "ru": "извините",
    "translit": "izvinite",
    "de": "entschuldigen Sie",
    "pos": "expr"
  },
  {
    "ru": "привет",
    "translit": "privet",
    "de": "hallo",
    "pos": "expr"
  },
  {
    "ru": "здравствуйте",
    "translit": "zdravstvuyte",
    "de": "guten Tag",
    "pos": "expr"
  },
  {
    "ru": "пока",
    "translit": "poka",
    "de": "tschüss/bis dann",
    "pos": "expr"
  },
  {
    "ru": "доброе утро",
    "translit": "dobroye utro",
    "de": "guten Morgen",
    "pos": "expr"
  },
  {
    "ru": "добрый вечер",
    "translit": "dobryy vecher",
    "de": "guten Abend",
    "pos": "expr"
  },
  {
    "ru": "спокойной ночи",
    "translit": "spokoynoy nochi",
    "de": "gute Nacht",
    "pos": "expr"
  },
  {
    "ru": "как дела",
    "translit": "kak dela",
    "de": "wie geht's",
    "pos": "expr"
  },
  {
    "ru": "меня зовут",
    "translit": "menya zovut",
    "de": "ich heiße",
    "pos": "expr"
  },
  {
    "ru": "приятно познакомиться",
    "translit": "priyatno poznakomitsya",
    "de": "angenehm",
    "pos": "expr"
  },
  {
    "ru": "сколько",
    "translit": "skolko",
    "de": "wie viel/wie viele",
    "pos": "pron"
  },
  {
    "ru": "какой",
    "translit": "kakoy",
    "de": "welcher/was für ein",
    "pos": "pron"
  },
  {
    "ru": "какая",
    "translit": "kakaya",
    "de": "welche",
    "pos": "pron"
  },
  {
    "ru": "какое",
    "translit": "kakoye",
    "de": "welches",
    "pos": "pron"
  },
  {
    "ru": "какие",
    "translit": "kakiye",
    "de": "welche (Pl.)",
    "pos": "pron"
  },
  {
    "ru": "здесь",
    "translit": "zdes",
    "de": "hier",
    "pos": "adv"
  },
  {
    "ru": "туда",
    "translit": "tuda",
    "de": "dorthin",
    "pos": "adv"
  },
  {
    "ru": "сюда",
    "translit": "syuda",
    "de": "hierher",
    "pos": "adv"
  },
  {
    "ru": "домой",
    "translit": "domoy",
    "de": "nach Hause",
    "pos": "adv"
  },
  {
    "ru": "внутри",
    "translit": "vnutri",
    "de": "drinnen",
    "pos": "adv"
  },
  {
    "ru": "снаружи",
    "translit": "snaruzhi",
    "de": "draußen",
    "pos": "adv"
  },
  {
    "ru": "рядом",
    "translit": "ryadom",
    "de": "nebenan",
    "pos": "adv"
  },
  {
    "ru": "далеко",
    "translit": "daleko",
    "de": "weit",
    "pos": "adv"
  },
  {
    "ru": "близко",
    "translit": "blizko",
    "de": "nah",
    "pos": "adv"
  },
  {
    "ru": "вниз",
    "translit": "vniz",
    "de": "hinunter",
    "pos": "adv"
  },
  {
    "ru": "вверх",
    "translit": "vverkh",
    "de": "hinauf",
    "pos": "adv"
  },
  {
    "ru": "слева",
    "translit": "sleva",
    "de": "links",
    "pos": "adv"
  },
  {
    "ru": "справа",
    "translit": "sprava",
    "de": "rechts",
    "pos": "adv"
  },
  {
    "ru": "рано",
    "translit": "rano",
    "de": "früh",
    "pos": "adv"
  },
  {
    "ru": "поздно",
    "translit": "pozdno",
    "de": "spät",
    "pos": "adv"
  },
  {
    "ru": "давно",
    "translit": "davno",
    "de": "seit langem",
    "pos": "adv"
  },
  {
    "ru": "скоро",
    "translit": "skoro",
    "de": "bald",
    "pos": "adv"
  },
  {
    "ru": "сразу",
    "translit": "srazu",
    "de": "sofort",
    "pos": "adv"
  },
  {
    "ru": "часто",
    "translit": "chasto",
    "de": "oft",
    "pos": "adv"
  },
  {
    "ru": "редко",
    "translit": "redko",
    "de": "selten",
    "pos": "adv"
  },
  {
    "ru": "почем",
    "translit": "pochem",
    "de": "wie teuer",
    "pos": "adv"
  },
  {
    "ru": "бесплатно",
    "translit": "besplatno",
    "de": "kostenlos",
    "pos": "adv"
  },
  {
    "ru": "план",
    "translit": "plan",
    "de": "Plan",
    "pos": "noun"
  },
  {
    "ru": "цель",
    "translit": "tsel",
    "de": "Ziel",
    "pos": "noun"
  },
  {
    "ru": "результат",
    "translit": "rezultat",
    "de": "Ergebnis",
    "pos": "noun"
  },
  {
    "ru": "опыт",
    "translit": "opyt",
    "de": "Erfahrung",
    "pos": "noun"
  },
  {
    "ru": "уровень",
    "translit": "uroven",
    "de": "Niveau",
    "pos": "noun"
  },
  {
    "ru": "память",
    "translit": "pamyat",
    "de": "Gedächtnis",
    "pos": "noun"
  },
  {
    "ru": "повторение",
    "translit": "povtoreniye",
    "de": "Wiederholung",
    "pos": "noun"
  },
  {
    "ru": "упражнение",
    "translit": "uprazhneniye",
    "de": "Übung",
    "pos": "noun"
  },
  {
    "ru": "тема",
    "translit": "tema",
    "de": "Thema",
    "pos": "noun"
  },
  {
    "ru": "текст",
    "translit": "tekst",
    "de": "Text",
    "pos": "noun"
  },
  {
    "ru": "диалог",
    "translit": "dialog",
    "de": "Dialog",
    "pos": "noun"
  },
  {
    "ru": "перевод",
    "translit": "perevod",
    "de": "Übersetzung",
    "pos": "noun"
  },
  {
    "ru": "грамматика",
    "translit": "grammatika",
    "de": "Grammatik",
    "pos": "noun"
  },
  {
    "ru": "произношение",
    "translit": "proiznosheniye",
    "de": "Aussprache",
    "pos": "noun"
  },
  {
    "ru": "звук",
    "translit": "zvuk",
    "de": "Laut/Ton",
    "pos": "noun"
  },
  {
    "ru": "буква",
    "translit": "bukva",
    "de": "Buchstabe",
    "pos": "noun"
  },
  {
    "ru": "алфавит",
    "translit": "alfavit",
    "de": "Alphabet",
    "pos": "noun"
  },
  {
    "ru": "число",
    "translit": "chislo",
    "de": "Zahl",
    "pos": "noun"
  },
  {
    "ru": "форма",
    "translit": "forma",
    "de": "Form",
    "pos": "noun"
  },
  {
    "ru": "встреча",
    "translit": "vstrecha",
    "de": "Treffen",
    "pos": "noun"
  },
  {
    "ru": "письмо",
    "translit": "pismo",
    "de": "Brief/E-Mail",
    "pos": "noun"
  },
  {
    "ru": "сообщение",
    "translit": "soobshcheniye",
    "de": "Nachricht",
    "pos": "noun"
  },
  {
    "ru": "звонок",
    "translit": "zvonok",
    "de": "Anruf",
    "pos": "noun"
  },
  {
    "ru": "сайт",
    "translit": "sayt",
    "de": "Website",
    "pos": "noun"
  },
  {
    "ru": "программа",
    "translit": "programma",
    "de": "Programm",
    "pos": "noun"
  },
  {
    "ru": "приложение",
    "translit": "prilozheniye",
    "de": "App/Anwendung",
    "pos": "noun"
  },
  {
    "ru": "файл",
    "translit": "fayl",
    "de": "Datei",
    "pos": "noun"
  },
  {
    "ru": "пароль",
    "translit": "parol",
    "de": "Passwort",
    "pos": "noun"
  },
  {
    "ru": "сеть",
    "translit": "set",
    "de": "Netzwerk",
    "pos": "noun"
  },
  {
    "ru": "интернет",
    "translit": "internet",
    "de": "Internet",
    "pos": "noun"
  },
  {
    "ru": "почта",
    "translit": "pochta",
    "de": "Post/E-Mail",
    "pos": "noun"
  },
  {
    "ru": "карта",
    "translit": "karta",
    "de": "Karte",
    "pos": "noun"
  },
  {
    "ru": "документ",
    "translit": "dokument",
    "de": "Dokument",
    "pos": "noun"
  },
  {
    "ru": "паспорт",
    "translit": "pasport",
    "de": "Reisepass",
    "pos": "noun"
  },
  {
    "ru": "виза",
    "translit": "viza",
    "de": "Visum",
    "pos": "noun"
  },
  {
    "ru": "граница",
    "translit": "granitsa",
    "de": "Grenze",
    "pos": "noun"
  },
  {
    "ru": "контроль",
    "translit": "kontrol",
    "de": "Kontrolle",
    "pos": "noun"
  },
  {
    "ru": "поездка",
    "translit": "poyezdka",
    "de": "Reise/Fahrt",
    "pos": "noun"
  },
  {
    "ru": "путешествие",
    "translit": "puteshestviye",
    "de": "Reise",
    "pos": "noun"
  },
  {
    "ru": "бронирование",
    "translit": "bronirovaniye",
    "de": "Buchung",
    "pos": "noun"
  },
  {
    "ru": "номер в отеле",
    "translit": "nomer v otele",
    "de": "Hotelzimmer",
    "pos": "noun"
  },
  {
    "ru": "сервис",
    "translit": "servis",
    "de": "Service",
    "pos": "noun"
  },
  {
    "ru": "помощь",
    "translit": "pomoshch",
    "de": "Hilfe",
    "pos": "noun"
  },
  {
    "ru": "совет",
    "translit": "sovet",
    "de": "Rat",
    "pos": "noun"
  },
  {
    "ru": "выбор",
    "translit": "vybor",
    "de": "Auswahl",
    "pos": "noun"
  },
  {
    "ru": "решение",
    "translit": "resheniye",
    "de": "Entscheidung/Lösung",
    "pos": "noun"
  },
  {
    "ru": "причина",
    "translit": "prichina",
    "de": "Grund/Ursache",
    "pos": "noun"
  },
  {
    "ru": "начало",
    "translit": "nachalo",
    "de": "Anfang",
    "pos": "noun"
  },
  {
    "ru": "конец",
    "translit": "konets",
    "de": "Ende",
    "pos": "noun"
  },
  {
    "ru": "середина",
    "translit": "seredina",
    "de": "Mitte",
    "pos": "noun"
  },
  {
    "ru": "сторона",
    "translit": "storona",
    "de": "Seite",
    "pos": "noun"
  },
  {
    "ru": "место",
    "translit": "mesto",
    "de": "Platz/Ort",
    "pos": "noun"
  },
  {
    "ru": "пространство",
    "translit": "prostranstvo",
    "de": "Raum",
    "pos": "noun"
  },
  {
    "ru": "размер",
    "translit": "razmer",
    "de": "Größe",
    "pos": "noun"
  },
  {
    "ru": "вид",
    "translit": "vid",
    "de": "Art/Aussehen",
    "pos": "noun"
  },
  {
    "ru": "часть",
    "translit": "chast",
    "de": "Teil",
    "pos": "noun"
  },
  {
    "ru": "целое",
    "translit": "tseloye",
    "de": "Ganzes",
    "pos": "noun"
  },
  {
    "ru": "начальство",
    "translit": "nachalstvo",
    "de": "Vorgesetzte",
    "pos": "noun"
  },
  {
    "ru": "зарплата",
    "translit": "zarplata",
    "de": "Gehalt",
    "pos": "noun"
  },
  {
    "ru": "задача",
    "translit": "zadacha",
    "de": "Aufgabe",
    "pos": "noun"
  },
  {
    "ru": "проект",
    "translit": "proyekt",
    "de": "Projekt",
    "pos": "noun"
  },
  {
    "ru": "клиент",
    "translit": "klient",
    "de": "Kunde",
    "pos": "noun"
  },
  {
    "ru": "заказ",
    "translit": "zakaz",
    "de": "Bestellung",
    "pos": "noun"
  },
  {
    "ru": "продажа",
    "translit": "prodazha",
    "de": "Verkauf",
    "pos": "noun"
  },
  {
    "ru": "покупатель",
    "translit": "pokupatel",
    "de": "Käufer",
    "pos": "noun"
  },
  {
    "ru": "доставка",
    "translit": "dostavka",
    "de": "Lieferung",
    "pos": "noun"
  },
  {
    "ru": "качество",
    "translit": "kachestvo",
    "de": "Qualität",
    "pos": "noun"
  },
  {
    "ru": "количество",
    "translit": "kolichestvo",
    "de": "Menge",
    "pos": "noun"
  },
  {
    "ru": "материал",
    "translit": "material",
    "de": "Material",
    "pos": "noun"
  },
  {
    "ru": "образец",
    "translit": "obrazets",
    "de": "Muster",
    "pos": "noun"
  },
  {
    "ru": "цех",
    "translit": "tsekh",
    "de": "Werkstatt/Abteilung",
    "pos": "noun"
  },
  {
    "ru": "завод",
    "translit": "zavod",
    "de": "Werk/Fabrik",
    "pos": "noun"
  },
  {
    "ru": "конкурент",
    "translit": "konkurent",
    "de": "Konkurrent",
    "pos": "noun"
  },
  {
    "ru": "условие",
    "translit": "usloviye",
    "de": "Bedingung",
    "pos": "noun"
  },
  {
    "ru": "срок",
    "translit": "srok",
    "de": "Frist/Lieferzeit",
    "pos": "noun"
  },
  {
    "ru": "стоимость",
    "translit": "stoimost",
    "de": "Kosten",
    "pos": "noun"
  },
  {
    "ru": "скидка",
    "translit": "skidka",
    "de": "Rabatt",
    "pos": "noun"
  },
  {
    "ru": "счёт",
    "translit": "schyot",
    "de": "Rechnung",
    "pos": "noun"
  },
  {
    "ru": "договор",
    "translit": "dogovor",
    "de": "Vertrag",
    "pos": "noun"
  },
  {
    "ru": "подпись",
    "translit": "podpis",
    "de": "Unterschrift",
    "pos": "noun"
  },
  {
    "ru": "согласие",
    "translit": "soglasiye",
    "de": "Einverständnis",
    "pos": "noun"
  },
  {
    "ru": "возможность",
    "translit": "vozmozhnost",
    "de": "Möglichkeit",
    "pos": "noun"
  },
  {
    "ru": "необходимость",
    "translit": "neobkhodimost",
    "de": "Notwendigkeit",
    "pos": "noun"
  },
  {
    "ru": "успех",
    "translit": "uspekh",
    "de": "Erfolg",
    "pos": "noun"
  },
  {
    "ru": "риск",
    "translit": "risk",
    "de": "Risiko",
    "pos": "noun"
  },
  {
    "ru": "безопасность",
    "translit": "bezopasnost",
    "de": "Sicherheit",
    "pos": "noun"
  },
  {
    "ru": "скорость",
    "translit": "skorost",
    "de": "Geschwindigkeit",
    "pos": "noun"
  },
  {
    "ru": "сила",
    "translit": "sila",
    "de": "Kraft",
    "pos": "noun"
  },
  {
    "ru": "энергия",
    "translit": "energiya",
    "de": "Energie",
    "pos": "noun"
  },
  {
    "ru": "любовь",
    "translit": "lyubov",
    "de": "Liebe",
    "pos": "noun"
  },
  {
    "ru": "радость",
    "translit": "radost",
    "de": "Freude",
    "pos": "noun"
  },
  {
    "ru": "страх",
    "translit": "strakh",
    "de": "Angst",
    "pos": "noun"
  },
  {
    "ru": "интерес",
    "translit": "interes",
    "de": "Interesse",
    "pos": "noun"
  },
  {
    "ru": "надежда",
    "translit": "nadezhda",
    "de": "Hoffnung",
    "pos": "noun"
  }
];