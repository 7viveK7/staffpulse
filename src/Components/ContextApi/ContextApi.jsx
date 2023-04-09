import React from 'react';

const EmployeeContext = React.createContext();
function EmployeeProvider() {
  const value = {newAnnouncement, formData};

  return (
    <EmployeeContext.Provider value={value}>
      {children}
    </EmployeeContext.Provider>
  );
}

export {EmployeeContext, EmployeeProvider};
