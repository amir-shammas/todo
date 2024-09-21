function ListItem({id, title, isDone, deleteHandler, isDoneHandler}) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div className={ isDone ? "line" : "" } >{title}</div>
      <div>
        <button className="btn btn-small bg-danger text-white ms-2" onClick={() => deleteHandler(id)}>حذف</button>
        <button className="btn btn-small text-white bg-warning" onClick={() => isDoneHandler(id)}>
          {
            !isDone ? "انجام شده" : "در حال انجام"
          }
        </button>
      </div>
    </li>
  );
}

export default ListItem;
