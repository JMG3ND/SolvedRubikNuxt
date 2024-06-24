<template>
  <div>
    <header class="tnb jeis border-b border-slate-400">
      <div class="nav jeis__container">
        <NuxtLink to="/" class="logo">
          <slot name="logo" />
        </NuxtLink>
        <div class="menus-container">
          <div class="menu-separator menu-separator--uno">
            <!-- <MainMenu /> -->
          </div>
          <div class="menu-separator menu-separator--dos">
            <slot name="button-theme" />
          </div>
        </div>
        <div class="button-container">
          <UButton
            :icon="'i-heroicons-bars-3-solid'"
            color="gray"
            variant="ghost"
            aria-label="Menu"
            @click="showMenu"
          />
        </div>
      </div>
    </header>
    <USlideover class="slide-over" v-model="showMenubull">
      <UButton
        class="button"
        color="gray"
        variant="ghost"
        size="lg"
        icon="i-heroicons-x-mark-20-solid"
        @click="showMenubull = false"
      />
      <div class="menus-container--slide-over">
        <div class="menu-separator menu-separator--dos">
          <slot name="button-theme" />
        </div>
        <div class="menu-separator menu-separator--uno">
          <!-- <MainMenu /> -->
        </div>
      </div>
    </USlideover>
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
    font-size: xx-large;
    cursor: pointer;
  }
}

.slide-over {
  .button {
    position: absolute;
    right: 5px;
    top: 5px;
  }
}

@media screen and (max-width: 640px) {
  .tnb {
    .nav {
      justify-content: space-between;
      align-items: center;
    }

    .menus-container {
      display: none;
    }

    .logo {
      & > img {
        width: 150px;
      }
    }

    .button-container {
      display: block;
    }

    .button {
      font-size: x-large;
    }
  }
}
</style>
