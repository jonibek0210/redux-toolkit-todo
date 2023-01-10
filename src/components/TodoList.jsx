import { useSelector } from "react-redux";
import Task from "./children/Task";

const TodoList = () => {
   const todos = useSelector(state => state.todos.todos)

   return (
      <ul className="px-6 mt-5 flex flex-col gap-3">
         {
            todos.map(item => <Task item={item} key={item.id} />)
         }
      </ul>
   );
}

export default TodoList;