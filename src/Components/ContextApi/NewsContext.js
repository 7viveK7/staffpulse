import React, {useContext, useEffect, useState} from 'react';

const EmployeeContext = React.createContext();

function EmployeeProvider({children}) {
  const [announcements, setAnnouncements] = useState([]);
  const [newAnnouncement, setNewAnnouncement] = useState({
    title: '',
    description: '',
    publishedAt: '2023-04-06T12',
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

  const addNewAnnouncement = () => {
    setAnnouncements(announcements => [newAnnouncement, ...announcements]);
    setNewAnnouncement({title: '', description: ''});
  };

  const value = {
    setNewAnnouncement,
    announcements,
    newAnnouncement,
    addNewAnnouncement,
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

export {useAnnouncementContext, EmployeeProvider};
