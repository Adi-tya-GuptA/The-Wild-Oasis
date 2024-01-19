import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getMyBooking } from "../../services/apiBookings";
import { useGuestUser } from "../guests/useGuestUser";

export function useMyBooking() {
  // const { id } = useParams();
  // console.log(id, "booking.js", 7);
  const { guest } = useGuestUser();
  const id = guest[0]?.id;
  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery({
    queryKey: ["booking", id],
    queryFn: () => getMyBooking(id),
    retry: false,
  });
  // console.log(booking, 17, "booking.js");
  return { isLoading, error, bookings };
}
