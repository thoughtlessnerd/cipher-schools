import React from "react";
import "../css/ProfileInfo.css";
import { useEffect } from "react";
import LabeledElement from "../components/LabeledElement";
import LabeledLogo from "../components/LabeledLogo";
import Colors from "../constants/Colors";
import Icon from "../components/Icon";

interface ProfileInfoProps {
  user: any;
}

const ProfileInfo = (props: ProfileInfoProps) => {
  const [editAbout, setEditAbout] = React.useState<boolean>(false);
  const [aboutValue, setAboutValue] = React.useState<string>("");
  const [links, setLinks] = React.useState<any>({});
  const [editLinks, setEditLinks] = React.useState<boolean>(false);

  useEffect(() => setAboutValue(props.user.about), [props.user.about]);
  useEffect(() => {
    setLinks(props.user.links || {});
  }, [props.user.links]);

  const saveUserData = async (user: any, field: string, value: any) => {
    const res = await fetch(
      `http://localhost:8080/updateUser?userID=${user.userID}&${field}=${value}`,
      {
        method: "PUT",
      }
    );
    const json = await res.json();
    console.log(json);
  };

  return (
    <div className="profileInfo">
      <section className="profileInfo-section">
        <div
          className="row"
          style={{
            justifyContent: "space-between",
          }}
        >
          <h1 className="profileInfo-section-label">About me</h1>
          <button
            className="profileInfo-section-edit"
            onClick={() => {
              if (editAbout) {
                saveUserData(props.user, "about", aboutValue);
              }
              setEditAbout(!editAbout);
            }}
          >
            {!editAbout ? "Edit" : "Save"}
          </button>
        </div>
        <textarea
          readOnly={!editAbout}
          className="profileInfo-section-aboutme"
          value={aboutValue}
          onChange={(e) => {
            if (editAbout) setAboutValue(e.target.value);
          }}
        />
      </section>
      <span className="profileInfo-section-split"></span>
      {/* <section className="profileInfo-section">Cyphermap</section>
      <span className="profileInfo-section-split"></span> */}
      <section className="profileInfo-section">
        <div
          className="row"
          style={{
            justifyContent: "space-between",
          }}
        >
          <h1 className="profileInfo-section-label">On the web</h1>
          <button
            className="profileInfo-section-edit"
            onClick={() => {
              if (editLinks) {
                saveUserData(props.user, "links", JSON.stringify(links));
              }
              setEditLinks(!editLinks);
            }}
          >
            {!editLinks ? "Edit" : "Save"}
          </button>
        </div>
        <div className="profileInfo-section-links">
          <LabeledElement
            className="profileInfo-section-links-element"
            label="Linkedin"
            labelClass="profileInfo-section-links-label"
          >
            <div className="profileInfo-section-links-inputBox">
              <LabeledLogo
                className="profileInfo-section-links-logo"
                label={
                  <input
                    readOnly={!editLinks}
                    className="profileInfo-section-links-input"
                    placeholder="Linkedin"
                    value={links?.linkedin}
                    onChange={(e) => {
                      if (editLinks) {
                        setLinks({ ...links, linkedin: e.target.value });
                      }
                    }}
                  />
                }
                labelClass="profileInfo-section-links-input-field"
                logo={
                  <img
                    width={30}
                    height={30}
                    src="./assets/images/linkedin.png"
                  />
                }
              />
            </div>
          </LabeledElement>
          <LabeledElement
            className="profileInfo-section-links-element"
            label="Github"
            labelClass="profileInfo-section-links-label"
          >
            <div className="profileInfo-section-links-inputBox">
              <LabeledLogo
                className="profileInfo-section-links-logo"
                label={
                  <input
                    className="profileInfo-section-links-input"
                    placeholder="Github"
                    value={links?.github}
                    onChange={(e) => {
                      if (editLinks) {
                        setLinks({ ...links, github: e.target.value });
                      }
                    }}
                  />
                }
                logo={
                  <img
                    width={30}
                    height={30}
                    src="./assets/images/github.png"
                  />
                }
              />
            </div>
          </LabeledElement>
          <LabeledElement
            className="profileInfo-section-links-element"
            label="Facebook"
            labelClass="profileInfo-section-links-label"
          >
            <div className="profileInfo-section-links-inputBox">
              <LabeledLogo
                className="profileInfo-section-links-logo"
                label={
                  <input
                    className="profileInfo-section-links-input"
                    placeholder="Facebook"
                    value={links?.facebook}
                    onChange={(e) => {
                      if (editLinks) {
                        setLinks({ ...links, facebook: e.target.value });
                      }
                    }}
                  />
                }
                logo={
                  <img
                    width={30}
                    height={30}
                    src="./assets/images/facebook.png"
                  />
                }
              />
            </div>
          </LabeledElement>
          <LabeledElement
            className="profileInfo-section-links-element"
            label="Twitter"
            labelClass="profileInfo-section-links-label"
          >
            <div className="profileInfo-section-links-inputBox">
              <LabeledLogo
                className="profileInfo-section-links-logo"
                label={
                  <input
                    className="profileInfo-section-links-input"
                    placeholder="Twitter"
                    value={links?.twitter}
                    onChange={(e) => {
                      if (editLinks) {
                        setLinks({ ...links, twitter: e.target.value });
                      }
                    }}
                  />
                }
                logo={
                  <img
                    width={30}
                    height={30}
                    src="./assets/images/twitter.png"
                  />
                }
              />
            </div>
          </LabeledElement>
          <LabeledElement
            className="profileInfo-section-links-element"
            label="Instagram"
            labelClass="profileInfo-section-links-label"
          >
            <div className="profileInfo-section-links-inputBox">
              <LabeledLogo
                className="profileInfo-section-links-logo"
                label={
                  <input
                    className="profileInfo-section-links-input"
                    placeholder="Instagram"
                    value={links?.instagram}
                    onChange={(e) => {
                      if (editLinks) {
                        setLinks({ ...links, instagram: e.target.value });
                      }
                    }}
                  />
                }
                logo={
                  <img
                    width={30}
                    height={30}
                    src="./assets/images/instagram.png"
                  />
                }
              />
            </div>
          </LabeledElement>
          <LabeledElement
            className="profileInfo-section-links-element"
            label="Website"
            labelClass="profileInfo-section-links-label"
          >
            <div className="profileInfo-section-links-inputBox">
              <LabeledLogo
                className="profileInfo-section-links-logo"
                label={
                  <input
                    className="profileInfo-section-links-input"
                    placeholder="Your Website"
                    value={links?.website}
                    onChange={(e) => {
                      if (editLinks) {
                        setLinks({ ...links, website: e.target.value });
                      }
                    }}
                  />
                }
                logo={
                  <img
                    width={30}
                    height={30}
                    src="./assets/images/website.png"
                  />
                }
              />
            </div>
          </LabeledElement>
        </div>
      </section>
    </div>
  );
};

export default ProfileInfo;
