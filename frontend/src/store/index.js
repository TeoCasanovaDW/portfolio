import { createStore } from "vuex";
import axios from "axios";

export default createStore({
   state: {
      allProjects: [],
      actualProject: [],
      allReco: [],
   },
   getters: {},
   mutations: {
      getAllProjects(state) {
         axios
            .get("http://localhost:3000/api/projects/getAll")
            .then((response) => {
               state.allProjects.length = 0;
               console.log(response);
               response.data.forEach((project) => {
                  state.allProjects.push(project);
               });
            })
            .catch((err) => {
               console.log(err);
            });
      },
      getProject(state, project_id) {
         console.log(project_id);
         axios
            .get("http://localhost:3000/api/projects/getProject/" + project_id)
            .then((response) => {
               console.log(response.data);
               state.actualProject = [];
               state.actualProject = response.data;
               let array = response.data.project_labels.split(", ");
               state.actualProject.project_labels = array;
               console.log(state.actualProject);
            })
            .catch((err) => {
               console.log(err);
            });
      },
   },
   actions: {},
   modules: {},
});
