import React, { createContext, useState, useContext, useEffect } from 'react'
import { fetchTimeFrames } from '../services/timeFrameService';

const spillageContext = createContext();

const SpillageProvider = ({ children }) => {

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try{
          const res = await fetchTimeFrames.getAllSprintData(5);
          console.log('SpillageProvider: fetched data', res);
          setData(res);
        }catch(error){
          console.log(error);
        } 
    }
    
  return (
    <spillageContext.Provider value={{ error, setError, loading, setLoading, data }}>
      {children}
    </spillageContext.Provider>
  )
}

export const useSpillageContext = () => {
    return useContext(spillageContext);
}
        
export default SpillageProvider;

