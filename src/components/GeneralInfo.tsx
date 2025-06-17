import { useState } from "react";
import { GeneralInfoData } from "../type";

const SubmitEditButton = ({
  isEditing,
  toggle,
  //const isEditing = props.isEditing;
  // const toggle = props.toggle
}: {
  isEditing: boolean;
  toggle: () => void;
  // khai báo kiểu dữ liệu ts
}) => (
  <button
    onClick={toggle}
    className="mt-4 w-[100px] cursor-pointer rounded-full bg-cyan-300 p-2.5 outline hover:bg-cyan-400 focus:outline-2 focus:outline-offset-2 focus:outline-cyan-500"
  >
    {isEditing ? "Submit" : "Edit"}
  </button>
);

// interface SubmitButtonEdit {
//   isEdit: boolean;
//   toggle: () => void;
// }

// const SubmitButtonEdit = (props: SubmitButtonEdit)=>{
//   return (
//     <button
//     onClick={props.toggle}
//     className="mt-4 w-[100px] cursor-pointer rounded-full bg-cyan-300 p-2.5 outline hover:bg-cyan-400 focus:outline-2 focus:outline-offset-2 focus:outline-cyan-500"
//   >
//     {props.isEdit ? "Submit" : "Edit"}
//   </button>
//   )
// }

export default function GeneralInfo({
  formData,
  setFormData,
  isEditing,
  setIsEditing,
  resetButton,
}: {
  formData: GeneralInfoData;
  setFormData: React.Dispatch<React.SetStateAction<GeneralInfoData>>;
  isEditing: boolean;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  resetButton: () => void;
}) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // const name = e.target.name
    // const value = e.target.value
    setFormData((prev) => ({ ...prev, [name]: value }));
    //name: field name "name, email, phone"
    // (e: React.ChangeEvent<HTMLInputElement>) syntax ts -> event input change
  };

  return (
    <div className="rounded-lg p-4">
      {isEditing ? (
        <>
          <h2 className="pb-2 text-2xl font-bold">General Information</h2>
          <h3 className="mb-2 text-xl">✏️ Input form</h3>
          <ul className="mb-5 grid grid-cols-3 gap-3">
            <li>
              <p>Full Name:</p>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name..."
                className="w-md rounded-lg p-2.5 outline"
              />
            </li>
            <li>
              <p>Career:</p>
              <input
                type="text"
                name="career"
                value={formData.career}
                onChange={handleChange}
                placeholder="Your Career..."
                className="w-md rounded-lg p-2.5 outline"
              />
            </li>
            <li>
              <p>Professional Summary:</p>
              <input
                type="text"
                name="summary"
                value={formData.summary}
                onChange={handleChange}
                placeholder="A little about your career..."
                className="w-md rounded-lg p-2.5 outline"
              />
            </li>
            <li>
              <p>Phone Number:</p>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone Number..."
                className="w-md rounded-lg p-2.5 outline"
              />
            </li>
            <li>
              <p>Email:</p>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email..."
                className="w-md rounded-lg p-2.5 outline"
              />
            </li>
            <li>
              <p>Address:</p>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Your Address..."
                className="w-md rounded-lg p-2.5 outline"
              />
            </li>
          </ul>
          <SubmitEditButton
            isEditing={isEditing}
            toggle={() => setIsEditing(false)}
          />
          <button
            onClick={resetButton}
            className="mt-4 ml-4 w-[100px] cursor-pointer rounded-full bg-red-300 p-2.5 outline hover:bg-red-400 focus:outline-2 focus:outline-offset-2 focus:outline-red-500"
          >
            Reset All
          </button>
        </>
      ) : (
        <>
          <div className="m-auto flex w-2xl flex-col rounded-lg p-8 outline">
            <h1 className="m-auto pb-2 text-4xl font-bold">{formData.name}</h1>
            <h2 className="m-auto pb-2 text-3xl font-bold">
              {formData.career}
            </h2>
            <hr className="mx-10 my-4 text-(--text-color) outline-[1.5px]" />
            <h2 className="text-center text-2xl">Professional Summary</h2>
            <p className="p-5 text-center">{formData.summary}</p>

            <div className="mb-5 grid grid-cols-3 gap-4 px-5">
              <p className="break-words">
                <span className="text-(--text-color)"> Phone: </span> <br />{" "}
                {formData.phone}
              </p>
              <p className="break-words">
                <span className="text-(--text-color)">Email:</span>{" "}
                {formData.email}
              </p>
              <p className="break-words">
                <span className="text-(--text-color)">Address:</span>{" "}
                {formData.address}
              </p>
            </div>
            <SubmitEditButton
              isEditing={isEditing}
              toggle={() => setIsEditing(true)}
            />
          </div>
        </>
      )}
    </div>
  );
}
