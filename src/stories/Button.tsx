import React, { ReactNode } from "react";
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";
import styles from "./Button.module.css";
import { Add, Save } from "@mui/icons-material";
// Only include variant, size, and color
type ButtonBaseProps = Pick<MuiButtonProps, "variant" | "size" | "color">;

export interface ButtonProps extends ButtonBaseProps {
  label: string;
  icon?: boolean;
  disableElevation?: boolean;
  disabled?: boolean;
  isCustom?: boolean;
  // variant?: "text" | "outlined" | "contained" | "custom";
}

export const Button = ({
  label,
  icon = false,
  disableElevation = true,
  disabled = false,
  isCustom = false,
  ...rest
}: ButtonProps) => {
  return icon ? (
    <MuiButton
      className={isCustom ? `${styles.SaveButton}` : ""}
      {...rest}
      disableRipple
      disableElevation={disableElevation}
      startIcon={isCustom ? <Save /> : <Add />}
      disabled={disabled}
    >
      {label}
    </MuiButton>
  ) : (
    <MuiButton {...rest} disableRipple disableElevation>
      {label}
    </MuiButton>
  );
};
