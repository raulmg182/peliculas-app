import { useState } from "react";
import axios from "axios";

const EndPointPage = () => {
  const [employees, setEmployees] = useState([]);

  const extraerInformacion = async () => {
    const resp = await axios.get("https://jsonplaceholder.typicode.com/posts");
    console.log(resp.data);
    setEmployees(resp.data);
  };

  return (
    <>
      <header className="row">
        <article className="col">
          <h1>End Point Page</h1>
        </article>
      </header>
      <main className="row">
        <article className="col">
          <button
            type="button"
            className="btn btn-primary"
            onClick={extraerInformacion}
          >
            Extraer Información
          </button>
        </article>
      </main>

      <section className="row">
        <article className="col">
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
            {employees.map((employee) => (
              <h5 key={employee.id} className="card-title">
              {employee.title}
              </h5>
              ))}
              {employees.map((employee) => (
              <p key={employee.id} className="card-text">
                {employee.title}
              </p>
              ))}
            </div>
          </div>
        </article>
      </section>

      <section className="row">
        <article className="col">
          <ul className="list-group">
            {employees.map((employee) => (
              <li key={employee.id} className="list-group-item">
                {employee.title}
                {employee.body}
              </li>
            ))}
          </ul>
        </article>
      </section>
    </>
  );
};

export default EndPointPage;
