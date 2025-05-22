import React ,{useState,useEffect}from "react";

import ApplyButton from "../joningForm/joiningForm";
import { useNavigate } from "react-router-dom";
import {Helmet} from "react-helmet";
import axios from 'axios'
// title: "Full Stack Developer in MEARN Stack",
// status: "Hiring",
// experience: "0-2 y
const url=import.meta.env.VITE_API_URL
// const jobData = [
//   {
//     title: "Business development executive (Field Marketing)",
//     status: "Hiring",
//     location: "Nagercoil",
//     experience: "0-2 years",
//     jobSummary:
//       " We are seeking a highly motivated and results-driven Business Development Executive to join our team. The successful candidate will be responsible for identifying new business opportunities, developing and nurturing relationships with potential clients, and driving revenue growth for the company. This role requires a strategic thinker with excellent communication skills and a proven track record of achieving sales targets.",
//     responsibilitiesAndDuties: [
//       "Identify and research potential clients and business opportunities.",
//       "Develop and implement strategic sales plans to achieve revenue targets.",
//       "Build and maintain strong relationships with key decision-makers and stakeholders.",
//       "Conduct product presentations and demonstrations to prospective clients..",
//       "Prepare and negotiate proposals, contracts, and agreements.",
//       "Collaborate with internal teams to ensure seamless delivery of products/services.",
//       "Stay updated on industry trends, market conditions, and competitor activities.",
//       "Provide regular reports and updates to management on sales performance and pipeline."
//     ],
//     requiredExperienceAndQualifications: [
//       "Bachelor’s degree in Business Administration, Marketing, or a related field.",
//       "Proven track record of success in sales or business development roles.",
//       "Strong negotiation and closing skills.",
//       "Excellent communication and interpersonal skills..",
//       "Ability to work independently and as part of a team.",
//       "Proficiency in MS Office and CRM software."
//     ],
//     keySkills: [
//       " Sales Skills and Networking",
//       "Communication and Strategic thinking",
//       "Strategic Thinking and Market Knowledge ",
//       " Client Relationship Management",
//       "Problem-Solving and team player"
//     ]
//   },
//   {
//     title: "Software Trainer",
//     location: "Nagercoil",
//     status: "Hiring",
//     experience: "0-2 years",
//     jobSummary:"We are seeking an experienced and enthusiastic Software Trainer to join our training team. The Software Trainer will be responsible for delivering training programs on [specific software/technology], ensuring that participants gain a deep understanding of the software and its applications. The successful candidate will have excellent communication skills, a passion for teaching, and expertise in [specific software/technology].",
//     responsibilitiesAndDuties: [
//       "Develop training materials, including presentations, manuals, and exercises, tailored to the needs of the target audience.",
//       "Deliver engaging and interactive training sessions on [specific software/technology] to individuals or groups, both in-person and online.",
//       "Assess participants' learning needs and adjust training content and delivery methods accordingly.",
//        "Provide hands-on demonstrations and exercises to reinforce learning and facilitate skill development.",
//        "Evaluate participant performance and provide feedback to support their learning journey.",
//        "Stay updated on the latest developments in [specific software/technology] and incorporate relevant updates into training programs.",
//        "Collaborate with the training team to continuously improve training materials and delivery methods.",
//        "Assist in marketing and promoting training programs to attract new participants and clients.",
//     ],
//     requiredExperienceAndQualifications: [
// "Bachelor's degree in Computer Science, Information Technology, Software Engineering, or a related field. A higher degree such as a Master's or Ph.D. may be advantageous but is not always required",
// " Proficiency in the software or technology being taught is essential. The software trainer should have a deep understanding of various features, functionalities, and best practices.",
// "Previous experience in training, teaching, or instructional design is desirable. This could include roles such as a corporate trainer, technical trainer, instructor, or educator.",
// "Excellent verbal and written communication skills are essential for effectively conveying technical concepts to learners of varying skill levels.",
// "Strong interpersonal skills are necessary for building rapport with trainees and creating a positive learning environment.",
// "The ability to adapt training methods and content to meet the diverse learning styles and needs of participants.",
// "A commitment to continuous learning and professional development is important for staying updated on the latest developments, updates, and trends in the software or technology being taught.",
// "Proficiency in soliciting feedback from participants to assess the effectiveness of training sessions and identify areas for improvement.",
//     ],
//     keySkills: [
//       "Technical Proficiency",
//       "Effective Communication",
//       "Presentation Skills & Adaptability",
//       "Problem-Solving Skills",
//       "Interpersonal Skills",
     
