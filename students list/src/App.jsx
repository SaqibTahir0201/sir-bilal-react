import React, { useState } from "react";

function StudentsList() {
  const [students, setStudents] = useState([
    { name: "Bilal", rollNo: 1, fatherName: "attari" },
  ]);

  const [username, setUserName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [fatherName, setFatherName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = {
      name: username,
      rollNo: parseInt(rollNo),
      fatherName: fatherName,
    };
    setStudents([...students, newStudent]);
    setUserName("");
    setRollNo("");
    setFatherName("");
  };

  return (
    <div className=" container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Students List</h1>
      <form
        className="shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Name:
          <input
            type="text"
            placeholder="User name"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </label>
        <br />
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Roll No:
          <input
            type="number"
            placeholder="Roll No"
            value={rollNo}
            onChange={(e) => setRollNo(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </label>
        <br />
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Father Name:
          <input
            type="text"
            placeholder="Father Name"
            value={fatherName}
            onChange={(e) => setFatherName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </label>
        <br />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Student
        </button>
      </form>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Roll No</th>
            <th className="px-4 py-2">Father Name</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{student.name}</td>
              <td className="border px-4 py-2">{student.rollNo}</td>
              <td className="border px-4 py-2">{student.fatherName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentsList;
