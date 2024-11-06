import React from "react";

export const DisplayUser = () => {
  return (
    <div className="py-10 px-10">
      <h2 className="text-3xl font-semibold mb-6">Employee List</h2>
      <table class="table ">
        <thead>
          <tr>
            <th scope="col">S.no</th>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Mobile Number</th>
            <th scope="col">Designation</th>
            <th scope="col">Gender</th>
            <th scope="col">Course</th>
            <th scope="col">Create Date</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
