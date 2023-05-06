import React from "react";
import Form from "./Form";
import Button from "./Button";

const MainPage = () => {
  return (
    <div className="flex items-center justify-center h-screen flex-col gap-8 font-mono">
      <p className="font-bold text-5xl motion-safe:animate-bounce">
        Welcome to gssr.
      </p>
      <Form placehold="Enter a Username" />
      <Form placehold="Enter a Room name" />
      <div className="flex items-center justify-center gap-5 w-full">
        <Button name="Join room" />
        <Button name="Create room" />
      </div>
    </div>
  );
};

export default MainPage;
