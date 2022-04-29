import React from "react";

const Blogs = () => {
  return (
    <div>
      <h1>Question-1 : Difference between authorization and authentication</h1>
      <p className="fs-5">
        Answer:<br></br> Authentication: Authentication is the process of
        determining the user's identity via the available credentials, thus
        verifying the identity.Authentication is the process of proving that you
        are who you say you are. It's sometimes shortened to AuthN.
        <br></br>Authorization: Authorization, meanwhile, is the process of
        providing permission to access the system.Authorization is the act of
        granting an authenticated party permission to do something. It specifies
        what data you're allowed to access and what you can do with that data.{" "}
      </p>
      <h1>
        Question-2 : What other services does firebase provide other than
        authentication?
      </h1>
      <p className="fs-5">
        Answer: <br></br>Firebase is an excellent platform for building and
        running successful apps. As a developer, you can use it to build,
        improve, and grow web and mobile applications. It also helps build apps
        faster, release and monitor them, and engage the app users.
        Firebase is a technology that allows swift app development for the web, OS X, Android,
        and iOS.
      </p>
    </div>
  );
};

export default Blogs;