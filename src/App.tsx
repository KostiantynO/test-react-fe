import viteLogo from '/vite.svg';

import { useCallback, useState } from 'react';

import './App.css';
import reactLogo from './assets/react.svg';

type MenuState = 'closed' | 'opened' | 'opening' | 'closing';

export const App = () => {
  const [menuState, setMenuState] = useState<MenuState>('closed');

  const closeMenu = useCallback(() => {
    setMenuState('closed');
  }, []);

  return (
    <div className="App">
      <div className="mobile-menu relative">
        <button className="absolute top" type="button" onClick={closeMenu}>
          X
        </button>
      </div>
    </div>
  );
};
