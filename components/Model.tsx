import React from 'react';
import Modal from 'react-modal';

const BuyPopup = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-medium leading-6">Buy NFT</h3>
        <p className="mt-2 text-base leading-6">Are you sure you want to buy this NFT for 0.2 ETH?</p>
        <div className="mt-4 flex justify-end">
          <button type="button" className="mr-2 px-3 py-2 rounded-md border border-gray-300 text-sm font-medium leading-4 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Cancel</button>
          <button type="button" className="px-3 py-2 rounded-md bg-indigo-600 text-sm font-medium leading-4 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Buy</button>
        </div>
      </div>
    </Modal>
  );
};

const BuyButton = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };
}

export default BuyButton;