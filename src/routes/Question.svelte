<script>
  let question = "Игра скоро начнётся!";
  let answer = "";
  let questionImage = undefined;
  let answerOptions = [];
  const QUESTION_LIST = {
    question_list: [
      {
        id: 0,
        text: "Какое количество пикетных столбиков устанавливается в пределах одного километра жд-линии?",
        correct_answer: "в) 9",
        difficulty: "medium",
        options: "а) 1 <br> б) 5 <br> в) 9 <br> г) 11",
      },
      {
        id: 1,
        text: "Чему равна ширина «Стефенсоновская» колеи? ",
        correct_answer: "б) 1435 мм",
        difficulty: "medium",
        options: "а) 1067 <br> б) 1435 <br> в) 1520 <br> г) 1668",
      },
      {
        id: 2,
        text: "Как называется самый длинный железнодорожный тоннель на сети ОАО «РЖД»?",
        correct_answer: "а) Северомуйский тоннель (15,3 км)",
        difficulty: "medium",
        options:
          "а) Северомуский тоннель <br> б) Тоннель под Амуром <br> в) Байкальский тоннель <br> г) Адлер - Красная Поляна",
      },
      {
        id: 3,
        text: "Назовите «столицу» БАМа",
        correct_answer: "г) Тында",
        difficulty: "medium",
        options: "а) Екатеринбург <br> б) Хабаровск <br> в) Чита <br> г) Тында",
      },
      {
        id: 4,
        text: "Сколько разновидностей белого огня применяется в сигнализации на железной дороге? ",
        correct_answer:
          "в) Три: лунно-белый (используется на маневровых светофорах), молочно-белый (используется на стрелочных указателях), прозрачно-белый (используется в ручных фонарях)",
        difficulty: "medium",
        options:
          "а) Один: лунно-белый <br> б) Два: лунно-белый, молочно-белый <br> в) Три: лунно-белый, молочно-белый, прозрачно-белый <br> г) Четыре: лунно-белый, молочно-белый, прозрачно-белый, облачно-белый",
      },
      {
        id: 5,
        text: "Как называется данное устройство?",
        correct_answer: "б) Локомотивный светофор",
        difficulty: "medium",
        image:
          "https://storage.yandexcloud.net/rzd-universitet/20230818_0410.png",
        options:
          "а) Поездной светофор <br> б) Локомотивный светофор <br> в) Повторительный светофор <br> г) Контрольная лампа",
      },
      {
        id: 6,
        text: "Как называется путевая машина, изображенная на фото? ",
        correct_answer: "в) Кусторез",
        difficulty: "medium",
        image:
          "https://storage.yandexcloud.net/rzd-universitet/20230818_0411.png",
        options:
          "а) Пылесос <br> б) Металлоискатель <br> в) Кусторез <br> г) Поливомоечная",
      },
      {
        id: 7,
        text: "Что изображено на фотографии?",
        correct_answer: "а) Петарда",
        difficulty: "medium",
        image:
          "https://storage.yandexcloud.net/rzd-universitet/20230818_0412.jpg",
        options:
          "а) Петарда <br> б) Кнопка <br> в) Счетчик осей <br> г) Вагонный замедлитель",
      },
      {
        id: 8,
        text: "Что изображено на фотографии?",
        correct_answer: "б) Сбрасывающий остряк",
        difficulty: "medium",
        image:
          "https://storage.yandexcloud.net/rzd-universitet/20230818_0413.jpg",
        options:
          "а) Сбрасывающий башмак <br> б) Сбрасывающий остряк <br> в) Сбрасывающая стрелка <br> г) Обрыв рельсовой нити",
      },
      {
        id: 9,
        text: "Как называется элемент верхнего строения пути, изображенный на фото?",
        correct_answer: "г) Костыль",
        difficulty: "easy",
        image:
          "https://storage.yandexcloud.net/rzd-universitet/image_2023-08-18_17-52-08.png",
        options: "а) Болт <br> б) Трость <br> в) Молот <br> г) Костыль",
      },
      {
        id: 10,
        text: "На какие элементы разделяется межстанционный перегон проходными светофорами? ",
        correct_answer: "б) Блок-участки",
        difficulty: "easy",
        options:
          "а) Блок-посты <br> б) Блок-участки <br> в) Главные пути <br> г) Рельсовые плечи",
      },
      {
        id: 11,
        text: "Сколько поездов может находится между станциями на однопутном перегоне, оборудованным полуавтоматической блокировкой? ",
        correct_answer: "а) Один",
        difficulty: "easy",
        options:
          "а) Один <br> б) Два <br> в) Три <br> г) От одного до пяти в зависимости от межпоездного интервала",
      },
      {
        id: 12,
        text: "Как называется электрический аппарат, размещаемый на крыше электроподвижного состава и предназначенный для токосъёма? ",
        correct_answer: "г) Пантограф",
        difficulty: "easy",
        image:
          "https://storage.yandexcloud.net/rzd-universitet/20230818_0414.jpg",
        options:
          "а) Главный выключатель <br> б) Реактор <br> в) Реостат <br> г) Пантограф",
      },
      {
        id: 13,
        text: "Сколько систем электрификации применяется на Российских железных дорогах?",
        correct_answer: "б) Две (постоянного и переменного тока)",
        difficulty: "easy",
        options: "а) Одна <br> б) Две <br> в) Три <br> г) Четыре",
      },
      {
        id: 14,
        text: "Как называется время, в течение которого прекращается движение поездов по перегону или путям железнодорожной станции для производства ремонтно-строительных работ? ",
        correct_answer: "а) Окно",
        difficulty: "easy",
        options: "а) Окно <br> б) Форточка <br> в) Дверь <br> г) Отбой",
      },
      {
        id: 15,
        text: "Как называется путевая машина, изображенная на фото?",
        correct_answer: "в) Струг, снегоочиститель",
        difficulty: "easy",
        image:
          "https://storage.yandexcloud.net/rzd-universitet/20230818_0415.jpg",
        options:
          "а) Щебнеочиститель <br> б) Пылесос <br> в) Струг, снегоочиститель <br> г) Бронетранспортер",
      },
      {
        id: 16,
        text: "Каково предназначение путевой машины, изображенной на фото?",
        correct_answer: "в) Рельсошлифовальный поезд",
        difficulty: "easy",
        image:
          "https://storage.yandexcloud.net/rzd-universitet/20230818_0416.jpg",
        options:
          "а) Сварочный поезд <br> б) Подбивочно-рихтовочный состав <br> в) Рельсошлифовальный поезд <br> г) Передвижная рельсоплавильная станция",
      },
      {
        id: 17,
        text: "Как называется вагон, предназначенный для сплошного ультразвукового контроля рельс под нагрузкой, уложенных в путь, и выявления в них наружных и скрытых дефектов? ",
        correct_answer: "б) Вагон-дефектоскоп",
        difficulty: "easy",
        options:
          "а) Вагон-лаборатория <br> б) Вагон-дефектоскоп <br> в) Вагон-путеизмеритель <br> г) Турный вагон",
      },
      {
        id: 18,
        text: "Как называется земляной вал правильной призматической формы из грунта, изъятого из выемки и не использованного при возведении насыпи? ",
        correct_answer: "а) Кавальер",
        difficulty: "hard",
        image:
          "https://storage.yandexcloud.net/rzd-universitet/image_2023-08-18_18-24-56.png",
        options: "а) Кавальер <br> б) Джентльмен <br> в) Банкет <br> г) Кювет",
      },
      {
        id: 19,
        text: "В каком регионе России применялась «капская» колея? ",
        correct_answer: "г) Сахалинская область (1067 мм)",
        difficulty: "hard",
        options:
          "а) Калининградская область <br> б) Еврейский АО <br> в) Республика Саха-Якутия <br> г) Сахалинская область",
      },
      {
        id: 20,
        text: "Как называется путейская однорельсовая тележка для грузов? ",
        correct_answer: "б) Модерон",
        difficulty: "hard",
        image:
          "https://storage.yandexcloud.net/rzd-universitet/20230818_0418.jpg",
        options: "а) Рохля <br> б) Модерон <br> в) Лейтер <br> г) Люлька",
      },
      {
        id: 21,
        text: "Как называется сплетённый проволочный ящик, заполненный камнем, применяемый для укрепления откосов?",
        correct_answer: "в) Габион",
        difficulty: "hard",
        image:
          "https://storage.yandexcloud.net/rzd-universitet/20230818_0421.jpg",
        options: "а) Клетка <br> б) Сетка <br> в) Габион <br> г) Сумка",
      },
      {
        id: 22,
        text: "Как называется рукоятка для ручного перевода централизованных стрелочных переводов? ",
        correct_answer: "а) Курбель",
        difficulty: "hard",
        image:
          "https://storage.yandexcloud.net/rzd-universitet/20230818_0422.png",
        options: "а) Курбель <br> б) Ключ-жезл <br> в) Вилка <br> г) Кривошип",
      },
      {
        id: 23,
        text: "Как называется съёмная вышка для обслуживания и ремонта контактной сети? ",
        correct_answer: "г) Лейтер",
        difficulty: "hard",
        image:
          "https://storage.yandexcloud.net/rzd-universitet/20230818_04222.jpg",
        options: "а) Стремянка <br> б) Подмости <br> в) Башня <br> г) Лейтер",
      },
      {
        id: 24,
        text: "Как называется такая опора контактной сети? ",
        correct_answer: "б) Анкерная",
        difficulty: "hard",
        image:
          "https://storage.yandexcloud.net/rzd-universitet/20230818_0423.png",
        options:
          "а) Консольная <br> б) Анкерная <br> в) Фидерная <br> г) Питающая",
      },
      {
        id: 25,
        text: "Как называют количество шпал, приходящихся на 1 километр железнодорожного пути?",
        correct_answer: "в) Эпюра",
        difficulty: "hard",
        options: "а) Плеть <br> б) Звено <br> в) Эпюра <br> г) Брус",
      },
      {
        id: 26,
        text: "Как называется наибольший затяжной подъем, по значению которого устанавливается норма массы поезда при одиночной тяге и расчетной минимальной равномерной скорости движения?",
        correct_answer: "а) Руководящий",
        difficulty: "hard",
        options:
          "а) Руководящий <br> б) Решающий <br> в) Критический <br> г) Скоростной",
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

  defineAvailableDifficulties();
  const next = () => {
    CURRENT_ROUND_QUESTION++;
    if (passedQuestionsIds.length === QUESTION_LIST.question_list.length) {
      question = "Вопросы кончились, игра закончена!";
      answer = "";
      answerOptions = "";
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
        QUESTION_LIST.question_list[randomQuestionId].options
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
        (question) => question.id === LAST_QUESTION_ID
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
        (question) => question.id === LAST_QUESTION_ID
      ).difficulty;

      CURRENT_DIFFICULTY = LAST_QUESTION_DIFFICULTY;
      writeQuestion(LAST_QUESTION_ID);
    }

    if (CURRENT_ROUND_QUESTION === 3) {
      LAST_QUESTION_ID = passedQuestionsIds[passedQuestionsIds.length - 1];
      const LAST_QUESTION_DIFFICULTY = QUESTION_LIST.question_list.find(
        (question) => question.id === LAST_QUESTION_ID
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
  <div class="tablet__element tablet__element_question">
    <div class="tablet__text">{question}</div>
    <!-- <div class="tablet__text">{answerOptions}</div> -->
    {#each answerOptions as item}
      <div class="tablet__text tablet__text_answeroption">{item}</div>
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
  .tablet__text_answeroption {
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
