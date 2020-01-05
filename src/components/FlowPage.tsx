import React from "react";
import { Row, Col } from "antd";
import "antd/dist/antd.css";
import GGEditor, { Flow } from "gg-editor";
import { EditorMinimap , FlowContextMenu , FlowToolbar , FlowItemPanel , FlowDetailPanel } from "./Layout";
import styles from "./FlowPage.module.css";

const data = {
  nodes: [
    {
      type: "node",
      size: "70*70",
      shape: "flow-circle",
      color: "#FA8C16",
      label: "Drone",
      x: 55,
      y: 55,
      id: "drone",
      index: 0
    },
    {
      type: "node",
      size: "70*70",
      shape: "flow-circle",
      color: "#FA8C16",
      label: "Military",
      x: 55,
      y: 255,
      id: "military",
      index: 2
    }
  ],
  edges: [
    {
      source: "drone",
      sourceAnchor: 2,
      target: "military",
      targetAnchor: 0,
      id: "drone-military",
      index: 1
    }
  ]
};

export const FlowPage = () => {
  return (
    <GGEditor className={styles.editor}>
      <Row type="flex" className={styles.editorHd}>
        <Col span={24}>
          <FlowToolbar />
        </Col>
      </Row>
      <Row type="flex" className={styles.editorBd}>
        <Col span={4} className={styles.editorSidebar}>
          <FlowItemPanel />
        </Col>
        <Col span={16} className={styles.editorContent}>
          <Flow data={data} className={styles.flow} />
        </Col>
        <Col span={4} className={styles.editorSidebar}>
          <FlowDetailPanel />
          <EditorMinimap />
        </Col>
      </Row>
      <FlowContextMenu />
    </GGEditor>
  );
};
