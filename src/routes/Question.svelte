<script>
  let question = "Игра скоро начнётся!";
  let answer = "";
  let questionImage = undefined;
  let answerOptions = [];
  const QUESTION_LIST = {
    question_list: [{
        id: 0,
        text: 'Как называется процесс роста доли городского населения, повышения роли городов и распространения городского образа жизни?',
        correct_answer: 'a) урбанизация',
        difficulty: 'easy',
        options: 'a) урбанизация<br>b) адаптация<br> c) миграция<br> d) инфляция'
      },
  {
        id: 1,
        text: 'Как называется ежедневное перемещение людей из городов-спутников в центр агломерации для выполнения рабочих функций, посещения культурных объектов и т.д.?',
        correct_answer: 'c) миграция',
        difficulty: 'easy',
        options: 'a) урбанизация<br>b) депопуляция<br> c) миграция<br> d) трансформация '
      },
  {
        id: 2,
        text: 'Какая агломерация является крупнейшей в России?',
        correct_answer: 'c) Московская',
        difficulty: 'easy',
        options: 'a) Самарская<br>b) Новосибирская<br> c) Московская<br> d) Нижегородская'
      },
  {
        id: 3,
        text: 'Как называется компактное расположение городских поселений, которые объединяются между собой хозяйственными, трудовыми, культурно-бытовыми связями?',
        correct_answer: 'b) городская агломерация',
        difficulty: 'easy',
        options: 'a) областной центр<br>b) городская агломерация<br> c) городской округ<br> d) федеральный центр'
      },
  {
        id: 4,
        text: 'Первый электрифицированный участок железных дорог в СССР?',
        correct_answer: 'c) Баку – Сураханы',
        difficulty: 'easy',
        options: 'a) Хашури – Зестафони<br>b) Кизел – Чусовая<br> c) Баку – Сураханы<br> d) Москва – Мытищи'
      },
  {
        id: 5,
        text: 'Первый электрифицированный участок железных дорог в России?',
        correct_answer: 'c) Москва – Мытищи',
        difficulty: 'easy',
        options: 'a) Москва – Серпухов<br>b) Кизел – Чусовая<br> c) Москва – Мытищи<br> d) Ленинград – Бологое'
      },
  {
        id: 6,
        text: 'Чему равнялось напряжение контактной сети на первом электрифицированном пригородном участке в России?',
        correct_answer: 'b) 1500 В',
        difficulty: 'easy',
        options: 'a) 750 В<br>b) 1500 В<br> c) 3000 В<br> d) 25000 В'
      },
  {
        id: 7,
        text: 'Первая сортировочная станция в истории отечественных железных дорог?',
        correct_answer: 'c) Санкт-Петербург-Сортировочный-Московский',
        difficulty: 'easy',
        options: 'a) Ртищево<br>b) Кочетовка<br> c) Санкт-Петербург-Сортировочный-Московский<br> d) Георгиу-Деж'
      },
  {
        id: 8,
        text: 'Первая горочная сортировочная станция в России?',
        correct_answer: 'c) Ртищево',
        difficulty: 'easy',
        options: 'a) Кочетовка<br>b) Инская<br> c) Ртищево<br> d) Юдино'
      },
  {
        id: 9,
        text: 'Какое название никогда не присваивалось Рижскому вокзалу в Москве?',
        correct_answer: 'c) Псковский',
        difficulty: 'easy',
        options: 'a) Виндавский<br>b) Ржевский<br> c) Псковский<br> d) Балтийский'
      },
  {
        id: 10,
        text: 'Как ранее назывался Киевский вокзал в Москве?',
        correct_answer: 'c) Брянский',
        difficulty: 'easy',
        options: 'a) Калужский<br>b) Сумский<br> c) Брянский<br> d) Кировский'
      },
  {
        id: 11,
        text: 'В каком году началась эксплуатация железнодорожной линии между Москвой и Петербургом? ',
        correct_answer: 'c) 1851',
        difficulty: 'easy',
        options: 'a) 1861<br>b) 1837<br> c) 1851<br> d) 1905'
      },
  {
        id: 12,
        text: 'Какие промышленные предприятия нельзя выносить из города?',
        correct_answer: 'c)  Стратегические',
        difficulty: 'easy',
        options: 'a)  Тактические<br>b)  Оперативные<br> c)  Стратегические<br> d)  Нормативные'
      },
  {
        id: 13,
        text: 'В каком году открыто регулярное движение поездов по Московско-Окружной железной дороге? ',
        correct_answer: 'c) 1908',
        difficulty: 'easy',
        options: 'a) 1905<br>b) 1917<br> c) 1908<br> d) 1922'
      },
  {
        id: 14,
        text: 'Чем отличается параллельный график движения пригородных поездов от зонного параллельного?',
        correct_answer: 'b) параллельный график не предусматривает деление участка на зоны, а зонный параллельный — предусматривает',
        difficulty: 'easy',
        options: 'a) в параллельном графике поезда следуют с одинаковыми скоростями, а в зонном параллельном — с разными<br>b) параллельный график не предусматривает деление участка на зоны, а зонный параллельный — предусматривает<br> c) при параллельном графике поезд обслуживает только свою зону, в других зонах следует без остановок, а при зонном параллельном графике все поезда следуют со всеми остановками на всех зонах<br> d) параллельный график строится только на двухпутных участках, а зонный параллельный может применяться и на многопутных участках'
      },
  {
        id: 15,
        text: 'В каких случаях пригородный поезд может следовать на расстояние более 200 километров?',
        correct_answer: 'a) если поезд следует в границах одного субъекта РФ',
        difficulty: 'easy',
        options: 'a) если поезд следует в границах одного субъекта РФ<br>b) если поезд следует из столицы одного субъекта РФ в столицу соседнего субъекта<br> c) если маршрутная скорость поезда составляет более 50 км/ч<br> d) пригородные поезда не могут следовать на расстояния более 200 километров'
      },
  {
        id: 16,
        text: 'Как по графику движения поездов определить потребный парк подвижного состава?',
        correct_answer: 'b) провести вертикальную линию на графике движения и посчитать количество её пересечений с нитками',
        difficulty: 'easy',
        options: 'a) потребный парк равен количеству ниток в одном направлении<br>b) провести вертикальную линию на графике движения и посчитать количество её пересечений с нитками<br> c) провести горизонтальную линию на графике движения и посчитать количество её пересечений с нитками<br> d) по графику движения невозможно определить потребный парк подвижного состава'
      },
  {
        id: 17,
        text: 'Как можно решить проблемы промышленных предприятий, находящихся в городе?',
        correct_answer: 'b)  Вынести предприятие за территорию города',
        difficulty: 'easy',
        options: 'a)  Демонтировать жилую застройку вокруг<br>b)  Вынести предприятие за территорию города<br> c)  Оптимизировать штат персонала<br> d)  Закрыть предприятие'
      },
  {
        id: 18,
        text: 'По какому принципу организуется движение по III главному пути на трёхпутных участках с интенсивным движением пригородных поездов?',
        correct_answer: 'c) направление движения по III пути выбирается в зависимости от времени суток',
        difficulty: 'easy',
        options: 'a) по III пути поезда пропускаются всегда только в одном направлении<br>b) III путь используется только для безостановочных обгонов<br> c) направление движения по III пути выбирается в зависимости от времени суток<br> d) трёхпутные перегоны не применяются на участках с интенсивным движением пригородных поездов'
      },
  {
        id: 19,
        text: 'Какой из элементов отсутствует в графике оборота пригородных поездов?',
        correct_answer: 'd) технологический перерыв в движении поездов',
        difficulty: 'easy',
        options: 'a) процесс движения поезда в определённом рейсе<br>b) процесс оборота в пункте оборота<br> c) техническое обслуживание составов<br> d) технологический перерыв в движении поездов'
      },
  {
        id: 20,
        text: 'Какие сложности возникают у промышленных предприятий, находящихся в городе?',
        correct_answer: 'd)  Все вышеперечисленное',
        difficulty: 'easy',
        options: 'a) Стоимость земли, на которой располагаются такие производства, чаще всего намного превышает стоимость активов самого предприятия<br>b) Возникают трудности с доставкой сырья для изготовления продукции и вывозом готовой продукции<br> c)  Повышенные экологические требования в городах требуют от предприятий дополнительных затрат<br> d)  Все вышеперечисленное'
      },
  {
        id: 21,
        text: 'Участок железной дороги в Москве до 2016 года с приобладанием грузового движения, а после 2016 года исключительно пассажирским движением',
        correct_answer: 'b) Московское центральное кольцо',
        difficulty: 'easy',
        options: 'a) Рижское направление<br>b) Московское центральное кольцо<br> c) Казанское направление<br> d) Московские центральные диаметры'
      },
  {
        id: 22,
        text: 'Сколько разновидностей белого огня применяется в сигнализации на железной дороге? ',
        correct_answer: 'c) Три: лунно-белый, молочно-белый, прозрачно-белый ',
        difficulty: 'easy',
        options: 'a) Один: лунно-белый <br>b) Два: лунно-белый, молочно-белый <br> c) Три: лунно-белый, молочно-белый, прозрачно-белый <br> d) Четыре: лунно-белый, молочно-белый, прозрачно-белый, облачно-белый'
      },
  {
        id: 23,
        text: 'Расписание движения, при котором обеспечиваются постоянные интервалы в течение всего периода, называется…',
        correct_answer: 'a) Тактовым',
        difficulty: 'easy',
        options: 'a) Тактовым<br>b) Постоянным<br> c) Повторяющимся <br> d) Неизменным '
      },
  {
        id: 24,
        text: 'Какого типа графика движения поездов не существует? ',
        correct_answer: 'a) Зонного перпендикулярного',
        difficulty: 'easy',
        options: 'a) Зонного перпендикулярного<br>b) Зонного параллельного<br> c) Зонного непараллельного<br> d) Зонного'
      },
  {
        id: 25,
        text: 'Пункт на перегоне, не имеющий путевого развития, предназначенный исключительно для посадки и высадки пассажиров - это …',
        correct_answer: 'b) Остановочный пункт',
        difficulty: 'easy',
        options: 'a) Раздельный пункт<br>b) Остановочный пункт<br> c) Путевой пост<br> c) Станция '
      },
  {
        id: 26,
        text: 'Как называется разновидность неавтономного подвижного состава для пригородных перевозок, получающего энергию, как правило, от внешней контактной сети или от собственных аккумуляторных батарей?',
        correct_answer: 'd) Электропоезд',
        difficulty: 'easy',
        options: 'a) Электровоз<br>b) Дизель-поезд<br> c) Рельсовый автобус<br> d) Электропоезд'
      },
  {
        id: 27,
        text: 'В какой период Москва превратилась в главный железнодорожный узел Российской Империи?',
        correct_answer: 'b) В 70-х годах XIX века',
        difficulty: 'easy',
        options: 'a) В 40-х годах XIX века <br>b) В 70-х годах XIX века<br> c) В 10-20- х годах ХХ века<br> d) В 30-х годах ХХ века'
      },
  {
        id: 28,
        text: 'Как в Москве назвали ""новое наземное метро""?',
        correct_answer: 'c) Московские центральные диаметры',
        difficulty: 'easy',
        options: 'a) Два сердца столицы<br>b) Московское центральное кольцо<br> c) Московские центральные диаметры<br> d) Московские центральные электрички'
      },
  {
        id: 29,
        text: 'Какое единое название применяется для систем городских железных дорог в России?',
        correct_answer: 'd) Единое название отсутствует',
        difficulty: 'easy',
        options: 'a) Городской поезд<br>b) Центральные диаметры<br> c) Городская электричка<br> d) Единое название отсутствует'
      },
  ],
  };

  function splitString(str) {
    return str.split("<br>");
  }

  let DIFFICULTY_LIST = [];
  const defineAvailableDifficulties = () => {
    DIFFICULTY_LIST = [];
    QUESTION_LIST.question_list.forEach((question) => {
      if (
        !DIFFICULTY_LIST.includes(question.difficulty) &&
        !passedQuestionsIds.includes(question.id)
      )
        DIFFICULTY_LIST.push(question.difficulty);
    });
    console.log(DIFFICULTY_LIST);
  };
  let CURRENT_DIFFICULTY = "easy";
  let CURRENT_ROUND = 1;
  let CURRENT_ROUND_QUESTION = 0;
  let LAST_QUESTION_ID;
  const COMMAND_NUM = 5;
  let randomQuestionId;
  let passedQuestionsIds = [];
  const QUESTION_LIST_LENGTH = QUESTION_LIST.question_list.length;
  const ROUND_LIST_LENGTH = QUESTION_LIST_LENGTH / COMMAND_NUM;

  defineAvailableDifficulties();
  const next = () => {
    CURRENT_ROUND_QUESTION++;
    if (passedQuestionsIds.length === QUESTION_LIST.question_list.length) {
      question = "Вопросы кончились, игра закончена!";
      answer = "";
      answerOptions = "";
      questionImage = undefined;
      CURRENT_ROUND_QUESTION--;
      return;
    }
    const writeQuestion = () => {
      answer = "";
      randomQuestionId = Math.floor(Math.random() * QUESTION_LIST_LENGTH);
      while (
        passedQuestionsIds.includes(randomQuestionId) ||
        CURRENT_DIFFICULTY !==
          QUESTION_LIST.question_list[randomQuestionId].difficulty
      ) {
        randomQuestionId = Math.floor(Math.random() * QUESTION_LIST_LENGTH);
      }
      console.log("ID вопроса:", randomQuestionId);
      passedQuestionsIds.push(randomQuestionId);
      question = QUESTION_LIST.question_list[randomQuestionId].text;
      answerOptions = splitString(
        QUESTION_LIST.question_list[randomQuestionId].options,
      );

      if (QUESTION_LIST.question_list[randomQuestionId].image) {
        questionImage = QUESTION_LIST.question_list[randomQuestionId].image;
      } else {
        questionImage = undefined;
      }
      console.log("CURRENT_ROUND: ", CURRENT_ROUND);
      console.log("CURRENT_ROUND_QUESTION: ", CURRENT_ROUND_QUESTION);
      console.log("CURRENT_DIFFICULTY: ", CURRENT_DIFFICULTY);
      console.log("DIFFICULTY_LIST:", DIFFICULTY_LIST);
      console.log("passedQuestionsIds", passedQuestionsIds);
    };
    if (CURRENT_ROUND_QUESTION <= COMMAND_NUM) {
      writeQuestion();
    }
    if (CURRENT_ROUND_QUESTION > COMMAND_NUM) {
      CURRENT_ROUND++;
      CURRENT_ROUND_QUESTION = 1;
      defineAvailableDifficulties();
      CURRENT_DIFFICULTY =
        DIFFICULTY_LIST[Math.floor(Math.random() * DIFFICULTY_LIST.length)];
      writeQuestion();
    }
  };

  const prev = () => {
    // CURRENT_ROUND_QUESTION--;
    answer = "";

    const writeQuestion = (LAST_QUESTION_ID) => {
      const CURRENT_QUESTION = QUESTION_LIST.question_list.find(
        (question) => question.id === LAST_QUESTION_ID,
      );
      console.log(LAST_QUESTION_ID);
      question = CURRENT_QUESTION.text;

      answerOptions = splitString(CURRENT_QUESTION.options);
      randomQuestionId = LAST_QUESTION_ID;
      if (CURRENT_QUESTION.image) {
        questionImage = CURRENT_QUESTION.image;
      } else {
        questionImage = undefined;
      }
      console.log("CURRENT_ROUND: ", CURRENT_ROUND);
      console.log("CURRENT_ROUND_QUESTION: ", CURRENT_ROUND_QUESTION);
      console.log("CURRENT_DIFFICULTY: ", CURRENT_DIFFICULTY);
      console.log("DIFFICULTY_LIST:", DIFFICULTY_LIST);
      console.log("passedQuestionsIds", passedQuestionsIds);
    };

    if (CURRENT_ROUND_QUESTION <= COMMAND_NUM && CURRENT_ROUND_QUESTION !== 1) {
      CURRENT_ROUND_QUESTION--;
      passedQuestionsIds.pop();
      LAST_QUESTION_ID = passedQuestionsIds[passedQuestionsIds.length - 1];
      console.log("LAST_QUESTION_ID: ", LAST_QUESTION_ID);
      writeQuestion(LAST_QUESTION_ID);
    } else if (CURRENT_ROUND_QUESTION === 1) {
      CURRENT_ROUND--;
      CURRENT_ROUND_QUESTION = 3;
      passedQuestionsIds.pop();
      LAST_QUESTION_ID = passedQuestionsIds[passedQuestionsIds.length - 1];
      console.log("LAST_QUESTION_ID: ", LAST_QUESTION_ID);
      const LAST_QUESTION_DIFFICULTY = QUESTION_LIST.question_list.find(
        (question) => question.id === LAST_QUESTION_ID,
      ).difficulty;

      CURRENT_DIFFICULTY = LAST_QUESTION_DIFFICULTY;
      writeQuestion(LAST_QUESTION_ID);
    }

    if (CURRENT_ROUND_QUESTION === 3) {
      LAST_QUESTION_ID = passedQuestionsIds[passedQuestionsIds.length - 1];
      const LAST_QUESTION_DIFFICULTY = QUESTION_LIST.question_list.find(
        (question) => question.id === LAST_QUESTION_ID,
      ).difficulty;
      // Если в списке доступных сложностей нет сложности предыдущего вопроса, то добавим её туда
      if (!DIFFICULTY_LIST.includes(LAST_QUESTION_DIFFICULTY)) {
        DIFFICULTY_LIST.push(LAST_QUESTION_DIFFICULTY);
      }
      CURRENT_DIFFICULTY = LAST_QUESTION_DIFFICULTY;
    }
  };

  const writeAnswer = () => {
    answer = QUESTION_LIST.question_list[randomQuestionId].correct_answer;
  };
