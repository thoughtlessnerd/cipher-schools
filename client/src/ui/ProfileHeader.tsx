import React from "react";
import LabeledLogo from "../components/LabeledLogo";
import "../css/ProfileHeader.css";
import Icon from "../components/Icon";
import Colors from "../constants/Colors";

interface ProfileHeaderProps {
  user: any;
}

const ProfileHeader = (props: ProfileHeaderProps) => {
  return (
    <div className="profileHeader">
      <img
        className="profileHeader-background"
        src="./assets/images/profileCover.png"
        alt="profile cover"
      />
      <LabeledLogo
        className="profileHeader-logo"
        direction="row"
        style={{
          justifyContent: "center",
          alignItems: "center",
          gap: "0.5rem",
        }}
        logo={
          props.user.profilePicture ? (
            <img
              style={{ width: "5rem", height: "5rem" }}
              src={props.user.profilePicture}
              alt="profile"
            />
          ) : (
            <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "5rem",
                height: "5rem",
                backgroundColor: Colors.primary,
                borderRadius: "50%",
              }}
            >
              <Icon
                icon="defaultUser"
                fill={Colors.white}
                style={{ width: "4rem", height: "4rem" }}
                viewBox="0 0 24 24"
              />
            </span>
          )
        }
        label={
          <>
            Hello,
            <span className="profileHeader-logo-label-name">
              {props.user.firstName + " " + props.user.lastName}
            </span>
            <span className="profileHeader-logo-label-email">
              {props.user.email}
            </span>
          </>
        }
        labelClass="profileHeader-logo-label"
      />
      <span className="profileHeader-followerCount">
        {props.user.followers.length} followers
      </span>
    </div>
  );
};

export default ProfileHeader;
