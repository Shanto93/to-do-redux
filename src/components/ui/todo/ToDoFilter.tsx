import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Button } from "../button";

type TPriorityProps = {
  priority: string,
  setPriority:((value: string) => void) | undefined
}

const ToDoFilter = ({priority, setPriority}: TPriorityProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
      <Button className="bg-primary-gradient font-bold">Filter</Button>
      
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-white px-5 py-3 rounded-md">
        <DropdownMenuLabel>Filter by Priority</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={priority} onValueChange={setPriority}>
          <DropdownMenuRadioItem value="">All</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="high">High</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="medium">Medium</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="low">Low</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ToDoFilter;
