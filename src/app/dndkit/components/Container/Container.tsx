/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { forwardRef } from "react";
import classNames from "classnames";

import { Handle, Remove } from "../Item";

import styles from "./Container.module.scss";
import { Divider } from "antd";

export interface Props {
  children: React.ReactNode;
  columns?: number;
  label?: string;
  style?: React.CSSProperties;
  horizontal?: boolean;
  hover?: boolean;
  handleProps?: React.HTMLAttributes<any>;
  scrollable?: boolean;
  shadow?: boolean;
  placeholder?: boolean;
  unstyled?: boolean;
  onClick?(): void;
  onRemove?(): void;
}

export const Container = forwardRef<HTMLDivElement, Props>(
  (
    {
      children,
      columns = 1,
      handleProps,
      horizontal,
      hover,
      onClick,
      onRemove,
      label,
      placeholder,
      style,
      scrollable,
      shadow,
      unstyled,
      ...props
    }: Props,
    ref
  ) => {
    const Component = onClick ? "button" : "div";
    const castedRef = ref as React.Ref<HTMLButtonElement & HTMLDivElement>;

    return (
      <Component
        {...props}
        ref={castedRef}
        style={
          {
            ...style,
            "--columns": columns,
          } as React.CSSProperties
        }
        className={classNames(
          styles.Container,
          unstyled && styles.unstyled,
          horizontal && styles.horizontal,
          hover && styles.hover,
          placeholder && styles.placeholder,
          scrollable && styles.scrollable,
          shadow && styles.shadow,
          label
        )}
        onClick={onClick}
        tabIndex={onClick ? 0 : undefined}
      >
        {label ? (
          <div className={`colum-header ${styles.Header}`}>
            <div className="flex items-center justify-between w-[100%] head-name">
              <span>{label}</span>
              <div className={styles.Actions}>
                {onRemove ? <Remove onClick={onRemove} /> : undefined}
                <Handle {...handleProps} />
              </div>
            </div>
            <div className="flex items-center justify-between w-[100%]">
              <span>Actual</span>
              <span>Budget</span>
              <span>Diff</span>
            </div>
            <Divider />
            <div className="flex items-center justify-between w-[100%]">
              <span>Players</span>
              <span>4</span>
              <span>0</span>
              <span>0</span>
            </div>
            <Divider />
            <div className="flex items-center justify-between w-[100%]">
              <span>School</span>
              <span>4</span>
              <span>4</span>
              <span>0</span>
            </div>
            
          </div>
        ) : null}
        {placeholder ? children : <ul>{children}</ul>}
      </Component>
    );
  }
);
