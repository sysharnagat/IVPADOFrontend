import { apiConfig } from "./apiConfig";

export const fetchTimeFrames = {

    getAllSprintData : async (timeFrame) => {
        try {
// https://localhost:7043/api/Spillage/summary-last/ivp-srm/5
            // const response = await apiConfig.get(`burnup-all/IVP-SRM/${timeFrame}`);

            const response = await apiConfig.get(`burnup-all/IVP-SRM/${timeFrame}`);

            return response.data; 

        } catch (error) {
            console.log(error);
        }
    }
}