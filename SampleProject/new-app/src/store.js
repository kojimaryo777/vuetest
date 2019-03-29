import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    datalist: 
    {
      "el": '#data',
      "records": [
          {
              "full_name" : "テスト太郎",
              "first_name" : "テスト",
              "last_name" : "太郎",
              "mode" : "list",
              "record_id": {
                  "type": "RECORD_NUMBER",
                  "value": "1"
              },
              "created_time": {
                  "type": "CREATED_TIME",
                  "value": "2012-02-03T08:50:00Z"
              },
              "dropdown": {
                  "type": "DROP_DOWN",
                  "value": null
              }
          },
          {
              "full_name" : "テスト2次郎",
              "first_name" : "テスト2",
              "last_name" : "次郎",
              "mode" : "list",
              "record_id": {
                  "type": "RECORD_NUMBER",
                  "value": "2"
              },
              "created_time": {
                  "type": "CREATED_TIME",
                  "value": "2012-02-03T09:22:00Z"
              },
              "dropdown": {
                  "type": "DROP_DOWN",
                  "value": null
              }
          }
      ],
      "totalCount": null
  }
 
  },
  mutations: {
      increment: state => state.count++,
      decrement: state => state.count--,
      mode_chenge (state, payload){

        payload.record_id--; //実際のdatalistインデクスは0からスタートする為マイナス１

        if(payload.mode == "list") 
            state.datalist.records[payload.record_id].mode = "edit"
        else if (payload.mode  == "edit"){
            state.datalist.records[payload.record_id].mode = "list"
        }else{

        }
      }
  },
  actions: {
    increment : ({ commit }) => {
      setTimeout(() => {
        commit('increment')
       }, 5000)
    }    
  }
});
