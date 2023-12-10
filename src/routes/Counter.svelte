<script>

  const STEPS = [
    100, 200, 400, 800, 1600, 3200, 6400, 12800, 25600, 51200, 102400,
  ];

  let count = 0;
  let imagePath = `https://storage.yandexcloud.net/rzd-universitet/${count}.png`;
  let coins = [];
  let coinID = 0;
  let bankamount = 0;
  const increment = () => {
    if (count == 0) {
      count += STEPS[0];
      imagePath = `https://storage.yandexcloud.net/rzd-universitet/${count}.png`;
      coins.push({"id": coinID});
      coinID++;
    } else {
      console.log(count, STEPS[STEPS.findIndex(() => count)]);
      count += STEPS[STEPS.indexOf(count)];
      imagePath = `https://storage.yandexcloud.net/rzd-universitet/${count}.png`;
      coins.push({"id": coinID});
      coinID++;
    }
    console.log(coins);
  };

  const bankincrement = (amount) => {
    bankamount += count;
    count = 0;
    imagePath = `https://storage.yandexcloud.net/rzd-universitet/${count}.png`;
    coins = [];
    coinID = 0;
  };

  const reset = () => {
    count = 0;
    imagePath = `https://storage.yandexcloud.net/rzd-universitet/${count}.png`;
  }
</script>

<div class="tablet">
  <!-- <div class="tablet__coins" style="--image: url({imagePath});"></div> -->

  <div class="tablet__element amount">
    <div class="tablet__elemtitle">
      <div class="tablet__blockname">Текущий счёт:</div>
      <div class="amount__button">
        {count}
      </div>
    </div>
    <!--     <ul class="amount__coins">
      {#each coins as coin (coin.id)}
        <li class="amount__coin">монетка</li>
      {/each}
    </ul> -->
    <div class="amount__control">
      <div class="amount__reset reset">
        <button class="reset__button" on:click={reset}>
        </button>
      </div>
      <div class="amount__increment increment">
        <button class="increment__button" on:click={increment}>
        </button>
      </div>

    </div>

  </div>

  <div class="tablet__element bank">
    <div class="tablet__elemtitle">
      <div class="tablet__blockname">Кошелёк</div>
    </div>
    <button class="bank__wallet" on:click={bankincrement}>
      <div class="bank__amount">
        {bankamount}
      </div>
    </button>

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
  .tablet__blockname {
    font-weight: 600;
  }
  .tablet__coins {
    width: 100%;
    height: 345px;
    background-image: var(--image);
    background-size: contain;
  }
  .tablet__element {
    width: 100%;
    margin: 10px 0;
    padding: 20px 10px;
    border-radius: 10px;
    background-color: #f6f6f6;
  }
  .tablet__elemtitle {
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* padding: 5%; */
  }
  .amount__button {
    background-color: transparent;
    color: #92c67c;
    text-align: right;
    padding: 0;
    min-width: 30px;
    min-height: 30px;
    font-weight: 600;
    font-size: 30px;
  }

  .amount__control {
    display: flex;
    justify-content: end;
  }

  .reset, .increment {
    display: flex;
    justify-content: end;
  }

  .reset__button, .increment__button {
    background-color: red;
    width: 30px;
    height: 30px;
    padding: 0;
    border-radius: 50%;
  }

  .reset__button {
    background-color: red;
    margin-right: 5px;
  }
  .increment__button {
    background-color: #92C67C;
  }
  .bank__wallet {
    /* background: url('../assets/wallet.png'); */
    background-size: contain;
    width: 100%;
    /* height: 50px; */
    position: relative;
  }
  .bank__amount {
    font-size: 40px;
    color: #fff;
    font-weight: 600;
    /* position: absolute; */
    /* top: 83px; */
    /* left: 33px; */
    text-align: center;
    width: 113px;
  }
</style>
