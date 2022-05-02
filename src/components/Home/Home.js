import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Home.css";
// import banner from '../../images/hand-holding-smartphone-with-tutor-screen.jpg'
import banner from "../../images/Webinar-bro.svg";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import useTopics from "../../hooks/useTopics";
import Topic from "../Topic/Topic";
const Home = () => {
  const [topics, setTopics] = useTopics();
  let navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  return (
    <>
      <div className="row banner">
        <div className="col-md-6 px-5 py-5 d-flex align-items-center ">
          <div className="">
            <h1 className="text-start">
              Learn with <span className="orange">Sadia</span> anytime anywhere
            </h1>
            <h4 className="text-start py-5  pe-5">
              Our mision is to help people to find the best course online and
              learn with expert anytime, anywhere.
            </h4>
            <Button
              className={user ? " btn-danger d-none " : " btn-danger"}
              onClick={() => {
                navigate("/signup");
              }}
            >
              Create Account
            </Button>
          </div>
        </div>
        <div className="col-md-6  banner-pik d-flex justify-content-center align-items-center">
          <img src={banner} className="image-fluid" alt="" height="500px" />
          {/* <img src="https://e-tutor-html.netlify.app/assets/images/hero-thumb.jpg" className="img-fluid" alt="" /> */}
        </div>
      </div>
      <div className="catagory container my-5 py-3">
        <h1 className="text-center ">Top Courses</h1>
        <div className="services row container m-auto p-3">
          {topics.slice(0, 3).map((item) => (
            <Topic key={item.id} item={item}></Topic>
          ))}
        </div>
      </div>
      <div className="benefit container my-5 py-3">
        <h1 className="text-center ">Benefit</h1>
        <div className="container m-auto p-3 d-flex justify-content-evenly">
          <ul>
            <li className="my-4 text-start">Easy to learn</li>
            <li className="my-4 text-start">You can use your Phone</li>
            <li className="my-4 text-start">Live Class</li>
            <li className="my-4 text-start">Recorded Video</li>
          </ul>
          <ul>
            <li className="my-4 text-start">Provide PDF</li>
            <li className="my-4 text-start">Provide Notes</li>
            <li className="my-4 text-start">Anytime Support</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
