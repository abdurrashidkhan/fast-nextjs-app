import ActiveLink from "@/components/ActiveClass/ActiveLink";
import Link from "next/link";

const Dashboard = ({ children }) => {
  const dashboardRouting = [
    { path: '/dashboard', name: 'Overview', },
    { path: '/dashboard/add-product', name: 'Add Project', },
    { path: '/dashboard/manage-projects', name: 'Manage Projects', },

  ]
  return (
    <div className="container mx-auto px-2">
      <div className='flex items-center gap-5'>
        <aside>
          <ul>
            {dashboardRouting.map(({ path, name }) =>
              <li key={path}>
                <ActiveLink exact={path === '/dashboard'} ActiveClassName='text-blue-600' href={path}>{name}</ActiveLink>
              </li>
            )}
          </ul>
        </aside>
        {children}
      </div>        
    </div>
  );
};

export default Dashboard;