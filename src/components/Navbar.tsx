import { SiBuymeacoffee } from 'react-icons/si';
import { FaBarsStaggered } from 'react-icons/fa6';

export default function Navbar() {
  return (
    <div className="navbar shadow-sm pt-6">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle"
          >
            <FaBarsStaggered className='text-2xl' />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-10"
          >
            <li>
              <a href="#" className='text-sm'>
                Sugerir link
                <div className="badge badge-primary">EM BREVE</div>
              </a>
            </li>
            <li>
              <a href="/sobre" className='text-sm'>Sobre</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a href="/" className="btn btn-ghost">
          <img src="/logo.png" alt="DEVHELP" className="h-50" />
        </a>
      </div>
      <div className="navbar-end flex items-center space-x-2">
        <a href='https://buymeacoffee.com/mrmaia' target="_blank"
          className="btn btn-ghost btn-circle text-xl text-blue-500 tooltip tooltip-left"
          data-tip="Apoie o projeto!"
        >
          <SiBuymeacoffee className='text-3xl' />
        </a>
      </div>
    </div>
  );
}
