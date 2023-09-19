<script>
  let question = "Игра скоро начнётся!";
  let answer = "";
  let questionImage = undefined;
  let answerOptions = [];
  const QUESTION_LIST = {
    question_list: [
  {
          id: 0,
          text: 'Выберите из нижеприведенных локомотивов двухсекционный тепловоз с электрической передачей:',
          correct_answer: 'г) 2ТЭ25КМ',
          difficulty: 'medium',
          options: 'а) ЧМЭ2<br>б) ТЭМ2УМ<br>в) 3М62У<br>г) 2ТЭ25КМ'
  },
  {
          id: 1,
          text: 'Какой из перечисленного подвижного состава относится к моторвагонному?',
          correct_answer: 'в) РА-2',
          difficulty: 'medium',
          options: 'а) ЭП1М<br>б) ВЛ80С<br>в) РА-2<br>г) 2ТЭ10В<br>д) 4ЭС5К'
  },
  {
          id: 2,
          text: 'Какой из нижеперечисленных локомотивов является электровозом?',
          correct_answer: 'б) ЧС4Т',
          difficulty: 'medium',
          options: 'а) ТЭП70БС<br>б) ЧС4Т<br>в) ТЭМ18ДМ<br>г) ДМ62'
  },
  {
          id: 3,
          text: 'Какой пригородный участок был электрифицирован впервые в РСФСР?',
          correct_answer: 'б) Москва - Мытищи',
          difficulty: 'medium',
          options: 'а) Пермь - Чусовская<br>б) Москва - Мытищи<br>в) Нижний Новгород - Дзержинск<br>г) Санкт-Петербург - Волховстрой'
  },
  {
          id: 4,
          text: 'Что из перечисленного не относится к особенностям пригородных перевозок?',
          correct_answer: 'б) Реализация услуги предоставления постельного белья в пути следования ',
          difficulty: 'medium',
          options: 'а) Перевозка осуществляется на короткое расстояние<br>б) Реализация услуги предоставления постельного белья в пути следования <br>в) Ярко выраженная неравномерность (дни недели, часы в течение дня)<br>г) Сокращение пассажиропотока по мере удаления от головной станции'
  },
  {
          id: 5,
          text: 'Что такое тяговое плечо?',
          correct_answer: 'б)  Расстояние между станциями смены локомотива',
          difficulty: 'medium',
          options: 'а) Расстояние которое поезд проходит без переформирования<br>б) Расстояние между станциями смены локомотива<br>в) Расстояние между станциями смены локомотивных бригад<br>г) Расстояние между техническими осмотрами'
  },
  {
          id: 6,
          text: 'Что является главным признаком оборотного депо?',
          correct_answer: 'г) Отсутствие собственного приписного парка локомотивов',
          difficulty: 'medium',
          options: 'а) Наличие поворотного круга<br>б) Отсутствие пункта смены локомотивных бригад<br>в) Веерное расположение ремонтных зон<br>г) Отсутствие собственного приписного парка локомотивов'
  },
  {
          id: 7,
          text: 'Чем отличается головной вагон дизель-поезда от головного вагона электропоезда?',
          correct_answer: 'в) Наличием машинного отделения',
          difficulty: 'medium',
          options: 'а) Наличием подвагонного оборудования<br>б) Отсутствием пассажирского салона<br>в) Наличием машинного отделения<br>г) Всем перечисленным'
  },
  {
          id: 8,
          text: 'Моторный и прицепной вагоны электропоезда, имеющие общее электрическое оборудование, образуют:',
          correct_answer: 'б) Секцию',
          difficulty: 'medium',
          options: 'а) Тяговую единицу<br>б) Секцию<br>в) Серию<br>г) Модуль'
  },
  {
          id: 9,
          text: 'Что применяют в качестве первичного источника энергии в тепловозах?',
          correct_answer: 'в) Диз. топливо',
          difficulty: 'easy',
          options: 'а) Древесный уголь<br>б) Нефть<br>в) Диз. топливо<br>г) Электроэнергию<br>д) Каменный уголь'
  },
  {
          id: 10,
          text: 'Какой из перечисленных типов подвижного состава имеет кузов капотного типа?',
          correct_answer: 'а) Маневровые',
          difficulty: 'easy',
          options: 'а) Маневровые<br>б) Магистральные грузовые<br>в) Магистральные пассажирские<br>г) Моторные вагоны электропоездов'
  },
  {
          id: 11,
          text: 'Как называется первый отечественный электровоз?',
          correct_answer: 'г) ВЛ19',
          difficulty: 'easy',
          options: 'а) ВЛ8<br>б) ВЛ10<br>в) ВЛ11<br>г) ВЛ19'
  },
  {
          id: 12,
          text: 'На расстояние до 200 км следуют пассажирские поезда:',
          correct_answer: 'б) Пригородные',
          difficulty: 'easy',
          options: 'а) Дальнего следования<br>б) Пригородные<br>в) Местные<br>г) Городские'
  },
  {
          id: 13,
          text: 'К какой категории относится пассажирский поезд №6248?',
          correct_answer: 'г) Пригородный',
          difficulty: 'easy',
          options: 'а) Скорый круглогодичный<br>б) Пассажирский поезд сезонного, разового назначения или детский<br>в) Высокоскоростной <br>г) Пригородный'
  },
  {
          id: 14,
          text: 'Снабжение локомотивов топливом, песком, смазочными и обтирочными материалами называется:',
          correct_answer: 'в) Экипировкой',
          difficulty: 'easy',
          options: 'а) Техническим обслуживанием<br>б) Компоновкой<br>в) Экипировкой<br>г) Заправкой'
  },
  {
          id: 15,
          text: 'Для обеспечения возможности посадки и высадки пассажиров как на высокие, так и на низкие платформы в тамбурах вагонов некоторых электропоездов предусматриваются:',
          correct_answer: 'в) Откидные площадки',
          difficulty: 'easy',
          options: 'а) Переходные площадки<br>б) Лейтеры<br>в) Откидные площадки<br>г) Съемные трапы'
  },
  {
          id: 16,
          text: 'Как называется данное устройство, размещаемое в локомотивном депо?',
          correct_answer: 'в) Поворотный круг',
          difficulty: 'easy',
          image: 'https://storage.yandexcloud.net/rzd-universitet2/image_2023-09-19_14-50-48.png',
          options: 'а) Поворотный треугольник<br>б) Трансбордер<br>в) Поворотный круг<br>г) Предохранительный тупик'
  },
  {
          id: 17,
          text: 'Как называют элемент конструкции пассажирского вагона, отмеченный на фотографии?',
          correct_answer: 'б) Суфле',
          difficulty: 'easy',
          image: 'https://storage.yandexcloud.net/rzd-universitet2/image_2023-09-19_14-50-47.png',
          options: 'а) Зефир<br>б) Суфле<br>в) Пастила<br>г) Сандвич-панель'
  },
  {
          id: 18,
          text: 'Какой из нижеперечисленных типов подвижного состава не может оснащаться реостатным тормозом?',
          correct_answer: 'в) Дизель-поезд с гидравлической передачей',
          difficulty: 'hard',
          options: 'а) Электровоз<br>б) Электропоезд<br>в) Дизель-поезд с гидравлической передачей<br>г) Тепловоз с электрической передачей'
  },
  {
          id: 19,
          text: 'Какой из нижеперечисленных локомотивов может оснащаться рекуперативным тормозом?',
          correct_answer: 'а) Электровоз',
          difficulty: 'hard',
          options: 'а) Электровоз<br>б) Паровоз<br>в) Тепловоз с гидравлической передачей<br>г) Тепловоз с электрической передачей'
  },
  {
          id: 20,
          text: 'В каком виде торможения локомотив может отдавать накопленную энергию в контактную сеть?',
          correct_answer: 'б) Рекуперативное',
          difficulty: 'hard',
          options: 'а) Реостатное<br>б) Рекуперативное<br>в) Фрикционное<br>г) Электропневматическое<br>д) Электромагнитное'
  },
  {
          id: 21,
          text: 'Какой вид передачи вращающего момента с силовой установки на колесные пары на тепловозах не применяют?',
          correct_answer: 'г) Механическая',
          difficulty: 'hard',
          options: 'а) Электрическая<br>б) Гидравлическая<br>в) Гидромеханическая<br>г) Механическая'
  },
  {
          id: 22,
          text: 'В режиме выбега локомотива его тяговые электродвигатели будут:',
          correct_answer: 'а) Отключены',
          difficulty: 'hard',
          options: 'а) Отключены<br>б) Включены и работать только в тяговом режиме<br>в) Включены и работать только в генераторном режиме<br>г) Отключены при движении на площадках и включены при движении на подъемах и спусках'
  },
  {
          id: 23,
          text: 'Какая станция пригородного участка называется зонной?',
          correct_answer: 'б) Раздельный пункт, где происходит оборот пригородных поездов',
          difficulty: 'hard',
          options: 'а) Раздельный пункт, делящий железнодорожную линию на блок-участки или перегоны<br>б) Раздельный пункт, где происходит оборот пригородных поездов<br>в) Раздельный пункт на перегоне, не имеющий путевого развития, предназначенный исключительно для посадки и высадки пассажиров'
  },
  {
          id: 24,
          text: 'Чем обусловлена необходимость деления пригородного участка на зоны?',
          correct_answer: 'б) Сокращение пассажиропотока по мере удаления от головной станции на крупных населенных пунктах',
          difficulty: 'hard',
          options: 'а) Особый режим труда и отдыха локомотивных бригад<br>б) Сокращение пассажиропотока по мере удаления от головной станции на крупных населенных пунктах <br>в) Расположение моторвагонного депо <br>г) Удобство построения непараллельного графика движения поездов'
  },
  {
          id: 25,
          text: 'Что из перечисленного не является требованием к организации пригородного движения?',
          correct_answer: 'г) Равномерность отправления поездов со станций в течение всех суток',
          difficulty: 'hard',
          options: 'а) Минимальные затраты времени пассажирами <br> б) Минимальное время на разгон и замедление<br>в) Минимальное время стоянок на остановочных пунктах<br>г) Равномерность отправления поездов со станций в течение всех суток'
  },
  {
          id: 26,
          text: 'Электропоезд ЭД4М эксплуатируется в 6-вагонном исполнении. Определите количество вагонов, оборудованных тяговыми электродвигателями:',
          correct_answer: 'б) 3',
          difficulty: 'hard',
          options: 'а) 2<br>б) 3<br>в) 4<br>г) 6'
  }
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
      questionImage = undefined;
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
