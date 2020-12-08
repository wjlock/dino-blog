import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <div className="App">
        <p>
          {props.post.title}
          {props.post.author}
          {props.post.body}
          {props.post.comment[0]}
        </p>
    </div>
  );
}

export default App;
