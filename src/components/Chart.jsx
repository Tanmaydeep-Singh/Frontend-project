import React from 'react'
import { PieChart } from 'react-minimal-pie-chart';


function Chart() {
  return (
    <div className=' h-full bg-white rounded-lg'>
    <h1 className=' text-2xl m-4'>Overview</h1>
    

<PieChart className=' w-9/12 mx-auto p-0 '
  data={[
    { title: 'One',  value: 10, color: '#FEBE8C'},
    { title: 'Two', value: 22, color: '#B6E2A1' },
    { title: 'Three', value: 40, color: '#59C1BD' },
    { title: 'Four', value: 8, color: '#C13C37' },
    { title: 'Five', value: 20, color: '#D6E4E5' },
    ]}
/>;


    </div>
  )
}

export default Chart