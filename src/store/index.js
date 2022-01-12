import { createStore } from 'vuex'
import axios from 'axios';


export default createStore({
  state: {
    catsList: null,
    tags: null,
  },

  getters: {
    GET_JSON: state => {
      return state.catsList;
    },

    GET_TAGS: state => {
      return state.tags;
    }

  },

  mutations: {
    SET_JSON(state, payload) {


      state.catsList = payload;
    },


  },
  actions: {

    async loadJson({ commit }, value) {
      const errors = [];
      await axios
        .get(`https://pixabay.com/api/?key=25040037-a12ad33d617bc126ab0283a57&q=cats&image_type=all&per_page=40`)
        .then(response => {


          if (value === `Likes`) commit(`SET_JSON`, response.data.hits.sort((a, b) => b.likes - a.likes));
          else if (value === `Comments`) commit(`SET_JSON`, response.data.hits.sort((a, b) => b.comments - a.comments));
          else commit(`SET_JSON`, response.data.hits)
        })
        .catch(e => {
          errors.push(e);
        })
      if (errors.length !== 0) console.log(errors);
    },

  },
  modules: {
  }
})
