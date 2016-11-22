// here we config the browser history/pushState behavior
// we use hashHistory (ugly urls like #/xxx/xxx to be compatible with IE<=9
// If we want beautiful url, we can use browserHistory instead (when we'll drop IE9 support)

import { createHashHistory } from 'history';
import { useRouterHistory } from 'react-router'
export const appHistory = useRouterHistory(createHashHistory)({
    basename: '/'
});
