const state = {
  collects: [1,2,3], // 初始化一个collects数组
}

const getters = {
  renderCollects(state) { // 承载变化的collects
    return state.collects;
  }
}

const mutations = {
  pushCollects(state, items) {
    state.collects.push(items);
  }
}

const actions = {
  invokePushItems(context, item) { // 触发mu
    context.commit('pushCollects', item);
  }
}

export default {
  namespaced: true, // 用于在全局引用此文件里的方法时标识这一个的文件名
  state,
  getters,
  mutations,
  actions,
}
