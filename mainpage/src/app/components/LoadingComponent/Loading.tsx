"use client";
import React from "react";
import "./Loading.css";
import { useLoading } from "./LoadingContext";

function Loading() {
  const { loading } = useLoading();

  return (
    <>
      {loading && (
        <div className="layout">
          <div className="mix-layout">
            <div className="loader"></div>
            <div className="loader-text">Loading</div>
          </div>
        </div>
      )}
    </>
  );
}

export default Loading;
