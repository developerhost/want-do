<template>
  <v-container>
    <v-row class="text-center" justify="center">
      <v-col class="mb-20" justify="center">
        <v-container class="ml-50">
          <div class="ml-50">
            <v-layout wrap class="ml-50" justify="center">
              <v-icon large color="blue darken-2" class="ml-50">
                mdi-message-text
              </v-icon>

              <h2 class="title font-weight-bold mb-3">
                死ぬまでにやりたいことリスト <br />
              </h2>
            </v-layout>
          </div>
        </v-container>

        <h2 class="title font-weight-bold mb-3">
          ~List of things to do before you die~
        </h2>

        <div class="mt-20">
          <p></p>
        </div>
        <v-form>
          <v-container>
            <v-row>
              <v-col cols="12" sm="12">
                <v-layout wrap>
                  <v-text-field
                    v-model="newTodoName"
                    solo
                    placeholder="やりたいこと"
                  ></v-text-field>
                  <v-btn
                    @click="addTodo()"
                    class="mx-2"
                    fab
                    dark
                    color="indigo"
                  >
                    <v-icon dark>
                      mdi-plus
                    </v-icon>
                  </v-btn>
                </v-layout>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-col>

      <v-col class="mb-5" cols="12">
        <v-row justify="center" v-for="(todo, key) in todos" :key="key">
          <v-layout wrapper>
            <input
              type="checkbox"
              id="target"
              v-model="todo.isComplete"
              @click="updateTodo(todo, key)"
              style="transform:scale(2.0);"
              class="mx-5"
              text-size="16px"
            />
            {{ todo.name }}
            <v-btn
              @click="removeTodo(key)"
              class="mx-4 mb-5"
              fab
              dark
              x-small
              color="primary"
              bottom="5%"
            >
              <v-icon dark>
                mdi-minus
              </v-icon>
            </v-btn>
          </v-layout>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import firebase from "firebase";

export default {
  name: "HelloWorld",
  created() {
    this.db = firebase.firestore();
    this.todosRef = this.db.collection("todos");
    //todoのデータが変わったとき（追加、削除など）、リスナーを登録して、処理を行う
    this.todosRef.onSnapshot((querySnapshot) => {
      //querySnapshot=現在の全てのデータ
      const obj = {};
      querySnapshot.forEach((doc) => {
        //doc=firebaseのデータ内のドキュメント
        //doc.id=ドキュメントのID doc.data=コレクション
        obj[doc.id] = doc.data();
      });
      this.todos = obj;
    });
  },

  data: () => ({
    db: null,
    todosRef: null,
    newTodoName: "",
    todos: {},
  }),
  methods: {
    addTodo() {
      if (this.newTodoName === "") {
        return;
      }
      this.todosRef.add({
        name: this.newTodoName,
        isComplete: false,
      }),
        (this.newTodoName = "");
    },
    updateTodo(todo, key) {
      todo.isComplete = !todo.isComplete;
      this.todosRef.doc(key).update(todo);

      var id = document.getElementById(todo);
      if (todo.isComplete == true) {
        id.style.textDecoration = "line-through";
      } else {
        id.style.textDecoration = "none";
      }
    },
    removeTodo(key) {
      this.todosRef.doc(key).delete();
    },
  },
};
</script>

<style>
.v-application {
  font-family: "M Plus 1p" !important;
}

.v-text-field input {
  font-size: 1em;
}
</style>
