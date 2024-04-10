import { defineStore } from 'pinia'

const useWholeStore = defineStore('whole', {
  persist: {
    key: 'WHOLE',
    storage: localStorage,
    paths: ['wholeData']
  },
  // 定义状态：一个函数，返回一个对象
  state: () => {
    return {
      wholeData: {}
    }
  },
  // 定义 getters，等同于组件的计算属性
  getters: {
    // hello: state => '你好呀, ' + state.user + '!'
  },
  // 定义 actions，有同步和异步两种类型
  actions: {
    setWholeData(data: { [x: string]: any }) {
      this.wholeData = data
    }
  }
})

export default useWholeStore
