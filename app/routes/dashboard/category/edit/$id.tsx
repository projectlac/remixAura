import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData, useLocation } from "@remix-run/react";
import React from "react";
import { getCategoryById } from "~/utils/category.server";

export const loader: LoaderFunction = async ({ params }) => {
  console.log("param", params.id);
  const category = await getCategoryById("63720baee91dd5185f167f8b");
  return json({ category });
};
function edit() {
  const route = useLocation();
  let id = route.search.split("=")[1];
  const { category } = useLoaderData();
  // console.log(category);

  return <div>edit</div>;
}

export default edit;
