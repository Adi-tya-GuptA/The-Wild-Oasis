import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getBooking } from "../../services/apiBookings";

export function useBooking() {
  const { id } = useParams();
  console.log(id, "booking.js", 7);
  const {
    isLoading,
    data: booking,
    error,
  } = useQuery({
    queryKey: ["booking", id],
    queryFn: () => getBooking(id),
    retry: false,
  });
  console.log(booking, 17, "booking.js");
  return { isLoading, error, booking};
}
