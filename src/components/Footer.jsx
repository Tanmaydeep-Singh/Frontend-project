import React from 'react'
import {AiFillLinkedin,AiFillTwitterCircle,AiFillGithub,AiTwotoneFileAdd} from 'react-icons/ai'
import resume from '../files/Resume.pdf';

function Footer() {

    const onButtonClick = () => {

        // using Java Script method to get PDF file
        fetch(resume).then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = "Tanmaydeep Singh .pdf";
                alink.click();
            })
        })
    }

  return (

<footer className="  p-10 bg-white rounded-lg mt-10 md:flex md:items-center md:justify-between md:p-6 ">
    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="#" onClick={onButtonClick}  className="hover:underline">Tanmaydeep Singh</a>
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="https://www.linkedin.com/in/tanmaydeep-singh/" className="mr-6 hover:underline md:mr-6 ">
                <AiFillLinkedin size={20} />
            </a>
        </li>
        <li>
            <a href="https://twitter.com/SinghTanmaydeep" className="mr-6 hover:underline md:mr-6">
            <AiFillTwitterCircle size={20} />
            </a>
        </li>
        <li>
            <a href="https://github.com/tanmaydeep-singh" className="mr-6 hover:underline md:mr-6">
            <AiFillGithub size={20} />
            </a>
        </li>
    </ul>
</footer>
  )
}

export default Footer