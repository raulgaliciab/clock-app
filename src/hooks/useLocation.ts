import { useEffect, useState } from "react";
import { LocationApiResponse } from "../types/LocationApiResponse";
import { getLocation } from "../utils/getLocation";

export const useLocation = () => {
  const [ location, setLocation ] = useState<LocationApiResponse | null>(null);
  const [ loading, setLoading ] = useState<boolean>(true);
  const [ error, setError ] = useState<string | null>(null);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const data = await getLocation();
        setLocation(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchLocation();
  }, []);

  return { location, loading, error };
};
