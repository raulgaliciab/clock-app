import { LocationApiResponse } from '../types/LocationApiResponse';

export const getLocation = async ():Promise<LocationApiResponse> => {
  const API_URL:string = import.meta.env.VITE_LOCATION_URL;

  try {
    const apiRes:Response = await fetch(API_URL);

    if (!apiRes.ok) {
      throw new Error(`Error fetching location data: ${apiRes.status}`)
    }

    const data = await apiRes.json();

    if (!data?.country_code || !data?.city) {
      throw new Error("Incomplete location data received from API");
    }

    return {
      "country": data.country_code,
      "city": data.city
    }
  }
  catch (err) {
    console.error(err)
    throw new Error("Error getting location:")
  }
}