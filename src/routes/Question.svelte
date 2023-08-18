<script>
  let question = 'Игра скоро начнётся!';
  let answer = ''
  let questionImage = undefined;
  const QUESTION_LIST = {
    question_list: [
      {
        id: 0,
        text: 'Какие виды поездов существуют и какие задачи они выполняют?',
        correct_answer: 'Существует множество видов поездов, включая пассажирские, грузовые, скоростные, пригородные и т.д. Каждый вид поезда имеет свои особенности и предназначен для разных целей. Пассажирские поезда предназначены для перевозки людей на дальние и средние расстояния, грузовые — для перевозки различных грузов, скоростные — для быстрой доставки пассажиров на дальние расстояния, пригородные — для перевозки пассажиров между городами и пригородами и т.д.',
        difficulty: 'easy'
      },
      {
        id: 1,
        text: 'Какие типы вагонов бывают в составе поезда и какие функции они выполняют?',
        correct_answer: 'В составе поезда могут быть различные типы вагонов, такие как плацкартный, купейный, спальный, ресторанный и т.д. Каждый тип вагона предназначен для определенной категории пассажиров и имеет свои особенности. Плацкартный вагон предназначен для перевозки пассажиров на дальние и средние расстояния, купейный вагон — для комфортного проживания пассажиров, спальный вагон — для ночной перевозки пассажиров, ресторанный вагон — для обеспечения питания пассажиров и т.д.',
        difficulty: 'easy',
        image: 'https://storage.yandexcloud.net/mcdmap/%D0%9A%D1%83%D0%BD%D1%86%D0%B5%D0%B2%D0%BE-1.png'
      },
      {
        id: 2,
        text: 'Какие виды билетов бывают на поезд и какие условия их использования?',
        correct_answer: 'На поезд можно приобрести различные виды билетов, например, плацкартный, купейный, спальный, бизнес-класса и т.д. Каждый вид билета имеет свои особенности и стоимость. Плацкартный билет обычно является самым доступным и предназначен для перевозки пассажиров на дальние и средние расстояния, купейный билет обеспечивает больший комфорт и приватность, спальный билет позволяет пассажиру отдохнуть во время ночной перевозки, бизнес-класс обеспечивает максимальный комфорт и сервис для пассажиров. Условия использования каждого вида билета могут отличаться, например, наличие места, возможность возврата билета и т.д.',
        difficulty: 'easy'
      },
      {
        id: 3,
        text: 'Какие типы локомотивов существуют и какие задачи они выполняют?',
        correct_answer: 'Существует множество типов локомотивов, включая электрические, дизельные, паровые и т.д. Каждый тип локомотива имеет свои преимущества и недостатки и используется в зависимости от целей перевозки. Электрические локомотивы обеспечивают экономичность и экологичность перевозки, дизельные локомотивы могут работать на больших расстояниях без подзарядки, паровые локомотивы имеют большую мощность и тяговую силу. Каждый тип локомотива используется для перевозки определенных видов поездов и грузов.',
        difficulty: 'medium'
      },
      {
        id: 4,
        text: 'Какие виды грузовых вагонов бывают и какие грузы они перевозят?',
        correct_answer: 'Грузовые вагоны могут быть различных типов, например, платформы, цистерны, хопперы, крытые и т.д. Каждый тип вагона предназначен для определенного вида груза и имеет свои особенности. Платформы используются для перевозки больших и тяжелых грузов, цистерны — для перевозки жидких и газообразных грузов, хопперы — для перевозки сыпучих грузов, крытые вагоны — для перевозки грузов, которые нуждаются в защите от погодных условий и т.д.',
        difficulty: 'medium'
      },
      {
        id: 5,
        text: 'Какие технологии используются на железной дороге для обеспечения безопасности и эффективности движения поездов?',
        correct_answer: 'На железной дороге используются различные технологии, такие как системы автоматического управления движением поездов, системы безопасности, системы контроля скорости и т.д. Все эти технологии позволяют обеспечить безопасность и эффективность движения поездов. Например, системы автоматического управления движением поездов позволяют контролировать скорость и расстояние между поездами, системы безопасности обеспечивают защиту пассажиров и грузов от возможных аварий, системы контроля скорости позволяют снизить вероятность возникновения аварийных ситуаций.',
        difficulty: 'medium'
      },
      {
        id: 6,
        text: 'Какие особенности у международных поездов и какие условия перевозки?',
        correct_answer: 'Международные поезда имеют свои особенности, такие как необходимость прохождения границы, использование различных систем сигнализации и безопасности в разных странах, а также возможность пересадки на другие поезда в разных городах и странах. Условия перевозки международных поездов могут отличаться от условий перевозки внутри страны, например, необходимость получения специальных документов для пересечения границы, ограничения на перевозку определенных видов грузов и т.д.',
        difficulty: 'hard'
      },
      {
        id: 7,
        text: 'Какие технологии используются для обслуживания железнодорожных путей и как они влияют на безопасность и эффективность движения поездов?',
        correct_answer: 'Для обслуживания железнодорожных путей используются различные технологии, такие как системы контроля состояния путей, системы обнаружения дефектов, системы ремонта и т.д. Все эти технологии позволяют обеспечить безопасность и эффективность движения поездов. Например, системы контроля состояния путей позволяют своевременно выявлять и устранять дефекты, системы обнаружения дефектов позволяют предотвращать возможные аварийные ситуации, системы ремонта позволяют быстро восстанавливать работоспособность путей после аварий.',
        difficulty: 'hard'
      },
      {
        id: 8,
        text: 'Какие виды багажа можно брать с собой в поезд и какие правила перевозки существуют?',
        correct_answer: 'В поезде можно брать различные виды багажа, такие как сумки, чемоданы, рюкзаки и т.д. Однако есть ограничения по весу и размеру багажа, а также запрет на перевозку опасных и запрещенных к перевозке вещей. Правила перевозки багажа могут отличаться в зависимости от вида билета и типа поезда, например, при наличии специального билета можно перевозить большой объем багажа, а при перевозке грузовых поездов действуют особые правила перевозки грузов.',
        difficulty: 'hard'
      }
    ]
  }
  let DIFFICULTY_LIST = [];
  const defineAvailableDifficulties = () => {
    DIFFICULTY_LIST = [];
    QUESTION_LIST.question_list.forEach(question => {
      if (!DIFFICULTY_LIST.includes(question.difficulty) && !passedQuestionsIds.includes(question.id)) DIFFICULTY_LIST.push(question.difficulty);
    })
    console.log(DIFFICULTY_LIST);
  }
  let CURRENT_DIFFICULTY = 'easy';
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
      question = 'Вопросы кончились, игра закончена!'
      answer = '';
      return;
    }
    const writeQuestion = () => {
      answer = '';
      randomQuestionId = Math.floor(Math.random() * (QUESTION_LIST_LENGTH));
      while (passedQuestionsIds.includes(randomQuestionId) || CURRENT_DIFFICULTY !== QUESTION_LIST.question_list[randomQuestionId].difficulty) {
        randomQuestionId = Math.floor(Math.random() * (QUESTION_LIST_LENGTH));
      }
      console.log('ID вопроса:', randomQuestionId);
      passedQuestionsIds.push(randomQuestionId);
      question = QUESTION_LIST.question_list[randomQuestionId].text;
      
      if (QUESTION_LIST.question_list[randomQuestionId].image) {
        questionImage = QUESTION_LIST.question_list[randomQuestionId].image;
      } else { questionImage = undefined }
      console.log('CURRENT_ROUND: ', CURRENT_ROUND);
      console.log('CURRENT_ROUND_QUESTION: ', CURRENT_ROUND_QUESTION);
      console.log('CURRENT_DIFFICULTY: ', CURRENT_DIFFICULTY);
      console.log('DIFFICULTY_LIST:', DIFFICULTY_LIST);
      console.log('passedQuestionsIds', passedQuestionsIds);
    }
    if (CURRENT_ROUND_QUESTION <= COMMAND_NUM) {
      writeQuestion();
    }
    if (CURRENT_ROUND_QUESTION > COMMAND_NUM) {
      CURRENT_ROUND++;
      CURRENT_ROUND_QUESTION = 1;
      defineAvailableDifficulties();
      CURRENT_DIFFICULTY = DIFFICULTY_LIST[Math.floor(Math.random() * DIFFICULTY_LIST.length)];
      writeQuestion();
    }
  }

  const prev = () => {
    // CURRENT_ROUND_QUESTION--;
    answer = '';

    const writeQuestion = LAST_QUESTION_ID => {
      const CURRENT_QUESTION = QUESTION_LIST.question_list.find(question => question.id === LAST_QUESTION_ID);
      console.log(LAST_QUESTION_ID);
      question = CURRENT_QUESTION.text;
      randomQuestionId = LAST_QUESTION_ID;
      if (CURRENT_QUESTION.image) {
        questionImage = CURRENT_QUESTION.image;
      } else { questionImage = undefined }
      console.log('CURRENT_ROUND: ', CURRENT_ROUND);
      console.log('CURRENT_ROUND_QUESTION: ', CURRENT_ROUND_QUESTION);
      console.log('CURRENT_DIFFICULTY: ', CURRENT_DIFFICULTY);
      console.log('DIFFICULTY_LIST:', DIFFICULTY_LIST);
      console.log('passedQuestionsIds', passedQuestionsIds);
    }

    if (CURRENT_ROUND_QUESTION <= COMMAND_NUM && CURRENT_ROUND_QUESTION !== 1) {
      CURRENT_ROUND_QUESTION--;
      passedQuestionsIds.pop();
      LAST_QUESTION_ID = passedQuestionsIds[passedQuestionsIds.length-1];
      console.log('LAST_QUESTION_ID: ', LAST_QUESTION_ID);
      writeQuestion(LAST_QUESTION_ID);
    } else if (CURRENT_ROUND_QUESTION === 1) {
      CURRENT_ROUND--;
      CURRENT_ROUND_QUESTION = 3;
      passedQuestionsIds.pop();
      LAST_QUESTION_ID = passedQuestionsIds[passedQuestionsIds.length-1];
      console.log('LAST_QUESTION_ID: ', LAST_QUESTION_ID);
      const LAST_QUESTION_DIFFICULTY = QUESTION_LIST.question_list.find(question => question.id === LAST_QUESTION_ID).difficulty

      CURRENT_DIFFICULTY = LAST_QUESTION_DIFFICULTY;
      writeQuestion(LAST_QUESTION_ID);
    }

    if (CURRENT_ROUND_QUESTION === 3) {
      LAST_QUESTION_ID = passedQuestionsIds[passedQuestionsIds.length-1];
      const LAST_QUESTION_DIFFICULTY = QUESTION_LIST.question_list.find(question => question.id === LAST_QUESTION_ID).difficulty
      // Если в списке доступных сложностей нет сложности предыдущего вопроса, то добавим её туда
      if (!DIFFICULTY_LIST.includes(LAST_QUESTION_DIFFICULTY)) {
        DIFFICULTY_LIST.push(LAST_QUESTION_DIFFICULTY);
      }
      CURRENT_DIFFICULTY = LAST_QUESTION_DIFFICULTY;
    }

  }

  const writeAnswer = () => {
    answer = QUESTION_LIST.question_list[randomQuestionId].correct_answer;
  }
  
</script>

<div class="tablet">
  <div class="tablet__control">
    <button on:click={prev}>Предыдущий вопрос</button>
    <button on:click={writeAnswer}>Ответ</button>
    <button on:click={next}>Следующий вопрос</button>
  </div>
  <div class="tablet__element tablet__element_question">
    <div class="tablet__text">{question}</div>
    {#if questionImage}
      <a href="{questionImage}" target="_blank"><img src="{questionImage}" alt="" class="tablet__image"></a>
    {/if}
  </div>
  <div class="tablet__element tablet__element_answer">
    <div class="tablet__text">Правильный ответ:</div>
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
  .tablet__element_question, .tablet__element_answer {
    font-size: 25px;
  }
  .tablet__text {
    margin-bottom: 10px;
  }
  .tablet__image {
    width: 100%;
  }
</style>
