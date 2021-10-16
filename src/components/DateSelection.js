import React, { useState } from "react";
import styles from "../styles/DevDotTo.module.css";
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import date from "date-and-time";
import axios from "axios";

const DateSelectionPage = ({ postId, apikey }) => {
  const now = new Date();
  date.format(now, "DD/MM/YYYY HH:mm A");
  const curTime = new Date();
  date.format(curTime, "hh:mm A");
  const [posted, setPosted] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date(now));

  const publishPostHandler = () => {
    const finalDate = selectedDate.toJSON();
    const data = {
      articleID: postId,
      APIkey: apikey,
      publishTime: finalDate,
    };
    console.log(data);
    axios
      .post("http://localhost:8080/api/v2/schedule", data)
      .then((res) => {
        console.log(res);
        setPosted(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const CustomInput = ({ value, onClick }) => (
    <button
      onClick={onClick}
      className="bg-purple p-2 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg"
    >
      {value}
    </button>
  );

  return (
    <div>
      <div className={styles.dev_date_picker_body}>
        <div className={styles.dev_date_picker}>
          {!posted && (
            <div style={{ display: "flex" }}>
              <div className="m-10">
                <DatePicker
                  className="form-control"
                  selected={selectedDate}
                  onChange={(newDate) => setSelectedDate(newDate)}
                  name="selectDate"
                  showTimeSelect
                  timeIntervals={10}
                  timeFormat="HH:mm"
                  timeCaption="time"
                  minDate={now}
                  dateFormat="MMMM d, yyyy h:mm aa"
                  customInput={<CustomInput />}
                />
              </div>
              <div>
                <button
                  type="button"
                  className="my-10 mx-2.5 py-2 bg-purple hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                  onClick={publishPostHandler}
                >
                  Publish
                </button>
              </div>
            </div>
          )}
          {posted && (
            <div style={{ display: 'flex' , flexDirection: 'column',   margin: "30px", fontSize: "22px" , alignContent: 'center' , 'alignItems' : 'center' }}>
              {" "}
              <p> Your drafted post has been scheduled to be published</p>
              <Link to = '/'>
                <button
                  type="button"
                  className="py-2 px-4 my-2  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  Go Back to Home
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DateSelectionPage;
