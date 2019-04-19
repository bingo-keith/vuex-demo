const state = { // 要设置的全局访问的state对象
  showFooter: true,
  changableNum: 0,
};

const getters = { // 实时监听state值的变化（最新状态）
  isShow(state) { // 承载变化的changableNum的值
    return state.showFooter;
  },
  getChangedNum() { // 承载变化的changable的值
    return state.changableNum;
  }
};

const mutations = {
  show(state) { // 自定义改变state初始值的方法，这里面的参数除了state之外还可以再传额外的参数（变量或对象）
    state.showFooter = true;
  },
  hide(state) {
    state.showFooter = false;
  },
  newNum(state, sum) { // 额外传参sum
    state.changableNum += sum;
  }
};

const actions = {
  hideFooter(context){
    return context.commit('hide');
  },
  showFooter(context){
    return context.commit('show');
  },
  getNewNum(context, num){
    return context.commit('newNum', num);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
