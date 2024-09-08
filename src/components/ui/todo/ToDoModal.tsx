import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@radix-ui/react-dialog";
import { Button } from "../button";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Input } from "../input";
import { useState, FormEvent } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { addToDo } from "@/redux/features/todoSlice";

const ToDoModal = () => {
  const [task, setTask] = useState("");
  const [details, setDetails] = useState("");
  const dispatch = useAppDispatch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log({ task, details });
    const taskDetails = {
      id: Math.random().toString(36).slice(2, 7),
      title: task,
      description: details,
    };
    dispatch(addToDo(taskDetails));
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          {/* Make sure there is a single child element */}
          <Button className="bg-primary-gradient font-bold">Add ToDo</Button>
        </DialogTrigger>
        <div className="flex justify-end bg-primary-gradient rounded-md px-1">
          <DialogContent className="sm:max-w-[425px] px-7 py-7 rounded-md bg-white">
            <form className="" onSubmit={handleSubmit}>
              <div className="grid gap-4 py-4">
                <h2 className="text-2xl text-center font-semibold">Add Task</h2>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label className="text-right">Task</Label>
                  <Input
                    onBlur={(e) => setTask(e.target.value)}
                    id="task"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label className="text-right">Description</Label>
                  <Input
                    onBlur={(e) => setDetails(e.target.value)}
                    id="details"
                    className="col-span-3"
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <Button type="submit">Add ToDo</Button>
                <DialogClose>
                  <Button>Close</Button>
                </DialogClose>
              </div>
            </form>

            {/* Ensure only one child element in DialogClose */}
          </DialogContent>
        </div>
      </Dialog>
    </div>
  );
};

export default ToDoModal;
