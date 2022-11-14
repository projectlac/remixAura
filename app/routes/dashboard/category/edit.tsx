import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData, useLocation } from "@remix-run/react";
import React from "react";
import { getCategoryById } from "~/utils/category.server";

export const loader: LoaderFunction = async ({ params }) => {
  const category = await getCategoryById(params.id as string);
  return json({ category });
};
function edit() {
  const route = useLocation();
  let id = route.search.split("=")[1];
  const { category } = useLoaderData();
  console.log(category);

  return <div>edit</div>;
}

export default edit;
