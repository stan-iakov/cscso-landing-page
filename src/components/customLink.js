import { jsx, NavLink as MenuLink, Link as A } from 'theme-ui';

export function CustomLink({ path, label, children, ...rest }) {
  return (
    <A {...rest} href={path}>
      {children || label}
      </A>
  );
}
