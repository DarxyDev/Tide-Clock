import './style/normalize.css';
import './style/style.css';

import apiManager from './script/api-manager.js';
import styleManager from './script/element-styler.js';
import clockManager from './script/clock-manager.js';

const clock = document.getElementById('clock');
styleManager.setElementAspectRatio(clock, 1);