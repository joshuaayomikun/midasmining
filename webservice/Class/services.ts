import {mysqlx} from '@mysql/xdevapi';
import {config} from '../../config';
mysqlx
    .getSession(config)
    .then(session => {
        console.log(session.inspect());
        // { user: 'root', host: 'localhost', port: 33060 }
});
