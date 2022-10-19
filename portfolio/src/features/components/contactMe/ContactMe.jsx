import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { MdPhone } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { IoLocationSharp } from "react-icons/io5";
import { Input, Button } from "reactstrap";
import style from "./contactMe.module.css";
import emailjs from "@emailjs/browser";

const ContactMe = ({data}) => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_a1xz9n6", "template_1m3y57h", form.current, "2eF6oXlYJUJS477xU").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    form.current.reset()
  };

  return (
    <div className={style.contact_container}>
      <div>
        <div className={style.contact_top}>
          <h3>
            Get in <span>Touch </span>
          </h3>
          <div className="border"></div>
        </div>

        <div className={style.contact_main}>
          <div className={style.contact_leftSide}>
            <div>
              <Link to="#" className={style.contact_leftSide_info}>
                <span>
                  <IoLocationSharp />
                </span>
                {data.location}
              </Link>
            </div>
            <div>
              <Link to="#" className={style.contact_leftSide_info}>
                <span>
                  <MdPhone />
                </span>
                {data.number}
              </Link>
            </div>
            <div>
              <a href="mailto:example@gmail.com" className={style.contact_leftSide_info}>
                <span>
                  <GrMail />
                </span>
                {data.email}
              </a>
            </div>
            <div>
              <a href={data.githubUrl} className={style.contact_leftSide_info}>
                <span>
                  <BsGithub />
                </span>
                {data.githubName}
              </a>
            </div>
          </div>
          <div className={style.contact_rightSide}>
            <form ref={form} onSubmit={handleSubmit}>
              <div>
                <Input type="text" placeholder="Name" name="name" />
                <Input type="email" placeholder="Email" name="email" />
              </div>
              <textarea type="text" className={style.message} placeholder="Message" name="message" />
              <Button type="submit" value="Send" className={style.button}>
                Submit Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
