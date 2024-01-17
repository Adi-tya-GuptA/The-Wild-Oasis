import { useQuery } from "@tanstack/react-query";

import { getCabin } from "../../services/apiCabins";
import { useParams } from "react-router-dom";

export function useCabin() {
  const { id } = useParams();
  const {
    isLoading,
    data: cabin,
    error,
  } = useQuery({
    queryKey: ["cabin", id],
    queryFn: () => getCabin(id),
    retry: false,
  });
  // console.log(cabin);
  return { isLoading, cabin, error };
}
