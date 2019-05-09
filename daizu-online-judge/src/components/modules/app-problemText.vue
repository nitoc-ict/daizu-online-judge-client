<template>
  <div id="app-problemText">
    <span class="body-1 textcolor--text" v-html="htmlFormat"></span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      htmlFormat:
        "<p>今日は待ちに待った高専祭の日です。<br>高専祭では、 あらかじめ1枚$M$円の金券を購入し、 それを使って屋台などの出し物を利用することができます。<br></p><p>朝ごはんを逃してお腹が空いたらずひるどくんは屋台にやってきました。<br>屋台には3個の商品があり、 それぞれ$a$円、$b$円、$c$円です。</p><p>お腹が空いたらずひるどくんは、 全ての商品を1つずつ買おうと思っています。<br>しかし、 商品の値段はバラバラなので、 $M$円の金券ではちょうど払うことができない可能性があります。<br>計算が苦手ならずひるどくんのために、 3個の商品を$M$円の金券でちょうど払えるかどうか確かめてあげてください。</p><h1>入力</h1><blockquote>$M$</br>$a$</br>$b$</br>$c$</blockquote></br>ただし、</br><ul><li>$1 <= M <= 10、000$</li><li>$1 <= a、 b、 c <= 1、000、000$</li></ul>です。</br></br><h1>入力例</h1><pre>1</br>1</br>3</br>5</br></pre>"
    };
  }
};
</script>

<style>
/* 見出し
 * 「問題文」「入力」「入力例」「出力例」などに使う
 */
h1 {
  font-size: 1rem;
  font-weight: bold;
}
/* 入・出力例, 入力のグレーの背景
 * 入力: <blockquote>を使う
 * 入力例, 出力例: <pre>を使う 
 */
pre,
blockquote {
  background: #eeeeee;
  border: solid 0.6px #bdbdbd;
  border-radius: 0.5rem;
  font-size: 1.02rem;
  padding: 0.6rem 1rem;
}
</style>


