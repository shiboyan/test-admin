import React from 'react';
import { Admin, Resource,EditGuesser } from 'react-admin';

import jsonServerProvider from 'ra-data-json-server';
import {UserList} from "./users";
import {PostList} from "./posts";
import authProvider from "./authProvider";
import Dashboard from './Dashboard';

const App = () => (
    <Admin
        dataProvider={jsonServerProvider('http://jsonplaceholder.typicode.com')}
        authProvider={authProvider}
        dashboard={Dashboard}
    >
        {/*<Resource name="posts" list={PostList} />*/}
        <Resource name="posts" list={PostList} edit={EditGuesser} />
        <Resource name="users" list={UserList} />
    </Admin>


);
export default App;




