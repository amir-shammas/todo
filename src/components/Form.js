function Form({submitHandler, inputChangeHandler , error}) {
  return (
    <form className="py-3" onSubmit={submitHandler}>
      <div className="form-group row">
        <div className="col-4">
          <button type="submit" className="btn btn-primary">
            افزودن کار
          </button>
        </div>
        <div className="col-8">
          <input
            type="text"
            className="form-control-plaintext mb-2 border-bottom"
            onChange={inputChangeHandler}
          />
        </div>
        <div className="col-8 error">
          {error}
        </div>
      </div>
    </form>
  );
}

export default Form;
