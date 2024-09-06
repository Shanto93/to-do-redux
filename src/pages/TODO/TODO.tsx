import Container from "@/components/ui/Container";
import ToDoContainer from "@/components/ui/todo/ToDoContainer";

const TODO = () => {
  return (
    <Container>
      <div className="flex justify-center items-center">
        <h2 className="text-4xl font-bold my-10 text-center bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
          My ToDos
        </h2>
      </div>
      <ToDoContainer></ToDoContainer>
    </Container>
  );
};

export default TODO;
