import React, { use, useState } from "react";
import { ExperienceData } from "../type";

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

export default function Experience({
  formData,
  setFormData,
  isEditing,
  setIsEditing,
  resetButton,
}: {
  formData: ExperienceData;
  setFormData: React.Dispatch<React.SetStateAction<ExperienceData>>;
  isEditing: boolean;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  resetButton: () => void;
}) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // const name = e.target.name;
    // const value = e.target.value;

    setFormData((prev) => ({ ...prev, [name]: value }));
    // name : value -> field name : field value
    // ...prev are store data from Experience Object
  };

  return (
    <div className="rounded-lg p-4">
      {isEditing ? (
        <>
          <h2 className="pb-2 text-2xl font-bold">Experience Information</h2>
          <h3 className="mb-2 text-xl">✏️ Input form</h3>
          <h3 className="mb-2 text-xl">JOB 1</h3>
          <ul className="mb-5 grid grid-cols-3 gap-3">
            <li>
              <p>Work Experience:</p>
              <input
                type="text"
                name="work"
                value={formData.work}
                onChange={handleChange}
                placeholder="Your Work Experience..."
                className="w-md rounded-lg p-2.5 outline"
              />
            </li>
            <li>
              <p>Employment Dates:</p>
              <input
                type="text"
                name="time"
                value={formData.time}
                onChange={handleChange}
                placeholder="Your Employment Dates..."
                className="w-md rounded-lg p-2.5 outline"
              />
            </li>
            <li>
              <p>Job Descripe:</p>
              <input
                type="text"
                name="desc"
                value={formData.desc}
                onChange={handleChange}
                placeholder="About your job experience..."
                className="w-md rounded-lg p-2.5 outline"
              />
            </li>
            <li>
              <p>Job Descripe 2:</p>
              <input
                type="text"
                name="desc1"
                value={formData.desc1}
                onChange={handleChange}
                placeholder="About your job experience..."
                className="w-md rounded-lg p-2.5 outline"
              />
            </li>
            <li>
              <p>Job Descripe 3:</p>
              <input
                type="text"
                name="desc2"
                value={formData.desc2}
                onChange={handleChange}
                placeholder="About your job experience..."
                className="w-md rounded-lg p-2.5 outline"
              />
            </li>
          </ul>
          <h3 className="mb-2 text-xl">JOB 2</h3>
          <ul className="mb-5 grid grid-cols-3 gap-3">
            <li>
              <p>Work Experience:</p>
              <input
                type="text"
                name="work1"
                value={formData.work1}
                onChange={handleChange}
                placeholder="Your Work Experience..."
                className="w-md rounded-lg p-2.5 outline"
              />
            </li>
            <li>
              <p>Employment Dates:</p>
              <input
                type="text"
                name="time1"
                value={formData.time1}
                onChange={handleChange}
                placeholder="Your Employment Dates..."
                className="w-md rounded-lg p-2.5 outline"
              />
            </li>
            <li>
              <p>Job Descripe:</p>
              <input
                type="text"
                name="desc3"
                value={formData.desc3}
                onChange={handleChange}
                placeholder="About your job experience..."
                className="w-md rounded-lg p-2.5 outline"
              />
            </li>
            <li>
              <p>Job Descripe 2:</p>
              <input
                type="text"
                name="desc4"
                value={formData.desc4}
                onChange={handleChange}
                placeholder="About your job experience..."
                className="w-md rounded-lg p-2.5 outline"
              />
            </li>
            <li>
              <p>Job Descripe 3:</p>
              <input
                type="text"
                name="desc5"
                value={formData.desc5}
                onChange={handleChange}
                placeholder="About your job experience..."
                className="w-md rounded-lg p-2.5 outline"
              />
            </li>
          </ul>
          <h3 className="mb-2 text-xl">JOB 3</h3>
          <ul className="mb-5 grid grid-cols-3 gap-3">
            <li>
              <p>Work Experience:</p>
              <input
                type="text"
                name="work2"
                value={formData.work2}
                onChange={handleChange}
                placeholder="Your Work Experience..."
                className="w-md rounded-lg p-2.5 outline"
              />
            </li>
            <li>
              <p>Employment Dates:</p>
              <input
                type="text"
                name="time2"
                value={formData.time2}
                onChange={handleChange}
                placeholder="Your Employment Dates..."
                className="w-md rounded-lg p-2.5 outline"
              />
            </li>
            <li>
              <p>Job Descripe:</p>
              <input
                type="text"
                name="desc6"
                value={formData.desc6}
                onChange={handleChange}
                placeholder="About your job experience..."
                className="w-md rounded-lg p-2.5 outline"
              />
            </li>
            <li>
              <p>Job Descripe 2:</p>
              <input
                type="text"
                name="desc7"
                value={formData.desc7}
                onChange={handleChange}
                placeholder="About your job experience..."
                className="w-md rounded-lg p-2.5 outline"
              />
            </li>
            <li>
              <p>Job Descripe 3:</p>
              <input
                type="text"
                name="desc8"
                value={formData.desc8}
                onChange={handleChange}
                placeholder="About your job experience..."
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
            <h1 className="mb-2 text-2xl text-(--text-color)">EXPERIENCE</h1>
            <div>
              <span className="font-bold">{formData.work}</span>
              <h3 className="text-(--text-color)">{formData.time}</h3>
              <ul className="list-disc pl-3">
                <li>{formData.desc}</li>
                <li>{formData.desc1}</li>
                <li>{formData.desc2}</li>
              </ul>
            </div>
            <hr className="mx-20 my-4 text-(--text-color) outline-[1.5px]" />
            <div>
              <span className="font-bold">{formData.work1}</span>
              <h3 className="text-(--text-color)">{formData.time1}</h3>
              <ul className="list-disc pl-3">
                <li>{formData.desc3}</li>
                <li>{formData.desc4}</li>
                <li>{formData.desc5}</li>
              </ul>
            </div>
            <hr className="mx-20 my-4 text-(--text-color) outline-[1.5px]" />
            <div>
              <span className="font-bold">{formData.work2}</span>
              <h3 className="text-(--text-color)">{formData.time2}</h3>
              <ul className="list-disc pl-3">
                <li>{formData.desc6}</li>
                <li>{formData.desc7}</li>
                <li>{formData.desc8}</li>
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
