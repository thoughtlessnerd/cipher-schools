import React from "react";

interface LabeledLogoProps {
  logo: React.ReactElement;
  label: string | React.ReactElement;
  className?: string;
  labelClass?: string;
  style?: React.CSSProperties;
  direction?: "row" | "column";
}

function LabeledLogo(props: LabeledLogoProps): React.ReactElement {
  return (
    <div
      className={props.className}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: props.direction || "row",
        ...props.style,
      }}
    >
      {props.logo}
      <span className={props.labelClass}>{props.label}</span>
    </div>
  );
}

export default LabeledLogo;
