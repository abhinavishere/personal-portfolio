import React from "react";
import Card from "./UI/Card";
import profileImg from "../assets/profile-img.png";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

const Intro = () => {
  return (
    <Card>
      <div className="flex flex-col gap-y-3 md:flex-row md:gap-x-5 md:max-w-4xl">
        <div className="max-h-80 overflow-hidden rounded-md md:max-h-60 ">
          <img
            className="inline-block h-full w-full max-w-full  object-cover object-right-top filter grayscale hover:grayscale-0 transition"
            src={profileImg}
            alt="Profile of Abhinav Sawarkar"
          />
        </div>
        <div className="flex flex-col gap-y-3 md:gap-y-5 ">
          <div className="flex flex-col gap-y-3 md:flex-row md:gap-y-0 justify-between">
            <div className="">
              <h1 className="text-gray-700 font-medium text-xl">
                Abhinav Sawarkar
              </h1>
              <h4 className="text-gray-500 tracking-wider text-sm">
                Front-end Developer
              </h4>
            </div>

            <div className="flex flex-col gap-y-1">
              <a
                href="mailto:abhisawarkar85@gmail.com"
                className="flex gap-x-2 cta-link focus"
              >
                <span>
                  <EmailIcon />
                </span>
                <span>abhisawarkar85@gmail.com</span>
              </a>
              <a
                href="tel:+917719909323"
                className="flex gap-x-2 cta-link focus"
              >
                <span>
                  <PhoneIcon />
                </span>
                <span>(+91) 771-990-9323</span>
              </a>
            </div>
          </div>

          <p className="text-gray-700 leading-tight">
            Self-motivated developer, who is willing to learn and create
            outstanding UI applications.
          </p>
          <div className="flex gap-x-4">
            <a
              className="cta-link focus "
              href="https://www.linkedin.com/in/abhinav-sawarkar-890a15144/"
            >
              <LinkedInIcon style={{ fontSize: "2rem" }} />
            </a>
            <a
              className="cta-link focus"
              href="https://twitter.com/probablyabhinav"
            >
              <TwitterIcon style={{ fontSize: "2rem" }} />
            </a>
            <a
              className="cta-link focus"
              href="https://github.com/abhinavishere"
            >
              <GitHubIcon style={{ fontSize: "2rem" }} />
            </a>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Intro;
