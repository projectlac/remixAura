import { LoaderFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import Drawer from "~/components/Drawer/Drawer";

import DashBoardLayout from "~/components/Layouts/DashBoardLayout";
import { requireUserId } from "~/utils/auth.server";
export const loader: LoaderFunction = async ({ request }) => {
  await requireUserId(request);
  return null;
};
export default function dashboard() {
  return (
    <div className="container-admin">
      <div className="drawer">
        <Drawer />
      </div>
      <div className="nav">huhu</div>
      <div className="outlet">
        <Outlet />
      </div>
    </div>
    // <div>
    //   <h1>Dashboard</h1>
    //   <Outlet />
    // </div>
  );
}
