export const apiCall = async <R>(url: string) => {
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const response = await fetch(`${BASE_URL}/${url}`);
  return response.json() as Promise<R>;
};