</script>

<div class="tablet">
  <div class="tablet__control">
    <button on:click={prev}>Предыдущий вопрос</button>
    <button on:click={writeAnswer}>Ответ</button>
    <button on:click={next}>Следующий вопрос</button>
  </div>
  <div class="tablet__element tablet__element_status">
    <div class="tablet__text tablet__text_alignleft">
      Раунд: {CURRENT_ROUND} / {ROUND_LIST_LENGTH}
    </div>
    <div class="tablet__text tablet__text_alignleft">
      Вопрос в раунде: {CURRENT_ROUND_QUESTION} / {COMMAND_NUM}
    </div>
  </div>
  <div class="tablet__element tablet__element_question">
    <div class="tablet__text">{question}</div>
    <!-- <div class="tablet__text">{answerOptions}</div> -->
    {#each answerOptions as item}
      <div class="tablet__text tablet__text_alignleft">{item}</div>
    {/each}
    {#if questionImage}
      <a href={questionImage} target="_blank"
        ><img src={questionImage} alt="" class="tablet__image" /></a
      >
    {/if}
  </div>
  <div class="tablet__element tablet__element_answer">
    <div class="tablet__text tablet__text_correctanswertitle">
      Правильный ответ:
    </div>
    <div class="tablet__text">{answer}</div>
  </div>
</div>

<style>
  .tablet {
    display: flex;
    flex-direction: column;
    align-items: start;
    font-size: 16px;
    padding: 0 20px;
    /* width: 100%; */
  }
  .tablet__control {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  .tablet__element {
    width: 100%;
    margin: 5px 0;
    padding: 20px 10px;
    border-radius: 10px;
    background-color: #f6f6f6;
  }
  .tablet__element_question,
  .tablet__element_answer {
    font-size: 25px;
    padding: 10px;
  }
  .tablet__text {
    margin-bottom: 10px;
  }
  .tablet__text_alignleft {
    text-align: left;
    font-size: 20px;
    margin-bottom: 0;
  }
  .tablet__text_correctanswertitle {
    color: #92c67c;
    font-weight: 600;
  }
  .tablet__image {
    margin-top: 10px;
    width: 100%;
    object-fit: contain;
    max-height: 350px;
  }
</style>
