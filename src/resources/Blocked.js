import React, { useState } from "react";

export const Blocked = () => {
  let [isBlocking, setIsBlocking] = useState(false);

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        event.target.reset();
        setIsBlocking(false);
      }}
    >
      <p>

        {!isBlocking ? "Blocked!" : "Access granted"}
      </p>

      <p>
        <input
          size="40"
          placeholder="Type a password with more than 5 characters"
          onChange={event => {
            setIsBlocking(event.target.value.length >= 5);
          }}
        />
      </p>

      <p>
        <button>Submit</button>
      </p>
    </form>
  );
}