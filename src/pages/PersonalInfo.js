import React, { useEffect, useState } from "react";
import SchemaJSON from "../schemajson/schema.json";
import Modal from "../Modal/Modal";
import {
  saveFirstName,
  saveLastName,
  saveSex,
  saveBirtday,
  saveOcean,
  saveHobby,
} from "../redux/actions";
import { store } from "../createStore";

function PersonalInfo() {
  const hobbys = new Set();
  const [modalActive, setModalActive] = useState(false);
  const [arr, setArr] = useState(SchemaJSON.ocean.oneOf);
  const [value, setValue] = useState("");

  const [arrHobby, setArrHobby] = useState(SchemaJSON.hobby.anyOf);
  const [valueHobby, setValueHobby] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const [dayDirty, setDayDirty] = useState(false);
  const [monthDirty, setMonthDirty] = useState(false);
  const [yearDirty, setYearDirty] = useState(false);
  const [firstNameDirty, setFirstNameDirty] = useState(false);
  const [lastNameDirty, setLastNameDirty] = useState(false);
  const [birthdayDirty, setBirthdayDirty] = useState(false);

  const [birthdayError, setBirthdayError] = useState(
    "You must be over " +
      SchemaJSON.birthday.minAge +
      " and under " +
      SchemaJSON.birthday.maxAge
  );
  const [dayError, setDayError] = useState("Day cannot be empty");
  const [monthError, setMonthError] = useState("Month cannot be empty");
  const [yearError, setYearError] = useState("Year cannot be empty");

  const [oceanError, setOceanError] = useState("Ocean cannot be empty");
  const [sexError, setSexError] = useState("Sex cannot be empty");
  const [firstNameError, setFirstNameError] = useState(
    "First Name cannot be empty"
  );
  const [lastNameError, setLastNameError] = useState(
    "Last Name cannot be empty"
  );

  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (
      firstNameError ||
      lastNameError ||
      sexError ||
      oceanError ||
      dayError ||
      monthError ||
      yearError ||
      birthdayError
    ) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [
    firstNameError,
    lastNameError,
    sexError,
    oceanError,
    dayError,
    monthError,
    yearError,
    birthdayError,
  ]);

  const firstNameHandler = (e) => {
    setFirstName(e.target.value);
    if (
      e.target.value.length < SchemaJSON.firstName.minLength ||
      e.target.value.length > SchemaJSON.firstName.maxLength
    ) {
      setFirstNameError(
        "First Name must be greater than " +
          SchemaJSON.firstName.minLength +
          " and less than " +
          SchemaJSON.firstName.maxLength
      );
      if (!e.target.value) {
        setFirstNameError("First Nam cannot be empty");
      }
    } else {
      setFirstNameError("");
      store.dispatch(saveFirstName(e.target.value));
    }
  };

  const lastNameHandler = (e) => {
    setLastName(e.target.value);
    if (
      e.target.value.length < SchemaJSON.lastName.minLength ||
      e.target.value.length > SchemaJSON.lastName.maxLength
    ) {
      setLastNameError(
        "Last Name must be greater than " +
          SchemaJSON.lastName.minLength +
          " and less than " +
          SchemaJSON.lastName.maxLength
      );
      if (!e.target.value) {
        setLastNameError("Last Name cannot be empty");
      }
    } else {
      setLastNameError("");
      store.dispatch(saveLastName(e.target.value));
    }
  };

  const dayHandler = (e) => {
    setDay(e.target.value);
    if (e.target.value < 1 || e.target.value > 31) {
      setDayError("Day must be greater than 1 and less than 31");
      if (!e.target.value) {
        setDayError("Day cannot be empty");
      }
    } else {
      setDayError("");
    }
  };

  const monthHandler = (e) => {
    setMonth(e.target.value);
    if (e.target.value < 1 || e.target.value > 12) {
      setMonthError("Month must be greater than 1 and less than 12");
      if (!e.target.value) {
        setMonthError("Month cannot be empty");
      }
    } else {
      setMonthError("");
    }
  };

  const yearHandler = (e) => {
    setYear(e.target.value);
    if (Number(e.target.value) < 1900 || Number(e.target.value) > 2022) {
      setYearError("Year must be greater than 1900 and less than 2022");
      if (!Number(e.target.value)) {
        setYearError("Year cannot be empty");
      }
    } else {
      setYearError("");
    }
  };

  const maleHandler = (e) => {
    if (e.target.value) {
      setSexError("");
      store.dispatch(saveSex("male"));
    }
  };

  const femaleHandler = (e) => {
    if (e.target.value) {
      setSexError("");
      store.dispatch(saveSex("female"));
    }
  };

  const oceanHandler = (e) => {
    if (e.target.value) {
      setOceanError("");
      store.dispatch(saveOcean(e.target.value));
    }
  };

  const hobbyHandler = (e) => {
    if (e.target.value) {
      if (hobbys.has(e.target.value)) {
        hobbys.delete(e.target.value);
      } else {
        hobbys.add(e.target.value);
      }
      store.dispatch(saveHobby(hobbys));
    }
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "firstName":
        setFirstNameDirty(true);
        break;
      case "lastName":
        setLastNameDirty(true);
        break;
      case "day":
        setDayDirty(true);
        break;
      case "month":
        setMonthDirty(true);
        setBirthdayDirty(true);
        break;
      case "year":
        setYearDirty(true);
        setBirthdayDirty(true);
        break;
    }
  };

  const birthdayHandler = (day, month, year) => {
    let age = 0;
    if (Number(new Date().getMonth()) < Number(month)) {
      age = Number(new Date().getFullYear()) - Number(year) - 1;
    } else {
      age = Number(new Date().getFullYear()) - Number(year);
    }

    if (age < SchemaJSON.birthday.minAge || age > SchemaJSON.birthday.maxAge) {
      setBirthdayError(
        "You must be over " +
          SchemaJSON.birthday.minAge +
          " and under " +
          SchemaJSON.birthday.maxAge
      );
    } else {
      setBirthdayError("");
      store.dispatch(saveBirtday(day + "." + month + "." + year));
    }
  };

  const handleClick = () => {
    var foo = document.getElementById("base2");
    var prof = document.getElementById("base");
    var stage1 = document.getElementById("stage2");
    var stage2 = document.getElementById("stage1");

    stage1.className = "not-ready";
    stage2.className = "ready";

    foo.classList.add("display-hidden");
    prof.className = "container";
  };

  const result = arr.map((element, index) => {
    return (
      <option key={index} defaultValue={index}>
        {element}
      </option>
    );
  });

  function add() {
    setArr([...arr, value]);
  }

  const resultHobby = arrHobby.map((element, index) => {
    return (
      <div key={index}>
        <input type="checkbox" id={element} name={element} value={element} />
        <label htmlFor={element}>{element}</label>
      </div>
    );
  });

  function addHobby() {
    setArrHobby([...arrHobby, valueHobby]);
  }

  return (
    <div id="base2" className="container display-hidden">
      <div id="profile-box">
        <div className="profile">
          <h1>Personal Info</h1>
          {firstNameDirty && firstNameError && (
            <div style={{ color: "red" }}>{firstNameError}</div>
          )}
          <input
            onBlur={(e) => blurHandler(e)}
            value={firstName}
            onChange={(e) => firstNameHandler(e)}
            type="text"
            name="firstName"
            placeholder="First Name"
          />
          {lastNameDirty && lastNameError && (
            <div style={{ color: "red" }}>{lastNameError}</div>
          )}
          <input
            onBlur={(e) => blurHandler(e)}
            value={lastName}
            onChange={(e) => lastNameHandler(e)}
            type="text"
            name="lastName"
            placeholder="Last Name"
          />
          {birthdayDirty && birthdayError && (
            <div style={{ color: "red" }}>{birthdayError}</div>
          )}
          {dayDirty && dayError && (
            <div style={{ color: "red" }}>{dayError}</div>
          )}
          {monthDirty && monthError && (
            <div style={{ color: "red" }}>{monthError}</div>
          )}
          {yearDirty && yearError && (
            <div style={{ color: "red" }}>{yearError}</div>
          )}
          <div className="col-12 flex">
            <div className="col-12 col-md-5">
              <label className="label-style">Birthday</label>

              <div className="flex margin-indents">
                <input
                  onBlur={(e) => blurHandler(e)}
                  value={day}
                  onChange={(e) => {
                    dayHandler(e);
                    birthdayHandler(e.target.value, month, year);
                  }}
                  className="col-3"
                  type="number"
                  name="day"
                  placeholder="DD"
                />
                <input
                  onBlur={(e) => blurHandler(e)}
                  value={month}
                  onChange={(e) => {
                    monthHandler(e);
                    birthdayHandler(day, e.target.value, year);
                  }}
                  className="col-3"
                  type="number"
                  name="month"
                  placeholder="MM"
                />
                <input
                  onBlur={(e) => blurHandler(e)}
                  value={year}
                  onChange={(e) => {
                    yearHandler(e);
                    birthdayHandler(day, month, e.target.value);
                  }}
                  className="col-6"
                  type="number"
                  name="year"
                  placeholder="YYYY"
                />
              </div>
            </div>
            <div className="col-12 col-md-7 sex">
              <label className="label-style">Sex</label>
              <div className="flex margin-indents">
                <input
                  onClick={maleHandler}
                  type="radio"
                  id="Male"
                  name="radio-group"
                />
                <label htmlFor="Male">Male</label>
                <input
                  onClick={femaleHandler}
                  type="radio"
                  id="Female"
                  name="radio-group"
                />
                <label htmlFor="Female">Female</label>
              </div>
            </div>
          </div>
          <label className="label-style">Your favorite ocean</label>
          <div className="checkbox-group margin-bt">
            <select
              onLoad={add}
              id="selector"
              onChange={(e) => oceanHandler(e)}
            >
              {result}
            </select>
          </div>
          <label className="label-style">Hobby</label>
          <div
            className="checkbox-group margin-bt"
            onClick={hobbyHandler}
            onLoad={addHobby}
          >
            {resultHobby}
          </div>
          <div className="flex">
            <input
              onClick={handleClick}
              type="submit"
              name="signup_submit"
              value="Back"
            />
            <input
              onClick={() => setModalActive(true)}
              disabled={!formValid}
              type="submit"
              name="modal"
              value="complete"
            />
            <Modal active={modalActive} setActive={setModalActive} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;
