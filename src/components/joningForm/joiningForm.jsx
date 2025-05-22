/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import backe from './backeicon.png'



const BottomRightModal = ({buttonClassName}) => {
  const [isOpen, setIsOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    alternateMobileNumber: '',
    experience: '',
    salaryExpectation: '',
    description: '',
    resume: null,
    skills: [],
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      resume: file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, handle form submission
      console.log(formData);
    } else {
      // Form is invalid, set errors state
      setErrors(validationErrors);
    }
  };

  const validateForm = (data) => {
    let errors = {};
    if (!data.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!data.email.trim()) {
      errors.email = 'Email is required';
    }
    if (!data.mobileNumber.trim()) {
      errors.mobileNumber = 'Mobile Number is required';
    }
    if (!data.alternateMobileNumber.trim()) {
      errors.alternateMobileNumber = 'Alternate Mobile Number is required';
    }
    if (!data.experience.trim()) {
      errors.experience = 'Experience is required';
    }
    if (!data.salaryExpectation.trim()) {
      errors.salaryExpectation = 'Salary Expectation is required';
    }
    if (data.skills.length === 0) {
      errors.skills = 'Skills are required';
    }
    return errors;
  };

  const handleSkillChange = (updatedSkills) => {
    setFormData({
      ...formData,
      skills: updatedSkills,
    });
  };

  return (
    <div className="" onContextMenu={(e) => e.preventDefault()}>
      {/* Button to open the modal */}
      <button
        onClick={() => setIsOpen(true)}
        className={`${buttonClassName}`}
       
      >
        Apply Now
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Modal */}
      <div onContextMenu={(e) => e.preventDefault()}
        className={`fixed top-0 right-0 h-full w-full  md:w-1/2  p-6 bg-white overflow-auto shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="px-1 select-none py-o"
        >
          <img src={backe}/>
        </button>
        <br/>
        <div className="max-w-lg mx-auto select-none" onContextMenu={(e) => e.preventDefault()}>
        <br/>
        <h1 className="font-Poppins w-full text-[25px] font-semibold leading-[20px] text-left text-[#505050]" >Ready To Join Our Team</h1>
        <br/>
       <p className='font-Poppins text-[15px] font-medium leading-[24px] text-left text-[#BABABA]'>Our atmosphere is relaxed, fun, hard-working, and we fall anywhere between headphones 
and surround sound! We only bring on people to the team that has a passion for coding and 
designing; thus surrounding ourselves with happy people.</p>

        <br/>
          <form onSubmit={handleSubmit} className="space-y-1 ">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`mt-1 p-2 w-full border rounded-md ${
                  errors.name && 'border-red-500'
                }`}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">{errors.name}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`mt-1 p-2 w-full border rounded-md ${
                  errors.email && 'border-red-500'
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="mobileNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Mobile Number
              </label>
              <input
                type="tel"
                id="mobileNumber"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                className={`mt-1 p-2 w-full border rounded-md ${
                  errors.mobileNumber && 'border-red-500'
                }`}
              />
              {errors.mobileNumber && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.mobileNumber}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="alternateMobileNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Alternate Mobile Number
              </label>
              <input
                type="tel"
                id="alternateMobileNumber"
                name="alternateMobileNumber"
                value={formData.alternateMobileNumber}
                onChange={handleChange}
                className={`mt-1 p-2 w-full border rounded-md ${
                  errors.alternateMobileNumber && 'border-red-500'
                }`}
              />
              {errors.alternateMobileNumber && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.alternateMobileNumber}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="experience"
                className="block text-sm font-medium text-gray-700"
              >
                Experience (in years)
              </label>
              <input
                type="text"
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className={`mt-1 p-2 w-full border rounded-md ${
                  errors.experience && 'border-red-500'
                }`}
              />
              {errors.experience && (
                <p className="mt-1 text-sm text-red-500">{errors.experience}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="salaryExpectation"
                className="block text-sm font-medium text-gray-700"
              >
                Salary Expectation
              </label>
              <input
                type="text"
                id="salaryExpectation"
                name="salaryExpectation"
                value={formData.salaryExpectation}
                onChange={handleChange}
                className={`mt-1 p-2 w-full border rounded-md ${
                  errors.salaryExpectation && 'border-red-500'
                }`}
              />
              {errors.salaryExpectation && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.salaryExpectation}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="4"
                className={`mt-1 p-2 w-full border rounded-md ${
                  errors.description && 'border-red-500'
                }`}
              ></textarea>
              {errors.description && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.description}
                </p>
              )}
            </div>

            <FormSkills
              handleSkillChange={handleSkillChange}
              skills={formData.skills}
              errors={errors.skills}
            />

            <div>
              <label
                htmlFor="resume"
                className="block text-sm font-medium text-gray-700"
              >
                Resume
              </label>
              <input
                type="file"
                id="resume"
                name="resume"
                onChange={handleFileChange}
                className={`mt-1 p-2 w-full border rounded-md ${
                  errors.resume && 'border-red-500'
                }`}
              />
              {errors.resume && (
                <p className="mt-1 text-sm text-red-500">{errors.resume}</p>
              )}
            </div>
            <br/>
        <div className="flex justify-end w-full">
            <button
              type="submit"
              className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BottomRightModal;

const FormSkills = ({ handleSkillChange, skills, errors }) => {
  const [newSkill, setNewSkill] = useState('');
  const suggestedSkills = [
    'Node.js',
    'React',
    'MongoDB',
    'MySQL',
    'Express.js',
    'JavaScript',
    'HTML',
    'CSS',
    'Vue.js',
    'Angular',
  ];

  const handleSkillInputChange = (e) => {
    setNewSkill(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && newSkill.trim() !== '') {
      e.preventDefault();
      addSkill(newSkill.trim());
      setNewSkill('');
    }
  };

  const addSkill = (skill) => {
    if (!skill) {
      return;
    }
    if (skills.includes(skill)) {
      return;
    }
    const updatedSkills = [...skills, skill];
    handleSkillChange(updatedSkills);
  };

  const handleRemoveSkill = (index) => {
    const updatedSkills = skills.filter((_, i) => i !== index);
    handleSkillChange(updatedSkills);
  };

  const filteredSkills = suggestedSkills.filter((skill) =>
    skill.toLowerCase().includes(newSkill.trim().toLowerCase())
  );

  return (
    <div>
      <label
        htmlFor="skills"
        className="block text-sm font-medium text-gray-700"
      >
        Skills
      </label>
      <div className="flex flex-wrap gap-2 mt-1">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center px-2 py-1 bg-gray-200 rounded-md"
          >
            <span className="text-sm">{skill}</span>
            <button
              type="button"
              className="ml-2 text-red-600 hover:text-red-800"
              onClick={() => handleRemoveSkill(index)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <input
        type="text"
        id="skills"
        name="skills"
        value={newSkill}
        onChange={handleSkillInputChange}
        onKeyDown={handleKeyDown}
        className={`mt-2 p-2 w-full border rounded-md ${
          errors && 'border-red-500'
        }`}
        placeholder="Add a skill..."
      />
      {errors && <p className="mt-1 text-sm text-red-500">{errors}</p>}
      {newSkill && (
        <ul className="mt-1 border border-gray-300 rounded-md shadow-md">
          {filteredSkills.map((skill, index) => (
            <li
              key={index}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              onClick={() => addSkill(skill)}
            >
              {skill}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
