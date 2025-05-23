import { format, parse } from "date-fns";
import React from "react";
import { useLoaderData } from "react-router";

const UserLogs = () => {
  const users = useLoaderData();

  const convertedDate = (date) => {
    const utcDate = new Date(date);

    const gmtPlus6 = utcDate.toLocaleString("en-US", {
      timeZone: "Asia/Dhaka", // GMT+6
      hour12: true,
    });

    const parsedDate = parse(gmtPlus6, "M/d/yyyy, hh:mm:ss a", new Date());
    const output = format(parsedDate, "EEE, dd MMM yyyy hh:mm:ss a");

    return output;
  };

  return (
    <div>
      <div className="overflow-x-auto bg-base-100 rounded-xl shadow">
        <table className="table w-full text-sm">
          <thead className="bg-base-200 text-base font-semibold">
            <tr>
              <th>#</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Last Login</th>
              <th>Account Created</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr key={user._id} className="hover">
                <td>{index + 1}</td>
                <td className="font-medium">{user.name}</td>
                <td>{user.email}</td>
                <td>{convertedDate(user.lastSignInTime)}</td>
                <td>{convertedDate(user.creationTime)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserLogs;
