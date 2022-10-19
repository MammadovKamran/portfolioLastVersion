import React from "react";
import profile_img from "../../assets/png/profile.png";
import style from "./aboutMe.module.css";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import { ImCross } from "react-icons/im";
import { MdPhone } from "react-icons/md";
import { GrMail } from "react-icons/gr";
import { IoLocationSharp } from "react-icons/io5";
import { FaUserTie } from "react-icons/fa";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const AboutMe = ({ data }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      width: "950px",
      height: "670px",
      backgroundColor: "black",
      border: "none",
      padding: "0",
      zIndex: 1000,
    },
    overlay: {
      backgroundColor: "transparent",
      zIndex: 1000,
    },
  };

  Modal.setAppElement(document.getElementById("root"));

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className={style.aboutMe_container}>
      <div>
        <div className={style.aboutMe_leftSide}>
          <img src={profile_img} alt="Profile img" />
        </div>
        <div className={style.aboutMe_rightSide}>
          <h3>
            {data.name} <span className={style.home_text_surname}>{data.surname}</span>
          </h3>
          <h3>
            <span>{data.specialty1}</span> {data.specialty2}
          </h3>
          <div className="border"></div>
          <div className={style.aboutMe_rightSide_mobile}>
            <p>{data.description}</p>
            <Button className={style.home_button} onClick={openModal}>
              Learn More
            </Button>
          </div>
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          className={style.modal_container}
          contentLabel="Example Modal"
        >
          <div className={style.modal}>
            <div className={style.modal_content}>
              <div className={style.modal_content_leftSide}>
                <div className={style.modal_content_leftSide_top}>
                  <div>
                    <img src={profile_img} alt="" />
                  </div>
                  <div>
                    <h3>
                      {data.name} <span className={style.home_text_surname}>{data.surname}</span>
                    </h3>
                    <h3>
                      <span>{data.specialty1}</span> {data.specialty2}
                    </h3>
                  </div>
                </div>

                <div className={style.modal_content_leftSide_main}>
                  <div>
                    <Link to="#" className={style.modal_content_leftSide_info}>
                      <span>
                        <FaUserTie />
                      </span>
                      Kamran Mammadov
                    </Link>
                  </div>
                  <div>
                    <Link to="#" className={style.modal_content_leftSide_info}>
                      <span>
                        <MdPhone />
                      </span>
                      03.09.1997
                    </Link>
                  </div>
                  <div>
                    <Link to="#" className={style.modal_content_leftSide_info}>
                      <span>
                        <IoLocationSharp />
                      </span>
                      Baku, Azerbaijan
                    </Link>
                  </div>
                  <div>
                    <Link to="#" className={style.modal_content_leftSide_info}>
                      <span>
                        <MdPhone />
                      </span>
                      +994 051(070) 308 41 55
                    </Link>
                  </div>
                </div>
              </div>

              <div className={style.modal_content_rightSide}>
                <div>
                  <h3>
                    About <span>Me</span>
                  </h3>
                  <div className="border"></div>
                  <p>{data.description}</p>
                </div>
                <div className={style.modal_programming_skills}>
                  <h3>
                    Programming <span>Skills</span>
                  </h3>
                  <div className="border"></div>
                  <div className={style.modal_programming_skill}>
                    <div>
                      <p>HTML</p>
                      <p>95%</p>
                    </div>
                    <span className={style.progressBar}>
                      <p></p>
                    </span>
                  </div>

                  <div className={style.modal_programming_skill}>
                    <div>
                      <p>Css</p>
                      <p>90%</p>
                    </div>
                    <span className={style.progressBar}>
                      <p></p>
                    </span>
                  </div>

                  <div className={style.modal_programming_skill}>
                    <div>
                      <p>Javascript</p>
                      <p>70%</p>
                    </div>
                    <span className={style.progressBar}>
                      <p></p>
                    </span>
                  </div>

                  <div className={style.modal_programming_skill}>
                    <div>
                      <p>React</p>
                      <p>60%</p>
                    </div>
                    <span className={style.progressBar}>
                      <p></p>
                    </span>
                  </div>

                  <div className={style.modal_programming_skill}>
                    <div>
                      <p>Redux Toolkit</p>
                      <p>50%</p>
                    </div>
                    <span className={style.progressBar}>
                      <p></p>
                    </span>
                  </div>
                </div>
                <div className={style.modal_language_skills}>
                  <h3>
                    Language <span>Skills</span>
                  </h3>
                  <div className="border"></div>
                  <div>
                    <div className={style.modal_language_skill}>
                      <CircularProgressbar style={{ backgroundolor: "#0652e9" }} value={100} text={`${100}%`} />
                      <p>Azerbaijan</p>
                    </div>
                    <div className={style.modal_language_skill}>
                      <CircularProgressbar style={{ backgroundolor: "#0652e9" }} value={40} text={`${40}%`} />
                      <p>English</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button onClick={closeModal}>
              <ImCross />
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default AboutMe;
