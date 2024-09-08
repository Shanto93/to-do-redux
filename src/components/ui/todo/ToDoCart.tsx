import { useAppDispatch } from "@/redux/hooks";
import { Button } from "../button";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import { removeToDo, toggleToDo } from "@/redux/features/todoSlice";

type TProps = {
  id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
};

const ToDoCart = ({ id, title, description, isCompleted }: TProps) => {
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(removeToDo(id));
  };
  return (
    <div className="flex bg-white rounded-md p-3 justify-between items-center font-semibold ">
      <input
        onChange={() => dispatch(toggleToDo(id))}
        type="checkbox"
        name=""
        id=""
      />
      <p>{title}</p>
      <p>{description}</p>
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
