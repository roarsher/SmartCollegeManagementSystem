//  import React from "react";
// // import frame from "../assets/frame.png";
// import frame from '../../assets/frame.png'; // Use two sets of dots to go up twice

// import SignupForm from "../forms/SignUpForm.js";
// import LoginForm from "../forms/LoginForm.js";
// //import { FcGoogle } from "react-icons/fc";

// const Template = ({ title, desc1, desc2, image, formType }) => {
//   return (
//     <div className="flex h-screen w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 justify-between">

//       <div className="w-11/12 max-w-[450px] mx-0 text-white">
//         <h1 className="text-richblack-5 font-semibold text-[1.79rem] leading-[2.375rem]">
//           {title}
//         </h1>

//         <p className="text-[1.125rem] mt-4 leading-[1.625rem]">
//           <span className="text-richblack-70">{desc1}</span>
//           <span className="text-blue-100 italic">{desc2}</span>
//         </p>

//         {/* ✅ Removed setIsLoggedIn */}
//         {formType === "signup" ? <SignupForm /> : <LoginForm />}

//         {/* <div className="flex w-full items-center my-4 gap-x-2">
//           <div className="h-[1px] w-full bg-white"></div>
//           <p className="text-white font-medium leading-[1.375rem]">OR</p>
//           <div className="h-[1px] w-full bg-white"></div>
//         </div>

//          <button className="w-full flex items-center justify-center 
//           rounded-[8px] font-medium text-richblack-900 
//          bg-yellow-100 border border-yellow-300 
//           px-[12px] py-[8px] gap-x-2 mt-6
//            hover:bg-yellow-200 transition-all duration-200"
// >
//   <FcGoogle />
//   <p>Continue with Google</p>
// </button> */}

//       </div>

//       <div className="relative w-11/12 max-w-[450px]">
//         <img
//           src={frame}
//           alt="frame"
//           width={558}
//           height={504}
//           loading="lazy"
//         />
//         <img
//           src={image}
//           alt="illustration"
//           width={558}
//           height={504}
//           loading="lazy"
//           className="absolute -top-4 right-4"
//         />
//       </div>

//     </div>
//   );
// };

// export default Template;





// import React from "react";
// import frame from '../../assets/frame.png';
// import SignupForm from "../forms/SignUpForm.js";
// import LoginForm from "../forms/LoginForm.js";

// const Template = ({ title, desc1, desc2, image, formType }) => {
//   return (
//     <div className="flex min-h-screen w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 justify-between items-start">

//       {/* Left - Form */}
//       <div className="w-11/12 max-w-[450px] mx-0 text-white pb-12">
//         <h1 className="text-richblack-5 font-semibold text-[1.79rem] leading-[2.375rem]">
//           {title}
//         </h1>

//         <p className="text-[1.125rem] mt-4 leading-[1.625rem]">
//           <span className="text-richblack-70">{desc1}</span>
//           <span className="text-blue-100 italic">{desc2}</span>
//         </p>

//         {formType === "signup" ? <SignupForm /> : <LoginForm />}
//       </div>

//       {/* Right - Image (sticky so it stays visible while form scrolls) */}
//       <div className="relative w-11/12 max-w-[450px] sticky top-12 hidden lg:block">
//         <img src={frame} alt="frame" width={558} height={504} loading="lazy" />
//         <img
//           src={image}
//           alt="illustration"
//           width={558}
//           height={504}
//           loading="lazy"
//           className="absolute -top-4 right-4"
//         />
//       </div>

//     </div>
//   );
// };

// export default Template;

import React from "react";
import frame from '../../assets/frame.png';
import SignupForm from "../forms/SignUpForm.js";
import LoginForm from "../forms/LoginForm.js";

const Template = ({ title, desc1, desc2, image, formType }) => {
  return (
    <div className="flex min-h-screen w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 justify-between items-start">

      {/* Left - Form */}
      <div className="w-11/12 max-w-[450px] mx-0 text-white pb-12">
        <h1 className="text-richblack-5 font-semibold text-[1.79rem] leading-[2.375rem]">
          {title}
        </h1>

        <p className="text-[1.125rem] mt-4 leading-[1.625rem]">
          <span className="text-richblack-70">{desc1}</span>
          <span className="text-blue-100 italic">{desc2}</span>
        </p>

        {formType === "signup" ? <SignupForm /> : <LoginForm />}
      </div>

      {/* Right - Image (sticky so it stays visible while form scrolls) */}
      <div className="w-11/12 max-w-[450px] sticky top-12 hidden lg:block">
        <div className="relative">
        <img src={frame} alt="frame" width={558} height={504} loading="lazy" />
        <img
          src={image}
          alt="illustration"
          width={558}
          height={504}
          loading="lazy"
          className="absolute -top-4 right-4"
        />
        </div>
      </div>

    </div>
  );
};

export default Template;