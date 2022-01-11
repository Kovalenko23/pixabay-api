import { createStore } from 'vuex'
import axios from 'axios';


export default createStore({
  state: {
    cats: null,
    tags: null,
  },


  getters: {
    GET_JSON: state => {
      return state.cats;
    },
    GET_TAGS: state => {
      return state.tags;

    }

  },
  //get data from store

  mutations: {
    set_JSON(state, payload) {
      state.cats = payload;
    },
    set_TAGS(state, payload) {
      const tagsArr = [] 

      for (let i of payload) {
        let arr = i.tags.split(',')
        for (let k of arr) {
          if (!tagsArr.includes(k.trim())) {
            tagsArr.push(k.trim())
          }
        }
      }
      state.tags = tagsArr;
    }
  },
  //change store
  actions: {
    async loadCats({ commit }, value, limit = 6) {
      const errors = [];
      await axios
        .get(`https://pixabay.com/api/?key=25040045-450d2ba4de6c5fa6527432375&q=cats&image_type=all&per_page=` + limit)
        .then(response => {


          commit(`SET_TAGS`, response.data.hits)


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
  //change loghic
})  