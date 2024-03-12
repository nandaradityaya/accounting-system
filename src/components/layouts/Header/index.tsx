import React from "react";

const Header = () => {
  return (
    <header>
      <div className="topbar d-flex align-items-center">
        <nav className="navbar navbar-expand">
          <div className="mobile-toggle-menu">
            <i className="bx bx-menu" />
          </div>
          <div className="top-menu ms-auto">
            <ul className="navbar-nav align-items-center">
              <li
                className="nav-item dropdown dropdown-large"
                style={{ display: "none" }}
              >
                <a
                  className="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {" "}
                  <span className="alert-count">8</span>
                  <i className="lni lni-headphone" />
                </a>
                <div className="dropdown-menu dropdown-menu-end">
                  <a href="javaScript:;">
                    <div className="msg-header">
                      <p className="msg-header-title">•</p>
                      <p className="msg-header-clear ms-auto">•</p>
                    </div>
                  </a>
                  <div className="header-message-list">
                    <a className="dropdown-item" href="javaScript:;">
                      <div className="d-flex align-items-center">
                        <div className="user-online">
                          <img
                            src="assets/images/avatars/avatar-1.png"
                            className="msg-avatar"
                            alt="user avatar"
                          />
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="msg-name">
                            • <span className="msg-time float-end">•</span>
                          </h6>
                          <p className="msg-info">•</p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <a href="javaScript:;">
                    <div className="text-center msg-footer">•</div>
                  </a>
                </div>
              </li>
              <li
                className="nav-item dropdown dropdown-large"
                style={{ display: "none" }}
              >
                <a
                  className="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {" "}
                  <span className="alert-count">7</span>
                  <i className="bx bx-bell" />
                </a>
                <div className="dropdown-menu dropdown-menu-end">
                  <a href="javaScript:;">
                    <div className="msg-header">
                      <p className="msg-header-title">•</p>
                      <p className="msg-header-clear ms-auto">•</p>
                    </div>
                  </a>
                  <div className="header-notifications-list">
                    <a className="dropdown-item" href="javaScript:;">
                      <div className="d-flex align-items-center">
                        <div className="notify bg-light-primary text-primary">
                          <i className="bx bx-group" />
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="msg-name">
                            •<span className="msg-time float-end">•</span>
                          </h6>
                          <p className="msg-info">•</p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <a href="javaScript:;">
                    <div className="text-center msg-footer">•</div>
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className="user-box dropdown">
            <a
              className="d-flex align-items-center nav-link dropdown-toggle dropdown-toggle-nocaret"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="../assets/images/avatars/nanda.jpg"
                className="user-img"
                alt="user avatar"
              />
              <div className="user-info ps-3">
                <p className="user-name mb-0">Nanda Raditya</p>
                <p className="designattion mb-0">UI/UX Designer</p>
              </div>
            </a>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <a className="dropdown-item" href="javaScript:;">
                  <i className="bx bx-user" />
                  <span>Profile</span>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="javaScript:;">
                  <i className="bx bx-help-circle" />
                  <span>Help Desk</span>
                </a>
              </li>
              <li></li>
              <li>
                <a className="dropdown-item" href="javaScript:;">
                  <i className="bx bx-lock" />
                  <span>Change Password</span>
                </a>
              </li>
              <div className="dropdown-divider mb-0" />
              <li>
                <a className="dropdown-item" href="javaScript:;">
                  <i className="bx bx-log-out-circle" />
                  <span>Logout</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
