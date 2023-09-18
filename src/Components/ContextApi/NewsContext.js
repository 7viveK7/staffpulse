import React, { useContext, useEffect, useState } from 'react';
const employeesData = [
  {
    id: 1,
    name: 'John Doe',
    designation: 'Manager',
    imageUrl:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    email: 'johndoe@example.com',
    phone: '+1 234 567 8901',
    address: '123 Main Street, Anytown, USA',
    salary: 75000,
    hireDate: '2022-01-01',
    department: 'Engineering',
    supervisor: 'Jane Smith',
  },
  {
    id: 2,
    name: 'Jane Smith',
    designation: 'Engineer',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU',
    email: 'johndoe@example.com',
    phone: '+1 234 567 8901',
    address: '123 Main Street, Anytown, USA',
    salary: 75000,
    hireDate: '2022-01-01',
    department: 'Engineering',
    supervisor: 'Jane Smith',
  },
  {
    id: 3,
    name: 'Bob Johnson',
    designation: 'Sales Representative',
    imageUrl: 'https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg',
    email: 'johndoe@example.com',
    phone: '+1 234 567 8901',
    address: '123 Main Street, Anytown, USA',
    salary: 75000,
    hireDate: '2022-01-01',
    department: 'Engineering',
    supervisor: 'Jane Smith',
  },
  {
    id: 4,
    name: 'Alice Williams',
    designation: 'Designer',
    imageUrl:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    email: 'johndoe@example.com',
    phone: '+1 234 567 8901',
    address: '123 Main Street, Anytown, USA',
    salary: 75000,
    hireDate: '2022-01-01',
    department: 'Engineering',
    supervisor: 'Jane Smith',
  },
  {
    id: 5,
    name: 'Mike Brown',
    designation: 'Developer',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU',
    email: 'johndoe@example.com',
    phone: '+1 234 567 8901',
    address: '123 Main Street, Anytown, USA',
    salary: 75000,
    hireDate: '2022-01-01',
    department: 'Engineering',
    supervisor: 'Jane Smith',
  },
  {
    id: 6,
    name: 'Sarah Davis',
    designation: 'Marketing Specialist',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU',
    email: 'johndoe@example.com',
    phone: '+1 234 567 8901',
    address: '123 Main Street, Anytown, USA',
    salary: 75000,
    hireDate: '2022-01-01',
    department: 'Engineering',
    supervisor: 'Jane Smith',
  },
  {
    id: 7,
    name: 'Mike Brown',
    designation: 'Developer',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU',
    email: 'johndoe@example.com',
    phone: '+1 234 567 8901',
    address: '123 Main Street, Anytown, USA',
    salary: 75000,
    hireDate: '2022-01-01',
    department: 'Engineering',
    supervisor: 'Jane Smith',
  },
  {
    id: 8,
    name: 'Sarah Davis',
    designation: 'Marketing Specialist',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU',
    email: 'johndoe@example.com',
    phone: '+1 234 567 8901',
    address: '123 Main Street, Anytown, USA',
    salary: 75000,
    hireDate: '2022-01-01',
    department: 'Engineering',
    supervisor: 'Jane Smith',
  },
  {
    id: 9,
    name: 'Mike Brown',
    designation: 'Developer',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU',
    email: 'johndoe@example.com',
    phone: '+1 234 567 8901',
    address: '123 Main Street, Anytown, USA',
    salary: 75000,
    hireDate: '2022-01-01',
    department: 'Engineering',
    supervisor: 'Jane Smith',
  },
  {
    id: 10,
    name: 'Sarah Davis',
    designation: 'Marketing Specialist',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU',
    email: 'johndoe@example.com',
    phone: '+1 234 567 8901',
    address: '123 Main Street, Anytown, USA',
    salary: 75000,
    hireDate: '2022-01-01',
    department: 'Engineering',
    supervisor: 'Jane Smith',
  },
  {
    id: 11,
    name: 'Mike Brown',
    designation: 'Developer',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU',
    email: 'johndoe@example.com',
    phone: '+1 234 567 8901',
    address: '123 Main Street, Anytown, USA',
    salary: 75000,
    hireDate: '2022-01-01',
    department: 'Engineering',
    supervisor: 'Jane Smith',
  },
  {
    id: 12,
    name: 'Sarah Davis',
    designation: 'Marketing Specialist',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU',
    email: 'johndoe@example.com',
    phone: '+1 234 567 8901',
    address: '123 Main Street, Anytown, USA',
    salary: 75000,
    hireDate: '2022-01-01',
    department: 'Engineering',
    supervisor: 'Jane Smith',
  },
  {
    id: 13,
    name: 'Mike Brown',
    designation: 'Developer',
    email: 'johndoe@example.com',
    phone: '+1 234 567 8901',
    address: '123 Main Street, Anytown, USA',
    salary: 75000,
    hireDate: '2022-01-01',
    department: 'Engineering',
    supervisor: 'Jane Smith',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU',
  },
  {
    id: 14,
    name: 'Sarah Davis',
    designation: 'Marketing Specialist',
    email: 'johndoe@example.com',
    phone: '+1 234 567 8901',
    address: '123 Main Street, Anytown, USA',
    salary: 75000,
    hireDate: '2022-01-01',
    department: 'Engineering',
    supervisor: 'Jane Smith',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU',
  },
];
const EmployeeContext = React.createContext();

function EmployeeProvider({ children }) {
  const [announcements, setAnnouncements] = useState([]);
  const [newAnnouncement, setNewAnnouncement] = useState({
    title: '',
    description: '',
    publishedAt: '2023-04-06T12',
  });

  const [employeesDetails, setEmployeesDetails] = useState(employeesData);
  const [newEmployee, setNewEmployee] = useState({
    id: 14,
    name: '',
    designation: '',
    email: '',
    phone: '',
    address: '',
    salary: '',
    hireDate: '',
    department: '',
    supervisor: '',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU',
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          'https://newsapi.org/v2/everything?q=bitcoin&apiKey=6016a5388f634b0ab29204bdbcb7b8b2',
        );
        const data = await response.json();
        setAnnouncements(data?.articles);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);
  const addEmployee = () => {
    newEmployee.name &&
      setEmployeesDetails(employeeDetails => [newEmployee, ...employeeDetails]);
    setNewEmployee({
      id: '',
      name: '',
      designation: '',
      email: '',
      phone: '',
      address: '',
      salary: '',
      hireDate: '',
      department: '',
      supervisor: '',
      imageUrl: '',
    });
  };
  const addNewAnnouncement = () => {
    newAnnouncement.description &&
      setAnnouncements(announcements => [newAnnouncement, ...announcements]);
    setNewAnnouncement({ title: '', description: '' });
  };

  const value = {
    setNewAnnouncement,
    announcements,
    newAnnouncement,
    addEmployee,
    employeesDetails,
    addNewAnnouncement,
    newEmployee,
    setNewEmployee,
  };

  return (
    <EmployeeContext.Provider value={value}>
      {children}
    </EmployeeContext.Provider>
  );
}

const useAnnouncementContext = () => {
  const context = useContext(EmployeeContext);

  if (!context) {
    throw new Error('No Context Provider found!');
  }

  return context;
};

export { useAnnouncementContext, EmployeeProvider };
