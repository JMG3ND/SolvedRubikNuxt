<template>
  <div>
    <header class="tnb jeis">
      <div class="nav jeis__container">
        <NuxtLink to="/" class="logo">
          <slot name="logo" />
        </NuxtLink>
        <div
          class="menus-container"
          :class="{ 'menus-container--show': showMenubull }"
        >
          <div class="menu-separator menu-separator--uno">
            <!-- <MainMenu /> -->
          </div>
          <div class="menu-separator menu-separator--dos">
            <slot name="button-theme"/>
          </div>
          <!-- <Teleport v-if="showMenubull" to="body">
            <div @click="showMenu" class="tnb__panel-hidden"></div>
          </Teleport> -->
        </div>
        <div class="button-container">
          <!-- <button aria-label="Mostrar menú" @click="showMenu" class="tnb__button"
            id="tnb__button"><font-awesome-icon icon="fa-solid fa-bars" /></button> -->
        </div>
      </div>
    </header>
  </div>
</template>

<script setup lang="ts">
const showMenubull = ref(false);
const showMenu = () => (showMenubull.value = !showMenubull.value);
</script>

<style lang="scss" scoped>
//top-navegation-bar tnb
.tnb {
  position: sticky;
  top: 0;
  z-index: 3;

  .logo {
    cursor: pointer;
  }

  .nav {
    display: flex;
    padding: 10px;
    padding-right: 2rem;
    padding-left: 2rem;
  }

  .menus-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    width: 100%;
  }

  .menu-separator {
    display: flex;
    gap: 1rem;
  }

  .button-container {
    display: none;
  }

  .button {
    border: none;
    background-color: transparent;
    font-size: xx-large;
    cursor: pointer;
  }
}

@media screen and (max-width: 850px) {
  .tnb {
    position: sticky;
    top: 0;
    z-index: 3;

    .nav {
      display: flex;
      padding: 10px;
      padding-right: 2rem;
      padding-left: 2rem;
      justify-content: space-between;
      align-items: center;
    }

    .menus-container {
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

    .panel-hidden {
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      z-index: 2;
    }

    .logo {
      cursor: pointer;

      & > img {
        width: 150px;
      }
    }

    .button-container {
      display: block;
    }

    .button {
      border: none;
      background-color: transparent;
      font-size: x-large;
      //cursor: pointer;
    }

    .menu-separator {
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
