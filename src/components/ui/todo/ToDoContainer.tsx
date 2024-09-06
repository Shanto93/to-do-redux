import ToDoCart from "./ToDoCart";
import ToDoFilter from "./ToDoFilter";
import ToDoModal from "./ToDoModal";

const ToDoContainer = () => {
  return (
    <div>
      <div className="flex justify-between mb-5">
        <ToDoModal></ToDoModal>
        <ToDoFilter></ToDoFilter>
      </div>

      <div className="bg-primary-gradient w-full h-full rounded-xl p-1 border-0">
        {/* <div className="flex justify-center items-center font-semibold bg-white p-3 rounded-md">
          <p>There is no task pending</p>
        </div> */}
        <div className="border-0 bg-slate-700 space-y-2 bg-opacity-60 rounded-xl">
          <ToDoCart></ToDoCart>
          <ToDoCart></ToDoCart>
          <ToDoCart></ToDoCart>
          <ToDoCart></ToDoCart>
        </div>
      </div>
    </div>
  );
};

export default ToDoContainer;
