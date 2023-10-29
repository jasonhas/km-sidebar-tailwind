import {useState} from 'react'
import {Link} from 'react-router-dom'
import { BsArrowLeftShort, BsSearch, BsChevronDown, BsFillImageFill, BsReverseLayoutTextSidebarReverse, BsPerson, BsRocketTakeoff, BsGlobe } from 'react-icons/bs'
import { AiOutlineFileText, AiOutlineBarChart, AiOutlineMail, AiOutlineSetting, AiOutlineLogout } from 'react-icons/ai'
import { RiDashboardFill } from 'react-icons/ri'

const SideNav = () => {
    const [open, setOpen] = useState(true)
    const [submenuOpen, setSubmenuOpen] = useState(false)
  
    const Menus = [
      {title: "Dashboard", link:"/dashboard"},
      {title: "Aviator", link:"/aviator", icon: <BsRocketTakeoff/>},
      {title: "Pages", link:"/pages", icon: <AiOutlineFileText/>},
      {title: "Media", link:"/media", spacing: true, icon: <BsFillImageFill/> },
      {title: "Projects",
        link:"/link",
        icon: <BsReverseLayoutTextSidebarReverse/>,
        submenu: true,
        submenuItems: [
          { title: "Submenu 1"},
          {title: "Submenu 2"},
          { title: "Submenu 3"},
        ],
      },
      { title: "Analytics", link:"/analytics", icon: <AiOutlineBarChart/> },
      { title: "Communication", link:"/communications", icon: <AiOutlineMail/> },
      { title: "Profile", link:"/profile", spacing: true, icon: <BsPerson/> },
      { title: "Setting", link:"/settings", icon: <AiOutlineSetting/> },
      { title: "Logout", link:"/logout", icon: <AiOutlineLogout/> },
    ]
    return (
        <div className={`bg-dark-purple h-screen p-5 pt-8 ${open ? "w-72" : "w-20"} duration-300 relative`}>
        <BsArrowLeftShort className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer ${!open && "rotate-180"}`} onClick={() => setOpen(!open)}/>
         <div className="inline-flex">
         <Link to="/"><BsGlobe className={`text-4xl text-white rounded cursor-pointer block float-left mr-2 duration-500 ${open && "rotate-[360deg]"}`}/></Link>
         <h1 className={`text-white origin-left font-medium text-2xl duration-300 ${!open && "scale-0"}`}>Innovate KM</h1>
         </div>
 
         <div className={`flex items-center rounded-md bg-light-white mt-6 ${!open ? "px-2.5": "px-4"} py-2`}>
           <BsSearch className={`text-white text-lg block float-left cursor-pointer ${open && "mr-2"}`}/>
 
           <input type={"search"} placeholder='Search' className={`text-base bg-transparent w-full text-white focus:outline-none ${!open && "hidden"}`} />
         </div>
 
         <ul className='pt-2'>
           {Menus.map((menu, index) => (
             <>
              <Link to={menu.link}>            
               <li key={index} className={`text-gray-300 text-sm flex items-center gap-x-4 hover:bg-light-white rounded-md p-2 ${menu.spacing ? "mt-9" : "mt-2"}`}>
                 <span className='text-2xl block float-left'>
                   {menu.icon ? menu.icon : <RiDashboardFill/>}
                 </span>
                 <span className={`text-base font-medium flex-1 duration-200 ${!open && "hidden"}`}>{menu.title}</span>
                 {menu.submenu && open && (
                   <BsChevronDown className={`${submenuOpen && "rotate-180"}`} onClick={() => setSubmenuOpen(!submenuOpen)}/>
                 )}
               </li>
               </Link>
               {menu.submenu && submenuOpen && open && (
                 <ul>
                   {menu.submenuItems.map((submenuItem, index) => (
                     <li key={index} className='text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-light-white rounded-md'>
                       <Link to="/">{submenuItem.title}</Link>
                     </li>
                   ))}
                 </ul>
               )}
             </>
           ))}
         </ul>
       </div>
    )
}

export default SideNav