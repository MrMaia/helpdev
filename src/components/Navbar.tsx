import { SiBuymeacoffee } from 'react-icons/si';
import { FaBarsStaggered } from 'react-icons/fa6';

export default function Navbar() {
  const menuItems = ['Sugerir link', 'Sobre'];

  return (
    <div className="navbar bg-black shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle"
          >
            <FaBarsStaggered />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-10"
          >
            {menuItems.map(item => (
              <li key={item}>
                <a href="#">{item}<div className="badge badge-sm badge-secondary">EM BREVE</div></a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a href="/" className="btn btn-ghost text-xl">
          DEVHELP
        </a>
      </div>
      <div className="navbar-end flex items-center space-x-2">
        <a href='https://buymeacoffee.com/mrmaia' target="_blank"
          className="btn btn-ghost btn-circle text-xl text-yellow-500 tooltip tooltip-left"
          data-tip="Apoie o projeto!"
        >
          <SiBuymeacoffee />
        </a>
      </div>
    </div>
  );
}
