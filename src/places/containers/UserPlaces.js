import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
  // {
  //   id: 'p1',
  //   imageURL:
  //     'https://media.gettyimages.com/photos/eiffel-tower-in-paris-picture-id632784164?s=612x612',
  //   title: 'Tour Eiffel',
  //   description: 'Main venue to visit in Paris',
  //   address: 'Place Jacques Rueff, 75007 Paris, France',
  //   creator: 'u1',
  //   location: { lng: 48.8584, lat: 2.2945 }
  // },
  // {
  //   id: 'p2',
  //   imageURL:
  //     'https://cdn.futura-sciences.com/buildsv6/images/wide1920/7/d/a/7da534f95a_127163_statue-liberte.jpg',
  //   title: 'Statue of Liberty',
  //   description: 'Main venue to visit in NY',
  //   address: 'New York, New York 10004, USA',
  //   creator: 'u1',
  //   location: { lat: -74.0445, lng: 40.6892 }
  // },
  // {
  //   id: 'p3',
  //   imageURL:
  //     'https://cdn.futura-sciences.com/buildsv6/images/wide1920/7/d/a/7da534f95a_127163_statue-liberte.jpg',
  //   title: 'Statue of Liberty',
  //   description: 'Main venue to visit in NY',
  //   address: 'New York, New York 10004, USA',
  //   creator: 'u2',
  //   location: { lat: -74.0445, lng: 40.6892 }
  // }
];

const UserPlaces = () => {
  const userId = useParams().userId;
  console.log('userId', userId);

  const places = DUMMY_PLACES.filter(place => place.creator === userId);

  return <PlaceList items={places} />;
};

export default UserPlaces;
