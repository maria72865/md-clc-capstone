import MobApp from './apps/mobApp';
import DtApp from './apps/dtApp';
import './main.scss';


function DeviceFork() { 
  function vpdetect() {
    var height = window.innerHeight;
    var width = window.innerWidth;
    if (height <= 800) {
        if (width <= 400) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
  }
  if (vpdetect() === true) {
    return (
        < MobApp />
    )
    } else {
    return (
        < DtApp />
    )
    };    
}

export default DeviceFork;
