/* eslint-disable @next/next/no-css-tags */
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import "../../../public/assets/plugins/simplebar/css/simplebar.css";
import "../../../public/assets/plugins/fullcalendar/css/main.min.css";
import "../../../public/assets/plugins/perfect-scrollbar/css/perfect-scrollbar.css";
import "../../../public/assets/plugins/metismenu/css/metisMenu.min.css";
import "../../../public/assets/libraries/gijgo/css/gijgo.min.css";
import "../../../public/assets/plugins/select2/css/select2.min.css";
import "../../../public/assets/plugins/select2/css/select2-bootstrap4.css";
import "../../../public/assets/plugins/datatable/css/dataTables.bootstrap5.min.css";
import "../../../public/assets/css/pace.min.css";
// import "../../public/assets/js/pace.min.js";
import "../../../public/assets/css/bootstrap.min.css";
import "../../../public/assets/css/bootstrap-extended.css";
import "../../../public/assets/css/app.css";
import "../../../public/assets/css/icons.css";
import "../../../public/assets/css/semi-dark.css";
import "../../../public/assets/css/header-colors.css";
import Head from "next/head";
import Script from "next/script";
import Sidebar from "@/components/layouts/Sidebar";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="color-sidebar sidebarcolor3">
      <body className={inter.className}>
        <div className="wrapper">
          <Sidebar />
          <Header />
          <div className="page-wrapper">
            <div className="page-content">{children}</div>
            <div className="overlay toggle-icon"></div>
            <a href="#" className="back-to-top">
              <i className="bx bxs-up-arrow-alt"></i>
            </a>
            <Footer />
          </div>
        </div>

        <Script src="../../assets/js/bootstrap.bundle.min.js"></Script>

        <Script src="../../assets/js/jquery.min.js"></Script>
        <Script src="../../assets/plugins/simplebar/js/simplebar.min.js"></Script>
        <Script src="../../assets/plugins/fullcalendar/js/main.min.js"></Script>
        <Script src="../../assets/plugins/metismenu/js/metisMenu.min.js"></Script>
        <Script src="../../assets/plugins/perfect-scrollbar/js/perfect-scrollbar.js"></Script>
        <Script src="../../assets/libraries/gijgo/js/gijgo.min.js"></Script>
        <Script src="../../assets/plugins/select2/js/select2.min.js"></Script>
        <Script src="../../assets/plugins/datatable/js/jquery.dataTables.min.js"></Script>
        <Script src="../../assets/plugins/datatable/js/dataTables.bootstrap5.min.js"></Script>
        <Script src="../../assets/plugins/datetimepicker/js/legacy.js"></Script>
        <Script src="../../assets/plugins/datetimepicker/js/picker.js"></Script>
        <Script src="../../assets/plugins/datetimepicker/js/picker.time.js"></Script>
        <Script src="../../assets/plugins/datetimepicker/js/picker.date.js"></Script>
        <Script src="../../assets/plugins/bootstrap-material-datetimepicker/js/moment.min.js"></Script>
        <Script src="../../assets/plugins/bootstrap-material-datetimepicker/js/bootstrap-material-datetimepicker.min.js"></Script>

        <Script src="../../assets/js/toggle-button.js"></Script>
        <Script src="../../assets/js/app.js"></Script>
      </body>
    </html>
  );
}
