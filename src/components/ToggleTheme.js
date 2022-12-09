import { ThemeConsumer } from '../contexts/ThemeContext';
import {BsFillSunFill ,BsFillMoonStarsFill} from 'react-icons/bs';
 
function ToggleTheme() {
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => {
        return <button onClick={toggleTheme} className='navigation'>{theme === 'light' ? <BsFillMoonStarsFill /> : <BsFillSunFill />}</button>;
      }}
    </ThemeConsumer>
  );
}
export default ToggleTheme;
