import { LoaderFunction } from "@remix-run/node";
import { IChildren } from "~/module/CommonTypes";
import { requireUserId } from "~/utils/auth.server";

const DashBoardLayout = ({ children }: IChildren) => {
  return (
    <>
      <main>{children}</main>
    </>
  );
};

export default DashBoardLayout;
