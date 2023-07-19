import { useAuth } from "../context/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import DashboardSC from "../pages/DashBoard/Dashboard-SC";

import DanhSachHoSoVay from "../pages/HoSoVay/xemHoSo-DanhSachHoSo";
import XemHoSoVay from "../pages/HoSoVay/xemHoSo-Vay";
import XemHoSoHopDongTinDung from "../pages/HoSoVay/xemHoSo-HopDongTinDung";
import XemHoSoGiaiNgan from "../pages/HoSoVay/xemHoSo-HoSoGiaiNgan";
import XemHoSoThamDinhGiaiNgan from "../pages/HoSoVay/xemHoSo-ThamGinhGiaiNgan";

import HoSoChoXuLy from "../pages/CongViecCuaToi/HoSo-ChoXuLy";
import HoSoChoTiepNhan from "../pages/CongViecCuaToi/HoSo-ChoTiepNhan";
import TaoHopDong from "../pages/CongViecCuaToi/TaoHopDong";
import KyHopDong from "../pages/CongViecCuaToi/KyHopDong";
import YeuCauGiaiNgan from "../pages/CongViecCuaToi/YeuCauGiaiNgan";
import BoSungGiaiNgan from "../pages/CongViecCuaToi/BoSungGiaiNgan";
import XuLyGiaiNgan from "../pages/CongViecCuaToi/XuLyGiaiNgan";
import XuLyThamDinh from "../pages/CongViecCuaToi/XuLyThamDinh";
import HoSoVay from "../pages/HoSoVay";
import KhoiTaoHoSo from "../pages/CongViecCuaToi/KhoiTaoHoSo";


// export default function PrivateRoute() {
//     const [auth, setAuth] = useAuth();
//     const [ok, setOk] = useState(false);

//     const navigate = useNavigate();
//     useEffect(() => {

//     })

// export const UserNavigate = () => {
//   const navigate = useNavigate();

//   const navigateTo = (path) => {
//     navigate(path);
//   };

//   return { navigateTo };
// };

var routes = [
  {
    path: "/dashboard-sc",
    name: "Dashboard",
    icon: "",
    component: <DashboardSC />,
    layout: "",
  },
  {
    path: "/danh-sach-ho-so-vay",
    name: "Danh sách hồ sơ vay",
    icon: "",
    component: <DanhSachHoSoVay />,
    layout: "",
  },
  {
    path: "/danh-sach-ho-so-vay/xem-ho-so-vay",
    name: "",
    icon: "",
    component: <XemHoSoVay />,
    layout: "",
  },
  {
    path: "/danh-sach-ho-so-vay/xem-ho-so-hop-dong-tin-dung",
    name: "",
    icon: "",
    component: <XemHoSoHopDongTinDung />,
    layout: "",
  },
  {
    path: "/danh-sach-ho-so-vay/xem-ho-so-giai-ngan",
    name: "",
    icon: "",
    component: <XemHoSoGiaiNgan />,
    layout: "",
  },
  {
    path: "/danh-sach-ho-so-vay/xem-ho-so-tham-dinh-giai-ngan",
    name: "",
    icon: "",
    component: <XemHoSoThamDinhGiaiNgan />,
    layout: "",
  },
  {
    path: "/ho-so-cho-tiep-nhan",
    name: "",
    icon: "",
    component: <HoSoChoTiepNhan />,
    layout: "",
  },
  {
    path: "/ho-so-cho-xu-ly",
    name: "",
    icon: "",
    component: <HoSoChoXuLy />,
    layout: "",
  },
  {
    path: "/ho-so-cho-xu-ly/tao-hop-dong",
    name: "",
    icon: "",
    component: <TaoHopDong />,
    layout: "",
  },
  {
    path: "/ho-so-cho-xu-ly/ky-hop-dong",
    name: "",
    icon: "",
    component: <KyHopDong />,
    layout: "",
  },
  {
    path: "/ho-so-cho-xu-ly/yeu-cau-giai-ngan",
    name: "",
    icon: "",
    component: <YeuCauGiaiNgan />,
    layout: "",
  },
  {
    path: "/ho-so-cho-xu-ly/bo-xung-giai-ngan",
    name: "",
    icon: "",
    component: <BoSungGiaiNgan />,
    layout: "",
  },
  {
    path: "/ho-so-cho-xu-ly/xu-ly-giai-ngan",
    name: "",
    icon: "",
    component: <XuLyGiaiNgan />,
    layout: "",
  },
  {
    path: "/ho-so-cho-xu-ly/xu-ly-tham-dinh",
    name: "",
    icon: "",
    component: <XuLyThamDinh />,
    layout: "",
  },
  {
    path: "/ho-so-cho-xu-ly/xem-ho-so-vay",
    name: "",
    icon: "",
    component: <KhoiTaoHoSo />,
    layout: "",
  },
  {
    path: "/ho-so-vay",
    name: "",
    icon: "",
    component: <HoSoVay />,
    layout: "",
  },
];

// return auth?.token ? routes : <Navigate to="/login" replace />;
export default routes;

export class Router {
  static danh_sach_ho_so_vay = "/danh-sach-ho-so-vay";
  static xem_ho_so_vay = "/danh-sach-ho-so-vay/xem-ho-so-vay";
  static xem_ho_so_hop_dong_tin_dung = "/danh-sach-ho-so-vay/xem-ho-so-hop-dong-tin-dung";
  static xem_ho_so_giai_ngan = "/danh-sach-ho-so-vay/xem-ho-so-giai-ngan";
  static xem_ho_so_tham_dinh_giai_ngan = "/danh-sach-ho-so-vay/xem-ho-so-tham-dinh-giai-ngan";
  static ho_so_cho_xu_ly = "/ho-so-cho-tiep-nhan";
}

