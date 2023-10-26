import { BsTelephone } from 'react-icons/bs'
import { FaArrowRight } from 'react-icons/fa'

const Home = () => {

    return (
      <div className='p-7'>
        <h1 className='text-2xl font-semibold'>Home Page</h1>
        <p>Do more with less</p>

        <div className='max-w-[1240px] mx-auto text-white relative'>
        {/* Title and Description */}
        <div className='px-4 py-12'>
          <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>Support</h2>
          <h3 className='text-5xl font-bold py-6 text-center'>Finding the Right Team</h3>
          <p className='py-4 text-3xl text-slate-300'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In repudiandae veritatis ratione
            error tenetur, voluptates architecto possimus ad! Omnis minima ea quidem quisquam unde
            beatae, minus illo et cum vel?
          </p>
        </div>
        {/* Support Options */}
        <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
          {/* Sales */}
          <div className='bg-white rounded-xl shadow-2xl'>
            <div className='p-8'>
              <BsTelephone className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
              <h3 className='font-bold text-2xl my-6'>Sales</h3>
              <p className='text-gray-600 text-xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure
                placeat blanditiis ea sint earum hic iste quibusdam exercitationem.
              </p>
            </div>
            <div className='bg-slate-100 pl-8 py-4'>
              <p className='flex items-center text-indigo-600'>
                Contact Us <FaArrowRight className='w-5 ml-2' />
              </p>
            </div>
          </div>
          {/* Technical Support */}
          <div className='bg-white rounded-xl shadow-2xl'>
            {/* ... (similar structure as Sales) */}
          </div>
          {/* Media Inquiries */}
          <div className='bg-white rounded-xl shadow-2xl'>
            {/* ... (similar structure as Sales) */}
          </div>
        </div>
      </div>
      </div>
    )
}

export default Home