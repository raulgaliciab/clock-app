import { LocationApiResponse } from '../types/LocationApiResponse';

export const getLocation = async ():Promise<LocationApiResponse> => {
  const API_URL:string = import.meta.env.VITE_LOCATION_URL;
  const API_KEY:string = import.meta.env.VITE_LOCATION_API_KEY;

  try {
    const apiRes:Response = await fetch(API_URL, {
      headers: {
        "apikey": API_KEY
      }
    })

    if (!apiRes.ok) {
      throw new Error(`Error fetching location data: ${apiRes.status}`)
    }

    const { data } = await apiRes.json();

    if (!data?.location?.country?.alpha2 || !data?.location?.city?.name) {
      throw new Error("Incomplete location data received from API");
    }

    return {
      "country": data.location.country.alpha2,
      "city": data.location.city.name
    }
  }
  catch (err) {
    console.error(err)
    throw new Error("Error getting location:")
  }
}