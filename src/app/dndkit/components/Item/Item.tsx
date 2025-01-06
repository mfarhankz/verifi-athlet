/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useMemo, useState } from "react";
import classNames from "classnames";
import type { DraggableSyntheticListeners } from "@dnd-kit/core";
import type { Transform } from "@dnd-kit/utilities";

import { Handle, Remove } from "./components";

import styles from "./Item.module.scss";
import UserShortInfo from "@/app/(dashboard)/_components/UserShortInfo";
import { Input, Modal } from "antd";
import PlayerEditModal from "@/app/(dashboard)/_components/PlayerEditModal";

export interface Props {
  dragOverlay?: boolean;
  color?: string;
  disabled?: boolean;
  dragging?: boolean;
  handle?: boolean;
  handleProps?: any;
  height?: number;
  index?: number;
  fadeIn?: boolean;
  transform?: Transform | null;
  listeners?: DraggableSyntheticListeners;
  sorting?: boolean;
  style?: React.CSSProperties;
  transition?: string | null;
  wrapperStyle?: React.CSSProperties;
  value: React.ReactNode;
  data?: any;
  componentType?: string;
  onRemove?(): void;
  renderItem?(args: {
    dragOverlay: boolean;
    dragging: boolean;
    sorting: boolean;
    index: number | undefined;
    fadeIn: boolean;
    listeners: DraggableSyntheticListeners;
    ref: React.Ref<HTMLElement>;
    style: React.CSSProperties | undefined;
    transform: Props["transform"];
    transition: Props["transition"];
    value: Props["value"];
  }): React.ReactElement;
}

export const Item = React.memo(
  React.forwardRef<HTMLLIElement, Props>(
    (
      {
        color,
        dragOverlay,
        dragging,
        disabled,
        fadeIn,
        handle,
        handleProps,
        height,
        index,
        componentType,
        listeners,
        onRemove,
        renderItem,
        sorting,
        style,
        transition,
        transform,
        value,
        data,
        wrapperStyle,
        ...props
      },
      ref
    ) => {
      const [isModalOpen, setIsModalOpen] = useState(false);

      const showModal = () => {
        setIsModalOpen(true);
      };

      const handleOk = () => {
        setIsModalOpen(false);
      };

      const handleCancel = () => {
        setIsModalOpen(false);
      };

      const player = useMemo(
        () => (data || []).find((p: any) => p.id === value),
        [data, value]
      );

      useEffect(() => {
        if (!dragOverlay) {
          return;
        }

        document.body.style.cursor = "grabbing";

        return () => {
          document.body.style.cursor = "";
        };
      }, [dragOverlay]);

      return renderItem ? (
        renderItem({
          dragOverlay: Boolean(dragOverlay),
          dragging: Boolean(dragging),
          sorting: Boolean(sorting),
          index,
          fadeIn: Boolean(fadeIn),
          listeners,
          ref,
          style,
          transform,
          transition,
          value,
        })
      ) : (
        <>
          <li
            className={classNames(
              styles.Wrapper,
              fadeIn && styles.fadeIn,
              sorting && styles.sorting,
              dragOverlay && styles.dragOverlay
            )}
            style={
              {
                ...wrapperStyle,
                transition: [transition, wrapperStyle?.transition]
                  .filter(Boolean)
                  .join(", "),
                "--translate-x": transform
                  ? `${Math.round(transform.x)}px`
                  : undefined,
                "--translate-y": transform
                  ? `${Math.round(transform.y)}px`
                  : undefined,
                "--scale-x": transform?.scaleX
                  ? `${transform.scaleX}`
                  : undefined,
                "--scale-y": transform?.scaleY
                  ? `${transform.scaleY}`
                  : undefined,
                "--index": index,
                "--color": player?.tierColor,
              } as React.CSSProperties
            }
            ref={ref}
            onClick={componentType !== "tableView" ? showModal : () => {}}
          >
            <div
              className={classNames(
                styles.Item,
                dragging && styles.dragging,
                handle && styles.withHandle,
                dragOverlay && styles.dragOverlay,
                disabled && styles.disabled,
                player?.tierColor && styles.color
              )}
              style={style}
              data-cypress="draggable-item"
              {...(!handle ? listeners : undefined)}
              {...props}
              tabIndex={!handle ? 0 : undefined}
            >
              

              {componentType !== "tableView" ? (
                <UserShortInfo
                  src={player?.image}
                  height={80}
                  width={80}
                  fName={player?.fname}
                  lName={player?.lname}
                  average={player?.avg}
                  rating={player?.rating}
                  title={player?.academy}
                  school={player?.school}
                  schoolIcon={player?.schoolIcon}
                  footer={true}
                />
              ) : (
                <div><Input type="text" placeholder="Column name" value={value?.toString()} /> {}</div>
              )}

              <span className={styles.Actions}>
                {onRemove ? (
                  <Remove className={styles.Remove} onClick={onRemove} />
                ) : null}
                {handle ? <Handle {...handleProps} {...listeners} /> : null}
              </span>
            </div>
          </li>

          <Modal
            footer={false}
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            width={950}
            style={{ top: 10 }}
          >
            <PlayerEditModal />
          </Modal>
        </>
      );
    }
  )
);
