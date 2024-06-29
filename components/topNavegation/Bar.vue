<template>
  <div>
    <header class="tnb jeis">
      <div class="nav jeis__container">
        <NuxtLink to="/" class="logo">
          <slot name="logo" />
        </NuxtLink>
        <div class="menus-container">
          <div class="menu-separator menu-separator--uno">
            <!-- <MainMenu /> -->
          </div>
          <slot name="button-theme" />
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
  border-bottom: 1px solid #94a3b8;
  padding: 0.5rem 0;

  .logo {
    cursor: pointer;
    width: 250px;
  }

  .nav {
    display: flex;
    padding: 5px;
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

    .menus-separator {
      display: none;
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
