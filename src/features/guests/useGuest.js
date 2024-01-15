import { useQuery } from "@tanstack/react-query";
// import { useParams } from "react-router-dom";
import { getGuest } from "../../services/apiGuests";

export function useGuest(id) {
  // const { id } = useParams();
  console.log(id, "guest.js", 7);
  const {
    isLoading,
    data: guest,
    error,
  } = useQuery({
    queryKey: ["guest", id],
    queryFn: () => getGuest(id),
    retry: false,
  });
  // console.log(guest, 17, "booking.js");
  return { isLoading, error, guest };
}
