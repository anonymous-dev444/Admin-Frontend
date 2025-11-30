const BASE_URL = import.meta.env.VITE_BACKEND_API; //Backend Api Url

//Get Particuler 1 User Fron User List
export const usersApi = {
  
  getUserById: async (userId) => {
    try {
      const res = await fetch(`${BASE_URL}/get-user/${userId}`, {
        method: "GET",
        credentials: "include",
      });

      if (!res.ok) {
        throw new Error("Failed to fetch user");
      }
      const data = await res.json();
      return data.user;
    } catch (err) {
      throw err;
    }
  },
  // 🔹 Get all users with pagination & filters
  getAllUsers: async (params = "") => {
    try {
      const res = await fetch(`${BASE_URL}/get-all-users?${params}`, {
        method: "GET",
        credentials: "include",
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to fetch users");
      }
      return {
        users: data.users || [],
        totalPages: data.totalPages || 1,
        currentPage: data.currentPage || 1,
      };
    } catch (err) {
      throw err;
    }
  },
  // 🔹 Delete any user by ID
  deleteUser: async (route, id) => {
    try {
      const res = await fetch(`${BASE_URL}/${route}/${id}`, {
        method: "DELETE",
        credentials: "include",
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to delete user");
      }

      return data; // { message: "User deleted successfully!" }
    } catch (err) {
      throw err;
    }
  },
  // ✅ Update user by ID
  updateUser: async (id, formData) => {
    try {
      const data = new FormData();
      for (let key in formData) {
        if (formData[key] !== "" && formData[key] !== null) {
          data.append(key, formData[key]);
        }
      }

      const res = await fetch(`${BASE_URL}/edit-user/${id}`, {
        method: "PUT",
        credentials: "include",
        body: data,
      });

      const result = await res.json();

      if (!res.ok) throw new Error(result.message || "Update failed");

      return result; // { message, user }
    } catch (err) {
      throw err;
    }
  },

 
  // ✅ Change user password
  changePassword: async (id, password) => {
    try {
      const res = await fetch(`${BASE_URL}/change-password/${id}`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Password change failed");
      return data; // { message }
    } catch (err) {
      console.error("Error changing password:", err);
      toast.error(err.message || "Error changing password");
      throw err;
    }
  },




  
};