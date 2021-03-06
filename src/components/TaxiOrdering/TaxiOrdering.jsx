import React, { useState } from 'react';
import PropTypes, { exact } from 'prop-types';
import { connect } from 'react-redux';
import { setStartAddress, setEndAddress } from '../../store/actions/addresses';
import Button from '../Button/Button';

import './TaxiOrdering.scss';

export const TaxiOrdering = ({ addresses, setStartAddress, setEndAddress }) => {
  TaxiOrdering.propTypes = {
    addresses: PropTypes.arrayOf(exact({
      value: PropTypes.string,
      label: PropTypes.string,
    }))
  }

  const [ currentMode, setCurrentMode ] = useState('order');

  const [ selectedStartAddress, setSelectedStartAddress ] = useState('Эрмитаж');
  const [ selectedEndAddress, setSelectedEndAddress ] = useState('Пулково (LED)');

  const handleSubmit = e => {
    e.preventDefault();
    const startAddress = e.nativeEvent.target[0];
    const endAddress = e.nativeEvent.target[1];
    setStartAddress(startAddress.value);
    setEndAddress(endAddress.value);
    setCurrentMode('reorder');
  };

  const handleStartAddressChange = e => {
    console.log(e.target.value)
    setSelectedStartAddress(e.target.value);
  };

  const handleEndAddressChange = e => {
    console.log(e.target.value)
    setSelectedEndAddress(e.target.value);
  };

  return (
    <>
    { currentMode === 'order' &&
      <form
        className='taxi-ordering'
        onSubmit={(e) => handleSubmit(e)}
      >
        <select className='taxi-ordering__select' name='routeStart' onChange={handleStartAddressChange}>
          {addresses.filter(address => address.value !== selectedEndAddress).map(address => address.hasOwnProperty('value') &&
          <option key={address.value} value={address.value}>{address.value}</option>)}
        </select>
        <select className='taxi-ordering__select' name='routeStart' onChange={handleEndAddressChange}>
          {addresses.filter(address => address.value !== selectedStartAddress).map(address => address.hasOwnProperty('value') &&
          <option key={address.value} value={address.value}>{address.value}</option>)}
        </select>
        <Button type='submit' standardAppearance text='Заказать' />
      </form>
    }
    { currentMode === 'reorder' &&
      <div className='taxi-ordering'>
        <h2 className='taxi-ordering__title'>Заказ размещён</h2>
        <p className='taxi-ordering__message'>
          Ваше такси уже едет к&nbsp;вам. Прибудет приблизительно через 10&nbsp;минут.
        </p>
        <Button
          type='button'
          standardAppearance text='Сделать новый заказ'
          onClick={() => {
            setCurrentMode('order');
          }}
        />
      </div>
    }
    </>
  )
};

const mapStateToProps = function (state) {
  return {
    addresses: state.addresses.addresses,
    startAddress: state.addresses.startAddress,
    endAddress: state.addresses.endAddress,
  }
}

export default connect(mapStateToProps, {setStartAddress, setEndAddress})(TaxiOrdering);
