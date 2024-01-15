import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { createGuests } from "../../services/apiGuests";
import { CreateGuest } from "../../services/apiGuests";
import toast from "react-hot-toast";

export function useCreateGuest() {
  const queryClient = useQueryClient();

  const { mutate: createGuest, isLoading: isCreating } = useMutation({
    mutationFn: (newGuest) => CreateGuest(newGuest),
    onSuccess: () => {
      toast.success("new guest created suucesfully!!");
      queryClient.invalidateQueries({
        queryKey: ["guests"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isCreating, createGuest };
}
