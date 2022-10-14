import React from "react";
import "./Main.css";

function Main() {
   return (
      <div className="main">
         <div className="image centered">
            <div className="flex-column">
               <h1 className="grid centered text-center title">Alaankwa</h1>

               <h4 className="grid centered text-center">A mod for x3</h4>

               <div className="flex flex-center flex-gap">
                  <a
                     href="https://discord.gg/S587CRb"
                     className="button text-center"
                  >
                     Discord
                  </a>
                  <a
                     href="https://github.com/temetvince/alaankwa"
                     className="button text-center"
                  >
                     Github
                  </a>
                  <a
                     href="https://1drv.ms/u/s!At6bb8th7HZtmIM5ZEBziTonBAyZzw?e=wIx1zi"
                     className="button text-center text-no-wrap"
                  >
                     LU Files
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Main;
