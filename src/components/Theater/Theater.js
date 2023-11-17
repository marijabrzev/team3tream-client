import "./Theater.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import QuizButton from "../QuizButton/QuizButton";

export default function Theater() {
    return (
        <div className="outmost">
            <div className="theater-container">
                <div className="theater-text">
                    <h1 className="theater-text__header">
                        Say goodbye to endless scrolling and hello to personalized movie magic{" "}
                    </h1>
                    <p className="theater-text__body">
                        Try out our unique assessment to get a tailored movie experience. By
                        understanding your current vibe, we handpick a selection of films perfectly
                        aligned with your mood.
                    </p>
                    <div className="button-container">
                        <button className="quiz-button">
                            <QuizButton />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
