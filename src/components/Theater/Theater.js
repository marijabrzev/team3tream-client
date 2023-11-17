import "./Theater.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import QuizButton from "../QuizButton/QuizButton";

export default function Theater() {
    return (
        <div className="outmost">
            <div className="theater-container">
                <div className="theater-hero">Hero image</div>
                <div className="theater-text">
                    <h1 className="theater-text__header">
                        choose something to watch before your food gets cold
                    </h1>
                    <h2 className="theater-text__body">
                        quick description on how to use the app. Click on your favourite and watch
                        any, anytime!
                    </h2>
                    <div>
                    <QuizButton />
                        <Link to={`/quizbutton`}>
                            <button>Pick a movie</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
