<template>
  <div class="count">
    <h1>This is an count page</h1>
    {{$store.state.count}}
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <br />
    {{$store.state.datalist.records[0].record_id.type}}
    {{$store.state.datalist.records[0].record_id.value}}
    <br />
    {{$store.state.datalist.records[1].record_id.type}}
    {{$store.state.datalist.records[1].record_id.value}}

    <ul id="data">
      <li v-for="record in $store.state.datalist.records" v-bind:key="record.record_id.value">
         {{record.record_id.value}}
         {{record.full_name}}
         {{record.first_name}}
         {{record.last_name}}
         {{record.mode}}
         <button @click="mode_chenge(record.mode, record.record_id.value)">edit</button>
      </li>
    </ul>
  </div>
</template>
 
<script>
export default {
  methods: {
    increment() {
      this.$store.commit("increment");
    },
    decrement() {
      this.$store.commit("decrement");
    },
    mode_chenge(mode,record_id){
      var payload = {
         "record_id" : record_id,
         "mode" : mode
      }
      this.$store.commit("mode_chenge", payload);
    }
  }
};
</script>