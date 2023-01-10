const TodoList = () => {
   return (
      <ul className="px-6 mt-5">
         <li className="px-3 flex gap-5 border border-teal-500 text-teal-500 ">
            <span className="flex-auto">task</span>
            <button className="flex-0">delete</button>
            <button className="flex-0">edit</button>
         </li>
      </ul>
   );
}

export default TodoList;