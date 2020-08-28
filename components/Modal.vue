<template>
  <transition name="modal">
    <div @click="$emit('close')" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header"></slot>
          </div>
          <div class="modal-body">
            <slot name="body"></slot>
          </div>
          <button @click="$emit('close')" class="modal-button">
            OK
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Modal'
}
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: all 0.5s ease-in-out;
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.modal-container {
  width: 75%;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.5s ease-in-out;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header {
  line-height: 2rem;
  margin: 20px auto;
}

.modal-body {
  max-height: 80%;
  max-width: 80%;
  overflow: hidden;
  line-height: 1.5rem;
  margin: 0 auto;
}

.modal-enter-active,
.modal-leave-active {
  will-change: opacity;
  transform: translate(0px, 0px);
  opacity: 1;
  transition: all 1s;
}
.modal-enter,
.modal-leave-to {
  opacity: 0;
}

.modal-button {
  position: relative;
  padding: 1em 1.5em;
  border: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  font-size: 18px;
  margin: 1em 0.8em;
  color: #435a6b;
}
.modal-button::after {
  content: '';
  display: block;
  position: absolute;
  width: 20%;
  height: 20%;
  border: 2px solid;
  transition: all 0.6s ease;
  border-radius: 2px;
  bottom: 0;
  right: 0;
  border-top-color: transparent;
  border-left-color: transparent;
  border-bottom-color: #435a6b;
  border-right-color: #435a6b;
}
.modal-button::before {
  content: '';
  display: block;
  position: absolute;
  width: 20%;
  height: 20%;
  border: 2px solid;
  transition: all 0.6s ease;
  border-radius: 2px;
  top: 0;
  left: 0;
  border-bottom-color: transparent;
  border-right-color: transparent;
  border-top-color: #435a6b;
  border-left-color: #435a6b;
}
.modal-button:hover:after,
.modal-button:hover:before {
  border-bottom-color: #435a6b;
  border-right-color: #435a6b;
  border-top-color: #435a6b;
  border-left-color: #435a6b;
  width: 100%;
  height: 100%;
}
</style>
