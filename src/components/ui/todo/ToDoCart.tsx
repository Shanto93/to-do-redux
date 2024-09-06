import { Button } from "../button";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";

const ToDoCart = () => {
  return (
    <div className="flex bg-white rounded-md p-3 justify-between items-center font-semibold ">
      <input type="checkbox" name="" id="" />
      <p>ToDo Title</p>
      <p>Time</p>
      <p>Description</p>
      <div className="">
        <Button className="bg-red-500 mr-8 text-lg">
        <FaTrashAlt />
        </Button>
        <Button className=" bg-[#5C53FE] text-lg"><FaRegEdit /></Button>
      </div>
    </div>
  );
};

export default ToDoCart;
