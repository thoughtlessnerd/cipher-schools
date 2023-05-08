import React from "react";
import Nav from "../components/Nav";
import "../css/ControlButtons.css";
import LabeledLogo from "../components/LabeledLogo";
import Icon from "../components/Icon";
import Colors from "../constants/Colors";

interface ControlButtonsProps {
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const ControlButtons = (props: ControlButtonsProps) => {
  return (
    <Nav
      className="controlButtons"
      start={
        <div className="controlButtons-actions">
          <LabeledLogo
            className="controlButtons-action"
            direction="row"
            style={{
              justifyContent: "flex-start",
              gap: "0.5rem",
            }}
            logo={
              <Icon
                icon="dashboard"
                style={{ width: 28, height: 28 }}
                viewBox="-4 -4 36 36"
              />
            }
            label="Dashboard"
            labelClass="controlButtons-action-label"
          />
          <LabeledLogo
            className="controlButtons-action"
            direction="row"
            style={{
              justifyContent: "flex-start",
              gap: "0.5rem",
              backgroundColor: Colors.primary,
            }}
            logo={
              <Icon
                icon="defaultUser"
                fill={Colors.white}
                style={{ width: 28, height: 28 }}
                viewBox="-2 -2 28 28"
              />
            }
            label="Profile"
            labelClass="controlButtons-action-label-active"
          />
          <LabeledLogo
            className="controlButtons-action"
            direction="row"
            style={{
              justifyContent: "flex-start",
              gap: "0.5rem",
            }}
            logo={
              <Icon
                icon="books"
                style={{ width: 28, height: 28 }}
                viewBox="-4 -4 36 36"
              />
            }
            label="Enrolled Courses"
            labelClass="controlButtons-action-label"
          />
          <LabeledLogo
            className="controlButtons-action"
            direction="row"
            style={{
              justifyContent: "flex-start",
              gap: "0.5rem",
            }}
            logo={
              <Icon
                icon="book"
                style={{ width: 28, height: 28 }}
                viewBox="-4 -4 36 36"
              />
            }
            label="Wishlist"
            labelClass="controlButtons-action-label"
          />
          <LabeledLogo
            className="controlButtons-action"
            direction="row"
            style={{
              justifyContent: "flex-start",
              gap: "0.5rem",
            }}
            logo={
              <Icon
                icon="like"
                style={{ width: 28, height: 28 }}
                viewBox="-4 -4 36 36"
              />
            }
            label="Liked Videos"
            labelClass="controlButtons-action-label"
          />
        </div>
      }
      direction="column"
      end={<></>}
    />
  );
};

export default ControlButtons;