//     ]
//   },
//   {
//     title: "UI/UX Design Trainer",
//     location:" Nagercoil, Kanyakumari",
//     status: "Hiring",
//     experience: "0-2 years",
//     jobSummary:
//       "We are seeking an experienced and enthusiastic UI/UX Design Trainer to join our training team. The UI/UX Design Trainer will be responsible for delivering training programs on user interface (UI) and user experience (UX) design, ensuring that participants gain a deep understanding of design principles, tools, and methodologies. The successful candidate will have excellent communication skills, a passion for teaching, and expertise in UI/UX design.",
//     responsibilitiesAndDuties: [
//       "Develop training materials, including presentations, tutorials, and exercises, tailored to the needs of the target audience.",
//       "Deliver engaging and interactive training sessions on UI/UX design principles, tools, and best practices to individuals or groups, both in-person and online.",
//       "Teach fundamental concepts such as wireframing, prototyping, usability testing, and design thinking, as well as advanced topics in UI/UX design.",
//       "Provide hands-on demonstrations and exercises using design software such as Adobe XD, Sketch, Figma, or InVision to reinforce learning and facilitate skill development.",
//       "Assess participants' learning needs and adjust training content and delivery methods accordingly.",
//       "Evaluate participant performance through assignments, projects, and assessments, providing constructive feedback to support their learning journey.",
//   "Stay updated on the latest developments and trends in UI/UX design and incorporate relevant updates into training programs.",
//   "Collaborate with the training team to continuously improve training materials, curriculum, and delivery methods.",
//   " Assist in marketing and promoting UI/UX design training programs to attract new participants and clients.",
  
//     ],
//     requiredExperienceAndQualifications: [
//      "Bachelor's degree in Graphic Design, Interaction Design, Human-Computer Interaction, or a related field.",
//      "Proven experience as a UI/UX Designer or similar role, with expertise in UI/UX design principles, tools, and methodologies.",
//      "Excellent communication and presentation skills, with the ability to explain complex design concepts in a clear and understandable manner.",
//      "Strong interpersonal skills and the ability to engage and motivate participants.",
//      "Experience in developing training materials and curriculum design is preferred.",
//      "Certification in UI/UX design or instructional design is a plus.",
//     ],
//     keySkills: [
//      "Technical Proficiency",
//      "Effective Communication",
//      "Presentation Skills",
//      "Adaptability",
//      "Patience and Empathy",
//      "Problem-Solving Skills",
//      "Interpersonal Skills",
//     ]
//   },
//   {
//     title: "Telecaller",
//     location:" Nagercoil, Kanyakumari",
//     status: "Hiring",
//     experience: "0-2 years",
//     jobSummary:"We are looking for a skilled and enthusiastic Telecaller to join our team. The Telecaller will be responsible for contacting potential customers by telephone to promote our products/services, generate leads, and secure appointments for our sales team. The successful candidate must be confident, persuasive, and customer-centric.",
//     responsibilitiesAndDuties: [
//       "Contact potential customers via telephone to introduce our products/services and explain their benefits.",
//       "Identify and qualify sales leads by gathering relevant information from prospective customers.",
//       "Maintain a high level of professionalism and courtesy while engaging with customers over the phone.",
//       "Provide accurate and detailed information about our products/services to customers.",
//       "Answer incoming calls from customers, address inquiries, and resolve complaints or issues.",
//       "Keep accurate records of customer interactions, including details of inquiries, comments, and actions taken.",
//       "Follow up on leads and inquiries promptly to ensure timely responses and maximize sales opportunities.",
//       "Collaborate with the sales team to schedule appointments and follow up on leads generated through telecalling.",
//       "Meet or exceed monthly and quarterly sales targets set by the management.",
     
