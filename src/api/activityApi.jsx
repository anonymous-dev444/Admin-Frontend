import { leadsApi } from "./leadsApi";

const BASE_API = import.meta.env.VITE_BACKEND_API;

export const activityApi = {
  getUsersActivites: async (params) => {
try {
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_API}/get-users-activities?${params}`,
        {
          method: "GET",
          credentials: "include",
        }
      );
      const data = await res.json();
      if (!res.ok) {
        data.redirectUrl ? navigate(data.redirectUrl) : "";
      }
      return data;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  },
};
