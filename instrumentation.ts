import dbConnect from "./configs/db";

export async function register() {
  await dbConnect();
}
