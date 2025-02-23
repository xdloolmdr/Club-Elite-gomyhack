import DashboardStats from './components/DashboardStats'
import AmountStats from './components/AmountStats'
import PageStats from './components/PageStats'

import UserGroupIcon  from '@heroicons/react/24/outline/UserGroupIcon'
import UsersIcon  from '@heroicons/react/24/outline/UsersIcon'
import CircleStackIcon  from '@heroicons/react/24/outline/CircleStackIcon'
import CreditCardIcon  from '@heroicons/react/24/outline/CreditCardIcon'
import UserChannels from './components/UserChannels'
import LineChart from './components/LineChart'
import BarChart from './components/BarChart'
import DashboardTopBar from './components/DashboardTopBar'
import { useDispatch } from 'react-redux'
import {showNotification} from '../common/headerSlice'
import DoughnutChart from './components/DoughnutChart'
import { useState } from 'react'

const statsData = [
    {title : "New players", value : "10", icon : <UserGroupIcon className='w-8 h-8'/>, description : "↗︎ 2 (22%)"},
    {title : "Players Sold", value : "$34,545", icon : <CreditCardIcon className='w-8 h-8'/>, description : "5 in the Current month"},
    {title : "Pending Contracts", value : "450", icon : <CircleStackIcon className='w-8 h-8'/>, description : "4 in waiting contracts"},
    {title : "Active Players", value : "24", icon : <UsersIcon className='w-8 h-8'/>, description : "↙ 19 (18%)"},
]



function Dashboard(){

    const dispatch = useDispatch()
 

    const updateDashboardPeriod = (newRange) => {
        // Dashboard range changed, write code to refresh your values
        dispatch(showNotification({message : `Period updated to ${newRange.startDate} to ${newRange.endDate}`, status : 1}))
    }

    return(
        <>
        {/** ---------------------- Select Period Content ------------------------- */}
            <DashboardTopBar updateDashboardPeriod={updateDashboardPeriod}/>
        
        {/** ---------------------- Different stats content 1 ------------------------- */}
            <div className="grid lg:grid-cols-4 mt-2 md:grid-cols-2 grid-cols-1 gap-6">
                {
                    statsData.map((d, k) => {
                        return (
                            <DashboardStats key={k} {...d} colorIndex={k}/>
                        )
                    })
                }
            </div>



        {/** ---------------------- Different charts ------------------------- */}
            <div className="grid lg:grid-cols-2 mt-4 grid-cols-1 gap-6">
                <LineChart />
                <BarChart />
            </div>
            
        {/** ---------------------- Different stats content 2 ------------------------- */}
        
            <div className="grid lg:grid-cols-2 mt-10 grid-cols-1 gap-6">
                <AmountStats />
                <PageStats />
            </div>

        {/** ---------------------- User source channels table  ------------------------- */}
        
            <div className="grid lg:grid-cols-2 mt-4 grid-cols-1 gap-6">
                <UserChannels />
                <DoughnutChart />
            </div>
        </>
    )
}

export default Dashboard