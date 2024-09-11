import React from 'react'
import UserTable from '@/components/user/User'


interface User {
  id: number;
  name: string;
  profileImage: string;
  budget: number;
}

const mockUsers: User[] = [
  {
    id: 1,
    name: 'John Doe',
    profileImage: 'https://randomuser.me/api/portraits/men/1.jpg',
    budget: 1500,
  },
];

const User  = () => {
  return (
    <div>
      <UserTable users={mockUsers} />
      </div>
  )
}

export default User 
