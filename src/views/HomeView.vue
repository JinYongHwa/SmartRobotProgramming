<template>
  <v-layout class="background" align-center justify-center>
    <div class="form">
      <v-text-field label="아이디"></v-text-field>
      <v-text-field type="password" label="password"></v-text-field>

      <v-btn class="mr-2" @click="login">로그인</v-btn>
      <v-btn @click="moveJoin">회원가입</v-btn>
    </div>
  </v-layout>
</template>

<script>
import HelloWorld from "../components/HelloWorld";

export default {
  name: "Home",
  data() {
    return {
      name: "",
    };
  },
  methods: {
    login() {
      //TODO : 폼체크하는거 추가해야됨

      //TODO : 서버에 전송해서 로그인 시키기

      this.$router.push("/board");
    },
    moveJoin() {
      this.$router.push("/join");
    },
  },
};
</script>
<style scoped>
.background {
  background: #eeeeee;
}
.background .form {
  background: white;
  padding: 20px;
  border-radius: 10px;
}
</style>