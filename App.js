import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";

// Αρχικοποίηση ωρών προπόνησης
const availableTimes = [
  { value: "08:00", label: "08:00" },
  { value: "10:00", label: "10:00" },
  { value: "12:00", label: "12:00" },
  { value: "14:00", label: "14:00" },
  { value: "16:00", label: "16:00" },
  { value: "18:00", label: "18:00" },
  { value: "20:00", label: "20:00" },
];

const App = () => {
  // Κατάσταση για την αποθήκευση της επιλεγμένης ημερομηνίας και ώρας
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);

  // Συνάρτηση για την αποθήκευση της ημερομηνίας
  const handleDateChange = (date) => {
    setDate(date);
  };

  // Συνάρτηση για την αποθήκευση της ώρας
  const handleTimeChange = (selectedOption) => {
    setTime(selectedOption);
  };

  // Συνάρτηση για την επιβεβαίωση του ραντεβού
  const handleSubmit = () => {
    if (date && time) {
      alert(`Το ραντεβού σας είναι στις ${time.label} στις ${date.toLocaleDateString()}`);
    } else {
      alert("Παρακαλώ επιλέξτε ημερομηνία και ώρα.");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Εφαρμογή Ραντεβού Γυμναστηρίου</h1>
      
      {/* Επιλογή ημερομηνίας */}
      <div>
        <label>Επιλέξτε ημερομηνία:</label>
        <DatePicker
          selected={date}
          onChange={handleDateChange}
          dateFormat="dd/MM/yyyy"
          minDate={new Date()}
          placeholderText="Επιλέξτε ημερομηνία"
        />
      </div>

      {/* Επιλογή ώρας */}
      <div style={{ marginTop: "20px" }}>
        <label>Επιλέξτε ώρα:</label>
        <Select
          options={availableTimes}
          value={time}
          onChange={handleTimeChange}
          placeholder="Επιλέξτε ώρα"
        />
      </div>

      {/* Κουμπί επιβεβαίωσης */}
      <div style={{ marginTop: "20px" }}>
        <button onClick={handleSubmit} style={{ padding: "10px 20px", fontSize: "16px" }}>
          Κλείστε Ραντεβού
        </button>
      </div>
    </div>
  );
};

export default App;
