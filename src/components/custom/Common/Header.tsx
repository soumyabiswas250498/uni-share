import { ReactNode } from 'react';
import { ModeToggle } from '../../mode-toggle';
import { NavLink } from 'react-router';
import AvatarMenu from '../AvatarMenu';

interface IProps {
  children: ReactNode;
  isLoggedIn: boolean;
}

const headerData = {
  all: [
    { label: 'Home', url: '/' },
    { label: 'About Us', url: '/about-us' },
    { label: 'Privacy Ploicy', url: '/privacy-policy' },
    { label: 'Contact Us', url: '/contactus' },
  ],
  protected: [
    { label: 'App', url: '/app' },
    { label: 'Dashboard', url: '/dashboard' },
    { label: 'Profile', url: '/profile' },
  ],
  auth: [
    { label: 'Login', url: '/auth/login' },
    { label: 'Register', url: '/auth/register' },
  ],
};
function Header({ children, isLoggedIn }: IProps) {
  console.log(isLoggedIn, '***');
  return (
    <div className="w-screen">
      <div className="flex items-center justify-between w-full px-10 border border-red-200">
        <div className="flex gap-2">
          {headerData.all.map(item => (
            <NavLink
              to={item.url}
              className={({ isActive }) =>
                `cursor-pointer px-2 rounded ${
                  isActive
                    ? 'text-gray-50 dark:text-gray-950 bg-gray-500'
                    : 'text-gray-900 dark:text-gray-100'
                }`
              }
            >
              <p>{item.label}</p>
            </NavLink>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <ModeToggle />
          <AvatarMenu />
        </div>
      </div>
      {children}
    </div>
  );
}

export default Header;
