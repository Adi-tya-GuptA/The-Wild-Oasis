import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (data) => {
      // console.log(data, 9, "user data");
      toast.success("New Account created");
    },
  });

  return { signup, isLoading };
}
