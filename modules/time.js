import { DateTime } from './luxon.js';

const timeDiplay = document.querySelector('.time-display');
const now = () => {
  timeDiplay.innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
};
timeDiplay.innerHTML = now;
export default now;