//SurveyField conatins logic to render a single
//label and text input

import React from "react";

//stateless
//meta includes errors, touched(whether the user "touched" the field), etc
export default ({ holderValue, input, label, meta: { error, touched } }) => {
  //TODO: input property contains name, onBlur, onChange, value etc...

  //redux form will automatically watches and updates the input fields
  //props include onBlur onClick, etc... by default
  //   console.log("props:", props);
  //   console.log(meta);

  return (
    <div>
      <label style={{ fontSize: "1rem" }}>{label}</label>
      {/* this ...input is equal to onBlur={input.onBlur} onChange={input.onChange} etc... */}
      <input
        {...input}
        style={{ marginBottom: "5px" }}
        // placeholder={(touched && error) || `Please Enter ${holderValue}`}
        placeholder={`Please Enter ${holderValue}`}
      />

      <div className="red-text" style={{ marginBottom: "20px" }}>
        {touched && error}
      </div>
    </div>
  );
};
