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
import SideNav from "./ui/SideNav";

function App() {
  const [user, setUser] = useState<any>({
    firstName: "Abhay",
    lastName: "Chauhan",
    points: 0,
  });
  const [leftNavOpen, setLeftNavOpen] = useState<boolean>(false);
  // let [data, setData] = useState<string | null>(null);
  useEffect(() => {
    fetch(
      "http://localhost:8080/signin?email=abhay.csgo001@gmail.com&password=9231"
    )
      .then((res) => res.json())
      .then((json) => {
        // setData();
        console.log(json[0].userID);
        // console.log(json);
      });
  });

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
              onClick={() => {
                setLeftNavOpen(!leftNavOpen);
                console.log("toggle");
              }}
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
      <SideNav open={leftNavOpen} />
    </main>
  );
}

export default App;
