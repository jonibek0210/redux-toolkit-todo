import { useDispatch } from "react-redux";
import { editTask, removeTask } from "../../redux/features/todos/todoSlice";
import { MdDelete } from 'react-icons/md'
import { FiEdit } from 'react-icons/fi'

const Task = ({ item }) => {
   const dispatch = useDispatch()

   return (
      <li className="px-3 flex gap-5 backdrop-blur-sm bg-black/30 rounded-[3px]">
         <span className="flex-1 text-gray-400">{item.task}</span>
         <span className="flex-1 text-gray-400">{item.id}</span>
         <button onClick={() => dispatch(removeTask(item.id))} className="flex-0 text-gray-400 outline-gray-500"><MdDelete color="red" /></button>
         <button onClick={() => dispatch(editTask(item.id))} className="flex-0 text-gray-400 outline-gray-500"><FiEdit /></button>
      </li>
   );
}

export default Task;