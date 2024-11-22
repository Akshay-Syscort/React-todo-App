const TodoItem1 = () => {
  let todonam = "By milk";
  let tododate = "1/1/2002";
  return (
    <div>
      <div class="container text-center">
        <div class="row">
          <div class="col">{todonam}</div>
          <div class="col">{tododate}</div>
          <div class="col">
            <button type="button" class="btn btn-danger">
              Danger
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TodoItem1;
