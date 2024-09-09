import { useAppDispatch } from "@/redux/hooks";
import { Button } from "../button";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import { removeToDo, toggleToDo } from "@/redux/features/todoSlice";

type TProps = {
  id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
  priority: string;
};

const ToDoCart = ({
  id,
  title,
  description,
  isCompleted,
  priority,
}: TProps) => {
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(removeToDo(id));
  };
  return (
    <div className="flex bg-white rounded-md p-3 justify-between items-center font-semibold ">
      <input
        className="flex-1"
        onChange={() => dispatch(toggleToDo(id))}
        type="checkbox"
        name=""
        id=""
      />
      <p className="flex-1">{title}</p>
      <p className="flex-[2]">{description}</p>
      <div className="flex flex-1 items-center">
        {priority === "high" ? (
          <p className={`size-3 rounded-full mr-1 bg-red-500`}></p>
        ) : priority === "medium" ? (
          <p className={`size-3 rounded-full mr-1 bg-yellow-500`}></p>
        ) : priority === "low" ? (
          <p className={`size-3 rounded-full mr-1 bg-green-500`}></p>
        ) : null}
        <p>{priority} </p>
      </div>
      <p className="flex-1">
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
