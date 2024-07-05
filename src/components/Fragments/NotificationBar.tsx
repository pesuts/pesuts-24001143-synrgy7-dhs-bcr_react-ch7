// src/components/NotificationBar.tsx
import React, { useContext } from 'react';
import { CarsContext } from '../../contexts/CarsContext';

interface NotificationBarProps {
  message?: string;
  isSuccess?: boolean;
  isVisible?: boolean;
  onClose: () => void;
}

const NotificationBar: React.FC<NotificationBarProps> = (
  // { message, isSuccess, isVisible, onClose }
) => {
  const carsContext = useContext(CarsContext);
  if (!carsContext) {
    return null;
  }

  const {
    isNotificationVisible,
    notificationMessage,
    isSuccess,
  } = carsContext;

  // useEffect(() => {
  //   if (isVisible) {
  //     const timer = setTimeout(() => {
  //       onClose();
  //     }, 3000); // 3 detik
  //     return () => clearTimeout(timer);
  //   }
  // }, [isVisible, onClose]);

  return (
    <div
      className={`fixed top-0 left-1/2 transform -translate-x-1/2 p-4 px-48 ${ isSuccess ? "bg-green-500" : "bg-red-600"} text-white rounded-b transition-transform duration-300 ${
        isNotificationVisible
        // isVisible
          ? 'translate-y-10' : '-translate-y-full'
      }`}
    >
      { notificationMessage }
      {/* { message } */}
    </div>
  );
};

export default NotificationBar;
