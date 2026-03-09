import { apiConfig } from "./apiConfig";

export const fetchNSrpints = {

    getAllSprintData : async (nSprints) => {
        try {
            const response = await apiConfig.get(`/summary-last/IVP-SRM/${nSprints}`);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
}