<template>
  <div>
    <header class="top-navegation-bar justify-elements-in-screen">
      <div
        class="top-navegation-bar__nav justify-elements-in-screen__container"
      >
        <NuxtLink to="/" class="top-navegation-bar__logo">
          <NuxtImg
            width="150"
            height="44"
            src="/images/logo-solvedrubik.png"
            alt="logo-solvedrubik"
          />
        </NuxtLink>
        <div
          class="top-navegation-bar__menus-container"
          :class="{ 'top-navegation-bar__menus-container--show': showMenubull }"
        >
          <div
            class="top-navegation-bar__menu-separator top-navegation-bar__menu-separator--uno"
          >
            <!-- <MainMenu /> -->
          </div>
          <div
            class="top-navegation-bar__menu-separator top-navegation-bar__menu-separator--dos"
          >
            <ButtonTheme/>
          </div>
          <!-- <Teleport v-if="showMenubull" to="body">
            <div @click="showMenu" class="top-navegation-bar__panel-hidden"></div>
          </Teleport> -->
        </div>
        <div class="top-navegation-bar__button-container">
          <!-- <button aria-label="Mostrar menú" @click="showMenu" class="top-navegation-bar__button"
            id="top-navegation-bar__button"><font-awesome-icon icon="fa-solid fa-bars" /></button> -->
        </div>
      </div>
    </header>
  </div>
</template>

<script setup lang="ts">
const showMenubull = ref(false);
const showMenu = () => (showMenubull.value = !showMenubull.value);
</script>

<style lang="scss">
@media screen and (min-width: 851px) {
  .top-navegation-bar {
    position: sticky;
    top: 0;
    z-index: 3;

    &__logo {
      cursor: pointer;
    }

    &__nav {
      display: flex;
      padding: 10px;
      padding-right: 2rem;
      padding-left: 2rem;
    }

    &__menus-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.5rem;
      width: 100%;
    }

    &__menu-separator {
      display: flex;
      gap: 1rem;
    }

    &__button-container {
      display: none;
    }

    &__button {
      border: none;
      background-color: transparent;
      font-size: xx-large;
      cursor: pointer;
    }
  }
}

@media screen and (max-width: 850px) {
  .top-navegation-bar {
    position: sticky;
    top: 0;
    z-index: 3;

    &__nav {
      display: flex;
      padding: 10px;
      padding-right: 2rem;
      padding-left: 2rem;
      justify-content: space-between;
      align-items: center;
    }

    &__menus-container {
      display: grid;
      grid-auto-rows: max-content;
      position: fixed;
      top: 60px;
      bottom: 0;
      right: 0;
      width: 80%;
      max-width: 400px;
      transform: translateX(100%);
      transition: transform 0.5s;
      z-index: 1;

      &--show {
        transform: unset;
      }
    }

    &__panel-hidden {
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      z-index: 2;
    }

    &__logo {
      cursor: pointer;

      & > img {
        width: 150px;
      }
    }

    &__button-container {
      display: block;
    }

    &__button {
      border: none;
      background-color: transparent;
      font-size: x-large;
      //cursor: pointer;
    }

    &__menu-separator {
      margin-top: 0.5rem;

      &--uno {
        order: 2;
      }

      &--dos {
        order: 1;
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>
