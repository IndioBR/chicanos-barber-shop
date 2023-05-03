import P from 'prop-types';
import * as Styled from './styles';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

export const Location = ({ children }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY
  });
  const position = {
    lat: -20.5175722,
    lng: -54.6494493
  }
  return (
    <Styled.Container>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{width: '100%', height: '100%'}}
          center={position}
          zoom={20}
        >
          <Marker position={position}/>
        </GoogleMap>
      ) : <></>}
      <div className="address">
        <h3>Endereço:</h3>
        <p>Rua Jornalista Valdir Lago, 818</p>
      </div>
    </Styled.Container>
  );
};

Location.propTypes = {
  children: P.node.isRequired,
};
