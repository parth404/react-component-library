import React, { ReactNode } from "react";
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";
import styles from "./Button.module.css";
import { Save } from "@mui/icons-material";
// Only include variant, size, and color
type ButtonBaseProps = Pick<MuiButtonProps, "variant" | "size" | "color">;

export interface ButtonProps extends ButtonBaseProps {
  label: string;
  icon?: Boolean;
  iconName?: string;
  disableElevation?: boolean;
  disabled?: boolean;
}

export const SaveEditButton = ({
  label,
  icon = false,
  iconName = "add",
  disableElevation = true,
  disabled = false,
  ...rest
}: ButtonProps) => (
  <MuiButton
    className={styles.saveButton}
    {...rest}
    disableRipple
    disableElevation={disableElevation}
    startIcon={<Save />}
    disabled={disabled}
  >
    {label}
  </MuiButton>
);
