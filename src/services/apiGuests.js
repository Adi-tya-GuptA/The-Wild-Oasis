import supabase from "./supabase";

export async function CreateGuest(guests) {
  const { error } = await supabase.from("guests").insert(guests);
  if (error) console.log(error.message);
}

export async function getGuest(id) {
  // console.log(id);
  const { data, error } = await supabase
    .from("guests")
    .select("*")
    .eq("id", id)
    .single();
  // console.log(data);
  if (error) {
    console.error(error);
    throw new Error("guest not found");
  }

  return data;
}

export async function getGuests({ page = 1 } = {}) {
  let query = supabase.from("guests").select("*", {
    count: "exact",
  });
  if (page) {
    console.log(13, page);
    const from = (page - 1) * 10;
    const to = from + 10 - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;
  if (error) {
    console.log("guests can not be loaded");
  }

  return { data, count };
}
