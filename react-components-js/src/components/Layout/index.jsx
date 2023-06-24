import "./Layout.css";
import GoalieLogo from "../GoalieLogo";
import NavButtons from "../NavButtons";

const Layout = ({ children }) => {
  return (
    <div id="layout">
      <div id="left">
        <div id="content-left">
          <div id="logo-div">
            <GoalieLogo />
          </div>
          <div>
            <NavButtons />
          </div>
        </div>
      </div>
      <div id="main">{children}</div>
      <div id="right">
        <div id="content-right">right</div>
      </div>
    </div>
  );
};

export default Layout;
