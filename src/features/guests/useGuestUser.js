import { useQuery } from "@tanstack/react-query";
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
