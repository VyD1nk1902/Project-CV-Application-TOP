import { useState } from "react";
import { EducationData } from "../type";

const SubmitEditButton = ({
  isEditing,
  toggle,
}: {
  isEditing: boolean;
  toggle: () => void;
}) => (
  <button
    onClick={toggle}
    className="mt-4 w-[100px] cursor-pointer rounded-full bg-cyan-300 p-2.5 outline hover:bg-cyan-400 focus:outline-2 focus:outline-offset-2 focus:outline-cyan-500"
  >
    {isEditing ? "Submit" : "Edit"}
  </button>
);

export default function Education({
  formData,
  setFormData,
  isEditing,
  setIsEditing,
  resetButton,
}: {
  formData: EducationData;
  setFormData: React.Dispatch<React.SetStateAction<EducationData>>;
  isEditing: boolean;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  resetButton: () => void;
}) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // const name = e.target.name
    // const value = e.target.value
    setFormData((prev) => ({ ...prev, [name]: value }));
    //name: field name
    // e: React.ChangeEvent<HTMLInputElement>: tsx syntax data
  };

  return (
    <div className="rounded-lg p-4">
      {isEditing ? (
        <>
          <h2 className="pb-2 text-2xl font-bold">Education Information</h2>
          <h3 className="mb-2 text-xl">✏️ Input form</h3>
          <ul className="mb-5 grid grid-cols-3 gap-3">
            <li>
              <p>Degree:</p>
              <input
                type="text"
                name="degree"
                value={formData.degree}
                onChange={handleChange}
                placeholder="Your Degree..."
                className="w-auto rounded-lg p-2.5 outline"
              />
            </li>
            <li>
              <p>Year:</p>
              <input
                type="text"
                name="year"
                value={formData.year}
                onChange={handleChange}
                placeholder="From-To..."
                className="w-auto rounded-lg p-2.5 outline"
              />
            </li>
            <li>
              <p>University:</p>
              <input
                type="text"
                name="university"
                value={formData.university}
                onChange={handleChange}
                placeholder="Your University..."
                className="w-auto rounded-lg p-2.5 outline"
              />
            </li>
            <li>
              <p>Major:</p>
              <input
                type="text"
                name="major"
                value={formData.major}
                onChange={handleChange}
                placeholder="Your Major..."
                className="w-auto rounded-lg p-2.5 outline"
              />
            </li>
            <li>
              <p>GPA:</p>
              <input
                type="text"
                name="score"
                value={formData.score}
                onChange={handleChange}
                placeholder="Your GPA..."
                className="w-auto rounded-lg p-2.5 outline"
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
            <h1 className="mb-2 text-2xl text-(--text-color)">EDUCATION</h1>
            <div>
              <span className="font-bold">
                {formData.degree} | {formData.year}
              </span>
              <h3 className="text-(--text-color)">{formData.university}</h3>
              <ul className="list-disc pl-3">
                <li>{formData.major}</li>
                <li>GPA: {formData.score}</li>
              </ul>
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
