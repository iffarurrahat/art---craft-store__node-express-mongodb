import PropTypes from "prop-types";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

export default function Modal({ isOpen, setIsOpen, title, children }) {
  function close() {
    setIsOpen(false);
  }

  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-screen-md rounded-xl bg-base-200 shadow-sm p-6  duration-300 ease-out"
            >
              <DialogTitle
                as="h3"
                className="text-xl font-medium text-gray-900 mb-3 w-full md:w-11/12 lg:w-3/4 mx-auto"
              >
                {title}
              </DialogTitle>
              {children}
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
