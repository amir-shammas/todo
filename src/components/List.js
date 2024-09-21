import ListItem from "./ListItem";

function List({todos, deleteHandler, isDoneHandler}) {
  return (
    <div className="listWrap">
      <ul className="list-group">

        {/* <ListItem title="کار1" /> */}

        {
            todos.length >= 1 && todos.map((todo) => {
                return <ListItem key={todo.id} id={todo.id} title={todo.title} isDone={todo.isDone} deleteHandler={deleteHandler} isDoneHandler={isDoneHandler} />
            })
        }

        {
            todos.length < 1 && <h5>کاری ثبت نشده است</h5>
        }

      </ul>
    </div>
  );
}

export default List;
