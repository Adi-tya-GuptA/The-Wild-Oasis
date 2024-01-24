import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import { createGuests } from "../../services/apiGuests";
import { CreateGuest,getUserGuest } from "../../services/apiGuests";
import toast from "react-hot-toast";
import { useUser } from "../authentication/useUser";

export function useCreateGuest1() {
  const queryClient = useQueryClient();
  const { user } = useUser();
  // const { id } = { user };
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
  const {
    isLoading,
    data: guest,
   
  } = useQuery({
    queryKey: ["guest", user.id],
    queryFn: () => getUserGuest(user.id),
    retry: false,
  });

  return { isCreating, createGuest,guest };
}
/**
 * import { useQuery } from "@tanstack/react-query";
// import { useParams } from "react-router-dom";
import { getUserGuest } from "../../services/apiGuests";
import { useUser } from "../authentication/useUser";
export function useGuestUser() {
  const { user } = useUser();
  //   const { id } = { user };
  //   const userId = JSON.stringify(user.id);
  //   console.log(userId, user.id, "guest.js", 7);
  const {
    isLoading,
    data: guest,
    error,
  } = useQuery({
    queryKey: ["guest", user.id],
    queryFn: () => getUserGuest(user.id),
    retry: false,
  });
  //   console.log(guest[0].id, 17);
  return { isLoading, error, guest };
}

 */