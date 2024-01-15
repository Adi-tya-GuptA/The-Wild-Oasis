import supabase, { supabaseUrl } from "./supabase";

export async function getCabin(id) {
  const { data, error } = await supabase
    .from("cabins")
    .select("*")
    .eq("id", id)
    .single();
  // console.log(data);
  if (error) {
    console.error(error);
    throw new Error("cabin not found");
  }

  return data;
}

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.log("cabins can not be loaded");
  }

  return data;
}

export async function createCabin(neweCabin, id) {
  const hasImagePath = neweCabin.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${neweCabin.image.name}`.replaceAll(
    "/",
    ""
  );

  const imagePath = hasImagePath
    ? neweCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  /*
  https://lydtklrinqsqkdnycchu.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg
  */

  let query = supabase.from("cabins");
  if (!id) query = query.insert([{ ...neweCabin, image: imagePath }]);

  if (id)
    query = query
      .update({ ...neweCabin, image: imagePath })
      .eq("id", id)
      .select();

  const { data, error } = await query.select().single();

  if (error) {
    console.log("cabins can not be loaded");
  }

  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, neweCabin.image);

  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
  }

  return data;
}
export async function deleteCabin(id) {
  const { error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.log("cabins can not be loaded");
  }
}