//     ],
//     requiredExperienceAndQualifications: [
//       "High school diploma or equivalent. Additional education in sales or marketing is a plus.",
//       "Proven experience as a Telecaller or similar role, preferably in a sales environment.",
//       "Excellent communication and interpersonal skills.",
//       "Persuasive and confident phone manner.",
//       "Strong negotiation and persuasion skills.",
//       "Ability to work effectively in a fast-paced environment.",
//       "Proficiency in using CRM software and other sales tools.",
//       "Fluency in [languages spoken by your target audience] is desirable.",
      
//     ],
//     keySkills: [
//       "Communication Skills",
//       "Active Listening",
//       "Persuasion and Negotiation",
//       "Customer Service",
//       "Product/Service Knowledge",
//       "Language Skills",
//       "Problem-Solving",
//     ]
//   }
// ];
// job list GET `${URL}/api/job/list`
// job single GET `${URL}/api/job/${id}/data`





const Careers = () => {

const [jobData, setJobData] = useState(null)


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${url}api/job/list`);
        setJobData(response.data.jobs);
        console.log(response.data.jobs);
      } catch (err) {
        console.error(err);
      }
    };
  
    fetchData();
  }, []);
  const navigate = useNavigate();
  const handleApplyClick = job => {
    navigate("/career/form", { state: { job } });
  };
  const buttonClassName =
    "cursor-pointer bg-[#2EB6C4] rounded-full px-6 py-1 text-xs text-white lg:w-[auto] ";

  return (
    <div>
      <div className="flex flex-col items-center justify-center py-10bg-[#ffffff] select-none" onContextMenu={(e) => e.preventDefault()}>
        <div className="flex relative flex-col justify-center items-center mt-0 px-6 w-full py-10 bg-[#ffffff]  md:px-[15px] lg:px-[89px]">
          <h2 className="text-center w-full max-w-[565px] text-[40px] font-Poppins not-italic font-semibold text-[#000000] bg-[#ffffff]  ">
            Careers
          </h2>
          <p className="py-5 w-full max-w-2xl text-[17px] font-Poppins not-italic font-normal text-[#848484] text-center">
            Explore exciting career opportunities with us and join a dynamic
            team dedicated to innovation and excellence. Visit our Career page
            to apply and start your journey today.
          </p>
        </div>

        <div className=" px-5 md:px-[15px] lg:px-[87px]  grid  grid-cols-1 gap-6  mt-10 sm:grid-cols-2 lg:grid-cols-3">
          {jobData && jobData.map((job, index) =>
            <div
              key={index}
              className="min-h-[140px] md:min-w-[250px] p-5 border border-solid border-[#2AB6C5] hover:shadow-lg rounded-md"
            >
              <div className="flex flex-row items-center justify-between mb-2">
                <span className=" font-semibold text-ml text-left  leading-[25px] text-[#505050]">
                  {job.designation}
                </span>
                <span className="bg-[#25B800] rounded ml-1 px-2 py-1 text-xs text-white">
                  {job.status}
                </span>
              </div>
              <p className="text-sm text-[#505050] mb-4">
                {job.work_experience}
              </p>
              <div className="flex flex-row items-center justify-between">
                <span
                  className="text-[#81C592] text-sm underline cursor-pointer"
                  onClick={() => handleApplyClick(job)}
                >
                  View
                </span>

                <span className="">
                  <ApplyButton buttonClassName={buttonClassName} />
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Careers;

/////
