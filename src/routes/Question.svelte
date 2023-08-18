<script>
  let question = 'Игра скоро начнётся!';
  let answer = ''
  let questionImage = undefined;
  const QUESTION_LIST = {
    question_list: [{
        id: 0,
        text: 'Какое количество пикетов содержится в одном километре жд-линии?',
        correct_answer: '9',
        difficulty: 'medium'
      },
{
        id: 1,
        text: 'Чему равна ширина «стефановской» колеи? ',
        correct_answer: '1435 мм',
        difficulty: 'medium'
      },
{
        id: 2,
        text: 'Как называется самый длинный железнодорожный тоннель в России?',
        correct_answer: 'Северомуйский тоннель',
        difficulty: 'medium'
      },
{
        id: 3,
        text: 'Назовите «столицу» БАМа',
        correct_answer: 'город Тында',
        difficulty: 'medium'
      },
{
        id: 4,
        text: 'Сколько разновидностей белого огня применяется в сигнализации на железной дороге? ',
        correct_answer: 'три: лунно-белый, молочно-белый, прозрачно-белый',
        difficulty: 'medium'
      },
{
        id: 5,
        text: 'Как называется данное устройство?',
        correct_answer: 'локомотивный светофор, АЛС',
        difficulty: 'medium',
        image: 'https://storage.yandexcloud.net/rzd-universitet/20230818_0410.png'
      },
{
        id: 6,
        text: 'Каково предназначение путевой машины, изображенной на фото? ',
        correct_answer: 'кусторез, для срезания поросли вдоль железнодорожного пути',
        difficulty: 'medium',
        image: 'https://storage.yandexcloud.net/rzd-universitet/20230818_0411.png'
      },
{
        id: 7,
        text: 'Что изображено на фотографии?',
        correct_answer: 'сигнальная железнодорожная петарда',
        difficulty: 'medium',
        image: 'https://storage.yandexcloud.net/rzd-universitet/20230818_0412.jpg'
      },
{
        id: 8,
        text: 'Как называется устройство, изображенное на фотографии?',
        correct_answer: 'предохранительное устройство, сбрасывающий остряк',
        difficulty: 'medium',
        image: 'https://storage.yandexcloud.net/rzd-universitet/20230818_0413.jpg'
      },
{
        id: 9,
        text: 'Как называется элемент промежуточного скрепления необходимый для крепления рельсов к деревянным шпалам?',
        correct_answer: 'костыль',
        difficulty: 'easy'
      },
{
        id: 10,
        text: 'На какие элементы разделяется межстанционный перегон проходными светофорами? ',
        correct_answer: 'на блок-участки',
        difficulty: 'easy'
      },
{
        id: 11,
        text: 'Сколько поездов может находится между станциями на однопутном перегоне, оборудованным полуавтоматической блокировкой? ',
        correct_answer: 'один',
        difficulty: 'easy'
      },
{
        id: 12,
        text: 'Как называется электрический аппарат, размещаемый на крыше электроподвижного состава, и предназначенный для токосъёма? ',
        correct_answer: 'токоприёмник, пантограф',
        difficulty: 'easy',
        image: 'https://storage.yandexcloud.net/rzd-universitet/20230818_0414.jpg'
      },
{
        id: 13,
        text: 'Сколько систем электрификации применяется на Российских железных дорогах?',
        correct_answer: 'две',
        difficulty: 'easy'
      },
{
        id: 14,
        text: 'Как называется время, в течение которого прекращается движение поездов по перегону или путям железнодорожной станции для производства ремонтно-строительных работ? ',
        correct_answer: 'окно',
        difficulty: 'easy'
      },
{
        id: 15,
        text: 'Как называется путевая машина, изображенная на фото?',
        correct_answer: 'струг, снегоочиститель',
        difficulty: 'easy',
        image: 'https://storage.yandexcloud.net/rzd-universitet/20230818_0415.jpg'
      },
{
        id: 16,
        text: 'Каково предназначение путевой машины, изображенной на фото?',
        correct_answer: 'для восстановления формы головки рельсов, для шлифовки рельсов',
        difficulty: 'easy',
        image: 'https://storage.yandexcloud.net/rzd-universitet/20230818_0416.jpg'
      },
{
        id: 17,
        text: 'Как называется вагон, предназначенный для сплошного ультразвукового контроля рельс под нагрузкой, уложенных в путь, и выявления в них наружных и скрытых дефектов? ',
        correct_answer: 'вагон-дефектоскоп',
        difficulty: 'easy'
      },
{
        id: 18,
        text: 'Как называется невысокий земляной вал вдоль верхнего края выемки земляного полотна? ',
        correct_answer: 'банкет',
        difficulty: 'hard'
      },
{
        id: 19,
        text: 'В какой области России применялась «капская» колея? ',
        correct_answer: 'Сахалинская область',
        difficulty: 'hard'
      },
{
        id: 20,
        text: 'Как называется путейская однорельсовая тележка для грузов? ',
        correct_answer: 'модерон',
        difficulty: 'hard',
        image: 'https://storage.yandexcloud.net/rzd-universitet/20230818_0418.jpg'
      },
{
        id: 21,
        text: 'Как называется сплетённый проволочный ящик, заполненный камнем, применяемый для укрепления откосов?',
        correct_answer: 'габион',
        difficulty: 'hard',
        image: 'https://storage.yandexcloud.net/rzd-universitet/20230818_0421.jpg'
      },
{
        id: 22,
        text: 'Как называется рукоятка для ручного перевода централизованных стрелочных переводов? ',
        correct_answer: 'курбель, курбельная рукоятка',
        difficulty: 'hard',
        image: 'https://storage.yandexcloud.net/rzd-universitet/20230818_0422.png'
      },
{
        id: 23,
        text: 'Как называется съёмная вышка для обслуживания и ремонта контактной сети? ',
        correct_answer: 'лейтер',
        difficulty: 'hard',
        image: 'https://storage.yandexcloud.net/rzd-universitet/20230818_04222.jpg'
      },
{
        id: 24,
        text: 'Как называется такая опора контактной сети? ',
        correct_answer: 'анкерная опора',
        difficulty: 'hard',
        image: 'https://storage.yandexcloud.net/rzd-universitet/20230818_0423.png'
      },
{
        id: 25,
        text: 'Как называют количество шпал, приходящихся на 1 километр железнодорожного пути?',
        correct_answer: 'эпюра шпал',
        difficulty: 'hard'
      },
{
        id: 26,
        text: 'Как называется наибольший затяжной подъем, по значению которого устанавливается норма массы поезда при одиночной тяге и расчетной минимальной равномерной скорости движения?',
        correct_answer: 'руководящий, расчетный',
        difficulty: 'hard'
      }]
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
