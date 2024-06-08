import React from 'react';

function Footer() {
  return (
    

<footer style={{ backgroundColor: '#FBF0F7' ,border: '1px solid #e0e0e0'}} className="fixed bottom-0 left-0 z-20 w-full p-4 bg-[#FAD8DB] border-t border-gray-100 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="http://localhost:3000" className="hover:underline">Heavenly Bites Bakery™</a>. 
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <p className="hover:underline me-4 md:me-6">About</p>
        </li>
        <li>
            <p className="hover:underline me-4 md:me-6">Privacy Policy</p>
        </li>
        <li>
            <p className="hover:underline me-4 md:me-6">Licensing</p>
        </li>
        <li>
            <p className="hover:underline">Contact</p>
        </li>
    </ul>
</footer>

  );
}

export default Footer;

