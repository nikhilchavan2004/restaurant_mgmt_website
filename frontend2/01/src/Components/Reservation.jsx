import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
const Reservation = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleReservation = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/v1/msg/send",
        {
          firstname: firstName,
          lastname: lastName,
          email,
          phone,
          date,
          time,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(data);
      toast.success("Reservation successful");
      // Reset fields after successful submission
      setFirstName("");
      setLastName("");
      setEmail("");
      setDate("");
      setTime("");
      setPhone("");
      navigate("/Success", {
        state: {firstName, lastName, email, phone, date, time},

        replace: true,
      });
    } catch (error) {
      const message = error.response
        ? error.response.data.message
        : "An unexpected error occurred";
      console.log(message);
      toast.error(message);
    }
  };

  return (
    <section className="reservation " id="reservation">
      <div className="container">
        <div className="banner">
          <img src="/reservation.png" alt="res" />
        </div>
        <div className="banner">
          <div className="reservation_form_box">
            <h1>WE MAKE RESERVATION</h1>
            <p>FOR FURTHER DETAILS PLEASE CALL</p>
            <form action="">
              <div>
                <input
                  type="text"
                  placeholder="first_name"
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />

                <input
                  type="text"
                  placeholder="last_name"
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />
              </div>
              <div>
                <input
                  type="date"
                  placeholder="date"
                  value={date}
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                />

                <input
                  type="time"
                  placeholder="time"
                  value={time}
                  onChange={(e) => {
                    setTime(e.target.value);
                  }}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <input
                  type="number"
                  placeholder="phone"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
              </div>
              <button type="submit" onClick={handleReservation}>
                Reserve now
                <span>
                  <HiOutlineArrowNarrowRight />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
