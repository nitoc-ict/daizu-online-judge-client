<template>
  <div class="table-contests">
    <!-- table部 -->
    <v-data-table
      :headers="headers"
      :items="contestList"
      :search="search"
      :filter="filter"
      :class="elevation-5"
      rows-per-page-items
      rows-per-page-text
    >
      <template v-slot:items="props">
        <td>{{ props.item.name }}</td>
        <td class="text-xs-left">{{ props.item.date }}</td>
        <td class="text-xs-left">{{ props.item.time }}</td>
      </template>
      <template v-slot:pageText="props">{{ props.pageStop }} / {{ props.itemsLength }}件表示</template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "コンテスト名",
          align: "left",
          sortable: false,
          value: "name"
        },
        { text: "開催日", value: "data" },
        { text: "時間", value: "time" }
      ],
      contestList: [
        {
          name: "ICT Welcome Contest 2019",
          date: "2019/10/10",
          time: "13:00-14:00"
        },
        {
          name: "Hello world",
          date: "2019/11/12",
          time: "00:00:-00:00"
        },
        {
          name: "hoge contest",
          date: "2020/12/10",
          time: "16:00-18:00"
        }
      ]
    };
  }
};
</script>
