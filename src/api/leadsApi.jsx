const BASE_API = import.meta.env.VITE_BACKEND_API;

export const leadsApi = {
  getAllLeads: async (params) => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_API}/get-all-leads?${params}`,
        {
          method: "GET",
          credentials: "include",
        }
      );
      const data = await res.json();
      if (!res.ok) {
        navigate(data.redirectUrl);
        toast.error(data.message);
      }
      return data;
    } catch (error) {
      throw new Error(error);
    }
  },
};
