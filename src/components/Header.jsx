import uuid from 'react-uuid';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { createTask } from '../redux/features/todos/todoSlice';

const Header = () => {

   const dispatch = useDispatch()

   const { register, handleSubmit, formState: { errors } } = useForm({
      defaultValues: {
         id: uuid(),
         isDone: false,
         time: `${new Date().getHours()} : ${new Date().getMinutes()}`
      }
   });

   const submit = (data) => {
      dispatch(createTask(data))
   }

   return (
      <header className="w-full fixed bottom-0 left-0 px-10 pb-10 pt-7 z-50 backdrop-blur-sm bg-black/30">
         {errors.task && <h1 className='absolute top-0 left-10 text-red-600'>This field is required</h1>}
         <form onSubmit={handleSubmit(submit)} className="w-full flex gap-5">
            <input className="flex-1 backdrop-blur-sm bg-black/30 rounded-[3px] px-3 py-1 text-gray-400 placeholder:text-gray-400 border-none outline-gray-500" placeholder='add new task'  {...register("task", { required: true })} type="text" />
            <button className="backdrop-blur-sm bg-black/30 rounded-[3px] text-gray-400 px-2 outline-gray-500">add new task</button>
         </form>
      </header>
   );
}

export default Header;