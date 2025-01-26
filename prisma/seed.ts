import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // 2023-2024 Season
  await prisma.question.create({
    data: {
      question: "Кто стал лучшим бомбардиром Реал Мадрида в сезоне 2023/24 (по состоянию на февраль)?",
      options: ["Джуд Беллингем", "Винисиус Жуниор", "Родриго", "Хоселу"],
      correctOption: 0,
      points: 200,
      difficulty: "Medium"
    }
  })

  await prisma.question.create({
    data: {
      question: "За какую сумму Реал Мадрид приобрел Джуда Беллингема летом 2023 года?",
      options: ["103 млн евро", "120 млн евро", "133.9 млн евро", "89 млн евро"],
      correctOption: 0,
      points: 300,
      difficulty: "Hard"
    }
  })

  // 2022-2023 Season
  await prisma.question.create({
    data: {
      question: "Кто был признан лучшим игроком Реал Мадрида в сезоне 2022/23?",
      options: ["Винисиус Жуниор", "Карим Бензема", "Тибо Куртуа", "Лука Модрич"],
      correctOption: 1,
      points: 100,
      difficulty: "Easy"
    }
  })

  await prisma.question.create({
    data: {
      question: "Против какой команды Реал Мадрид проиграл в полуфинале Лиги Чемпионов 2023?",
      options: ["Манчестер Сити", "Бавария", "ПСЖ", "Челси"],
      correctOption: 0,
      points: 200,
      difficulty: "Medium"
    }
  })

  await prisma.question.create({
    data: {
      question: "Кто стал лучшим ассистентом Реал Мадрида в сезоне 2022/23?",
      options: ["Винисиус Жуниор", "Лука Модрич", "Тони Кроос", "Карим Бензема"],
      correctOption: 0,
      points: 200,
      difficulty: "Medium"
    }
  })

  // 2021-2022 Season (Champions League Victory)
  await prisma.question.create({
    data: {
      question: "Какую команду Реал Мадрид обыграл в финале Лиги Чемпионов 2022?",
      options: ["Ливерпуль", "Манчестер Сити", "ПСЖ", "Челси"],
      correctOption: 0,
      points: 100,
      difficulty: "Easy"
    }
  })

  await prisma.question.create({
    data: {
      question: "Кто забил победный гол в финале Лиги Чемпионов 2022?",
      options: ["Винисиус Жуниор", "Карим Бензема", "Федерико Вальверде", "Родриго"],
      correctOption: 0,
      points: 200,
      difficulty: "Medium"
    }
  })

  // 2021-2022 UCL Comebacks
  await prisma.question.create({
    data: {
      question: "Сколько голов забил Карим Бензема в ответном матче против ПСЖ в 1/8 финала ЛЧ 2022?",
      options: ["Хет-трик", "Дубль", "Один гол", "Четыре гола"],
      correctOption: 0,
      points: 200,
      difficulty: "Medium"
    }
  })

  await prisma.question.create({
    data: {
      question: "За сколько минут Родриго забил два гола в ответном матче против Манчестер Сити в полуфинале ЛЧ 2022?",
      options: ["2 минуты", "5 минут", "8 минут", "10 минут"],
      correctOption: 0,
      points: 300,
      difficulty: "Hard"
    }
  })

  await prisma.question.create({
    data: {
      question: "Кто забил решающий пенальти в дополнительное время матча против Манчестер Сити?",
      options: ["Карим Бензема", "Лука Модрич", "Тони Кроос", "Родриго"],
      correctOption: 0,
      points: 200,
      difficulty: "Medium"
    }
  })

  // Benzema's Ballon d'Or Season
  await prisma.question.create({
    data: {
      question: "Сколько голов забил Карим Бензема в Лиге Чемпионов 2021/22?",
      options: ["15", "12", "10", "17"],
      correctOption: 0,
      points: 300,
      difficulty: "Hard"
    }
  })

  await prisma.question.create({
    data: {
      question: "В каком году Карим Бензема получил свой первый Золотой Мяч?",
      options: ["2022", "2021", "2023", "2020"],
      correctOption: 0,
      points: 100,
      difficulty: "Easy"
    }
  })

  // Key Transfers 2021-2022
  await prisma.question.create({
    data: {
      question: "Какой игрок покинул Реал Мадрид летом 2021 года, перейдя в ПСЖ свободным агентом?",
      options: ["Серхио Рамос", "Марсело", "Иско", "Гарет Бейл"],
      correctOption: 0,
      points: 100,
      difficulty: "Easy"
    }
  })

  await prisma.question.create({
    data: {
      question: "Кто стал самым дорогим приобретением Реал Мадрида летом 2021 года?",
      options: ["Эдуардо Камавинга", "Давид Алаба", "Антонио Рюдигер", "Орельен Тчуамени"],
      correctOption: 0,
      points: 200,
      difficulty: "Medium"
    }
  })

  // 2020-2021 Season
  await prisma.question.create({
    data: {
      question: "До какой стадии дошел Реал Мадрид в Лиге Чемпионов 2020/21?",
      options: ["Четвертьфинал", "Полуфинал", "Финал", "1/8 финала"],
      correctOption: 1,
      points: 200,
      difficulty: "Medium"
    }
  })

  await prisma.question.create({
    data: {
      question: "Кто выиграл Ла Лигу в сезоне 2020/21?",
      options: ["Барселона", "Атлетико Мадрид", "Реал Мадрид", "Севилья"],
      correctOption: 1,
      points: 100,
      difficulty: "Easy"
    }
  })

  // 2019-2020 La Liga Title
  await prisma.question.create({
    data: {
      question: "Кто стал лучшим бомбардиром Реал Мадрида в чемпионском сезоне 2019/20?",
      options: ["Эден Азар", "Карим Бензема", "Серхио Рамос", "Лука Модрич"],
      correctOption: 1,
      points: 200,
      difficulty: "Medium"
    }
  })

  await prisma.question.create({
    data: {
      question: "Сколько матчей подряд выиграл Реал Мадрид после возобновления сезона 2019/20 после карантина?",
      options: ["5", "10", "8", "12"],
      correctOption: 2,
      points: 300,
      difficulty: "Hard"
    }
  })

  // 2018-2019 Season
  await prisma.question.create({
    data: {
      question: "Кто был первым тренером Реал Мадрида в сезоне 2018/19?",
      options: ["Сантьяго Солари", "Хулен Лопетеги", "Зинедин Зидан", "Карло Анчелотти"],
      correctOption: 1,
      points: 200,
      difficulty: "Medium"
    }
  })

  // 2018-2019 More Questions
  await prisma.question.create({
    data: {
      question: "Кто вернулся на пост главного тренера Реал Мадрида в марте 2019 года?",
      options: ["Карло Анчелотти", "Зинедин Зидан", "Жозе Моуринью", "Рафаэль Бенитес"],
      correctOption: 1,
      points: 100,
      difficulty: "Easy"
    }
  })

  // 2017-2018 Champions League
  await prisma.question.create({
    data: {
      question: "Какой счет был в финале Лиги Чемпионов 2018 против Ливерпуля?",
      options: ["2:0", "3:1", "4:1", "2:1"],
      correctOption: 1,
      points: 200,
      difficulty: "Medium"
    }
  })

  await prisma.question.create({
    data: {
      question: "Кто забил знаменитый гол через себя в четвертьфинале ЛЧ 2018 против Ювентуса?",
      options: ["Гарет Бейл", "Криштиану Роналду", "Карим Бензема", "Марко Асенсио"],
      correctOption: 1,
      points: 200,
      difficulty: "Medium"
    }
  })

  await prisma.question.create({
    data: {
      question: "Кто забил два гола в финале ЛЧ 2018 против Ливерпуля?",
      options: ["Криштиану Роналду", "Гарет Бейл", "Карим Бензема", "Марко Асенсио"],
      correctOption: 1,
      points: 200,
      difficulty: "Medium"
    }
  })

  // Ronaldo's Final Season
  await prisma.question.create({
    data: {
      question: "Сколько голов забил Криштиану Роналду в своем последнем сезоне за Реал Мадрид (2017/18)?",
      options: ["25", "44", "50", "38"],
      correctOption: 1,
      points: 300,
      difficulty: "Hard"
    }
  })

  await prisma.question.create({
    data: {
      question: "За какую сумму Криштиану Роналду перешел в Ювентус летом 2018 года?",
      options: ["88 млн евро", "100 млн евро", "112 млн евро", "120 млн евро"],
      correctOption: 2,
      points: 200,
      difficulty: "Medium"
    }
  })

  // Records and Achievements
  await prisma.question.create({
    data: {
      question: "Сколько Лиг Чемпионов подряд выиграл Реал Мадрид с 2016 по 2018 год?",
      options: ["2", "3", "4", "5"],
      correctOption: 1,
      points: 100,
      difficulty: "Easy"
    }
  })

  // 2022-2023 Additional Questions
  await prisma.question.create({
    data: {
      question: "Какой трофей выиграл Реал Мадрид в Суперкубке УЕФА 2022?",
      options: ["Против Айнтрахта", "Против Челси", "Против Манчестер Юнайтед", "Против Вильярреала"],
      correctOption: 0,
      points: 200,
      difficulty: "Medium"
    }
  })

  await prisma.question.create({
    data: {
      question: "Сколько голов забил Карим Бензема в сезоне 2022/23 Ла Лиги?",
      options: ["18", "19", "31", "22"],
      correctOption: 0,
      points: 300,
      difficulty: "Hard"
    }
  })

  await prisma.question.create({
    data: {
      question: "Кто стал лучшим игроком Реал Мадрида в матче за Суперкубок УЕФА 2022?",
      options: ["Давид Алаба", "Карим Бензема", "Лука Модрич", "Каземиро"],
      correctOption: 0,
      points: 200,
      difficulty: "Medium"
    }
  })

  await prisma.question.create({
    data: {
      question: "Какой клуб купил Каземиро у Реал Мадрида летом 2022 года?",
      options: ["Манчестер Юнайтед", "ПСЖ", "Челси", "Бавария"],
      correctOption: 0,
      points: 100,
      difficulty: "Easy"
    }
  })

  await prisma.question.create({
    data: {
      question: "Кто забил победный гол в финале Клубного чемпионата мира 2022 против Аль-Хиляля?",
      options: ["Федерико Вальверде", "Винисиус Жуниор", "Карим Бензема", "Родриго"],
      correctOption: 0,
      points: 200,
      difficulty: "Medium"
    }
  })

  await prisma.question.create({
    data: {
      question: "Какое место занял Реал Мадрид в Ла Лиге 2022/23?",
      options: ["Второе", "Первое", "Третье", "Четвертое"],
      correctOption: 1,
      points: 100,
      difficulty: "Easy"
    }
  })

  await prisma.question.create({
    data: {
      question: "Кто был признан лучшим молодым игроком Реал Мадрида в сезоне 2022/23?",
      options: ["Эдуардо Камавинга", "Орельен Тчуамени", "Федерико Вальверде", "Родриго"],
      correctOption: 0,
      points: 200,
      difficulty: "Medium"
    }
  })

  // Add these new questions with diverse correctOption values
  await prisma.question.create({
    data: {
      question: "Где проходил финал Суперкубка Испании 2023?",
      options: ["Мадрид", "Барселона", "Севилья", "Эр-Рияд"],
      correctOption: 3,
      points: 200,
      difficulty: "Medium"
    }
  })

  await prisma.question.create({
    data: {
      question: "Какой номер носит Тони Кроос в Реал Мадриде?",
      options: ["10", "7", "8", "6"],
      correctOption: 2,
      points: 100,
      difficulty: "Easy"
    }
  })

  await prisma.question.create({
    data: {
      question: "В каком месяце Карим Бензема объявил об уходе из Реал Мадрида в 2023 году?",
      options: ["Май", "Апрель", "Июнь", "Июль"],
      correctOption: 2,
      points: 200,
      difficulty: "Medium"
    }
  })

  await prisma.question.create({
    data: {
      question: "Кто из этих игроков НЕ покинул Реал Мадрид летом 2023?",
      options: ["Марко Асенсио", "Карим Бензема", "Эден Азар", "Лука Модрич"],
      correctOption: 3,
      points: 200,
      difficulty: "Medium"
    }
  })

  // Copa del Rey 2023
  await prisma.question.create({
    data: {
      question: "Кто выбил Реал Мадрид из Кубка Испании в полуфинале 2023 года?",
      options: ["Атлетико Мадрид", "Валенсия", "Барселона", "Осасуна"],
      correctOption: 2,
      points: 200,
      difficulty: "Medium"
    }
  })

  await prisma.question.create({
    data: {
      question: "Какой игрок Реал Мадрида получил травму в матче против Барселоны в Кубке Короля 2023?",
      options: ["Эдер Милитао", "Давид Алаба", "Ферлан Менди", "Тибо Куртуа"],
      correctOption: 1,
      points: 200,
      difficulty: "Medium"
    }
  })

  // Recent Records
  await prisma.question.create({
    data: {
      question: "Какой номер достался Арда Гюлеру в Реал Мадриде?",
      options: ["24", "27", "29", "31"],
      correctOption: 2,
      points: 200,
      difficulty: "Medium"
    }
  })

  await prisma.question.create({
    data: {
      question: "В каком матче Лука Модрич провел свой 500-й матч за Реал Мадрид?",
      options: ["Против Атлетико", "Против Хетафе", "Против Райо Вальекано", "Против Севильи"],
      correctOption: 3,
      points: 300,
      difficulty: "Hard"
    }
  })

  // Transfer News
  await prisma.question.create({
    data: {
      question: "Какой клуб арендовал Рейньера в 2023 году?",
      options: ["Жирона", "Альмерия", "Райо Вальекано", "Мальорка"],
      correctOption: 2,
      points: 200,
      difficulty: "Medium"
    }
  })

  await prisma.question.create({
    data: {
      question: "Сколько лет контракт Винисиуса Жуниора, подписанный в 2023 году?",
      options: ["3 года", "4 года", "5 лет", "6 лет"],
      correctOption: 2,
      points: 200,
      difficulty: "Medium"
    }
  })

  // Recent Achievements
  await prisma.question.create({
    data: {
      question: "Кто стал автором 1000-го гола Реал Мадрида в Лиге Чемпионов?",
      options: ["Родриго", "Джуд Беллингем", "Винисиус Жуниор", "Хоселу"],
      correctOption: 3,
      points: 300,
      difficulty: "Hard"
    }
  })

  // 2024-2025 Season Plans
  await prisma.question.create({
    data: {
      question: "Кто станет главным тренером Реал Мадрида в сезоне 2024/25?",
      options: ["Карло Анчелотти", "Хаби Алонсо", "Зинедин Зидан", "Рауль"],
      correctOption: 2,
      points: 200,
      difficulty: "Medium"
    }
  })

  await prisma.question.create({
    data: {
      question: "Какой игрок уже подписал контракт с Реал Мадридом на сезон 2024/25?",
      options: ["Эрлинг Холанд", "Килиан Мбаппе", "Эндрик", "Альфонсо Дэвис"],
      correctOption: 3,
      points: 300,
      difficulty: "Hard"
    }
  })

  await prisma.question.create({
    data: {
      question: "В каком году заканчивается контракт Тони Крооса с Реал Мадридом?",
      options: ["2025", "2024", "2026", "2027"],
      correctOption: 1,
      points: 200,
      difficulty: "Medium"
    }
  })

  await prisma.question.create({
    data: {
      question: "Какой номер зарезервирован для возможного прихода Мбаппе летом 2024?",
      options: ["9", "10", "7", "11"],
      correctOption: 2,
      points: 200,
      difficulty: "Medium"
    }
  })

  await prisma.question.create({
    data: {
      question: "В каком месяце 2024 года Эндрик присоединится к Реал Мадриду?",
      options: ["Май", "Июнь", "Июль", "Август"],
      correctOption: 2,
      points: 200,
      difficulty: "Medium"
    }
  })

  await prisma.question.create({
    data: {
      question: "До какого года продлил контракт Лука Модрич в 2024 году?",
      options: ["2026", "2025", "2027", "2024"],
      correctOption: 1,
      points: 200,
      difficulty: "Medium"
    }
  })

  await prisma.question.create({
    data: {
      question: "Какой стадион будет домашним для Реал Мадрид Кастилья с 2024 года?",
      options: ["Альфредо Ди Стефано", "Вальдебебас", "Сьюдад Реал Мадрид", "Нуэво Бернабеу"],
      correctOption: 0,
      points: 300,
      difficulty: "Hard"
    }
  })

  await prisma.question.create({
    data: {
      question: "Кто из этих игроков точно покинет Реал Мадрид летом 2024 года?",
      options: ["Начо", "Лука Модрич", "Тони Кроос", "Даниэль Карвахаль"],
      correctOption: 3,
      points: 300,
      difficulty: "Hard"
    }
  })

  // More 2024-2025 Questions
  await prisma.question.create({
    data: {
      question: "Какой номер будет у Эндрика в Реал Мадриде?",
      options: ["9", "11", "20", "21"],
      correctOption: 2,
      points: 200,
      difficulty: "Medium"
    }
  })

  await prisma.question.create({
    data: {
      question: "Какой бразильский талант присоединится к Реал Мадриду в 2024 году?",
      options: ["Вини Жуниор", "Эндрик", "Родриго", "Габриэл Жезус"],
      correctOption: 1,
      points: 100,
      difficulty: "Easy"
    }
  })

  await prisma.question.create({
    data: {
      question: "Какой защитник перейдет в Реал Мадрид летом 2024 года?",
      options: ["Жоау Канселу", "Альфонсо Дэвис", "Трент Александер-Арнольд", "Рубен Диаш"],
      correctOption: 1,
      points: 200,
      difficulty: "Medium"
    }
  })

  await prisma.question.create({
    data: {
      question: "Сколько лет контракт Альфонсо Дэвиса с Реал Мадридом?",
      options: ["4 года", "5 лет", "6 лет", "7 лет"],
      correctOption: 1,
      points: 300,
      difficulty: "Hard"
    }
  })

  await prisma.question.create({
    data: {
      question: "Кто будет капитаном Реал Мадрида в сезоне 2024/25?",
      options: ["Тони Кроос", "Лука Модрич", "Дани Карвахаль", "Начо"],
      correctOption: 3,
      points: 200,
      difficulty: "Medium"
    }
  })

  console.log('Seeding completed')
}

main()
  .catch((e) => {+
    console.error('Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 