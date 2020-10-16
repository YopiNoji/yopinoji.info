<template>
  <div>
    <nav class="navigation">
      <ul class="navigation-ul">
        <li class="navigation-li">
          <nuxt-link to="/">TOP</nuxt-link>
        </li>
        <li class="navigation-li">
          <nuxt-link to="/about">ABOUT</nuxt-link>
        </li>
        <!-- <li class="navigation-li">
          <nuxt-link to="/contact">CONTACT</nuxt-link>
        </li> -->
      </ul>
    </nav>
    <nuxt />
    <div class="copyright">
      <span>© 2019 YOPINOJI</span>
    </div>
    <div class="link">
      <a class="icon" href="https://github.com/YopiNoji" target="_blank">
        <fa :icon="faGithub" />
      </a>
      <a class="icon" href="https://twitter.com/YopiNoji" target="_blank">
        <fa :icon="faTwitter" />
      </a>
    </div>
  </div>
</template>

<script>
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
export default {
  computed: {
    faGithub() {
      return faGithub
    },
    faTwitter() {
      return faTwitter
    }
  }
}
</script>

<style>
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
  padding: 25px 0px;
  list-style: none;
  transition: 0.35s ease-out;
}
.navigation-li:hover {
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);
}
.navigation-li a {
  text-decoration: none;
  color: #000;
}

.copyright {
  position: fixed;
  left: 0;
  top: 50%;
  transform: rotate(90deg);
  font-size: 10px;
  height: 10px;
}

.link {
  display: flex;
  font-size: 20px;
  position: absolute;
  bottom: 2%;
  width: 100%;
  margin: auto;
}
.icon {
  display: block;
  margin: auto;
  padding: 10px;
}
.icon svg {
  color: black;
}
</style>
