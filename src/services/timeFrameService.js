import { apiConfig } from "./apiConfig";

export const fetchTimeFrames = {

    getAllSprintData : async (timeFrame) => {
        try {

            const response = await apiConfig.get(`summary-time/IVP-SRM/${timeFrame}`);

            return response.data; 

        } catch (error) {
            console.log(error);
        }
    }
}