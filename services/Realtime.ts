import { useState } from "react";
import { io, Socket } from "socket.io-client";

export class Realtime {
  socket: Socket | undefined;
  roomId?: string
  userId?: string
  playerName?: string

  connect = () => new Promise<boolean>((resolve, reject) => {
    this.socket = io(`http://172.16.1.73:8081`, {
      transports: ["websocket"],
    });

    this.socket.on('connect', () => {
      console.log("socket connected")
      this.socket?.emit("join", this.roomId, this.playerName, this.userId)
      resolve(true)
    })
  })

  on = (evt: string, listener: (...args: any[]) => void) => this.socket?.on(evt, listener)
  off = (evt: string) => this.socket?.off(evt)

  setRoomId = (roomId: string) => {
    this.roomId = roomId
  }

  setPlayerInfo = (name: string, userId: string) => {
    this.userId = userId
    this.playerName = name
  }

  answer = (answer: string) => {
    this.socket?.emit('answer', answer)
  }

  disconnect = () => {
    this.socket?.close()
  }
}
