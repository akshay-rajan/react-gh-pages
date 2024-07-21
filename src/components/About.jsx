import react from "react";
import profile from "../assets/github-profile-preview.png";

export default function About() {
  return (
    <main>
      <div class="container">
        <div class="laptop">
          <div class="laptop__screen">
            <img src={profile} width="1600" height="1000" alt="Screen" />
          </div>
          <div class="laptop__bottom">
            <div class="laptop__under"></div>
            </div>
          <div class="laptop__shadow"></div>
        </div>
      </div>
    </main>
  );
}
