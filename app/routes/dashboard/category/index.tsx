import { json, LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import DialogAdd from "~/components/Management/Category/Action/DialogAdd";
import StickyHeadTable from "~/components/Management/Category/StickyHeadTable";
import { getCategory } from "~/utils/category.server";

export const loader: LoaderFunction = async () => {
  const category = await getCategory();
  return json({ category });
};
function CategoryIndex() {
  const { category } = useLoaderData();

  return (
    <div>
      <div className="flex justify-between">
        <div className="dashboard-header text-4xl font-bold mb-8">
          Danh mục sản phẩm
        </div>
        <div>
          <Link to={"/dashboard/category/add"}>
            <DialogAdd />
          </Link>
        </div>
      </div>
      <StickyHeadTable data={category} />
    </div>
  );
}

export default CategoryIndex;
