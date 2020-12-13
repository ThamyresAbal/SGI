<template>
  <div class="login-page-container">
    <div class="image-area">
      <img src="../assets/images/login-illustration.jpg" />
    </div>

    <div class="form-area">
      <form class="form">
        <img
          class="user-photo"
          src="../assets/images/user-no-image.png"
          alt="Usuário"
        >

        <div class="form-field">
          <div class="form-field__label">
            <label for="login-user">
              E-mail
            </label>
          </div>

          <div class="form-field__input">
            <input
              autocomplete="username"
              type="email"
              id="login-user"
              placeholder="Digite o seu e-mail"
            />
          </div>
        </div>

        <div class="form-field">
          <div class="form-field__label">
            <label for="password">
              Senha
            </label>
          </div>

          <div class="form-field__input">
            <input
              autocomplete="new-password"
              type="password"
              id="password"
              placeholder="Digite a sua senha"
            />
          </div>
          
          <div class="form__links">
            <router-link to="/cadastro">
              Novo por aqui? Cadastre-se
            </router-link>

            <router-link to="/login">
              Esqueceu a seu senha? Clique aqui
            </router-link>
          </div>
        </div>

        <div class="form-button">
          <router-link
            to="/catalogs"
            class="button button--primary"
          >
            Entrar
          </router-link>
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
  .login-page-container {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .image-area, .form-area {
    height: 70%;
    width: 490px;
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
    background: var(--primary-color);
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
    font-family: var(--monospace-font);
    color: #fff;
    margin-bottom: 4px;
    font-size: 13px;
    text-transform: uppercase;
    display: block;
    text-align: left;
    width: max-content;
    font-weight: 600;
  }

  .form-field__input input {
    font-family: var(--default-font);
    font-size: 14px;
    width: 100%;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid white;
  }

  .form-field__input input:focus {
    outline: none;
    border: 1px solid rgb(238, 255, 0);
  }

  .form-button {
    display: flex;
    justify-content: center;
  }

  .user-photo {
    max-width: 100px;
    margin: 0 auto;
    border-radius: 50%;
  }

  .form__links {
    margin-top: 24px;
  }

  .form__links a {
    margin: 0px auto 8px auto;
    display: block;
    color: #fff;
    text-decoration: none;
    width: max-content;
    font-size: 13px;
    text-align: center;
    cursor: pointer;
  }

  .form__links a:last-child {
    margin-bottom: 0px;
  }

  .form__links a:hover {
    text-decoration: underline;
  }
</style>