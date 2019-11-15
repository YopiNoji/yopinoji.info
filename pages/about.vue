<template>
  <div class="main">
    <transition name="content_area">
      <About />
    </transition>
  </div>
</template>

<script>
import About from '~/components/About.vue'

export default {
  layout: 'SideMenu',
  components: {
    About
  }
}
</script>

<style>
.main {
  margin: 0 auto;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.links {
  padding-top: 15px;
}

.content_area-enter-active,
.content_area-leave-active,
.content_area-move {
  transition: opacity 1s, transform 1s;
}
.content_area-leave-active {
  position: absolute;
}
.content_area-enter {
  opacity: 0;
  transform: translateY(-20px);
}
.content_area-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
