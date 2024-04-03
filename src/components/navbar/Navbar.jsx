import "./navbar.scss";

export const Navbar = () => {
  return (
    <div className="navbar">
      {/*Sidebar*/}
      <div className="wrapper">
        <span> &lt;Hussein Hassan /&gt; </span>
        <div className="social">
          <a href="#">
            <img src="/linkedin.png" alt="" />
          </a>
          <a href="#">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="#">
            <img src="/github.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};
