import { useQuery, useQueryClient } from "@tanstack/react-query";

import { getGuests } from "../../services/apiGuests";
import { useSearchParams } from "react-router-dom";

export function useGuests() {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));
  const {
    isLoading,
    data: { data: guests, count } = {},
    error,
  } = useQuery({
    queryKey: ["guests", page],
    queryFn: () => getGuests({page}),
  });
  const pageCount = Math.ceil(count / 10);
  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["guests", page + 1],
      queryFn: () => getGuests({ page: page + 1 }),
    });
  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["guests", page - 1],
      queryFn: () => getGuests({ page: page - 1 }),
    });
  // console.log(guests, count);
  return { isLoading, guests, error, count };
}
