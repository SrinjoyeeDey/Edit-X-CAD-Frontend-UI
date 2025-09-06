// src/App.js
import React from "react";
import {
  FaSave,
  FaUndo,
  FaRedo,
  FaDownload,
  FaCog,
  FaFile,
  FaVectorSquare,
  FaCircle,
  FaSlash,
  FaArrowsAlt,
  FaMousePointer,
  FaDrawPolygon,
  FaFont,
  FaRuler,
  FaTrash,
  FaSearchPlus,
  FaSearchMinus,
  FaExpandArrowsAlt,
  FaCopy,
  FaCut,
  FaPaste,
} from "react-icons/fa";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      {/* Top Bar */}
      <div className="topbar">
        <h1>New Design 1</h1>
        <div className="topbar-icons">
          <FaFile title="New File" />
          <FaSave title="Save" />
          <FaUndo title="Undo" />
          <FaRedo title="Redo" />
          <FaCopy title="Copy" />
          <FaCut title="Cut" />
          <FaPaste title="Paste" />
          <FaDownload title="Export" />
          <FaSearchPlus title="Zoom In" />
          <FaSearchMinus title="Zoom Out" />
          <FaExpandArrowsAlt title="Fit to Screen" />
          <FaCog title="Settings" />
        </div>
      </div>

      <div className="main">
        {/* Sidebar */}
        <div className="sidebar">
          <FaMousePointer title="Select" />
          <FaSlash title="Line Tool" />
          <FaCircle title="Circle Tool" />
          <FaVectorSquare title="Rectangle Tool" />
          <FaDrawPolygon title="Polygon Tool" />
          <FaArrowsAlt title="Move Tool" />
          <FaExpandArrowsAlt title="Scale Tool" />
          <FaRedo title="Rotate Tool" />
          <FaFont title="Text Tool" />
          <FaRuler title="Dimension Tool" />
          <FaTrash title="Delete" />
        </div>

        {/* Canvas Area */}
        <div className="canvas-area">
          <div className="grid"></div>
          <div className="crosshair-x"></div>
          <div className="crosshair-y"></div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="statusbar">
        Navigate (121 FPS, dx=-200; dy=0)
      </div>
    </div>
  );
};

export default App;