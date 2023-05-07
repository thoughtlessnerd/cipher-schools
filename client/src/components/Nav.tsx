import React from "react";

interface NavProps {
  start: React.ReactElement;
  end: React.ReactElement;
  className?: string;
  style?: React.CSSProperties;
  direction?: "row" | "column";
}

function Nav(props: NavProps): React.ReactElement {
  return (
    <div
      className={props.className}
      style={{
        ...props.style,
        display: "flex",
        justifyContent: "space-between",
        flexDirection: props.direction || "row",
      }}
    >
      <div>{props.start}</div>
      <div>{props.end}</div>
    </div>
  );
}

export default Nav;
