<template>
  <div class="home-page-container">
    <div class="image-area">
      <img src="../assets/images/login-illustration.jpg" />
    </div>

    <div class="form-area">
      <form class="form">
        <div class="form-field">
            
          <div class="form-field__label">
            <label for="login-user">
              Nome
            </label>
          </div>

          <div class="form-field__input">
            <input
              type="text"
              id="login-user"
              placeholder="Digite o seu nome"
            />
          </div>
        </div>

        <div class="form-field">
          <div class="form-field__label">
            <label for="cpf">
              CPF
            </label>
          </div>

          <div class="form-field__input">
            <input
              type="text"
              id="cpf"
              placeholder="Digite o seu CPF"
            />
          </div>
        </div>

        <div class="form-field">
          <div class="form-field__label">
            <label for="email">
              E-mail
            </label>
          </div>

          <div class="form-field__input">
            <input
              type="email"
              id="email"
              placeholder="Digite o seu E-mail"
            />
          </div>
        </div>

        <div class="form-field">
          <div class="form-field__label">
            <label for="login-user">
              Senha
            </label>
          </div>

          <div class="form-field__input">
            <input
              type="password"
              id="login-user"
              placeholder="Digite a sua senha"
            />
          </div>
        </div>

        <div class="form-button">
          <button>
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Login',
}
</script>

<style scoped>
  .home-page-container {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .image-area, .form-area {
    height: 70%;
    width: 40%;
  }

  .image-area img {
    width: 100%;
    height: 100%;
  }

  .image-area {
    background: #000;
  }

  @media screen and (max-width: 1000px) {
    .image-area {
      display: none;
    }

    .form-area {
      width: 400px;
    }
  }

  @media screen and (max-width: 400px) {
    .form-area {
      height: 100%;
    }
  }

  .form-area {
    background: #a00;
  }

  .form {
    height: 100%;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .form-field {
    width: 100%;
  }

  .form-field__label label {
    color: #fff;
    margin-bottom: 4px;
    display: block;
    text-align: left;
    width: max-content;
    font-weight: 600;
  }

  .form-field__input input {
    width: 100%;
    padding: 12px;
    border-radius: 4px;
    border: none;
  }

  .form-field__input input:focus {
    outline: none;
    border: 1px solid rgb(238, 255, 0);
  }

  .form-button button {
    padding: 12px;
    border: none;
    background: #fff;
    color: #a00;
    font-weight: bold;
    width: 130px;
    font-size: 14px;
    cursor: pointer;
  }

  .form-button button:focus {
    outline: none;
    border: 1px solid rgb(238, 255, 0);
  }
</style>
