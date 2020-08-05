import React, { useState } from "react";

const Feedback = () => {
  const [experience, setExperience] = useState("");
  const [effort, setEffort] = useState();
  const [recommend, setRecommend] = useState();
  const experienceArray = [
    "Not at all satisfied",
    "Slightly satisfied",
    "Moderately satisfied",
    "Quite satisfied",
    "Extremly satisfied",
  ];
  const effortArray = [1, 2, 3, 4, 5];
  const recommendArray = [];
  for (let i = 1; i <= 10; i++) {
    recommendArray.push(i);
  }
  const handleCurrentExperience = (activeExp) => {
    setExperience(activeExp);
    console.log(experience);
  };
  const handleEffort = (activeEff) => {
    setEffort(activeEff);
    console.log(effort);
  };
  const handleRecommend = (activeRecom) => {
    setRecommend(activeRecom);
    console.log(recommend);
  };
  return (
    <div className="container feedbackDontainer mt-5">
      <h1 className="pageTitle pt-4">Feedback</h1>
      <hr />
      <div className="row">
        <div className="col-9">
          <p>How would you rate your overall Snaxa.com experience?</p>
          <div className="col row justify-content-between">
            {experienceArray.map((item, i) => {
              return (
                <div key={i} className="">
                  <label
                    onClick={() => handleCurrentExperience(item)}
                    name={item}
                    className={`satisfiedTabs ${
                      experience === item && "activeExperience"
                    }`}
                  >
                    {item}
                  </label>
                </div>
              );
            })}
          </div>
          <hr />
          <p>
            How much effort did you personally have to put forth to get your
            service done?
          </p>
          <div className="d-flex justify-content-between">
            <label className="maroonFont">Very low effort</label>
            <label className="maroonFont">Very high effort</label>
          </div>
          <div className="row justify-content-between">
            {effortArray.map((item, i) => {
              return (
                <div key={i} className="col">
                  <label
                    onClick={() => handleEffort(item)}
                    name={item}
                    className={`effortTab ${effort === item && "activeEffort"}`}
                  >
                    {item}
                  </label>
                </div>
              );
            })}
          </div>
          <hr />
          <p>
            How likely are you to recommend Snaxa.com to friend, family or
            colleagues?
          </p>
          <div className="d-flex justify-content-between">
            <label className="maroonFont">Not all likely</label>
            <label className="maroonFont">Extremly likely</label>
          </div>
          <div className="row justify-content-between">
            {recommendArray.map((item, i) => {
              return (
                <div key={i} className="col">
                  <label
                    onClick={() => handleRecommend(item)}
                    name={item}
                    className={`recommendTab ${
                      recommend === item && "activeRecommed"
                    }`}
                  >
                    {item}
                  </label>
                </div>
              );
            })}
          </div>
          <hr />
          {/* <p>Please provide any other feedback on your Snaxa.com experience.</p> */}
          <div class="form-group">
            <label for="exampleFormControlTextarea1">
              Please provide any other feedback on your Snaxa.com experience.
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="8"
              style={{ resize: "none" }}
            ></textarea>
          </div>
        </div>
        <div className="col-3">
          {[...Array(3)].map((item) => {
            return <div className="rightBox mb-4"></div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Feedback;
