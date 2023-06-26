import { createStore } from 'vuex'
import axios from "axios";

export default createStore({
  state: {
    allProjects: [],
    allReco: []
  },
  getters: {
  },
  mutations: {
    getAllProjects(state){
      axios.get("http://localhost:3000/api/projects/getAll")
      .then((response) => {
            state.allProjects.length = 0;
            console.log(response);
            response.data.forEach(project => {
              state.allProjects.push(project);
            });
          }
      )
      .catch((err) => {
          console.log(err);
      });
    },
  },
  actions: {
  },
  modules: {
  }
})
