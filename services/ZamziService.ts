import axios from "axios";

interface IJoinResult {
  success: boolean;
  roomId: string;
  message?: string;
}

const apiBase = "http://172.16.1.73:8081";

export const joinRoom = (pin: string, name: string, userId: string) =>
  axios
    .post<IJoinResult>(`${apiBase}/join`, { pin, name, userId })
    .then((r) => r.data);

export const changeUsername = (userId: string, name: string) =>
  axios.patch<void>(`${apiBase}/user/${userId}`, {
    name
  });

export const registerUser = (name: string) =>
  axios.post<{id: string}>(`${apiBase}/user`, {
    name
  }).then(r => r.data.id);
