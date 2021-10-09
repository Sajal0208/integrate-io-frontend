import React, { useState } from "react";
import styles from "../styles/DevDotTo.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateSelectionPage = ({postId, apikey}) => {
  //   const selectedDate = new Date("02/05/2021 10:30 AM");
  const [selectedDate, setSelectedDate] = useState(
    new Date("01/01/2021 12:00 AM")
  );

  const publishPostHandler = () => {
    console.log(selectedDate);
    console.log(selectedDate);
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth() + 1; 
    const date = selectedDate.getDate();
    const hours = selectedDate.getHours();
    const minutes = selectedDate.getMinutes();
    const seconds = selectedDate.getSeconds();
    console.log(`${year}-${month}-${date}T${hours}:${minutes}:${seconds}0`)
    // "publishTime": "2021-09-23T20:50:41.751Z"
    // const data = {
    //   articleID: postId,
    //   APIkey: apikey,
    //   publishTime: selectedDate,
    // };
    // console.log(data)
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
    <div className={styles.dev_date_picker_body}>
      <div className={styles.dev_date_picker}>
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
    </div>
  );
};

export default DateSelectionPage;
