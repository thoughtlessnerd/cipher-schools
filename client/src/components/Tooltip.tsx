import React from "react";
import Colors from "../constants/Colors";

interface TooltipProps {
  text: string;
  children: React.ReactElement;
  gap?: string;
  showOn?: "hover" | "click";
  className?: string;
  style?: React.CSSProperties;
}

function Tooltip(props: TooltipProps): React.ReactElement {
  let tooltip = React.useRef<HTMLDivElement>(null);

  return (
    <div
      className={props.className}
      onMouseEnter={() => {
        if (props.showOn === "hover") {
          if (tooltip.current) {
            tooltip.current.style.opacity = "1";
            tooltip.current.style.transform = `translate(-50%, ${
              props.gap || "10px"
            }) scale(1)`;
          }
        }
      }}
      onMouseLeave={() => {
        if (props.showOn === "hover") {
          if (tooltip.current) {
            tooltip.current.style.opacity = "0";
            tooltip.current.style.transform = `translate(-50%, ${
              props.gap || "10px"
            }) scale(0)`;
          }
        }
      }}
      onClick={() => {
        if (props.showOn === "click") {
          if (tooltip.current) {
            tooltip.current.style.opacity =
              tooltip.current.style.opacity === "1" ? "0" : "1";
            tooltip.current.style.transform =
              tooltip.current.style.opacity === "1"
                ? "translate(-50%, 50%) scale(1)"
                : "translate(-50%, 50%) scale(0)";
          }
        }
      }}
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        gap: "0.5rem",
        position: "relative",
        ...props.style,
      }}
    >
      {props.children}
      <div
        ref={tooltip}
        style={{
          position: "absolute",
          top: "100%",
          left: "50%",
          width: "max-content",
          fontSize: "0.6rem",
          padding: "0.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transform: `translate(-50%, ${props.gap || "10px"}) scale(0)`,
          backgroundColor: Colors.gray,
          color: Colors.white,
          borderRadius: "0.5rem",
          opacity: 0,
          transition: "0.1s ease-in-out",
          pointerEvents: "none",
          zIndex: 1,
        }}
      >
        {props.text}
      </div>
    </div>
  );
}

export default Tooltip;
