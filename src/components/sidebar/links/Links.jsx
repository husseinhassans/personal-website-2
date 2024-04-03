const Links = () => {
  const items = [
    "Homepage",
    "Experience",
    "Projects",
    "Interests",
    "About",
    "Contact",
  ];
  return (
    <div className="links">
      {items.map((item) => (
        <a href={`#${item}`} key={item}>
          {item}
        </a>
      ))}
    </div>
  );
};

export default Links;
