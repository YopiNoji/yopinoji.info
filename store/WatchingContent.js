const TOP = 0
const About = 1
const Contact = 2

export const state = () => ({
  content: TOP
})

export const getters = {
  content: (state) => state.content
}

export const mutations = {
  setContentState(state, content) {
    state.content = content
  }
}

export const actions = {
  onTop({ commit }) {
    commit('setContentState', TOP)
  },
  onAbout({ commit }) {
    commit('setContentState', About)
  },
  onContact({ commit }) {
    commit('setContentState', Contact)
  }
}
