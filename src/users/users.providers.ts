import { Connection } from 'typeorm';
import { User } from './entities/user.entity';

export const usersProviders = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(User),
    inject: ['DATABASE_MYSQL_CONNECTION'],
  },
];
