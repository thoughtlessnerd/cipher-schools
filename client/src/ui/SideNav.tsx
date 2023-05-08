import React from "react";
import "../css/SideNav.css";
import Nav from "../components/Nav";
import Icon from "../components/Icon";
import LabeledLogo from "../components/LabeledLogo";
import Colors from "../constants/Colors";

interface SideNavProps {
  open: boolean;
}

const SideNav = (props: SideNavProps) => {
  return (
    <Nav
      className={`sideNav ${props.open ? "sideNav-open" : ""}`}
      start={
        <div className="sideNav-actions">
          <LabeledLogo
            className="sideNav-actions-action"
            direction={props.open ? "row" : "column"}
            style={{
              justifyContent: props.open ? "flex-start" : "space-between",
            }}
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
            direction={props.open ? "row" : "column"}
            style={{
              justifyContent: props.open ? "flex-start" : "space-between",
            }}
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
            direction={props.open ? "row" : "column"}
            style={{
              justifyContent: props.open ? "flex-start" : "space-between",
            }}
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
            direction={props.open ? "row" : "column"}
            style={{
              justifyContent: props.open ? "flex-start" : "space-between",
            }}
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
            direction={props.open ? "row" : "column"}
            style={{
              justifyContent: props.open ? "flex-start" : "space-between",
            }}
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
            direction={props.open ? "row" : "column"}
            style={{
              justifyContent: props.open ? "flex-start" : "space-between",
            }}
            logo={
              <Icon
                icon="discord"
                style={{ width: 28, height: 28 }}
                viewBox="0 -3 24 24"
              />
            }
            label="Discord"
            labelClass="sideNav-actions-action-label"
          />
          <LabeledLogo
            className="sideNav-actions-action"
            direction={props.open ? "row" : "column"}
            style={{
              justifyContent: props.open ? "flex-start" : "space-between",
            }}
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
            direction={props.open ? "row" : "column"}
            style={{
              justifyContent: props.open ? "flex-start" : "space-between",
            }}
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
            direction={props.open ? "row" : "column"}
            style={{
              justifyContent: props.open ? "flex-start" : "space-between",
            }}
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
            direction={props.open ? "row" : "column"}
            style={{
              justifyContent: props.open ? "flex-start" : "space-between",
            }}
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
            direction={props.open ? "row" : "column"}
            style={{
              justifyContent: props.open ? "flex-start" : "center",
            }}
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
  );
};

export default SideNav;
