import { createStore } from "vuex";
import axios from "axios";

export default createStore({
   state: {
      allProjects: [],
      lastProjects: [],
      actualProject: [],
      allReco: []
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
      getLastProjects(state){
         axios
            .get("http://localhost:3000/api/projects/getLastProjects")
            .then((response) => {
               state.lastProjects.length = 0;
               console.log(response.data);
               response.data.forEach((project) => {
                  state.lastProjects.push(project);
               });
            })
            .catch((err) => {
               console.log(err);
            });
      },
      getAllReco(state){
         axios
            .get("http://localhost:3000/api/recommandations/getAll")
            .then((response) => {
               console.log(response);
               state.allReco.length = 0;
               response.data.forEach((recommandations) => {
                  // CHANGE LASTNAME TO L. \\
                  let lastnameArray = recommandations.reco_author_lastname.split('');
                  recommandations.reco_author_lastname = lastnameArray[0] + ".";
                  state.allReco.push(recommandations);
               });
            })
            .catch((err) => {
               console.log(err);
            });
      },
      addRecommandation(state, infos){
         axios.post('http://localhost:3000/api/recommandations/create', {
            reco_author_firstname: infos.reco_author_firstname,
            reco_author_lastname: infos.reco_author_lastname,
            reco_description: infos.reco_description
         })
         .then(response => {
            console.log(response.data)
         })
         .catch(error => {
               console.log(error);
         });
      }
   },
   actions: {},
   modules: {},
});
