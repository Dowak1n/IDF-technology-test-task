import React, { useEffect, useState } from "react";
import SchemaJSON from "../schemajson/schema.json";
import {
  saveMobilePhone,
  saveEmail,
  savePassword,
  saveRetypePassword,
} from "../redux/actions";
import { store } from "../createStore";

function SingUpInfo() {
  const [mobilePhone, setMobilePhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");

  const [mobilePhoneDirty, setMobilePhoneDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [retypePasswordDirty, setRetypePasswordDirty] = useState(false);

  const [mobilePhoneError, setMobilePhoneError] = useState(
    "Mobile phone cannot be empty"
  );
  const [emailError, setEmailError] = useState("Email cannot be empty");
  const [passwordError, setPasswordError] = useState(
    "Password cannot be empty"
  );
  const [retypePasswordError, setRetypePasswordError] = useState(
    "Password cannot be empty"
  );

  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (
      emailError ||
      passwordError ||
      retypePasswordError ||
      mobilePhoneError
    ) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError, retypePasswordError, mobilePhoneError]);

  const mobilePhoneHandler = (e) => {
    setMobilePhone(e.target.value);
    const re = new RegExp(SchemaJSON.mobilePhone.regExp);
    if (!re.test(String(e.target.value).toLocaleLowerCase())) {
      setMobilePhoneError("Phone number not corrected");
    } else {
      setMobilePhoneError("");
      store.dispatch(saveMobilePhone(e.target.value));
    }
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re = new RegExp(SchemaJSON.email.regExp);
    if (!re.test(String(e.target.value).toLocaleLowerCase())) {
      setEmailError("Email not corrected");
    } else {
      setEmailError("");
      store.dispatch(saveEmail(e.target.value));
    }
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (
      e.target.value.length < SchemaJSON.password.minLength ||
      e.target.value.length > SchemaJSON.password.maxLength
    ) {
      setPasswordError(
        "Password must be greater than " +
          SchemaJSON.password.minLength +
          " and less than " +
          SchemaJSON.password.maxLength
      );
      if (!e.target.value) {
        setPasswordError("Password cannot be empty");
      }
    } else {
      setPasswordError("");
      store.dispatch(savePassword(e.target.value));
    }
  };

  const retypePasswordHandler = (e) => {
    setRetypePassword(e.target.value);
    if (e.target.value !== document.getElementById("pass").value) {
      setRetypePasswordError("Passwords do not match");
      if (!e.target.value) {
        setRetypePasswordError("Password cannot be empty");
      }
    } else {
      setRetypePasswordError("");
      store.dispatch(saveRetypePassword(e.target.value));
    }
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
      case "MobielPhone":
        setMobilePhoneDirty(true);
        break;
      case "RetypePassword":
        setRetypePasswordDirty(true);
        break;
    }
  };

  const handleClick = () => {
    var foo = document.getElementById("base");
    var prof = document.getElementById("base2");
    var stage1 = document.getElementById("stage1");
    var stage2 = document.getElementById("stage2");

    stage1.className = "not-ready";
    stage2.className = "ready";

    foo.classList.add("display-hidden");
    prof.className = "container";
  };

  return (
    <div id="base" className="container margin-style">
      <div id="login-box">
        <div className="sign">
          <h1>Sign up</h1>
          {mobilePhoneDirty && mobilePhoneError && (
            <div style={{ color: "red" }}>{mobilePhoneError}</div>
          )}
          <input
            onChange={(e) => mobilePhoneHandler(e)}
            value={mobilePhone}
            onBlur={(e) => blurHandler(e)}
            type="text"
            name="MobielPhone"
            placeholder="Mobiel phone"
          />
          {emailDirty && emailError && (
            <div style={{ color: "red" }}>{emailError}</div>
          )}
          <input
            onChange={(e) => emailHandler(e)}
            value={email}
            onBlur={(e) => blurHandler(e)}
            type="text"
            name="email"
            placeholder="E-mail"
          />
          {passwordDirty && passwordError && (
            <div style={{ color: "red" }}>{passwordError}</div>
          )}
          <input
            onChange={(e) => passwordHandler(e)}
            value={password}
            onBlur={(e) => blurHandler(e)}
            type="password"
            id="pass"
            name="password"
            placeholder="Password"
          />
          {retypePasswordDirty && retypePasswordError && (
            <div style={{ color: "red" }}>{retypePasswordError}</div>
          )}
          <input
            onChange={(e) => retypePasswordHandler(e)}
            value={retypePassword}
            onBlur={(e) => blurHandler(e)}
            type="password"
            name="RetypePassword"
            placeholder="Retype password"
          />

          <input
            onClick={handleClick}
            disabled={!formValid}
            type="submit"
            name="signup_submit"
            value="Next"
          />
        </div>
      </div>
    </div>
  );
}

export default SingUpInfo;
