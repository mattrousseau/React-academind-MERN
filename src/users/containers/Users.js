import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      image: 'https://hackernoon.com/hn-images/1*7IMev5xslc9FLxr9hHhpFw.png',
      name: 'Donald Trump',
      places: 2
    },
    {
      id: 'u2',
      image: 'https://hackernoon.com/hn-images/1*7IMev5xslc9FLxr9hHhpFw.png',
      name: 'Donald Trump',
      places: 4
    },
    {
      id: 'u3',
      image: 'https://hackernoon.com/hn-images/1*7IMev5xslc9FLxr9hHhpFw.png',
      name: 'Donald Trump',
      places: 2
    },
    {
      id: 'u4',
      image: 'https://hackernoon.com/hn-images/1*7IMev5xslc9FLxr9hHhpFw.png',
      name: 'Donald Trump',
      places: 4
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;
