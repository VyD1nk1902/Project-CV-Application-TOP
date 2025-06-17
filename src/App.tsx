import { useState } from "react";
import { GeneralInfoData, EducationData, ExperienceData } from "./type";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import {
  generalSample,
  educationSample,
  experienceSample,
} from "./components/SampleData";

import {
  defaultGeneral,
  defaultEducation,
  defaultExperience,
} from "./components/DefaultData";

function App() {
  function loadSampleData() {
    setGeneralData(generalSample);
    setEducationData(educationSample);
    setExperienceData(experienceSample);
    setIsEditingGeneral(false);
    setIsEditingEducation(false);
    setIsEditingExperience(false);
  }

  function loadBack() {
    setIsEditingGeneral(true);
    setIsEditingEducation(true);
    setIsEditingExperience(true);
  }

  function resetDataGen() {
    setGeneralData(defaultGeneral);
  }
  function resetDataEdu() {
    setEducationData(defaultEducation);
  }
  function resetDataEx() {
    setExperienceData(defaultExperience);
  }

  //state that store userData
  const [generalData, setGeneralData] = useState<GeneralInfoData>({
    name: "",
    career: "",
    summary: "",
    phone: "",
    email: "",
    address: "",
  });

  const [educationData, setEducationData] = useState<EducationData>({
    degree: "",
    year: "",
    university: "",
    major: "",
    score: "",
  });

  const [experienceData, setExperienceData] = useState<ExperienceData>({
    work: "",
    time: "",
    desc: "",
    desc1: "",
    desc2: "",
    work1: "",
    time1: "",
    desc3: "",
    desc4: "",
    desc5: "",
    work2: "",
    time2: "",
    desc6: "",
    desc7: "",
    desc8: "",
  });

  const [isEditingGeneral, setIsEditingGeneral] = useState(true);
  const [isEditingEducation, setIsEditingEducation] = useState(true);
  const [isEditingExperience, setIsEditingExperience] = useState(true);
  const [isSampleVisible, setIsSampleVisible] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mb-4">
        {isSampleVisible && !isEditingGeneral ? (
          // Show "Back to Edit" when in sample view and edit not yet clicked
          <button
            onClick={() => {
              loadBack();
              setIsSampleVisible(false);
            }}
            className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
          >
            Back to Edit
          </button>
        ) : (
          // All other cases (default or editing) -> show Sample CV
          <button
            onClick={() => {
              loadSampleData();
              setIsSampleVisible(true);
            }}
            className="rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600"
          >
            Sample CV
          </button>
        )}
      </div>

      <GeneralInfo
        formData={generalData}
        setFormData={setGeneralData}
        isEditing={isEditingGeneral}
        setIsEditing={setIsEditingGeneral}
        resetButton={resetDataGen}
      />
      <Education
        formData={educationData}
        setFormData={setEducationData}
        isEditing={isEditingEducation}
        setIsEditing={setIsEditingEducation}
        resetButton={resetDataEdu}
      />
      <Experience
        formData={experienceData}
        setFormData={setExperienceData}
        isEditing={isEditingExperience}
        setIsEditing={setIsEditingExperience}
        resetButton={resetDataEx}
      />
    </div>
  );
}

export default App;
