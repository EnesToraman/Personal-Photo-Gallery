import React, { useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { useHistory } from "react-router-dom"
import { UploadFile } from "./UploadFile"
import { ProgressBar } from "./ProgressBar"
import { ImageArea } from "./ImageArea"

export const Profile = () => {
    const [error, setError] = useState("")
    const { currentUser, logOut } = useAuth()
    const history = useHistory()

    async function handleLogout() {
        setError("")

        try {
            await logOut()
            history.push("/login")
        } catch {
            setError("Failed to log out")
        }
    }

    return (
        <>
          <button onClick={handleLogout}>Log out</button>
          <UploadFile />
          <ImageArea />
        </>
      );
}