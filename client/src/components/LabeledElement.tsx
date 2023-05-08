import React from "react";

interface LabeledElementProps {
  className?: string;
  label: string | React.ReactNode;
  labelClass?: string;
  children: React.ReactNode;
}

const LabeledElement = (props: LabeledElementProps) => {
  return (
    <div className={props.className}>
      <div className={props.labelClass}>{props.label}</div>
      {props.children}
    </div>
  );
};

export default LabeledElement;
