import Pending from "./Pending";
import Progress from "./Progress";
import Complete from "./Complete";
import TodoService from "../../services/todoService";
import { useEffect } from "react";

const List = () => {
  const todoService = new TodoService();

  async function getTodos() {
    const todosList = await todoService.getAll();
    console.log(await todosList);
  }

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="row mt-5">
      <Pending />
      <Progress />
      <Complete />
    </div>
  );
};

export default List;
