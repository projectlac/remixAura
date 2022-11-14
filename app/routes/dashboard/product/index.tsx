import React from "react";
import StickyHeadTable from "~/components/Management/Product/StickyHeadTable";

function CategoryIndex() {
  return (
    <div>
      <div className="dashboard-header text-4xl font-bold mb-8">
        Danh sách sản phẩm
      </div>
      <StickyHeadTable />
    </div>
  );
}

export default CategoryIndex;
