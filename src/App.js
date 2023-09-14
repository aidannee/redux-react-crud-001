import PostList from "./features/post/PostList";
import "./App.css";
import AddPostForm from "./features/post/addPostForm";

function App() {
  return (
    <main className="App">
      <AddPostForm />
      <PostList />
    </main>
  );
}

export default App;
