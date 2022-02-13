import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

const dummyList = [
  {
    id: 1,
    author: "수",
    content: "첫번째 게시글",
    emotion: 5,
    created_date: new Date().getTime()
  },
  {
    id: 2,
    author: "soo",
    content: "첫번째 게시글",
    emotion: 5,
    created_date: new Date().getTime()
  },
  {
    id: 3,
    author: "우",
    content: "첫번째 게시글",
    emotion: 5,
    created_date: new Date().getTime()
  },
  {
    id: 4,
    author: "수우우",
    content: "첫번째 게시글",
    emotion: 5,
    created_date: new Date().getTime()
  },
  {
    id: 5,
    author: "수야수",
    content: "첫번째 게시글",
    emotion: 5,
    created_date: new Date().getTime()
  },
];

const App = () => {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList}/>
    </div>
  );
}

export default App;
