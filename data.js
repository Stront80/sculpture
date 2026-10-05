const monuments = [
  {
    id: "pushkin",
    macroImg: "images/pushkin_macro.jpg",
    fullImg: "images/pushkin_full.jpg",
    status: "Смотрю на прохожих уже 100 лет...",
    hint: "Я нахожусь в самом центре, рядом со старыми переулками.",
    name: "Александр Пушкин",
    bio: "Привет! Я здесь главный по стихам. Обожаю, когда мне приносят цветы, но терпеть не могу голубей на голове.",
    friends: ["lermontov", "gogol"], // ID других памятников
    coords: "https://yandex.ru/maps/..."
  },
  {
    id: "lermontov",
    macroImg: "images/lermontov_macro.jpg",
    fullImg: "images/lermontov_full.jpg",
    status: "Тучки небесные, вечные странники...",
    hint: "Поставили меня на внешней стороне садового, ближе к трем вокзалам.",
    name: "Михаил Лермонтов",
    bio: "Салют! И дым отечества нам сладок и приятен!",
    friends: ["pushkin", "gogol"], // ID других памятников
    coords: "https://yandex.ru/maps/..."
  }
  // Другие памятники добавляются сюда...
];