import React from 'react'
import { Link } from 'react-router-dom'
import SmallWidget from './dashboard/SmallWidget'
import Chart from './dashboard/Chart'
import NewMembers from './dashboard/NewMembers'
import LatestTransaction from './dashboard/LatestTransaction'



const Dashboard = () => {
  return (
    <section>
        <h3>welcome to Fash_dashboard!!!</h3>
        <div className='grid w-full h-full grid-cols-5 gap-3 p-2'>
              {/* grid for link button */}
            <div className='flex flex-col w-full p-2 bg-gray-800'>
              <Link >
               <div className='dash_link btn'>
               <span className='mx-3 text-black'>icon</span>
               <p className='hidden text-black md:flex'>Home</p>
               </div> 
              </Link>
            </div>
                {/* grid for widget */}
            <div className='col-span-4 gap-3 p-3 bg-gray-400 '>
              <div className='item'>
                <SmallWidget title={'Revenue'} amount={'$5,415'} percent={'+11.41%'} />
                <SmallWidget title={'Sales'} amount={'3k+'} percent={'+11.41%'} />
                <SmallWidget title={'Cost'} amount={'$8,890'} percent={'+11.41%'} />
              </div>
              <Chart />
              <div className='items-center item'>
                <NewMembers />
                <LatestTransaction />
              </div>
            </div>
        </div>
    </section>
  )
}

export default Dashboard
