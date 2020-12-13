<template>
  <footer class="footer-container">
    <div class="footer-container__col">
      <h1 class="footer__title">
        Lorem Ipsum
      </h1>

      <p>
        Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Dolorum, accusamus in?
        Numquam repellat repudiandae distinctio
        quae id. Voluptates nesciunt eaque provident
        natus, non ipsa et tenetur commodi, dolorum
        at assumenda.
      </p>

      <ul class="footer__circle-buttons">
        <li class="footer__circle-buttons__item">
          <a
            href="http://facebook.com"
            target="_blank"
            class="footer__circle-button"
          >
            <i class="fab fa-facebook-f"></i>
          </a>
        </li>

        <li class="footer__circle-buttons__item">
          <a
            href="http://twitter.com"
            target="_blank"
            class="footer__circle-button"
          >
            <i class="fab fa-twitter"></i>
          </a>
        </li>

        <li class="footer__circle-buttons__item">
          <a
            href="http://instagram.com"
            target="_blank"
            class="footer__circle-button"
          >
            <i class="fab fa-instagram"></i>
          </a>
        </li>
      </ul>
    </div>

    <div class="footer-container__col footer-container__col--is-flex">
      <div class="footer__subcol">
        <h1 class="footer__title">
          Categorias
        </h1>

        <ul class="footer__categorias">
          <li class="footer__categorias__item">
            <a href="#">
              Lorem ipsum
            </a>
          </li>

          <li class="footer__categorias__item">
            <a href="#">
              Dolor sit
            </a>
          </li>

          <li class="footer__categorias__item">
            <a href="#">
              Amet consectetur
            </a>
          </li>

          <li class="footer__categorias__item">
            <a href="#">
              Adipisicing elit
            </a>
          </li>
          
          <li class="footer__categorias__item">
            <a href="#">
              Dolorum
            </a>
          </li>
        </ul>
      </div>

      <div class="footer__subcol">
        <h1 class="footer__title">
          Categorias
        </h1>

        <ul class="footer__categorias">
          <li class="footer__categorias__item">
            <a href="#">
              Lorem ipsum
            </a>
          </li>

          <li class="footer__categorias__item">
            <a href="#">
              Dolor sit
            </a>
          </li>

          <li class="footer__categorias__item">
            <a href="#">
              Amet consectetur
            </a>
          </li>

          <li class="footer__categorias__item">
            <a href="#">
              Adipisicing elit
            </a>
          </li>
          
          <li class="footer__categorias__item">
            <a href="#">
              Dolorum
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="footer-container__col">
      <a href="#" class="footer__button">
        Botão
      </a>
    </div>
  </footer>
</template>

<style scoped>
  .footer-container {
    background: #c0392b;
    padding: 24px;
    display: flex;
  }

  .footer__title {
    font-family: var(--monospace-font);
    color: #eee;
    font-weight: 600;
    font-size: 14px;
    text-transform: uppercase;
    margin-bottom: 12px;
  }

  ul.footer__circle-buttons {
    list-style: none;
    display: flex;
    margin-top: 12px;
  }

  .footer__circle-buttons__item {
    margin-right: 12px;
  }

  .footer__circle-buttons__item:last-child {
    margin-right: 0px;
  }

  .footer__circle-button {
    display: flex;
    text-decoration: none;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    padding: 8px;
    background: #eee;
    border: 1px solid #eee;
    color: var(--primary-color);
    font-size: 14px;
    cursor: pointer;
  }

  .footer-container__col {
    text-align: left;
    padding: 12px;
    flex: 1;
    border-right: 1px solid #ffffff88;
  }

  .footer-container__col--is-flex {
    display: flex;
  }

  .footer-container__col:last-child {
    border-right: none;
  }

  .footer-container__col p {
    font-size: 13px;
    line-height: 24px;
    color: #eee;
  }

  .footer__button {
    display: block;
    text-align: center;
    text-decoration: none;
    border: 1px solid #707070;
    background: #222;
    font-size: 14px;
    color: #fff;
    padding: 4px;
    width: 130px;
    text-transform: uppercase;
    word-spacing: 2px;
    font-weight: 600;
    cursor: pointer;
    margin-left: 80px;
  }

  ul.footer__categorias {
    list-style: none;
    color: #eee;
  }

  .footer__categorias__item {
    margin-bottom: 4px;
    font-size: 13px;
    font-family: var(--default-font);
  }

  .footer__categorias__item a {
    text-decoration: none;
    color: #ddd;
  }

  .footer__categorias__item a:hover {
    text-decoration: underline;
  }

  .footer__subcol {
    flex: 1;
  }

    @media screen and (min-width: 900px) and (max-width: 1200px) {
    .footer-container__col--is-flex {
      flex-direction: column;
      align-items: center;
    }

    .footer__subcol {
      margin-bottom: 12px;
    }

    .footer__subcol:last-child {
      margin-bottom: 0px;
    }

    .footer__title, .footer__categorias__item {
      text-align: center;
    }
  }

  @media screen and (max-width: 900px) {
    .footer-container {
      flex-direction: column;
    }

    .footer-container__col {
      border-right: none;
    }

    .footer__button {
      margin: 0 auto;
    }
  }
</style>

<script>
  export default {
    name: 'Footer',
  }
</script>