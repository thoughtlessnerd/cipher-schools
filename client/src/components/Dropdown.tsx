import React, { Dispatch, SetStateAction } from "react";

interface DropdownProps {
  className?: string;
  open: boolean;
  elements: string[];
  selected: number;
  activeClass?: string;
  elementClass?: string;
  onClick?: (i: number) => void;
  toggle?: Dispatch<SetStateAction<boolean>>;
  setValue?: Dispatch<SetStateAction<string>>;
  setActive?: Dispatch<SetStateAction<number>>;
}

const Dropdown = (props: DropdownProps) => {
  return (
    <div
      className={props.className}
      style={{
        position: "absolute",
        transformOrigin: "top",
        transform: `scaleY(${props.open ? 1 : 0})`,
        overflow: "hidden",
        transition: "transform 0.2s ease-in-out",
      }}
    >
      {props.elements.map((element, index) => {
        return (
          <div
            key={index}
            onClick={() => {
              if (props.toggle) props.toggle(false);
              if (props.setActive) props.setActive(index);
              if (props.setValue) props.setValue(element);
            }}
            className={`${props.elementClass} ${
              props.selected === index ? props.activeClass : ""
            }`}
          >
            {element}
          </div>
        );
      })}
    </div>
  );
};

export default Dropdown;
