<template>
  <div>
    <div class="hpf jeis">
      <div class="hpf__container jeis__container">
        <div class="hpf__form">
          <div class="hpf__background-rotate">
            <AssetsCubeCard />
          </div>
          <NuxtImg v-if="theme.value == 'dark'"
            class="hpf__title"
            alt="Título Solved Rubik"
            src="/images/logo-solvedrubik-hom-page-presentation-dark-640.png"
          />
          <NuxtImg v-else
            class="hpf__title"
            alt="Título Solved Rubik"
            src="/images/logo-solvedrubik-hom-page-presentation-light-640.png"
          />
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
const theme = useColorMode();
</script>

<style lang="scss" scoped>
//hpf (home-page-finder)
.hpf {
  overflow: hidden;
  box-shadow: 2px;

  &__form {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: space-evenly;
    gap: 20px;
    padding: 1rem;
    align-items: center;
    overflow: hidden;
  }

  &__title {
    width: 640px;
    z-index: 1;
  }

  &__container {
    overflow: hidden;
  }

  &__background-rotate {
    width: 200px;
    height: 200px;
    position: absolute;
    top: 10%;
    left: 50%;
    animation: infiniterotation 60s infinite cubic-bezier(0.45, 0.43, 1, 1);

    @keyframes infiniterotation {
      from {
        transform: rotate(0);
      }

      to {
        transform: rotate(360deg);
      }
    }
  }
}
</style>
