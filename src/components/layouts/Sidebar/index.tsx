"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Sidebar = () => {
  const router = useRouter();

  return (
    <div className="sidebar-wrapper" data-simplebar="true">
      <div className="sidebar-header">
        <div className="flex ml-2">
          <div>
            <Image src="/logo.png" alt="logo icon" width={28} height={28} />
          </div>
          <div>
            <h6 className="text-white mt-1 ml-2">General Ledger</h6>
          </div>
        </div>
        {/* <div style={{ marginLeft: 40 }}>
          <a
            href="dashboard.html"
            className="logo-text"
            style={{ fontFamily: '"Segoe UI Black"' }}
          >
            <span style={{ fontSize: "larger", fontStyle: "italic" }}>DCT</span>
            <span style={{ fontSize: 15, textDecoration: "overline" }}>
              WEB
            </span>
          </a>
        </div> */}
        <div className="toggle-icon ms-auto">
          <i className="bx bx-first-page" />
        </div>
      </div>
      {/*navigation*/}
      <ul className="metismenu" id="menu">
        <li className="menu-label">Menu</li>
        <li>
          <a href="javascript:;" className="has-arrow">
            <div className="parent-icon">
              <i className="bx bx-home" />
            </div>
            <div className="menu-title">Master</div>
          </a>
          <ul>
            <li>
              {" "}
              <a type="button" onClick={() => router.push("/master/reference")}>
                <i className="bx bx-right-arrow-alt" />
                Reference
              </a>
            </li>
            <li>
              {" "}
              <a
                type="button"
                onClick={() => router.push("/master/document-numbering")}
              >
                <i className="bx bx-right-arrow-alt" />
                Document Numbering
              </a>
            </li>
            <li>
              {" "}
              <a type="button" onClick={() => router.push("/master/period")}>
                <i className="bx bx-right-arrow-alt" />
                Period
              </a>
            </li>
            <li>
              {" "}
              <a href="index5.html">
                <i className="bx bx-right-arrow-alt" />
                Account
              </a>
            </li>
            <li>
              {" "}
              <a href="index5.html">
                <i className="bx bx-right-arrow-alt" />
                Col. Flexible Report
              </a>
            </li>
            <li>
              {" "}
              <a href="index5.html">
                <i className="bx bx-right-arrow-alt" />
                Format Flexible Report
              </a>
            </li>
          </ul>
        </li>
      </ul>
      {/*end navigation*/}
    </div>
  );
};

export default Sidebar;
