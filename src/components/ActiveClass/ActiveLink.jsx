import classNames from "@/utils/classNames";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ActiveLink = ({ children,exact= false, href, ActiveClassName, ...props }) => {
  const path = usePathname();
  const active =exact ? path === href :  path.startsWith(href);
  const classes = classNames(props.className, active && ActiveClassName);
  if (classes) {
    props.className = classes;
  }
  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
};

export default ActiveLink;
