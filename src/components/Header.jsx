const Header = () => {
   return (
      <>
         <header className="px-6 flex  items-center">
            <form className="flex flex-col gap-5 w-full">
               <input type="text" className="border border-teal-500" />
               <button className="bg-transparent border border-teal-500 text-teal-500">add new task</button>
            </form>
         </header>
         <hr className="border border-teal-500 mt-5" />
      </>
   );
}

export default Header;