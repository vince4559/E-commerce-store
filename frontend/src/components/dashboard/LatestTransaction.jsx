import React from 'react'

const LatestTransaction = () => {
  return (
    <div> 
        <table className='w-full p-3'>
            <tr className='flex justify-between gap-4 px-3' >
                <th>Customer</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
            </tr>
            <tr className='flex justify-between gap-5 px-3'>
                <td>susan carol </td>
                <td>2-june-2021</td>
                <td>$200</td>
                <td>Pending</td>
            </tr>
        </table>
    </div>
  )
}

export default LatestTransaction
