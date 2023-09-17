import gh_black from "./assets/github-mark.png";
// import gh_white from "./assets/github-mark-white.png";
import in_black from "./assets/linkedin-black.png";
// import in_white from "./assets/linkedin-white.png";
import re_black from "./assets/resume-black.png";
// import re_white from "./assets/resume-white.png";

export default function App() {

  return (
   <div className="bg-neutral-300 flex flex-row justify-center h-screen">
    <div className="flex flex-col justify-center">
      <div className="bg-neutral-200 shadow-xl p-6 rounded-lg">
        <div className="grid grid-cols-5 grid-rows-3 gap-4 max-w-screen-md">
          <h1 className="col-span-2 row-span-3">Image</h1>
          <h1 className="col-span-3">Kevin Harvey</h1>
          <h1 className="col-span-3 row-span-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe accusamus quam qui doloremque neque mollitia placeat dicta deleniti, aliquid aperiam, voluptate ullam voluptatem excepturi nostrum, culpa tempora consequuntur soluta ipsa?</h1>
          <a href="https://github.com/kevinharv" target="_blank"><img className="w-20" src={gh_black} alt="GitHub Logo" /></a>
          <a href="https://www.linkedin.com/in/kevharv/" target="_blank"><img className="w-20" src={in_black} alt="GitHub Logo" /></a>
          <a href="/harvey_resume.pdf" target="_blank"><img className="w-20" src={re_black} alt="GitHub Logo" /></a>
        </div>
      </div>
    </div>
   </div> 
  )
}
