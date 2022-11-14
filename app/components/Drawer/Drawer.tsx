import { useContext } from "react";

import { Link, useLocation } from "@remix-run/react";
import { SidebarContext } from "~/contexts/SidebarContext";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
function SidebarMenu() {
  const { closeSidebar } = useContext(SidebarContext);

  const router = useLocation();
  const currentRoute = router.pathname;

  const link = [
    {
      name: "Quản lý chung",
      child: [
        { name: "Quản trị", url: "/dashboard" },
        { name: " Xem nhanh", url: "/" },
      ],
    },
    {
      name: "Quản lý sản phẩm",
      child: [
        { name: "Danh mục", url: "/dashboard/category" },
        { name: "Sản phẩm", url: "/dashboard/product" },
      ],
    },
  ];
  return (
    <div className="relative z-10 p-8 flex justify-between h-screen flex-col pt-16">
      <ul>
        {link.map((d, i) => (
          <li className="text-gray-50 mb-4 " key={i}>
            <ol className="text-gray-50 py-2 font-bold">{d.name}</ol>

            {d.child.map((j, index) => (
              <Link
                key={index + 99}
                className={`text-gray-50 px-6 py-2 text-sm ${
                  currentRoute === j.url && "active"
                }`}
                to={j.url}
              >
                {j.name}
              </Link>
            ))}
          </li>
        ))}
      </ul>
      <div className="text-gray-50">
        <ArrowBackIosIcon />
        Đăng xuất
      </div>
    </div>
  );
}

export default SidebarMenu;
