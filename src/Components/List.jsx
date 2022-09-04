import { useState } from "react";
import { collaboratorsBase } from "./ListCollaborators";

const List = () => {
    const [nameCollab, setNameCollab] = useState("");
    const [email, setEmail] = useState("");
    const [listCollab, setListCollab] = useState(collaboratorsBase);
    const [searchName, setSearchName] = useState("");
    const [listSearch, setListSearch] = useState([]);

    const addCollab = (e) => {
        e.preventDefault();
        setListCollab([...listCollab, { name: nameCollab, email: email }]);
        setNameCollab("");
        setEmail("");
    }

    const captureName = (e) => {
        setNameCollab(e.target.value)
    }

    const captureEmail = (e) => {
        setEmail(e.target.value)
    }

    const captureSearch = (e) => {
        setSearchName(e.target.value)
    }

    const searchCollab = () => {
        const filterSearchCollab = listCollab.filter((collab) => collab.name === searchName)
        setListSearch(filterSearchCollab)
        setSearchName("")
    }

    const cleanSearch = () => {
        setListSearch([])
    }

    return (
        <>
            <navbar className="navbar">
                <h1>Buscador de Colaboradores</h1>
                <div>
                    <input className="inputColaborador" value={searchName} onChange={captureSearch} type="text" placeholder="Busca un colaborador"></input>
                    <button className="search btn btn-primary" onClick={searchCollab}> Buscar </button>
                </div>
            </navbar>
            <div className="bodyComponent">
                <p> Nombre del colaborador</p>
                <input className="inputName" type="text" value={nameCollab} onChange={captureName} placeholder="Ingresa el nombre del colaborador"></input>
                <p> Correo del colaborador</p>
                <input className="inputCorreo" type="text" value={email} onChange={captureEmail} placeholder="Ingresa correo del colaborador"></input>
                <div>
                    <button className="addButton btn btn-primary" onClick={addCollab} > Agregar Colaborador</button>
                </div>

            </div>
            <div>
                <h1> Listado de colaboradores </h1>
                <ul>
                    {listCollab.map((collab) => {
                        return (
                            <li
                                key={collab.name}>
                                {collab.name + " "}
                                {collab.email}
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div>
                <h1> Resultado Busqueda
                    <button className="clean btn btn-primary" onClick={cleanSearch}> Limpiar </button>
                </h1>
                <ul>
                    {listSearch.map((collab) => {
                        return (
                            <li
                                key={collab.name}>
                                {collab.name + " "}
                                {collab.email}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>

    );
}

export default List;