import React from "react";
import "../css/ProfileInfo.css";
import { useEffect } from "react";
import LabeledElement from "../components/LabeledElement";
import LabeledLogo from "../components/LabeledLogo";
import Dropdown from "../components/Dropdown";

interface ProfileInfoProps {
  user: any;
}

const ProfileInfo = (props: ProfileInfoProps) => {
  const [editAbout, setEditAbout] = React.useState<boolean>(false);
  const [aboutValue, setAboutValue] = React.useState<string>("");
  const [links, setLinks] = React.useState<any>({});
  const [editLinks, setEditLinks] = React.useState<boolean>(false);
  const [editPersonalInfo, setEditPersonalInfo] =
    React.useState<boolean>(false);
  const [openEducationDropdown, setOpenEducationDropdown] =
    React.useState<boolean>(false);
  const [educationDropdownValue, setEducationDropdownValue] =
    React.useState<string>("Graduation");
  const [educationDropdownSelected, setEducationDropdownSelected] =
    React.useState<number>(0);

  const [openProfessionDropdown, setOpenProfessionDropdown] =
    React.useState<boolean>(false);
  const [professionDropdownValue, setProfessionDropdownValue] =
    React.useState<string>("Student");
  const [professionDropdownSelected, setProfessionDropdownSelected] =
    React.useState<number>(0);

  const [editPass, setEditPass] = React.useState<boolean>(false);
  const [changePass, setChangePass] = React.useState<boolean>(false);

  useEffect(() => setAboutValue(props.user.about), [props.user.about]);
  useEffect(() => {
    setLinks(props.user.links || {});
  }, [props.user.links]);
  useEffect(() => {
    let data = props.user.education;
    if (data) {
      data = data.split(";");
      setEducationDropdownValue(data[0]);
      setEducationDropdownSelected(parseInt(data[1]));
    }
  }, [props.user.education]);
  useEffect(() => {
    let data = props.user.profession;
    if (data) {
      data = data.split(";");
      setProfessionDropdownValue(data[0]);
      setProfessionDropdownSelected(parseInt(data[1]));
    }
  }, [props.user.profession]);

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
                    readOnly={!editLinks}
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
                    readOnly={!editLinks}
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
                    readOnly={!editLinks}
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
                    readOnly={!editLinks}
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
                    readOnly={!editLinks}
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
      <span className="profileInfo-section-split"></span>

      <section className="profileInfo-section">
        <div
          className="row"
          style={{
            justifyContent: "space-between",
          }}
        >
          <h1 className="profileInfo-section-label">Personal Information</h1>
          <button
            className="profileInfo-section-edit"
            onClick={() => {
              if (editPersonalInfo) {
                saveUserData(
                  props.user,
                  "education",
                  educationDropdownValue + ";" + educationDropdownSelected
                );
                saveUserData(
                  props.user,
                  "profession",
                  professionDropdownValue + ";" + professionDropdownSelected
                );
                setEditPersonalInfo(false);
                setOpenEducationDropdown(false);
                setOpenProfessionDropdown(false);
              } else {
                setEditPersonalInfo(true);
              }
            }}
          >
            {editPersonalInfo ? "Save" : "Edit"}
          </button>
        </div>
        <div className="profileInfo-section-personalInfo">
          <LabeledElement
            className="profileInfo-section-personalInfo-element"
            label="Highest Education"
            labelClass="profileInfo-section-personalInfo-label"
          >
            <span
              className="profileInfo-section-personalInfo-button"
              onClick={() => {
                if (editPersonalInfo)
                  setOpenEducationDropdown(!openEducationDropdown);
                else setOpenEducationDropdown(false);
              }}
            >
              {educationDropdownValue}
              <span
                className="profileInfo-section-personalInfo-button-arrow"
                style={{
                  transition: "all 0.3s ease",
                  transform: !openEducationDropdown
                    ? "rotate(135deg)"
                    : "rotate(-45deg)",
                }}
              />
            </span>
            <Dropdown
              className="profileInfo-section-personalInfo-dropdown"
              setValue={setEducationDropdownValue}
              setActive={setEducationDropdownSelected}
              toggle={setOpenEducationDropdown}
              elements={[
                "Primary",
                "Secondary",
                "High School",
                "Graduation",
                "Post Graduation",
              ]}
              elementClass="profileInfo-section-personalInfo-dropdown-element"
              activeClass="profileInfo-section-personalInfo-dropdown-element-active"
              selected={educationDropdownSelected}
              open={openEducationDropdown}
            />
          </LabeledElement>
          <LabeledElement
            className="profileInfo-section-personalInfo-element"
            label="What do you do currently?"
            labelClass="profileInfo-section-personalInfo-label"
          >
            <span
              className="profileInfo-section-personalInfo-button"
              onClick={() => {
                if (editPersonalInfo)
                  setOpenProfessionDropdown(!openProfessionDropdown);
                else setOpenProfessionDropdown(false);
              }}
            >
              {professionDropdownValue}
              <span
                className="profileInfo-section-personalInfo-button-arrow"
                style={{
                  transition: "all 0.3s ease",
                  transform: !openProfessionDropdown
                    ? "rotate(135deg)"
                    : "rotate(-45deg)",
                }}
              />
            </span>
            <Dropdown
              className="profileInfo-section-personalInfo-dropdown"
              setValue={setProfessionDropdownValue}
              setActive={setProfessionDropdownSelected}
              toggle={setOpenProfessionDropdown}
              elements={[
                "Schooling",
                "College Student",
                "Teaching",
                "Job",
                "Freelancing",
              ]}
              elementClass="profileInfo-section-personalInfo-dropdown-element"
              activeClass="profileInfo-section-personalInfo-dropdown-element-active"
              selected={professionDropdownSelected}
              open={openProfessionDropdown}
            />
          </LabeledElement>
        </div>
      </section>
      <span className="profileInfo-section-split"></span>
      <section className="profileInfo-section">
        <div
          className="row"
          style={{
            justifyContent: "space-between",
          }}
        >
          <h1 className="profileInfo-section-label">Password & Security</h1>
          <button
            className="profileInfo-section-edit"
            onClick={() => {
              if (!editPass) {
                setChangePass(true);
                setEditPass(true);
              } else {
                setEditPass(false);
              }
            }}
          >
            {editPass ? "Save" : "Change password"}
          </button>
        </div>
        <div className="profileInfo-section-password">
          <LabeledElement
            className="profileInfo-section-links-element"
            label="Password"
            labelClass="profileInfo-section-links-label"
          >
            <textarea
              className="profileInfo-section-aboutme"
              style={{
                width: "100%",
                height: "min-content",
                maxLines: 1,
                resize: "none",
              }}
              readOnly={true}
              value="**********"
            />
          </LabeledElement>
        </div>
        {changePass ? (
          <>
            <div className="profileInfo-section-password-modal">
              <LabeledElement
                className="profileInfo-section-modal-element"
                label="Old Password"
                labelClass="profileInfo-section-modal-label"
              >
                <input
                  className="profileInfo-section-modal-input"
                  placeholder="Old Password"
                  type="password"
                />
              </LabeledElement>
              <LabeledElement
                className="profileInfo-section-modal-element"
                label="New Password"
                labelClass="profileInfo-section-modal-label"
              >
                <input
                  className="profileInfo-section-modal-input"
                  placeholder="New Password"
                  type="password"
                />
              </LabeledElement>
              <LabeledElement
                className="profileInfo-section-modal-element"
                label="Confirm Password"
                labelClass="profileInfo-section-modal-label"
              >
                <input
                  className="profileInfo-section-modal-input"
                  placeholder="Confirm Password"
                  type="password"
                />
              </LabeledElement>
              <div className="row">
                <button
                  className="profileInfo-section-modal-cancel"
                  onClick={() => {
                    setChangePass(false);
                    setEditPass(false);
                  }}
                >
                  Cancel
                </button>
                <button
                  className="profileInfo-section-modal-save"
                  onClick={() => {
                    setChangePass(false);
                    setEditPass(false);
                  }}
                >
                  Save
                </button>
              </div>
            </div>
            <div className="overlay"></div>
          </>
        ) : null}
      </section>
    </div>
  );
};

export default ProfileInfo;
