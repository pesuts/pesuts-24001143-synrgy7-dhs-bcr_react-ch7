import React, { useContext } from "react";
import Modal from "react-modal";
import { CarsContext } from "../../contexts/CarsContext";
// import { deleteCar } from "../../services/car.service";

// interface ActionDelete {
//   idCar?: string;
//   isDeleted: boolean;
// }

interface NotificationModalProps {
  // isOpen: boolean;
  // onRequestClose: () => void;
  // handleActionDeleteCar: (actionDelete: ActionDelete) => void;
  idCar?: string;
  message?: string;
  title?: string;
}

const NotificationModal: React.FC<NotificationModalProps> = ({
  // isOpen,
  // idCar,
  // handleActionDeleteCar,
  // onRequestClose,
  message,
  title,
}) => {
  const carsContext = useContext(CarsContext);
  if (!carsContext) {
    return null;
  }

  const {
    // cars,
    actionDelete,
    isModalOpen,
    // isNotificationVisible,
    // notificationMessage,
    // isSuccess,
    setActionDelete,
    setIsModalOpen,
    // setIsNotificationVisible,
    // setNotificationMessage,
    // setIsSuccess,
  } = carsContext;

  return (
    <Modal
      // isOpen={isOpen}
      isOpen={isModalOpen}
      // onRequestClose={onRequestClose}
      contentLabel="Notification"
      className="w-1/3 fixed outline outline-blue-700 outline-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded shadow-lg z-50"
      overlayClassName="fixed inset-0 backdrop-blur-sm"
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
      }}
    >
      <div className="px-8 py-4 items-center text-center">
        <img
          src="/img/png/img-BeepBeep.png"
          className="w-40 flex items-center m-auto"
        />
        <h2 className="font-extrabold my-4">{title}</h2>
        <p className="my-6">{message}</p>
        {/* <p className="my-6">{notificationMessage}</p> */}
        <div className="flex my-4">
          <div className="m-auto">
            <div className="grid grid-cols-2 gap-4">
              <button
                className="bg-blue-800 text-white font-bold px-6 py-2 rounded-sm hover:bg-blue-950"
                onClick={() => {
                  // onRequestClose();
                  () => setIsModalOpen(false);
                  setActionDelete({
                    idCar: actionDelete.idCar,
                    isDeleted: true,
                  });
                  console.log(actionDelete);
                  //     handleActionDeleteCar({
                  // })
                }}
              >
                Ya
              </button>
              <button
                className="outline outline-[2px] outline-blue-600 font-bold px-6 py-2 
                  text-blue-600 rounded-sm hover:bg-blue-600 hover:text-white"
                // onClick={onRequestClose}
                onClick={() => setIsModalOpen(false)}
              >
                Tidak
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default NotificationModal;
