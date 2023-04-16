import React from "react"

export default function Header() {
    return (
        <header className="header">
            <img 
                src="./images/logo.png" 
                className="header--image"
            />
            <h4 className="header--project">Created by Georgiy Garenov</h4>
        </header>
    )
}