import { LoaderFunction, redirect } from "@remix-run/node";

import { deleteCategory } from "~/utils/category.server";

export const loader: LoaderFunction = async ({ params }) => {
  await deleteCategory(params.id as string);
  return redirect("/dashboard/category");
};

function DeleteCategory() {
  return <></>;
}

export default DeleteCategory;
