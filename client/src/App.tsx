import React, { useEffect, useState } from "react";
import "./css/MainNav.css";
import "./css/SideNav.css";
import "./App.css";
import Nav from "./components/Nav";
import Colors from "./constants/Colors";
import Icon from "./components/Icon";
import LabeledLogo from "./components/LabeledLogo";
import SearchBar from "./components/SearchBar";
import Tooltip from "./components/Tooltip";

function App() {
  const [user, setUser] = useState<any>({
    firstName: "Abhay",
    lastName: "Chauhan",
    points: 0,
  });
  // let [data, setData] = useState<string | null>(null);
  // useEffect(() => {
  //   fetch(
  //     "http://localhost:8080/signin?email=abhay.csgo001@gmail.com&password=9231"
  //   )
  //     .then((res) => res.json())
  //     .then((json) => {
  //       setData(json[0].userID);
  //       console.log(json[0].userID);
  //       console.log(data);
  //     });
  // });

  return (
    <main>
      <Nav
        className="mainNav"
        start={
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "row",
              gap: "1.5rem",
            }}
          >
            <Icon
              style={{ width: 21, height: 15 }}
              fill={Colors.black}
              icon="menu"
              className="mainNav-menu-logo"
              viewBox="0 0 28 20"
            />

            <LabeledLogo
              logo={
                <img
                  src="assets/images/logoLight.png"
                  className="mainNav-logo"
                />
              }
              labelClass="mainNav-logoLabel"
              label="CipherSchools"
            />

            <LabeledLogo
              className="mainNav-explore-logo"
              logo={
                <Icon
                  viewBox="0 0 27 27"
                  style={{
                    width: "1rem",
                    height: "1rem",
                  }}
                  icon="explore"
                  className="mainNav-explore-logo"
                />
              }
              label={
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  Browse
                  <Icon
                    icon="downArrow"
                    style={{ width: 10, height: 8 }}
                    viewBox="0 0 13 8"
                  ></Icon>
                </span>
              }
            />
          </div>
        }
        end={
          <div className="mainNav-actions">
            <SearchBar filterVisible />
            <span className="mainNav-actions-notification">
              <Tooltip text="Notifications" showOn="hover">
                <Icon
                  icon="bell"
                  style={{ width: 15, height: 19 }}
                  viewBox="0 0 20 25"
                />
              </Tooltip>
            </span>
            <span className="mainNav-actions-profile">
              <Tooltip
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "2rem",
                  height: "2rem",
                  backgroundColor: Colors.primary,
                  borderRadius: "50%",
                }}
                text={user.firstName + " " + user.lastName}
                showOn="hover"
              >
                <Icon
                  icon="defaultUser"
                  fill="#fff"
                  style={{ width: 20, height: 20 }}
                  viewBox="0 0 24 24"
                />
              </Tooltip>
            </span>
            <span className="mainNav-actions-points">
              <Tooltip text={"CipherPoint: " + user.points} showOn="hover">
                <LabeledLogo
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    justifyContent: "center",
                  }}
                  logo={
                    <img
                      style={{ width: "1.5rem", height: "1.5rem" }}
                      src="assets/images/points.png"
                      alt="points"
                    />
                  }
                  label={user.points}
                  labelClass="mainNav-actions-points-label"
                />
              </Tooltip>
            </span>
          </div>
        }
        direction="row"
      />
      <Nav
        className="sideNav"
        start={
          <div className="sideNav-actions">
            <LabeledLogo
              className="sideNav-actions-action"
              direction="column"
              logo={
                <Icon
                  icon="home"
                  style={{ width: 28, height: 28 }}
                  viewBox="-4 -4 36 36"
                />
              }
              label="Home"
              labelClass="sideNav-actions-action-label"
            />
            <LabeledLogo
              className="sideNav-actions-action"
              direction="column"
              logo={
                <Icon
                  icon="books"
                  style={{ width: 28, height: 28 }}
                  viewBox="-4 -4 36 36"
                />
              }
              label="Courses"
              labelClass="sideNav-actions-action-label"
            />
            <LabeledLogo
              className="sideNav-actions-action"
              direction="column"
              logo={
                <Icon
                  icon="exploreFilled"
                  style={{ width: 28, height: 28 }}
                  viewBox="-4 -4 36 36"
                />
              }
              label="Trending"
              labelClass="sideNav-actions-action-label"
            />
            <LabeledLogo
              className="sideNav-actions-action"
              direction="column"
              logo={
                <Icon
                  icon="following"
                  style={{ width: 28, height: 28 }}
                  viewBox="-4 -4 36 36"
                />
              }
              label="Following"
              labelClass="sideNav-actions-action-label"
            />
            <LabeledLogo
              className="sideNav-actions-action"
              direction="column"
              logo={
                <Icon
                  icon="dashboard"
                  style={{ width: 28, height: 28 }}
                  viewBox="-4 -4 36 36"
                />
              }
              label="Dashboard"
              labelClass="sideNav-actions-action-label"
            />
            <LabeledLogo
              className="sideNav-actions-action"
              direction="column"
              logo={
                <Icon
                  icon="discord"
                  style={{ width: 28, height: 28 }}
                  viewBox="-4 -4 36 36"
                />
              }
              label="Discord"
              labelClass="sideNav-actions-action-label"
            />
            <LabeledLogo
              className="sideNav-actions-action"
              direction="column"
              logo={
                <Icon
                  icon="restorationForm"
                  style={{ width: 28, height: 28 }}
                  viewBox="-4 -4 96 96"
                />
              }
              label="Restoration Form"
              labelClass="sideNav-actions-action-label"
            />
            <LabeledLogo
              className="sideNav-actions-action"
              direction="column"
              logo={
                <Icon
                  fill={Colors.black}
                  icon="creator"
                  style={{ width: 28, height: 28 }}
                  viewBox="-4 -4 56 56"
                />
              }
              label="Creator Access"
              labelClass="sideNav-actions-action-label"
            />
            <LabeledLogo
              className="sideNav-actions-action"
              direction="column"
              logo={
                <Icon
                  fill={Colors.black}
                  icon="feedback"
                  style={{ width: 28, height: 28 }}
                  viewBox="-4 -4 36 36"
                />
              }
              label="Feedback"
              labelClass="sideNav-actions-action-label"
            />
            <LabeledLogo
              className="sideNav-actions-action"
              direction="column"
              logo={
                <Icon
                  fill={Colors.black}
                  icon="tour"
                  style={{ width: 28, height: 28 }}
                  viewBox="-4 -4 280 280"
                />
              }
              label="Tour"
              labelClass="sideNav-actions-action-label"
            />
          </div>
        }
        end={
          <div>
            <hr style={{ margin: "0.5rem 0" }}></hr>
            <LabeledLogo
              className="sideNav-actions-action"
              direction="column"
              logo={
                <Icon
                  fill={Colors.black}
                  icon="logout"
                  style={{ width: 28, height: 28 }}
                  viewBox="-4 -4 36 36"
                />
              }
              label="Logout"
              labelClass="sideNav-actions-action-label"
            />
          </div>
        }
        direction="column"
      />
    </main>
  );
}

export default App;
