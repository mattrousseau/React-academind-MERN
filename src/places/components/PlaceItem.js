import React, { useState, useContext } from 'react';

import Card from '../../shared/components/UIelements/Card';
import Button from '../../shared/components/FormElements/Button';
import Modal from '../../shared/components/UIelements/Modal';
import Map from '../../shared/components/UIelements/Map';
import { AuthContext } from '../../shared/context/AuthContext';
import './PlaceItem.css';

const PlaceItem = props => {
  const auth = useContext(AuthContext);

  const [showMap, setShowMap] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const openMapHandler = () => setShowMap(true);

  const closeMapHandler = () => setShowMap(false);

  const openConfirmationHandler = () => setShowConfirmation(true);

  const closeConfirmationHandler = () => setShowConfirmation(false);

  const deletePlaceHandler = () => {
    setShowConfirmation(false);
    console.log('place deleted!');
  };

  return (
    <React.Fragment>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={props.address}
        contentClass="place-item__modal-content"
        footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
        footerClass="place-item__modal-actions"
      >
        <div className="map-container">
          <Map lat={props.coordinates.lat} lng={props.coordinates.lng} />
        </div>
      </Modal>
      <Modal
        show={showConfirmation}
        onCancel={closeConfirmationHandler}
        header="Are you sure?"
        contentClass="place-item__modal-content"
        footer={
          <React.Fragment>
            <Button onClick={closeConfirmationHandler}>CANCEL</Button>
            <Button danger onClick={deletePlaceHandler}>
              DELETE
            </Button>
          </React.Fragment>
        }
        footerClass="place-item__modal-actions"
      >
        <p>
          Do you want to proceed and delete this place? Please note that it
          can't be undone.
        </p>
      </Modal>
      <li className="place-item">
        <Card className="place-item__content">
          <div className="place-item__image">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="place-item__info">
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>
          <div className="place-item__actions">
            <Button inverse onClick={openMapHandler}>
              VIEW ON MAP
            </Button>
            {auth.isLoggedIn && <Button to={`/place/${props.id}`}>EDIT</Button>}
            {auth.isLoggedIn && (
              <Button danger onClick={openConfirmationHandler}>
                DELETE
              </Button>
            )}
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default PlaceItem;
