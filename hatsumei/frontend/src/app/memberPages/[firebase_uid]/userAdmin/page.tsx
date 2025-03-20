"use client";

import React, { useState, useEffect } from "react";
import { getAuth, listUsers, deleteUser } from "firebase/auth";
import { app } from "@/firebase";

const UserAdmin = () => {
  const [users, setUsers] = useState<unknown[]>([]);
  const [error, setError] = useState<string | null>(null);
  const auth = getAuth(app);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const list = await listUsers(auth);
        setUsers(list.users);
      } catch (err: unknown) {
        if (err instanceof Error) {
          if (err instanceof Error) {
            setError(err.message);
          } else {
            setError("An unknown error occurred.");
          }
        } else {
          setError("An unknown error occurred.");
        }
      }
    };

    fetchUsers();
  }, [auth]);

  const handleDeleteUser = async (uid: string) => {
    try {
      await deleteUser({ uid: uid });
      setUsers(users.filter((user) => user.uid !== uid));
      alert("ユーザーを削除しました。");
    } catch (err: unknown) {
      setError("削除できませんでした");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">ユーザー管理</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <ul className="space-y-2">
        {users.map((user) => (
          <li key={user.uid} className="flex items-center justify-between p-2 border rounded">
            <span>{user.email}</span>
            <button
              onClick={() => handleDeleteUser(user.uid)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
            >
              削除
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserAdmin;