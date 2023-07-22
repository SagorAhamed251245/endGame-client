import { NavLink } from "react-router-dom";


const NavLinks = () => {
  const links = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "colleges",
      title: "Colleges",
    },
    {
      path: "admission",
      title: "Admission",
    },
    {
      path: "myCollege",
      title: "My College",
    },
  ];
  return (
    <>
      {links.map(({ path, title }) => (
        <NavLink key={title} to={path} className="block text-white hover:underline">
          {title}
        </NavLink>
      ))}
    </>
  );
};

export default NavLinks;
