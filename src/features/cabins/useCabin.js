import { useQuery } from "@tanstack/react-query";

import { getCabin } from "../../services/apiCabins";

export function useCabin(id) {
  const {
    isLoading,
    data: cabin,
    error,
  } = useQuery({
    queryKey: ["cabin"],
    queryFn: getCabin(id),
  });
  return { isLoading, cabin, error };
}
