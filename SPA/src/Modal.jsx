import React from "react";


const Modal = () => {
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn glass"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        INQUIRY
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Contact Info: </h3>
          <p className="py-4">
            <div className="card w-100 bg-base-200 text-neutral-content">
              <div className="card-body items-center text-center">
                <span className="label-text"><b>Inquiry Form</b></span>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="input input-bordered input-primary w-full max-w-sm"
                />

                <input
                  type="text"
                  placeholder="Enter your Email Here..."
                  className="input input-bordered input-primary w-full max-w-sm"
                />

                <input
                  type="text"
                  placeholder="Enter your Contact Number..."
                  className="input input-bordered input-primary w-full max-w-sm"
                />
              </div>
            </div>
          </p>
          <div
            className="modal-action"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center", // Center buttons vertically
            }}
          >
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button
                className="btn btn-outline btn-success"
                style={{ marginRight: "19rem" }}
              >
                Submit
              </button>
              <button className="btn btn-outline btn-error">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
