import RadialChart from '@/components/RadialChart';
import UserCard from '@/components/UserCard';
import React from 'react';

export default function page() {
  return (
    <div className='p-4 flex gap-4 flex-col md:flex-row'>
      {/* Left */}
      <div className='w-full lg:w-2/3 flex flex-col gap-8'>
      <div className="flex gap-4 justify-between flex-wrap">
        <UserCard type="student"/>
        <UserCard type="teacher"/>
        <UserCard type="parent"/>
        <UserCard type="staff"/>
      </div>
      {/* MIDDLE CHART */}
      <div className='flex gap-4 flex-col lg:flex-row'>
        {/* COUNT CHART */}
      <div className='w-full lg:w-1/3 h-[450px]'>
      <RadialChart/>
      </div>
      {/* ATTENDANCE CHART */}
      <div className='w-full lg:w-2/3 h-[450px]'></div>
      </div>
      {/* BOTTOM CHART */}
      <div className=''></div>
      </div>
      {/* Right */}
      <div className='w-full lg:w-1/3'>Right</div>
    </div>
  )
}
