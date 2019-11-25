import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import './PlaceForm.css';

const DUMMY_PLACES = [
  {
    id: 'p1',
    imageURL:
      'https://media.gettyimages.com/photos/eiffel-tower-in-paris-picture-id632784164?s=612x612',
    title: 'Tour Eiffel',
    description: 'Main venue to visit in Paris',
    address: 'Place Jacques Rueff, 75007 Paris, France',
    creator: 'u1',
    location: { lng: 48.8584, lat: 2.2945 }
  },
  {
    id: 'p2',
    imageURL:
      'https://cdn.futura-sciences.com/buildsv6/images/wide1920/7/d/a/7da534f95a_127163_statue-liberte.jpg',
    title: 'Statue of Liberty',
    description: 'Main venue to visit in NY',
    address: 'New York, New York 10004, USA',
    creator: 'u1',
    location: { lat: -74.0445, lng: 40.6892 }
  },
  {
    id: 'p3',
    imageURL:
      'https://cdn.futura-sciences.com/buildsv6/images/wide1920/7/d/a/7da534f95a_127163_statue-liberte.jpg',
    title: 'Statue of Liberty',
    description: 'Main venue to visit in NY',
    address: 'New York, New York 10004, USA',
    creator: 'u2',
    location: { lat: -74.0445, lng: 40.6892 }
  }
];

const UpdatePlace = props => {
  const [isLoading, setIsLoading] = useState(true);
  const placeId = useParams().placeId;

  const [formState, InputHandler, setFormData] = useForm(
    {
      title: {
        value: '',
        isValid: false
      },
      description: {
        value: '',
        isValid: false
      }
    },
    false
  );

  const place = DUMMY_PLACES.find(p => p.id === placeId);

  useEffect(() => {
    setFormData(
      {
        title: {
          value: place.title,
          isValid: true
        },
        description: {
          value: place.description,
          isValid: true
        }
      },
      true
    );
    setIsLoading(false);
    console.log('formState', formState);
  }, [place, setFormData]);

  const placeUpdateSubmitHandler = event => {
    event.preventDefault();
    console.log('formState.inputs', formState.inputs);
  };

  if (!place) {
    return (
      <div className="center">
        <h2>Could not find place!</h2>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="center">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={InputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(10)]}
        errorText="Please enter a valid description (min 10 characters)."
        onInput={InputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />
      <Button type="submit" disabled={!formState.isValid}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlace;
