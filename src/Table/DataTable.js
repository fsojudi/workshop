import React, { useState } from "react";


export default function DataTable() {
    const initialData = [
        { id: 1, firstName: "Fatemeh", lastName: "Sojudi", age: 35, birthDate: "1986-01-01", country: "Sweden", city: "Växjö " },
        { id: 2, firstName: "Åsa", lastName: "Jonsson", age: 50, birthDate: "1971-04-15", country: "Sweden", city: "Växjö" },
        { id: 3, firstName: "Sara", lastName: "Nasiri", age:36, birthDate: "1985-03-29", country: "Sweden", city: "Växjö" },
        { id: 4, firstName: "Zahra", lastName: "Sojudi", age: 45, birthDate: "1976-10-07", country: "Sweden", city: "Ronneby" }
        ];

    
        const [studentList] = useState(initialData);
        // showDetails state for displaying student details with a boolean,the button onclick function displayData returns a true value and the properties
        const [showDetails, setShowDetails] = useState(false);
        const studentDefaultData = { id: 0, firstName: "", lastName: "", age: 0, birthDate: "", country: "", city: "" }
        const [student, setStudent] = useState(studentDefaultData);
        // functionconponent that returns table header
    
        const TableHeader = () => {
            return (
                <thead className="table-light">
                    <td>Id</td>
                    <td>FirstName</td>
                    <td>LastName</td>
                    <td>Age</td>
                    <td>Action</td>
                </thead>
            );
        };
    
        // functionconponent 
        const TableRow = (props) => {
            return (
                <tbody>
                    {
                        props.studentList.map((student) => {
                            const { id, firstName, lastName, age } = student;
                            return (
                                <tr key={id}>
                                    <td>{id}</td>
                                    <td>{firstName}</td>
                                    <td>{lastName}</td>
                                    <td>{age}</td>
                                    <td><TableAction student={student} /></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            )
        }
    
        // functionconponent action 
        const TableAction = ({ student }) => {
            const displayData = () => {
                setShowDetails(true);
                setStudent(student);
            };
            return <button type="button" className="btn btn-primary" onClick={displayData} >Details</button>
        }
    
        // functionconponent 
        const ShowStudentDetails = () => {
            const { id, firstName, lastName, country, city, birthDate } = student;
            return (
                <>
                    {showDetails &&
                        <div className="card" style={{ width: '400px' }} >
                            <div className="card-header bg-info text-white">
                                Student Information
                            </div>
                            <div className="card-body">
                                <h5 className="card-title"> {country}: {city}</h5>
                                <p className="card-text">ID: {id}</p>
                                <p className="card-text">Name: {firstName} {lastName}</p>
                                <p className="card-text">BirthDate: {birthDate}</p>
                            </div>
                            <div className="card-footer">
                                <button type="button" className="btn btn-info" onClick={() => { setShowDetails(false); setStudent(studentDefaultData) }}>Hide info</button>
                            </div>
                        </div >
                    }
                </>
            )
        }
    
        const Table = ({ children }) => <table className="table table-striped">{children}</table>
    
        return (
            <div className="container">
                <h3>Student List</h3>
                <Table>
                    <TableHeader />
                    <TableRow studentList={studentList} />
                </Table>
                <br />
                <ShowStudentDetails />
            </div>
        );

};