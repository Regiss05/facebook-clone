import React from 'react'
import { BsFacebook, BsMessenger } from 'react-icons/bs'
import { AiFillHome, AiOutlineSearch } from 'react-icons/ai'
import { IoNotifications, IoStorefrontOutline } from 'react-icons/io5'
import { CgMenuGridO } from 'react-icons/cg'
import { signOut, useSession } from 'next-auth/react'
import { HiUserGroup } from 'react-icons/hi'
import { MdEvent } from 'react-icons/md'

const Navbar = () => {

  const { data: session } = useSession();

  return (
    <div className='py-2 px-4 bg-white shadow-md flex justify-between items-center top-0 sticky z-50'>
        <div className='flex items-center gap-2'>
          <BsFacebook className='text-primary text-[40px]' />
          <div className='relative hidden sm:block'>
            <AiOutlineSearch className='absolute text-[20px] top-[10px] left-[10px] text-gray-500' />
            <input
              className='bg-[#F0F2F5] p-2 rounded-full pl-9 outline-none placeholder:text-gray-500'
              type='text'
              placeholder='Search Facebook'
            />
          </div>
        </div>
        <div className='hidden lg:flex items-center gap-[100px] text-[30px] text-gray-500'>
          <div className='relative'>
            <AiFillHome className='text-primary' />
            <div className='absolute bg-primary -left-[40px] h-[3px] w-[110px] -bottom-[16px]'></div>
          </div>
        </div>

        <IoStorefrontOutline className='text-[28px] text-gray-500' />
        <HiUserGroup className='text-[28px] text-gray-500' />
        <MdEvent className='text-[28px] text-gray-500' />

        <div className='flex items-center gap-4'>
          <div className='icon_wrapper text-[28px]'>
            <CgMenuGridO />
          </div>

          <div className='icon_wrapper text-[20px]'>
            <BsMessenger />
          </div>

          <div className='icon_wrapper text-[20px]'>
            <IoNotifications />
          </div>

          <img 
            className='w-[44px] cursor-pointer rounded-full'
            src={session.user?.image}
            alt='dp'
            onClick={signOut}
          />
        </div>
    </div>
  )
}

export default Navbar