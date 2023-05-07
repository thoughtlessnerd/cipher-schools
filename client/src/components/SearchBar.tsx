import React from "react";
import Colors from "../constants/Colors";
import Icon from "./Icon";

interface SearchBarProps {
  className?: string;
  style?: React.CSSProperties;
  filterVisible?: boolean;
  placeHolder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  filterOnClick?: () => void;
}

function SearchBar(props: SearchBarProps): React.ReactElement {
  return (
    <div
      className={props.className}
      style={{
        ...props.style,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        gap: "1rem",
        padding: "0.5rem 1rem",
        borderRadius: "40px",
        backgroundColor: Colors.secondary,
      }}
    >
      <Icon
        icon="search"
        style={{ width: 17, height: 17 }}
        viewBox="0 0 28 28"
      />
      <input
        type="text"
        placeholder={props.placeHolder || "Search and Learn"}
        style={{
          border: "none",
          outline: "none",
          color: "#333",
          backgroundColor: "transparent",
        }}
        onChange={props.onChange}
      />
      {props.filterVisible ? (
        <Icon
          icon="filter"
          style={{ width: 17, height: 16 }}
          viewBox="0 0 20 16"
          onClick={props.filterOnClick}
        />
      ) : null}
    </div>
  );
}

export default SearchBar;
