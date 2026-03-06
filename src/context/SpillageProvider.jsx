import React, { createContext, useState, useContext, useEffect } from 'react'
import { fetchTimeFrames } from '../services/timeFrameService';
import { fetchNSrpints } from '../services/nSprintsService';

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
          const res = await fetchNSrpints.getAllSprintData(5);
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

