import { FaRegCircleUser } from 'react-icons/fa6';
import Logo from './Logo'
import { GrSearch } from 'react-icons/gr';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="h-16 shadow-md bg-white">
      <div className="h-full container mx-auto flex justify-between items-center">
        <div className="">
          <Link to={"/"}>
          <Logo width={90} height={50} />
          </Link>
        </div>
        <div className="hidden lg:flex items-center w-full justify-between max-w-sm  border rounded-full focus-within:shadow-sm">
          <input type="text" placeholder="Search product here ..."  className='w-full outline-none pl-2'/>
          <div className="text-lg min-w-[45px] bg-orange-600 h-8 rounded-r-full flex items-center justify-center text-white cursor-pointer">
            <GrSearch />
          </div>
        </div>
        <div className='flex items-center gap-7'>
          <div className='text-3xl cursor-pointer'>
            <FaRegCircleUser/>
          </div>
          <div className='text-2xl relative cursor-pointer'>
            <span>
            <FaShoppingCart/>
            </span>
            <div className='flex bg-orange-600 text-white w-5 h-5 rounded-full p-1 items-center justify-center absolute -top-2 -right-3'>
              <p className='text-xs'>0</p>
            </div>
          </div>
          <div>
            <Link to={"login"} className='px-3 py-1 rounded-full bg-orange-600 hover:bg-orange-700 text-white '>
              Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header