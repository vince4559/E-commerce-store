import React from 'react' 
import {useUsersQuery} from '../../features/users/userApiSlice';
import { format } from 'timeago.js';

const NewMembers = () => {
  const {data, isError, isLoading, isSuccess} = useUsersQuery();
  // console.log(data);

  let content;
  if(isLoading){
    return content= <p>Loading...</p>
  }else if(isError){
    return content = <p className='text-red-500'>Data not found</p>
  }else if(isSuccess){
    content =(
    <section className='flex flex-col gap-2'>
      {data.map(user => (
        <div key={user._id} 
        className='p-2 border border-gray-300 rounded-lg h-fit '>
          <div className='flex justify-around gap-5'>
            <p>{user.username}</p>
            <p>{user.email}</p>
            <p>{format(user.createdAt)}</p>
          </div>
        </div>
      ))}
  </section>
    )
  }

  return(
    <div className='flex flex-col gap-2 border border-gray-300 rounded-lg'>
    <h3>New members joined</h3>
      {content}
    </div>
  )
}

export default NewMembers
