import React, {Component} from 'react';
// import {Route, Switch, Link, BrowserRouter as Router} from 'react-router-dom';

import Child1 from './child1';
// import child2 from './child2'
// import asyncComponent from './asyncComponent'

// const AsyncChild2   = asyncComponent(() => {
//     return import('./child2');
// });

class App extends Component {
    render() {
        return (
            // <Router>
            //     <div>
            //         <ul>
            //             <li>
            //                 <Link to="/">child1</Link>
            //             </li>
            //             <li>
            //                 <Link to="/child2">child2</Link>
            //             </li>
            //         </ul>
            //     </div>
            // <Switch>
            //     <Route exact path='/' component={child1}/>
            //     <Route exact path='/child2' component={child2}/>
            // </Switch>
            // </Router>
            <div>
                <Child1 />
            </div>
        );
    }
}

export default App;