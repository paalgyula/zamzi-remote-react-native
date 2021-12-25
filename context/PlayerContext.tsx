import AsyncStorage from "@react-native-async-storage/async-storage";
import * as React from "react";
import { io, Socket } from "socket.io-client";
import { Realtime } from "../services/Realtime";
import { changeUsername, registerUser } from "../services/ZamziService";

type PlayerContextType = {
  name: string;
  setName: (name: string) => void;
  realtime?: Realtime;
  playerId: string;
};

export const PlayerContext = React.createContext({
  name: "Anonymous",
  setName: (name: string) => {},
  realtime: undefined,
  playerId: "",
} as PlayerContextType);

export const PlayerProvider: React.FC = ({ children }: any) => {
  const [name, setNameInternal] = React.useState<string>("");
  const [playerId, setPlayerId] = React.useState<string>("");

  const [realtime, setRealtime] = React.useState<Realtime | undefined>();

  React.useEffect(() => {
    AsyncStorage.getItem("playerName").then((name) => {
      setNameInternal(name || "Anonymous");
    });
    AsyncStorage.getItem("playerId").then((playerId) => {
      setPlayerId(playerId || "")
    });
  }, []);

  const setName = async (newName: string) => {
    if (playerId && newName !== name) {
      await changeUsername(playerId, newName);
      setNameInternal(newName);
    } else if (!playerId) {
      const newPlayerId = await registerUser(newName);
      await AsyncStorage.setItem("playerId", newPlayerId);
    }

    await AsyncStorage.setItem("playerName", newName);
  };

  React.useEffect(() => {
    setRealtime(new Realtime());

    return () => {
      realtime?.disconnect();
    };
  }, []);

  return (
    <PlayerContext.Provider
      value={{
        name,
        setName,
        playerId,
        realtime,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = () => React.useContext(PlayerContext);
