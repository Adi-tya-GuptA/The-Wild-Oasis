import supabase from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.log("cabins can not be loaded");
  }

  return data;
}

export async function createCabin(neweCabin) {
  const { data, error } = await supabase
    .from("cabins")
    .insert([neweCabin])
    .select();
  if (error) {
    console.log("cabins can not be loaded");
  }
  return data;
}
export async function deleteCabin(id) {
  const { error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.log("cabins can not be loaded");
  }
}
