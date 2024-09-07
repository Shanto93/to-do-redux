import { useAppDispatch } from "@/redux/hooks";
import { Button } from "../button";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import { removeToDo } from "@/redux/features/todoSlice";

type TProps = {
  id: string;
  task: string;
  details: string;
  isCompleted?: boolean;
};

const ToDoCart = ({ id, task, details, isCompleted }: TProps) => {
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(removeToDo(id));
  };
  return (
    <div className="flex bg-white rounded-md p-3 justify-between items-center font-semibold ">
      <input type="checkbox" name="" id="" />
      <p>{task}</p>
      <p>{details}</p>
      <p>
        {isCompleted ? (
          <p className="text-green-500">Done</p>
        ) : (
          <p className="text-red-500">Pending</p>
        )}
      </p>
      <div className="">
        <Button onClick={handleDelete} className="bg-red-500 mr-8 text-lg">
          <FaTrashAlt />
        </Button>
        <Button className=" bg-[#5C53FE] text-lg">
          <FaRegEdit />
        </Button>
      </div>
    </div>
  );
};

export default ToDoCart;
