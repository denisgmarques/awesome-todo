const state = {
  tasks: [
    {
      id: 1,
      name: 'Go to supermarket',
      completed: false,
      dueDate: '05/04/2020',
      dueTime: '18:30'
    },
    {
      id: 2,
      name: 'Get bananas',
      completed: false,
      dueDate: '05/04/2020',
      dueTime: '18:31'
    },
    {
      id: 3,
      name: 'Get apples',
      completed: false,
      dueDate: '05/04/2020',
      dueTime: '18:32'
    }
  ]
}

const mutations = {

}

const actions = {

}

const getters = {
  tasks: (state) => {
    return state.tasks
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
