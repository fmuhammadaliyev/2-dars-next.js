import React from "react";

export default function SelectDemo() {
  return (
    <div className="p-6">
      <select defaultValue="All" className="w-[180px] p-1 border-4">
        <option value="comedy">All</option>
        <option value="comedy">comedy</option>
        <option value="drama">drama</option>
        <option value="romance">romance</option>
        <option value="orange">adventure</option>
      </select>
    </div>
  );
}
