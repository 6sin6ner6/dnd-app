import React from "react";

const Admin = () => {
  return (
    <>
      <div>
        <form action="/api/raports" method="POST">
          <input
            className="raports-title"
            type="text"
            name="title"
            placeholder="Tytuł"
          />

          <br />
          <textarea
            cols="30"
            rows="10"
            name="content"
            placeholder="Treść"
          ></textarea>
          <br />
          <button className="btn-raports">Wyślij</button>
        </form>
      </div>
    </>
  );
};

export default Admin;
