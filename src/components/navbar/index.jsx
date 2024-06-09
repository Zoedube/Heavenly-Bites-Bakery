import { NavLink } from "react-router-dom"
export default function Navbar() {
  
  // Code to create navbar
  return (
    <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
      <h2 className="text-4xl font-semibold">
        <NavLink
            to={"/"}
            className="text-black hover:text-gray-700 duration-300" >
              Heavenly Bites Bakery 
          </NavLink></h2>

      <form>
        <input
          type="text"
          name="search"
          placeholder="Click me down below"
          className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-pink-100 focus:shadow-pink-200"
        />
      </form>

      <ul className="flex gap-5">
        <li>
          <NavLink
            to={"/"}
            className="text-black hover:text-gray-700 duration-300" >Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/favorites"}
            className="text-black hover:text-gray-700 duration-300" >Recipe Ingrediants
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}