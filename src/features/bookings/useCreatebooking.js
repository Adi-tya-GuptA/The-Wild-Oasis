import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useCreateBooking() {
  const queryClient = useQueryClient();

  const { mutate: CreateBooking, isLoading: isCreating } = useMutation({
    mutationFn: (newBooking) => createBooking(newBooking),
    onSuccess: () => {
      toast.success("new booking created suucesfully!!");
      queryClient.invalidateQueries({
        queryKey: ["bookings"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isCreating, CreateBooking };
}
