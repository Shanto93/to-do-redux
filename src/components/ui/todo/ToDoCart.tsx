const ToDoCart = () => {
  return (
    <div className="flex bg-white rounded-md p-3 justify-between font-semibold ">
      <input type="checkbox" name="" id="" />
      <p>ToDo Title</p>
      <p>Time</p>
      <p>Description</p>
      <div className="">
        <button className="mr-12">Delete</button>
        <button>Edit</button>
      </div>
    </div>
  );
};

export default ToDoCart;
