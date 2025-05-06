import { TimeApiResponse } from '../types/TimeApiResponse';

export const getTimeAPI = async () :Promise<TimeApiResponse> => {
  const API_URL:string = 'https://worldtimeapi.org/api/ip';

    try {
      const apiRes:Response = await fetch(API_URL);

      if (!apiRes.ok) {
        throw new Error(`Error HTTP: ${apiRes.status}`);
      }

      const data:TimeApiResponse = await apiRes.json();
      return data;
    }

    catch (err) {
      console.error("Error type:", err);
      throw err;
    }
}