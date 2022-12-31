import "../App.css";
import React from "react";
import { useDispatch } from "react-redux";
import ListItem from "./ListItem";
import * as data from "../data/data"
import store from "../index"
import { ADD_DENTIST, ADD_ASSISTANT, ADD_PATIENT, SICK_DENTIST, SICK_ASSISTANT, SICK_PATIENT, MAKE_APPOINTMENT, MOVE_APPOINTMENT, REMOVE_APPOINTMENT } from "../actions/actiontypes";

function Home() {
  const dispatch = useDispatch()

  const dentistList = data.dentists.map (dentist => (
    <ListItem 
      staffGroup = "dentist"
      key = {dentist.id}
      id = {dentist.id}
      name = {dentist.name}
      surname = {dentist.surname}
    />
  ))
  const assistantList = data.assistants.map (assistent => (
    <ListItem 
      staffGroup = "assistant"
      key = {assistent.id}
      id = {assistent.id}
      name = {assistent.name}
      surname = {assistent.surname}
    />
  ))

  return(
    <div className="home-blocks">
      <div className="staff-lists">
        <table border="" className="dentist-list">
          <thead>
            <tr>
              <th>
                id#
              </th>
              <th>
                Dentists
              </th>
              <th>
                Click if sick
              </th>
            </tr>
          </thead>
          <tbody>
            {dentistList}
          </tbody>
        </table>
        <button className="add-button" onClick={() => dispatch(ADD_DENTIST())}>Add Dentist</button>
      
        <table border="" className="assistant-list">
          <thead>
            <tr>
              <th>
                id#
              </th>
              <th>
                Assistants
              </th>
              <th>
                Click if sick
              </th>
            </tr>
          </thead>
          <tbody>
            {assistantList}
          </tbody>
        </table>
        <button className="add-button" onClick={() => dispatch(ADD_ASSISTANT)}>Add assistant</button>
      </div>
      <div className="activiteiten">
        <button className="button" onClick={() => dispatch(MAKE_APPOINTMENT())}>Voeg Afspraak Toe</button>
        <form onSubmit={REMOVE_APPOINTMENT}>
          ID van afspraak: <input type="number" name="appointment_id" /> <button className="button">Verwijder Afspraak</button>
        </form>
        <form onSubmit={SICK_PATIENT}>
          ID van patient: <input type="number" name="patient_id" /> <button className="button">Maak Patient ziek</button>
        </form>
        <form onSubmit={MOVE_APPOINTMENT}>
          ID van afspraak: <input type="number" name="appointment_id2" /> <button className="button">Verplaats Afspraak</button>
        </form>
      </div>
    </div>
  )
};


export default Home
