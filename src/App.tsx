import gh_black from "./assets/github-mark.png";
// import gh_white from "./assets/github-mark-white.png";
import in_black from "./assets/linkedin-black.png";
// import in_white from "./assets/linkedin-white.png";
import re_black from "./assets/resume-black.png";
// import re_white from "./assets/resume-white.png";
import headshot from "./assets/headshot.jpg";

export default function App() {

  return (
   <div className="bg-neutral-300 flex flex-row justify-center h-screen">
    <div className="flex flex-col justify-center">
      <div className="bg-neutral-200 shadow-xl p-6 rounded-lg">
        <div className="grid grid-cols-5 grid-rows-4 gap-4 max-w-screen-md">
          <h1 className="col-span-2 row-span-4 p-4"><img className="rounded-lg" src={headshot} alt="Professional Headshot" /></h1>
          <div className="col-span-3 flex flex-row justify-center items-center"><h1 className="text-6xl font-bold">Kevin Harvey</h1></div>
          <h1 className="col-span-3 row-span-2">Hi, I'm Kevin, a Student Development Supervisor and Computer Science student at the University of Texas at Dallas. I enjoy architecting and building out secure, stable, and scalable software solutions. Please reach out to me with internship and full-time opportunities!</h1>
          <a href="https://github.com/kevinharv" target="_blank"><img className="w-16" src={gh_black} alt="GitHub Logo" /></a>
          <a href="https://www.linkedin.com/in/kevharv/" target="_blank"><img className="w-16" src={in_black} alt="GitHub Logo" /></a>
          <a href="/harvey_resume.pdf" target="_blank"><img className="w-16" src={re_black} alt="GitHub Logo" /></a>
        </div>
      </div>
    </div>
   </div> 
  )
}
