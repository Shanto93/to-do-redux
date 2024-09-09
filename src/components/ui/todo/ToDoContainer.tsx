import { useGetTodoQuery } from "@/redux/api/api";
import ToDoCart from "./ToDoCart";
import ToDoFilter from "./ToDoFilter";
import ToDoModal from "./ToDoModal";
import { useState } from "react";

type TItems = {
  id: string,
  title: string,
  description: string,
  priority: string,
  isCompleted?: boolean
};

const ToDoContainer = () => {
  const [priority, setPriority] = useState("");
  // From Local State
  // const { todos } = useAppSelector((state) => state.todos);

  // From server state
  const { data: todos, isLoading } = useGetTodoQuery(priority);
  
  console.log(priority);

  if (isLoading) {
    <div>Loading...</div>;
  }
  return (
    <div>
      <div className="flex justify-between mb-5">
        <ToDoModal></ToDoModal>
        <ToDoFilter priority={priority} setPriority={setPriority}></ToDoFilter>
      </div>
      {todos?.data.length > 0 ? (
        <div className="bg-primary-gradient w-full h-full rounded-xl p-1 border-0">
          <div className="border-0 bg-slate-700 space-y-2 bg-opacity-60 rounded-xl">
            {todos?.data.map((item: TItems) => (
              <ToDoCart {...item} />
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-primary-gradient w-full h-full rounded-xl p-1 border-0">
          <div className="flex justify-center items-center font-semibold bg-white p-3 rounded-md">
            <p>There is no task pending</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ToDoContainer;
