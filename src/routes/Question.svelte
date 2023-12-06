<script>
  let question = "Игра скоро начнётся!";
  let answer = "";
  let questionImage = undefined;
  let answerOptions = [];
  const QUESTION_LIST = {
    question_list: [
      {
        id: 0,
        text: "Какой из показателей работы железнодорожного транспорта определяется как отношение грузооборота нетто к объему перевозок?",
        correct_answer: "в) Средняя дальность перевозок",
        difficulty: "hard",
        options:
          "а) Густота грузовых перевозок<br>б) Коэффициент неравномерности перевозок<br> в) Средняя дальность перевозок",
      },
      {
        id: 1,
        text: "Как называется первый отечественный электровоз?",
        correct_answer: "г) ВЛ19",
        difficulty: "medium",
        options: "а) ВЛ8<br>б) ВЛ10<br> в) ВЛ11<br> г) ВЛ19",
      },
      {
        id: 2,
        text: "На расстояние до 200 км следуют пассажирские поезда:",
        correct_answer: "б) Пригородные",
        difficulty: "easy",
        options:
          "а) Дальнего следования<br>б) Пригородные<br> в) Местные<br> г) Городские",
      },
      {
        id: 3,
        text: "Снабжение локомотивов топливом, песком, смазочными и обтирочными материалами называется:",
        correct_answer: "в) Экипировкой",
        difficulty: "easy",
        options:
          "а) Техническим обслуживанием<br>б) Бункеровкой<br> в) Экипировкой<br> г) Заправкой",
      },
      {
        id: 4,
        text: "Для обеспечения возможности посадки и высадки пассажиров как на высокие, так и на низкие платформы в тамбурах вагонов некоторых электропоездов предусматриваются:",
        correct_answer: "в) Откидные площадки",
        difficulty: "medium",
        options:
          "а) Переходные площадки<br>б) Лейтеры<br> в) Откидные площадки<br> г) Съемные трапы",
      },
      {
        id: 5,
        text: "Как называется данное устройство, размещаемое в локомотивном депо?",
        correct_answer: "в) Поворотный круг",
        difficulty: "easy",
        image:
          "https://storage.yandexcloud.net/rzd-universitet2/image_2023-09-19_14-50-48.png",
        options:
          "а) Поворотный треугольник<br>б) Трансбордер<br> в) Поворотный круг<br> г) Предохранительный тупик",
      },
      {
        id: 6,
        text: "Как называют элемент конструкции пассажирского вагона, отмеченный на фотографии?",
        correct_answer: "б) Суфле",
        difficulty: "medium",
        image:
          "https://storage.yandexcloud.net/rzd-universitet2/image_2023-09-19_14-50-47.png",
        options: "а) Зефир<br>б) Суфле<br> в) Пастила<br> г) Сандвич-панель",
      },
      {
        id: 7,
        text: "Как называется элемент верхнего строения пути, изображенный на фото?",
        correct_answer: "г) Костыль",
        difficulty: "easy",
        image:
          "https://storage.yandexcloud.net/rzd-universitet/image_2023-08-18_17-52-08.png",
        options: "а) Болт <br>б) Шпилька<br> в) Заклёпка<br> г) Костыль",
      },
      {
        id: 8,
        text: "На какие элементы разделяется межстанционный перегон проходными светофорами? ",
        correct_answer: "б) Блок-участки",
        difficulty: "hard",
        options:
          "а) Блок-посты <br>б) Блок-участки <br> в) Главные пути <br> г) Рельсовые плечи",
      },
      {
        id: 9,
        text: "Сколько поездов может находится между станциями на однопутном перегоне, оборудованным полуавтоматической блокировкой? ",
        correct_answer: "а) Один",
        difficulty: "hard",
        options:
          "а) Один <br>б) Два <br> в) Три <br> г) От одного до пяти в зависимости от межпоездного интервала",
      },
      {
        id: 10,
        text: "Как называется электрический аппарат, размещаемый на крыше электроподвижного состава, и предназначенный для токосъёма? ",
        correct_answer: "г) Пантограф",
        difficulty: "easy",
        image:
          "https://storage.yandexcloud.net/rzd-universitet/20230818_0414.jpg",
        options:
          "а) Главный выключатель <br>б) Реактор <br> в) Реостат <br> г) Пантограф",
      },
      {
        id: 11,
        text: "Сколько систем электрификации применяется на Российских железных дорогах?",
        correct_answer: "б) Две (постоянного и переменного тока)",
        difficulty: "medium",
        options: "а) Одна <br>б) Две <br> в) Три <br> г) Четыре",
      },
      {
        id: 12,
        text: "Как называется время, в течение которого прекращается движение поездов по перегону или путям железнодорожной станции для производства ремонтно-строительных работ? ",
        correct_answer: "а) Окно",
        difficulty: "easy",
        options: "а) Окно <br>б) Форточка <br> в) Дверь <br> г) Перерыв",
      },
      {
        id: 13,
        text: "Как называется путевая машина, изображенная на фото?",
        correct_answer: "в) Струг, снегоочиститель",
        difficulty: "medium",
        image:
          "https://storage.yandexcloud.net/rzd-universitet/20230818_0415.jpg",
        options:
          "а) Щебнеочиститель <br>б) Грохот<br> в) Струг, снегоочиститель <br> г) Траншеекопатель",
      },
      {
        id: 14,
        text: "Как называется вагон, предназначенный для сплошного ультразвукового контроля рельс под нагрузкой, уложенных в путь, и выявления в них наружных и скрытых дефектов? ",
        correct_answer: "б) Вагон-дефектоскоп",
        difficulty: "easy",
        options:
          "а) Вагон-лаборатория <br>б) Вагон-дефектоскоп <br> в) Вагон-путеизмеритель <br> г) Турный вагон",
      },
      {
        id: 15,
        text: "В каком году было открыто движение по линии Москва - Петербург?",
        correct_answer: "б) 1851",
        difficulty: "hard",
        options: "а) 1861<br>б) 1851 <br> в) 1905 <br> г) 1837",
      },
      {
        id: 16,
        text: "Чему равна ширина «Стефановской» колеи? ",
        correct_answer: "б) 1435 мм",
        difficulty: "hard",
        options: "а) 1067 <br>б) 1435 <br> в) 1520 <br> г) 1668",
      },
      {
        id: 17,
        text: "Как называется самый длинный железнодорожный тоннель на сети ОАО «РЖД»?",
        correct_answer: "а) Северомуйский тоннель (15,3 км)",
        difficulty: "medium",
        options:
          "а) Северомуйский тоннель <br>б) Тоннель под Амуром <br> в) Байкальский тоннель <br> г) Тоннель Адлер - Красная Поляна",
      },
      {
        id: 18,
        text: "Назовите «столицу» БАМа",
        correct_answer: "г) Тында",
        difficulty: "easy",
        options: "а) Екатеринбург <br>б) Хабаровск <br> в) Чита <br> г) Тында",
      },
      {
        id: 19,
        text: "Сколько разновидностей белого огня применяется в сигнализации на железной дороге? ",
        correct_answer:
          "в) Три: лунно-белый (используется на маневровых светофорах), молочно-белый (используется на стрелочных указателях), прозрачно-белый (используется в ручных фонарях)",
        difficulty: "hard",
        options:
          "а) Один: лунно-белый <br>б) Два: лунно-белый, молочно-белый <br> в) Три: лунно-белый, молочно-белый, прозрачно-белый <br> г) Четыре: лунно-белый, молочно-белый, прозрачно-белый, облачно-белый",
      },
      {
        id: 20,
        text: "Как называется данное устройство?",
        correct_answer: "б) Локомотивный светофор",
        difficulty: "medium",
        image:
          "https://storage.yandexcloud.net/rzd-universitet/20230818_0410.png",
        options:
          "а) Поездной светофор <br>б) Локомотивный светофор <br> в) Повторительный светофор <br> г) Контрольная лампа",
      },
      {
        id: 21,
        text: "Как называется путевая машина, изображенная на фото? ",
        correct_answer: "в) Кусторез",
        difficulty: "easy",
        image:
          "https://storage.yandexcloud.net/rzd-universitet/20230818_0411.png",
        options:
          "а) Пылесос <br>б) Металлоискатель <br> в) Кусторез <br> г) Поливомоечная",
      },
      {
        id: 22,
        text: "Что изображено на фотографии?",
        correct_answer: "а) Петарда",
        difficulty: "medium",
        image:
          "https://storage.yandexcloud.net/rzd-universitet/20230818_0412.jpg",
        options:
          "а) Петарда <br>б) Гребнесмазыватель<br> в) Счетчик осей <br> г) Вагонный замедлитель",
      },
      {
        id: 23,
        text: "Что изображено на фотографии?",
        correct_answer: "б) Сбрасывающий остряк",
        difficulty: "hard",
        image:
          "https://storage.yandexcloud.net/rzd-universitet/20230818_0413.jpg",
        options:
          "а) Сбрасывающий башмак <br>б) Сбрасывающий остряк <br> в) Сбрасывающая стрелка <br> г) Обрыв рельсовой нити",
      },
      {
        id: 24,
        text: "Как называется съёмная вышка для обслуживания и ремонта контактной сети? ",
        correct_answer: "г) Лейтер",
        difficulty: "hard",
        image:
          "https://storage.yandexcloud.net/rzd-universitet/20230818_04222.jpg",
        options: "а) Стремянка <br>б) Подмости <br> в) Башня <br> г) Лейтер",
      },
      {
        id: 25,
        text: "Как называются станции, предназначенные для массовой переработки вагонопотоков и формирования-расформирования грузовых поездов?",
        correct_answer: "в) Сортировочные",
        difficulty: "medium",
        options:
          "а) Грузовые <br>б) Участковые<br> в) Сортировочные<br> г) Промежуточные",
      },
      {
        id: 26,
        text: "Пропускная способность, которой должен располагать участок для пропуска заданных грузо- и пассажиропотоков с учетом резерва, называется:",
        correct_answer: "г) Потребной",
        difficulty: "hard",
        options: "",
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
  const COMMAND_NUM = 3;
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
    margin: 10px 0;
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
