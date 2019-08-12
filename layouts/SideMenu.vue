<template>
  <div>
    <nav class="navigation">
      <ul class="navigation-ul">
        <li class="navigation-li">
          <button
            class="navigation-button"
            @click="$store.dispatch('WatchingContent/onTop')"
          >
            TOP
          </button>
        </li>
        <li class="navigation-li">
          <button
            class="navigation-button"
            @click="$store.dispatch('WatchingContent/onAbout')"
          >
            About
          </button>
        </li>
        <li class="navigation-li">
          <button
            class="navigation-button"
            @click="$store.dispatch('WatchingContent/onContact')"
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
    <nuxt />
    <div class="copyright">
      <span>© 2019 YOPINOJI</span>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Cinzel&display=swap');

.navigation {
  z-index: 100;
  position: fixed;
  right: -40px;
  top: 50%;
  font-size: 0.75rem;
  -webkit-transform: translateY(-50%) translateX(-50%);
  transform: translateY(-50%) translateX(-50%);
}
.navigation-ul {
  margin: 0 auto;
}
.navigation-li {
  margin: 0 auto;
  text-align: center;
  -webkit-transform: rotate(-90deg);
  transform: rotate(-90deg);
  padding: 20px 0px;
  list-style: none;
  transition: 0.5s ease-in-out;
}
.navigation-li:hover {
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);
}
.navigation-button {
  border: none;
  opacity: 0.9;
  background: rgba(0, 0, 0, 0);
}

.copyright {
  position: fixed;
  left: 0;
  top: 50%;
  transform: rotate(90deg);
  font-size: 10px;
  height: 10px;
}
</style>
