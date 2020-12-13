<template>
<div class="payment-page">
  <TopCarousel />

  <div class="payment-page__content">
    <h1 class="payment-title">Formas de pagamento</h1>

    <div class="payment-method">
      <div class="payment-method__item">
        <input
          type="radio"
          name="payment-method"
        />

        <i class="far fa-credit-card"></i>

        <label>Débito</label>
      </div>

      <div class="payment-method__item">
        <input
          type="radio"
          name="payment-method"
        />

        <i class="far fa-credit-card"></i>

        <label>Crédito</label>
      </div>

      <div class="payment-method__item">
        <input
          type="radio"
          name="payment-method"
        />

        <i class="far fa-credit-card"></i>

        <label>Boleto</label>
      </div>
    </div>

    <div class="payment-coupon">
      <label>CUPOM: </label>
      <input
        type="text"
        placeholder="Insira o seu cupom aqui"
      />
    </div>

    <div class="payment-total">
      Valor da compra: R$ 00,00
    </div>

    <div class="payment-ok-card">
      <div class="payment-ok-card__content">
        <p>Lorem ipsum dolor sit amet.</p>
      </div>

      <div class="payment-ok-card__footer">
        <button class="button button--secondary">
          Ok
        </button>
      </div>
    </div>

    <div class="payment-submit">
      <button v-on:click="finalizar()" class="button button--secondary">
        Finalizar
      </button>
    </div>
  </div>
</div>
</template>

<script>
import TopCarousel from '../components/TopCarousel.vue';

export default {
  name: 'Payment',
  components: {
    TopCarousel,
  },
  methods: {
    finalizar(){
      alert('Pedido finalizado');
    }
  }
}
</script>

<style scoped>
.payment-method {
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 40px;
}

.payment-method__item {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
}

.payment-method__item svg {
  font-size: 30px;
  margin: 0px 12px;
  color: var(--primary-color);
}

.payment-method__item label {
  font-family: var(--default-font);
  font-weight: 600;
}

.payment-page__content {
  margin: 0px 100px;
}

h1.payment-title {
  color: var(--primary-color);
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
  padding: 24px;
  background: #f3f3f3;
  margin: 32px 0px;
}

.payment-coupon {
  color: var(--primary-color);
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  padding: 20px;
  background: #f3f3f3;
  margin: 16px 0px;
}

.payment-coupon label {
  margin-right: 8px;
}

.payment-coupon input {
  font-family: var(--default-font);
  width: 28%;
  padding: 4px;
}

.payment-coupon input:focus {
  outline: none;
}

.payment-total {
  color: var(--primary-color);
  text-align: right;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  padding: 20px;
  background: #f3f3f3;
  margin: 16px 0px;
}

.payment-ok-card {
  display: flex;
  position: relative;
  flex-direction: column;
  height: 220px;
  width: 500px;
  background: #f3f3f3;
  text-align: center;
  margin: 60px auto;
  font-weight: 600;
  border-radius: 8px;
  justify-content: center;
}

.payment-ok-card__content {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.payment-ok-card__footer {
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  padding: 16px;
}

.payment-ok-card button {
  margin-left: auto;
}

.payment-submit {
  margin-bottom: 24px;
}

.payment-submit button {
  margin-left: auto;
}

@media screen and (max-width: 800px) {
  h1.payment-title {
    font-size: 18px;
  }

  .payment-method {
    flex-wrap: wrap;
  }

  .payment-method__item {
    flex-shrink: 0;
  }

  .payment-method__item:last-child {
    flex: 1;
  }

  .payment-coupon label {
    font-size: 16px;
  }

  .payment-coupon input {
    width: 100%;
    margin-top: 8px;
  }

  .payment-method {
    flex-wrap: wrap;
  }

  .payment-page__content {
    margin: 0px 32px;
  }

  .payment-method__item {
    margin: 8px 0px;
  }

  .payment-ok-card {
    width: 100%;
    height: 200px;
  }

  .payment-total {
    text-align: center;
    font-size: 16px;
  }

  .payment-submit button {
    margin: 0 auto;
  }
}
</style>