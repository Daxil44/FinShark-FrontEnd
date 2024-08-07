import React, { useState } from 'react';
import logo from './logo.png';
import { Link } from 'react-router-dom';
import Modal from './Model';


interface Props {}

const Navbar: React.FC<Props> = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<{ title: string; message: React.ReactNode }>({ title: '', message: '' });

  const handleLoginClick = () => {
    setModalContent({
      title: 'Login',
      message: (
        <p>
          Daxil is working on the backend. If you are a friend of Daxil, you must have his contact number. If you are a recruiter, you can contact Daxil on his personal website: {' '}
          <a href="https://daxilprofile.web.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
            https://daxilprofile.web.app/
          </a>.<b> We can discuss this during the interview. If you want to check the frontend part, then click on the "Get Started" button on the home page.</b>
        
        </p>
      )
    });
    setModalOpen(true);
  };

  const handleSignupClick = () => {
    setModalContent({
      title: 'Signup',
      message: (
        <p>
           Daxil is working on the backend. If you are a friend of Daxil, you must have his contact number. If you are a recruiter, you can contact Daxil on his personal website: {' '}
          <a href="https://daxilprofile.web.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
            https://daxilprofile.web.app/
          </a>.<b> We can discuss this during the interview. If you want to check the frontend part, then click on the "Get Started" button on the home page.</b>
        
        </p>
      )
    });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <nav className="relative container mx-auto p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-20">
            <Link to='/'>
              <img src={logo} alt="Logo" />
            </Link>
            <div className="hidden font-bold lg:flex">
              <Link to="/search" className="text-black hover:text-darkBlue">
                Search
              </Link>
            </div>
          </div>
          <div className="hidden lg:flex items-center space-x-6 text-black">
            <div className="hover:text-darkBlue cursor-pointer" onClick={handleLoginClick}>Login</div>
            <div
              className="px-8 py-3 font-bold rounded text-white bg-lightGreen hover:opacity-70 cursor-pointer"
              onClick={handleSignupClick}
            >
              Signup
            </div>
          </div>
        </div>
      </nav>
      {isModalOpen && <Modal title={modalContent.title} message={modalContent.message} onClose={closeModal} />}
    </>
  );
};

export default Navbar;



// old code
// import React from 'react'
// import logo from './logo.png';
// import { Link } from 'react-router-dom';
// interface Props  {}

// const Navbar = (props: Props) => {
//   return (
//     <nav className="relative container mx-auto p-6">
//     <div className="flex items-center justify-between">
//       <div className="flex items-center space-x-20">
//         <Link to='/'>
//         <img src={logo} alt="" /></Link>
//         <div className="hidden font-bold lg:flex">
//           <Link to="/search" className="text-black hover:text-darkBlue">
//             Search
//           </Link>
//         </div>
//       </div>
//       <div className="hidden lg:flex items-center space-x-6 text-back">
//         <div className="hover:text-darkBlue">Login</div>
//         <a
//           href=""
//           className="px-8 py-3 font-bold rounded text-white bg-lightGreen hover:opacity-70"
//         >
//           Signup
//         </a>
//       </div>
//     </div>
//   </nav>
//   )
// }

// export default Navbar