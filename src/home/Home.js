import "../App.css";
import React from "react";
import ListItem from "./ListItem";
import * as data from "../data/data"

function Home() {

  const dentistList = data.dentists.map (dentist => (
    <ListItem 
        key = {dentist.id}
        id = {dentist.id}
        name = {dentist.name}
        surname = {dentist.surname}
    />
  ))
  const assistantList = data.assistants.map (assistent => (
    <ListItem 
        key = {assistent.id}
        id = {assistent.id}
        name = {assistent.name}
        surname = {assistent.surname}
    />
  ))

  return(
    <div className="staff-lists">
      <table className="dentist-list">
        <thead>
          <tr>
            <td>
              Dentists
            </td>
            <td>
              Click if sick
            </td>
          </tr>
        </thead>
        <tbody>
          {dentistList}
        </tbody>
      </table>
      <button>Add Dentist</button>
      <table className="assistant-list">
        <thead>
          <tr>
            <td>
              Assistants
            </td>
            <td>
              Click if sick
            </td>
          </tr>
        </thead>
        <tbody>
          {assistantList}
        </tbody>
      </table>
      <button>Add Dentist</button>
    </div>
  )
}

export default Home
