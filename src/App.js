import { useEffect, useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Layout from "./components/Layout";
import List from "./components/List";

function App() {

  // let todos = [
  //   {id:1, title:"todo-1", isDone:false},
  //   {id:2, title:"todo-2", isDone:false},
  //   {id:3, title:"todo-3", isDone:false},
  // ];

  const getTodos = () => {
    let todos = localStorage.getItem("todos");
    return todos ? JSON.parse(todos) : [];
  }

  // const [todos, setTodos] = useState([]);
  const [todos, setTodos] = useState(getTodos);
  const [id, setId] = useState(Date.now());
  const [title, setTitle] = useState("");
  const [isDone, setIsDone] = useState(false);
  const [error, setError] = useState("");

  const deleteHandler = (id) => {

    // console.log(id);

    // let filteredTodos = todos.filter((todo) => {
    //   return todo.id !== id;
    // });
    // setTodos(filteredTodos);

    if(window.confirm("از حذف اطمینان دارید؟")){
      let filteredTodos = todos.filter((todo) => {
        return todo.id !== id;
      });
      setTodos(filteredTodos);
    }

  }

  const isDoneHandler = (id) => {

    // console.log(id);

    const selectedIndex = todos.findIndex((todo) => {
      return todo.id === id;
    });
    // console.log(selectedIndex);
    const duplicatedTodos = [...todos];
    duplicatedTodos[selectedIndex] = {
      id: todos[selectedIndex].id,
      title: todos[selectedIndex].title,
      isDone: !todos[selectedIndex].isDone,
    };
    setTodos(duplicatedTodos);
    
  }

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log("form submitted!");

    // setId(Date.now());
    // let todo = { id , title , isDone };
    // setTodos([...todos , todo]);

    if(title.trim().length < 5){
      setError("حداقل 5 کاراکتر وارد نمایید");
    }else{
      setId(Date.now());
      let todo = { id , title , isDone };
      setTodos([...todos , todo]);
      setError("");
    }

  }

  const inputChangeHandler = (e) => {
    // console.log("input changed!");
    setTitle(e.target.value);
  }

  useEffect(() => {
    // console.log(todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <Layout>
      <Header />
      <Form submitHandler={submitHandler} inputChangeHandler={inputChangeHandler} error={error} />
      <List todos={todos} deleteHandler={deleteHandler} isDoneHandler={isDoneHandler} />
    </Layout>
  );
}

export default App;
