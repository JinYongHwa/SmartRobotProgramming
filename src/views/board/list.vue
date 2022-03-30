<template>
  <div class="root">
    <table>
      <thead>
        <tr>
          <th width="80px">글번호</th>
          <th>제목</th>
          <th width="100px">작성자</th>
          <th width="80px">조회수</th>
          <th width="120px">작성일</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="board in boardList" :key="board.id">
          <td class="text-center">{{ board.id }}</td>
          <td>{{ board.title }}</td>
          <td class="text-center">{{ board.writer }}</td>
          <td class="text-center">{{ board.viewCount }}</td>
          <td class="text-center">{{ board.writeDate }}</td>
        </tr>
      </tbody>
    </table>
    <div class="text-right mt-2">
      <v-btn color="primary" @click="moveWrite">글쓰기</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      boardList: [],
    };
  },
  mounted() {
    //TODO : 서버에서 게시물 목록 가져와서 넣기
    for (var i = 0; i < 10; i++) {
      this.boardList.push({
        id: i,
        title: "제목" + i,
        writer: "작성자" + i,
        viewCount: i,
        writeDate: "2020-01-01",
      });
    }
  },
  methods: {
    moveWrite() {
      this.$router.push("/board/write");
    },
  },
};
</script>

<style scoped>
.root {
  width: 700px;
  margin: 0 auto;
}
table {
  width: 100%;
  border-collapse: collapse;
}
table th,
td {
  border-bottom: 1px solid #ccc;
  padding-top: 5px;
  padding-bottom: 5px;
}
</style>