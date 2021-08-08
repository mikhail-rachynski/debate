import React from "react"
import style from "./LoaderApp.module.css"
import Preloader from "../Preloader/Preloader";

const LoaderApp = () => {
    return <div className={style.loaderApp}>
        <div className={style.loaderBody}>
            <div><Logo /></div>
            <Preloader/>
        </div>
    </div>
}

const Logo = () => {
    return <svg width="450" height="200" xmlns="http://www.w3.org/2000/svg">
        <path fill="#343a40" fontSize="10" d="m84.655,176.345c1.02,0.06 3.15,0.11 4.7,0.11c3.62,0 6.35,-1.53 6.35,-5.08c0,-2.4 -1.45,-3.8 -3.63,-4.15l0,-0.05c1.68,-0.55 3,-1.85 3,-4.05c0,-2.43 -1.45,-4.32 -5.62,-4.32c-1.63,0 -3.83,0.07 -4.8,0.09l0,17.45zm4.95,-7.95c2.52,0 3.97,1 3.97,2.85c0,2.15 -1.52,3.2 -4.1,3.2c-1,0 -2.12,-0.05 -2.7,-0.09l0,-5.96l2.83,0zm-0.2,-7.6c2.32,0 3.55,0.98 3.55,2.8c0,1.9 -1.53,2.93 -3.38,2.93l-2.8,0l0,-5.65c0.63,-0.03 1.7,-0.08 2.63,-0.08zm9.85,15.58l2,0l0,-7.98c0.42,-0.82 1.05,-1.6 2.35,-1.6c0.67,0 0.97,0.11 1.52,0.43l0.7,-1.88c-0.37,-0.27 -0.82,-0.42 -1.75,-0.42c-1.42,0 -2.25,0.67 -2.82,1.52l0,-1.32l-2,0l0,11.25zm9.05,0l2,0l0,-11.25l-2,0l0,11.25zm-0.25,-15.48c0,0.83 0.6,1.3 1.3,1.3c0.62,0 1.22,-0.47 1.22,-1.3c0,-0.72 -0.6,-1.2 -1.22,-1.2c-0.7,0 -1.3,0.48 -1.3,1.2zm6.14,11.2c0,2.88 1,4.48 3.53,4.48c1.25,0 2.28,-0.45 2.88,-0.95l-0.63,-1.55c-0.4,0.3 -1,0.62 -1.78,0.62c-1.42,0 -2,-1.02 -2,-2.8l0,-4.9l4.13,0l0,-1.87l-4.13,0l0,-3.13l-2,0l0,10.1zm9.63,4.28l2,0l0,-11.25l-2,0l0,11.25zm-0.25,-15.48c0,0.83 0.6,1.3 1.3,1.3c0.63,0 1.23,-0.47 1.23,-1.3c0,-0.72 -0.6,-1.2 -1.23,-1.2c-0.7,0 -1.3,0.48 -1.3,1.2zm12.1,12.43c0,1.03 -0.95,1.55 -2,1.55c-1.12,0 -2.6,-0.68 -3.25,-1.43l-1.12,1.43c0.52,0.8 2.32,1.75 4.15,1.75c2.25,0 4.35,-1.03 4.35,-3.4c0,-3.95 -6.08,-2.83 -6.08,-5.2c0,-0.75 0.68,-1.4 1.8,-1.4c1.18,0 2.15,0.5 2.83,1.1l0.95,-1.53c-0.68,-0.65 -2.03,-1.32 -3.88,-1.32c-2.22,0 -3.82,1.2 -3.82,3.17c0,4.13 6.07,3 6.07,5.28zm5.05,3.05l2,0l0,-8.15c0.7,-0.8 1.95,-1.43 3.2,-1.43c2.08,0 3.15,1.15 3.15,3.4l0,6.18l2,0l0,-6.45c0,-3.53 -1.75,-5 -4.67,-5c-1.43,0 -2.85,0.65 -3.68,1.5l0,-7.55l-2,0l0,17.5zm22.3,0l0,-6.73c0.88,0.08 1.92,0.1 2.63,0.1c4.27,0 6.29,-2.65 6.29,-5.5c0,-2.72 -1.47,-5.42 -6.47,-5.42c-1.1,0 -3.6,0.05 -4.57,0.05l0,17.5l2.12,0zm2.65,-15.55c2.77,0 4.02,1.32 4.02,3.4c0,2.2 -1.54,3.52 -4.12,3.52c-0.88,0 -1.7,-0.05 -2.55,-0.12l0,-6.75c0.83,-0.03 1.95,-0.05 2.65,-0.05zm9.1,6.67c0.9,-0.47 1.72,-0.82 3.1,-0.82c2.22,0 2.55,1.45 2.55,3.55c-0.75,-0.55 -1.93,-0.73 -2.8,-0.73c-2.43,0 -4.25,1.28 -4.25,3.58c0,2.17 1.4,3.48 3.45,3.48c1.85,0 2.92,-0.78 3.6,-1.63l0,1.45l1.9,0l0,-6.9c0,-2.93 -1.13,-4.6 -4.33,-4.6c-1.4,0 -2.75,0.4 -3.75,1.02l0.53,1.6zm2.75,7.25c-1.3,0 -2.03,-0.7 -2.03,-1.77c0,-1.3 1.2,-1.85 2.41,-1.85c0.97,0 1.82,0.25 2.52,0.75l0,1.42c-0.58,0.68 -1.43,1.45 -2.9,1.45zm8.15,1.63l2,0l0,-7.98c0.42,-0.82 1.05,-1.6 2.35,-1.6c0.67,0 0.97,0.11 1.52,0.43l0.7,-1.88c-0.37,-0.27 -0.82,-0.42 -1.75,-0.42c-1.42,0 -2.25,0.67 -2.82,1.52l0,-1.32l-2,0l0,11.25zm8.5,-3c0,2.17 0.85,3.2 2.55,3.2c1.18,0 2.05,-0.38 2.65,-0.85l-0.45,-1.53c-0.38,0.25 -0.88,0.5 -1.43,0.5c-0.95,0 -1.32,-0.7 -1.32,-2.22l0,-13.6l-2,0l0,14.5zm7.8,3l2,0l0,-11.25l-2,0l0,11.25zm-0.25,-15.48c0,0.83 0.6,1.3 1.3,1.3c0.63,0 1.22,-0.47 1.22,-1.3c0,-0.72 -0.59,-1.2 -1.22,-1.2c-0.7,0 -1.3,0.48 -1.3,1.2zm7,6.6c0.9,-0.47 1.73,-0.82 3.1,-0.82c2.23,0 2.55,1.45 2.55,3.55c-0.75,-0.55 -1.92,-0.73 -2.8,-0.73c-2.42,0 -4.25,1.28 -4.25,3.58c0,2.17 1.4,3.48 3.45,3.48c1.85,0 2.93,-0.78 3.6,-1.63l0,1.45l1.9,0l0,-6.9c0,-2.93 -1.12,-4.6 -4.32,-4.6c-1.4,0 -2.76,0.4 -3.76,1.02l0.53,1.6zm2.75,7.25c-1.3,0 -2.03,-0.7 -2.03,-1.77c0,-1.3 1.21,-1.85 2.4,-1.85c0.98,0 1.83,0.25 2.53,0.75l0,1.42c-0.57,0.68 -1.42,1.45 -2.9,1.45zm24.85,-5.75c0,-3.07 -1.55,-4.07 -3.62,-4.07c-1.7,0 -3.15,0.8 -3.95,1.95c-0.43,-1.18 -1.65,-1.95 -3.4,-1.95c-1.45,0 -2.9,0.65 -3.73,1.62l0,-1.42l-2,0l0,11.25l2,0l0,-8.05c0.58,-0.83 1.65,-1.53 2.95,-1.53c1.58,0 2.4,0.95 2.4,2.33l0,7.25l2,0l0,-7.15c0,-0.25 0,-0.6 -0.02,-0.8c0.52,-0.93 1.6,-1.63 2.95,-1.63c1.62,0 2.42,0.9 2.42,2.75l0,6.83l2,0l0,-7.38zm12.25,4.58c-0.73,0.67 -2,1.17 -3.45,1.17c-2.2,0 -3.75,-1.25 -3.92,-3.37l8.64,0c0.08,-0.35 0.13,-0.8 0.13,-1.35c0,-3.1 -2.32,-5.15 -5.23,-5.15c-3.69,0 -5.79,2.6 -5.79,5.87c0,3.55 2.37,5.88 6.02,5.88c1.5,0 3.12,-0.48 4.23,-1.48l-0.63,-1.57zm-3.92,-6.83c1.94,0 3.15,1.16 3.25,3l-6.83,0c0.23,-1.72 1.52,-3 3.58,-3zm8.05,9.63l2,0l0,-8.13c0.72,-0.82 1.89,-1.45 3.17,-1.45c2.1,0 3.18,1.11 3.18,3.45l0,6.13l2,0l0,-6.5c0,-3.53 -1.75,-4.95 -4.68,-4.95c-1.47,0 -2.9,0.72 -3.67,1.57l0,-1.37l-2,0l0,11.25zm13.47,-4.28c0,2.88 1,4.48 3.52,4.48c1.25,0 2.28,-0.45 2.88,-0.95l-0.63,-1.55c-0.39,0.3 -1,0.62 -1.77,0.62c-1.43,0 -2,-1.02 -2,-2.8l0,-4.9l4.13,0l0,-1.87l-4.13,0l0,-3.13l-2,0l0,10.1zm9.67,-4.6c0.9,-0.47 1.73,-0.82 3.1,-0.82c2.23,0 2.55,1.45 2.55,3.55c-0.75,-0.55 -1.92,-0.73 -2.8,-0.73c-2.42,0 -4.25,1.28 -4.25,3.58c0,2.17 1.4,3.48 3.45,3.48c1.85,0 2.93,-0.78 3.6,-1.63l0,1.45l1.9,0l0,-6.9c0,-2.93 -1.12,-4.6 -4.32,-4.6c-1.4,0 -2.75,0.4 -3.75,1.02l0.52,1.6zm2.75,7.25c-1.3,0 -2.02,-0.7 -2.02,-1.77c0,-1.3 1.2,-1.85 2.4,-1.85c0.97,0 1.82,0.25 2.52,0.75l0,1.42c-0.57,0.68 -1.42,1.45 -2.9,1.45zm8.15,1.63l2,0l0,-7.98c0.43,-0.82 1.05,-1.6 2.35,-1.6c0.68,0 0.98,0.11 1.53,0.43l0.7,-1.88c-0.38,-0.27 -0.83,-0.42 -1.75,-0.42c-1.43,0 -2.25,0.67 -2.83,1.52l0,-1.32l-2,0l0,11.25zm18.73,-11.25l-2.28,0l-2.6,7.12c-0.2,0.6 -0.37,1.18 -0.52,1.73c-0.23,-0.58 -0.43,-1.13 -0.68,-1.7l-3.3,-7.15l-2.4,0l5.4,11.25l-0.25,0.6c-0.75,1.8 -1.45,2.55 -2.4,2.55c-0.45,0 -0.87,-0.2 -1.25,-0.37l-0.65,1.52c0.6,0.4 1.28,0.7 2.13,0.7c1.6,0 2.65,-0.97 4.3,-5l4.5,-11.25zm16.1,6.77c0,1.78 -1.6,2.73 -3.42,2.73c-1.48,0 -3.31,-0.73 -4.33,-2.08l-1.23,1.45c0.88,1.65 3.38,2.63 5.53,2.63c3.17,0 5.7,-1.88 5.7,-4.75c0,-5.98 -8.55,-4.35 -8.55,-8.68c0,-1.55 1.2,-2.57 3.15,-2.57c1.52,0 2.62,0.5 3.55,1.42l1.15,-1.6c-1,-1.1 -2.8,-1.82 -4.83,-1.82c-3.32,0 -5.27,2.05 -5.27,4.57c0,5.8 8.55,4.43 8.55,8.7zm5.05,0.2c0,2.88 1,4.48 3.52,4.48c1.25,0 2.28,-0.45 2.88,-0.95l-0.63,-1.55c-0.4,0.3 -1,0.62 -1.77,0.62c-1.43,0 -2,-1.02 -2,-2.8l0,-4.9l4.12,0l0,-1.87l-4.12,0l0,-3.13l-2,0l0,10.1zm19.15,-6.97l-2.28,0l-2.6,7.12c-0.2,0.6 -0.37,1.18 -0.52,1.73c-0.23,-0.58 -0.43,-1.13 -0.68,-1.7l-3.3,-7.15l-2.4,0l5.4,11.25l-0.25,0.6c-0.75,1.8 -1.45,2.55 -2.4,2.55c-0.45,0 -0.87,-0.2 -1.25,-0.37l-0.65,1.52c0.6,0.4 1.28,0.7 2.13,0.7c1.6,0 2.65,-0.97 4.3,-5l4.5,-11.25zm2.05,8.25c0,2.17 0.85,3.2 2.55,3.2c1.17,0 2.05,-0.38 2.65,-0.85l-0.45,-1.53c-0.38,0.25 -0.88,0.5 -1.43,0.5c-0.95,0 -1.32,-0.7 -1.32,-2.22l0,-13.6l-2,0l0,14.5zm16.12,0.2c-0.72,0.67 -2,1.17 -3.45,1.17c-2.2,0 -3.75,-1.25 -3.92,-3.37l8.65,0c0.07,-0.35 0.12,-0.8 0.12,-1.35c0,-3.1 -2.32,-5.15 -5.22,-5.15c-3.7,0 -5.8,2.6 -5.8,5.87c0,3.55 2.37,5.88 6.02,5.88c1.5,0 3.13,-0.48 4.23,-1.48l-0.63,-1.57zm-3.92,-6.83c1.95,0 3.15,1.16 3.25,3l-6.83,0c0.23,-1.72 1.53,-3 3.58,-3z" id="SvgjsPath15928"/>
        <path fill="#343a40" d="m78.37,52.64999l0,0q0,-2.35 1.68,-3.72q1.67,-1.36 3.03,-3.22l0,0q0.87,-1.24 2.48,-2.67q1.62,-1.42 3.41,-2.54q1.8,-1.11 3.54,-1.86q1.73,-0.74 3.1,-0.74l0,0q3.35,0 5.39,1.11q2.05,1.12 3.16,2.48q1.12,1.37 1.55,2.55q0.44,1.17 0.81,1.3l0,0q1.12,0.12 1.74,1.05q0.62,0.93 0.99,2.17q0.37,1.24 0.62,2.61q0.25,1.36 0.49,2.48l0,0q0.25,0.99 0.62,1.55q0.38,0.55 0.69,0.8q0.31,0.25 0.55,0.5q0.25,0.25 0.25,0.62l0,0q0,0.62 -0.18,1.18q-0.19,0.55 -0.44,1.17l0,0q0,1.37 0.56,1.8q0.56,0.44 0.56,1.18l0,0q0,0.25 -0.13,0.43q-0.12,0.19 -0.12,0.31l0,0q0,0.62 0.31,1.18q0.31,0.56 0.31,1.18l0,0q0,2.85 -0.62,5.46q-0.62,2.6 -0.62,5.45l0,0q0,0.99 -0.93,2.73q-0.93,1.74 -0.93,3.35l0,0q0,0.99 0.5,1.55q0.49,0.56 1.24,1.3l0,0q-0.62,1.24 -1.31,2.36q-0.68,1.11 -2.04,1.86l0,0q-0.25,-0.25 -0.19,-0.5q0.06,-0.25 -0.31,-0.25l0,0q-0.25,0 -0.25,0.25l0,0q0,0.25 0.31,0.25q0.31,0 0.56,0.12l0,0q-0.12,0.99 -0.25,1.86q-0.12,0.87 -0.12,1.86l0,0q-0.25,0.87 -0.99,0.93q-0.75,0.06 -0.75,0.68l0,0q0,0.25 0.07,0.69q0.06,0.43 0.06,0.93l0,0q0,0.49 -0.75,0.74l0,0q-1.36,0 -2.29,1.74q-0.93,1.73 -1.8,3.1l0,0l0,1.73q0,1.12 -0.12,2.17q-0.13,1.06 -0.75,1.3l0,0l0.13,0.13q-0.25,-0.37 -0.25,-0.93q0,-0.56 -0.25,-1.18l0,0q-0.12,0 -0.25,0.06q-0.12,0.06 -0.37,0.06l0,0q-0.12,0 -0.12,-0.06q0,-0.06 -0.13,-0.06l0,0q-0.37,0 -1.11,0.56q-0.75,0.56 -1.49,1.55q-0.74,0.99 -1.3,2.29q-0.56,1.3 -0.56,2.79l0,0q0.12,0.25 0.12,0.87l0,0q0,0.74 -0.62,1.55q-0.62,0.81 -0.62,1.8l0,0q0,0.74 -0.62,1.05q-0.62,0.31 -1.3,0.5q-0.68,0.18 -1.3,0.56q-0.62,0.37 -0.62,1.11l0,0q0,0.37 0.12,0.87q0.13,0.5 0.13,0.99l0,0q0,1.24 -0.81,1.61q-0.8,0.38 -1.73,0.5q-0.93,0.12 -1.74,0.31q-0.81,0.19 -0.81,1.18l0,0q0,0.37 0.13,0.68q0.12,0.31 0.12,0.93l0,0q0,0.5 -0.62,0.62l0,0q-1.11,0.12 -2.04,0.68q-0.93,0.56 -1.99,1.24q-1.05,0.68 -2.35,1.18q-1.31,0.5 -3.04,0.5l0,0q-0.37,0 -1.12,-0.25l0,0q-0.62,0.12 -1.73,0.12l0,0q-2.24,0 -4.34,-1.11q-2.11,-1.12 -4.47,-2.36l0,0q-0.74,1.36 -1.67,3.1q-0.93,1.74 -1.92,3.41q-1,1.67 -1.99,2.79q-0.99,1.12 -1.86,1.12l0,0q-0.62,0 -0.93,-0.25q-0.31,-0.25 -0.8,-0.25l0,0q-1,0 -2.11,0.37q-1.12,0.37 -2.11,0.37l0,0q-1.61,0 -2.48,-2.23q-0.87,-2.23 -1.3,-5.08q-0.44,-2.85 -0.56,-5.52q-0.12,-2.67 -0.12,-3.53l0,0q0,-0.87 0.55,-1.93q0.56,-1.05 0.56,-2.17l0,0q0,-1.48 -0.74,-2.91q-0.75,-1.43 -0.75,-2.91l0,0q0,-1.49 0.07,-3.17q0.06,-1.67 0.93,-3.03l0,0q0,-0.25 -0.07,-0.38q-0.06,-0.12 -0.06,-0.37l0,0q0,-0.87 0.56,-1.36q0.56,-0.5 0.56,-1.37l0,0q0,-0.62 -0.31,-1.11q-0.31,-0.5 -0.31,-1.12l0,0q0,-0.49 0.18,-0.99q0.19,-0.5 0.19,-0.99l0,0q0,-0.62 -0.12,-1.12q-0.13,-0.49 -0.13,-0.74l0,0q0.25,-1.12 0.31,-2.23q0.06,-1.12 0.06,-2.11l0,0q0,-2.11 0.25,-3.29q0.25,-1.18 0.62,-1.92q0.37,-0.74 0.62,-1.3q0.25,-0.56 0.25,-1.43l0,0q0,-0.25 -0.19,-0.93q-0.18,-0.68 -0.43,-1.36q-0.25,-0.68 -0.43,-1.3q-0.19,-0.62 -0.19,-0.75l0,0q0,-0.49 0.5,-2.29q0.49,-1.8 0.74,-2.92l0,0q-0.12,-0.37 -0.12,-0.99l0,0q0,-1.73 0.8,-3.35q0.81,-1.61 0.81,-2.97l0,0q0,-0.99 -0.62,-2.36q-0.62,-1.36 -0.62,-2.73l0,0q0,-1.11 0.12,-2.66q0.13,-1.55 0.13,-2.92l0,0q0,-1.73 -0.62,-3.34q-0.62,-1.62 -0.62,-3.1l0,0q0,-1.74 1.24,-2.36q1.24,-0.62 2.97,-0.62l0,0q3.1,0 5.33,1.55q2.24,1.55 3.54,3.97q1.3,2.42 1.92,5.27q0.62,2.85 0.62,5.58l0,0q0,1.73 -1.12,3.59q-1.11,1.86 -1.11,3.35l0,0q0,0.5 0.25,1.06q0.24,0.55 0.24,1.17l0,0q0,1.24 -0.55,2.55q-0.56,1.3 -1.18,2.79q-0.62,1.48 -1.18,3.34q-0.56,1.86 -0.56,4.1l0,0q0,1.36 0.5,3.22q0.49,1.86 0.74,3.6l0,0q0,0.62 -0.62,1.05q-0.62,0.43 -0.62,1.05l0,0q0,0.62 0.62,0.81q0.62,0.19 1.49,0.19l0,0q0.62,0 1.36,-0.07q0.75,-0.06 0.75,-0.43l0,0q0,-0.25 -0.62,-0.68q-0.62,-0.44 -0.62,-0.68l0,0q0,-0.38 0.8,-0.62q0.81,-0.25 0.81,-0.75l0,0q-0.62,-0.99 -0.68,-2.6q-0.06,-1.61 -0.06,-2.11l0,0q0,-1.61 1.24,-2.54q1.24,-0.93 1.24,-1.92l0,0q0,-0.25 -0.07,-0.56q-0.06,-0.31 -0.06,-0.56l0,0l0,0.12q0.37,-0.49 0.75,-0.99q0.37,-0.49 0.37,-1.24l0,0q0,-0.25 -0.06,-0.49q-0.07,-0.25 -0.07,-0.5l0,0q0,-0.74 0.62,-1.36l0,0q0.5,0.62 0.75,1.05q0.25,0.43 1.11,0.43l0,0q-0.12,0.38 -0.12,0.87l0,0q0,-0.25 0.06,-0.37q0.06,-0.12 0.06,-0.37l0,0q-0.37,-0.75 -0.37,-1.49l0,0q0,-0.87 0.56,-1.86q0.56,-0.99 0.56,-2.23l0,0q0,-0.75 -0.25,-1.55q-0.25,-0.81 -0.25,-1.68l0,0q0,-1.98 1.37,-3.96l0,0l-0.13,0.12q0,0.5 0,0.99q0,0.5 -0.12,1.12l0,0q0,1.11 0.8,1.55q0.81,0.43 0.81,0.93l0,0q0,0.49 -0.31,1.24q-0.31,0.74 -0.31,1.36l0,0q0,1.49 0.5,3.04q0.49,1.55 0.49,2.91l0,0q0,1.49 -1.49,2.36l0,0q-1.48,0.87 -1.73,1.92q-0.25,1.06 -0.25,2.17l0,0q0,0.62 0.12,1.12q0.13,0.49 0.13,1.11l0,0q0,0.75 -0.25,1.55q-0.25,0.81 -0.25,1.68l0,0q0,1.86 0.37,3.53q0.38,1.68 0.5,3.29l0,0q0,0.62 -0.99,0.87l0,0q-0.5,0 -0.5,-0.19q0,-0.19 -0.37,-0.68l0,0l0.25,-0.25l-0.13,0.37q-0.24,-0.12 -0.99,-0.12l0,0q-0.25,-0.37 -0.25,-0.37l0,0q0,0.24 0.38,0.24l0,0q-0.25,1 -0.25,1.49l0,0q0,0.99 0.49,1.86q0.5,0.87 0.5,1.99l0,0q0,0.74 -0.81,0.68q-0.8,-0.06 -1.3,0.18l0,0q0,-0.49 0.06,-0.99q0.07,-0.49 0.07,-1.11l0,0q0,-0.38 -0.25,-0.38l0,0q-0.25,0 -0.25,0.75l0,0q0,0.99 0.37,2.17q0.37,1.18 0.37,2.29l0,0q0,0.87 -0.43,1.74q-0.43,0.87 -0.43,1.73l0,0q0,0.25 0.12,0.62q0.12,0.38 0.12,0.75l0,0q0,0.99 -0.62,1.67q-0.62,0.68 -0.62,1.68l0,0q0,1.61 0.5,2.29q0.5,0.68 1.12,0.93q0.62,0.25 1.3,0.5q0.68,0.24 1.18,0.99l0,0q1.61,2.48 2.79,3.41q1.17,0.93 3.78,0.93l0,0q1.86,0 3.66,-0.13q1.79,-0.12 3.65,-0.62l0,0q1,-0.24 1.37,-1.24q0.37,-0.99 1.36,-1.73l0,0q0.5,-0.37 1.43,-1.49q0.93,-1.12 1.8,-2.23q0.86,-1.12 1.61,-1.99q0.74,-0.86 0.99,-0.86l0,0q0.5,0 0.87,0.18q0.37,0.19 0.99,0.44l0,0q0.62,-1 1.3,-1.86q0.68,-0.87 0.68,-2.11l0,0q0,-1.37 0.81,-1.99q0.81,-0.62 0.81,-1.73l0,0q0,-0.75 0.37,-1.37q0.37,-0.62 0.87,-1.24q0.49,-0.62 0.86,-1.36q0.38,-0.74 0.38,-1.74l0,0q0,-0.37 -0.07,-0.74q-0.06,-0.37 -0.06,-0.74l0,0q0,-1 0.81,-1.74q0.8,-0.74 0.8,-1.36l0,0q0,-0.75 -0.37,-1.49q-0.37,-0.75 -0.37,-1.37l0,0q0,-1.36 0.31,-2.35q0.31,-0.99 0.68,-1.92q0.37,-0.93 0.75,-1.93q0.37,-0.99 0.49,-2.1l0,0q0,-1.24 0.81,-1.8q0.8,-0.56 1.86,-0.87q1.05,-0.31 1.86,-0.62q0.8,-0.31 0.8,-0.93l0,0q0,-0.25 -1.17,-0.87q-1.18,-0.62 -2.55,-0.87l0,0l0.13,0.13q0.49,-1.49 0.62,-2.3q0.12,-0.8 0.25,-1.42q0.12,-0.62 0.31,-1.12q0.18,-0.49 0.68,-1.24l0,0q-0.37,-0.37 -0.68,-0.87q-0.31,-0.49 -0.31,-0.99l0,0q0,-0.99 0.8,-1.98q0.81,-0.99 0.81,-1.99l0,0q0,-0.49 -0.87,-1.61q-0.87,-1.11 -0.87,-2.85l0,0q0,-2.11 -0.49,-4.09l0,0q-0.38,-1.24 -1.12,-3.66q-0.74,-2.42 -1.86,-4.77q-1.12,-2.36 -2.54,-4.1q-1.43,-1.73 -3.16,-1.73l0,0q-0.38,0 -1.68,0.49q-1.3,0.5 -2.73,1.24q-1.42,0.75 -2.6,1.49q-1.18,0.75 -1.18,1.24l0,0q0,0.37 0.13,0.62l0,0q-0.62,0.62 -1.06,1.24q-0.43,0.62 -0.68,1.37l0,0q-0.87,0.12 -1.36,0.37l0,0q-1.24,0.49 -1.24,1.73l0,0q0,1 -0.5,1.62q-0.5,0.62 -1.12,1.11q-0.62,0.5 -1.11,0.75q-0.5,0.24 -0.5,0.49l0,0q0,0.5 0.5,0.99q0.49,0.5 0.49,0.87l0,0q0,0.37 -0.49,0.44q-0.5,0.06 -1.06,0.06q-0.55,0 -0.99,0.12q-0.43,0.13 -0.43,0.62l0,0q0,0.75 0.37,1.86q0.37,1.12 0.37,1.86l0,0q0,0.99 -0.62,1.24l0,0q-1.11,0.62 -1.55,1.74q-0.43,1.11 -0.62,2.17q-0.18,1.05 -0.37,1.86q-0.19,0.8 -0.93,0.8l0,0q-0.62,0 -1.24,-0.62q-0.62,-0.62 -0.99,-1.11l0,0q0.37,0.12 0.8,0.18q0.44,0.07 0.81,0.19l0,0l-0.12,0.12q0.12,-0.24 0.12,-0.86l0,0q0,-0.62 -0.06,-1.12q-0.06,-0.5 -0.06,-1.12l0,0q0,-1.61 0.12,-3.22q0.12,-1.61 0.37,-3.22l0,0l-0.12,0.12q0.49,0.12 0.93,0.12q0.43,0 0.8,0l0,0q0.38,0 0.75,-0.37l0,0q0,-0.87 -0.81,-1.05q-0.8,-0.19 -0.8,-1.18l0,0q0,-1.74 1.36,-3.97q1.36,-2.23 2.73,-3.35l0,0q0,0.13 0.12,0.25q0.13,0.13 0.13,0.25l0,0q0,0.12 -0.25,0.12l0,0q-0.37,0 -0.37,-0.12l0,0q0,-0.5 0.49,-0.5zm26.54,37.08l0,0q0.25,-0.5 0.49,-0.74l0,0q-0.49,0 -0.49,0.24l0,0q0,0.13 0.06,0.25q0.06,0.13 0.06,0.25l0,0q-0.12,0 -0.25,-0.06q-0.12,-0.06 -0.24,-0.06l0,0q-0.38,0 -0.38,0.49l0,0l0.25,0.13q0.25,-0.13 0.31,-0.25q0.06,-0.13 0.19,-0.25zm-49.97,19.96l0,0q0.49,-0.24 0.93,-0.62q0.43,-0.37 0.43,-0.99l0,0q0,-0.62 -0.5,-1.11l0,0q-0.24,0.24 -0.37,0.37q-0.12,0.12 -0.12,0.49l0,0q0,0.25 0.06,0.56q0.06,0.31 0.06,0.56l0,0q0,0.5 -0.37,0.93q-0.37,0.43 -0.37,0.81l0,0q0,0.24 0.25,0.24l0,0q0.49,0 0.49,-0.24l0,0q-0.37,-0.5 -0.49,-1zm10.54,-21.7l0,0q0,-0.12 0.06,-0.24q0.06,-0.13 0.06,-0.25l0,0q0,-0.13 -0.25,-0.62l0,0l-0.25,0.25l0.38,0.74q-0.13,0.37 -0.25,0.68q-0.13,0.31 -0.25,0.56l0,0q0,0.62 0.87,0.62l0,0q0.25,0 0.37,-0.31q0.12,-0.31 0.12,-0.43l0,0q0,-0.75 -0.86,-1zm35.83,7.69l0,0q0,1.12 -0.12,1.61q-0.13,0.5 -1.24,2.36l0,0q0,0.5 0.49,0.5l0,0q0.38,0 0.87,-0.62q0.5,-0.62 0.87,-1.43q0.37,-0.81 0.62,-1.61q0.25,-0.81 0.25,-1.3l0,0q0,-0.38 -0.25,-0.75q-0.25,-0.37 -0.5,-0.37l0,0q-0.37,0.12 -0.74,0.37q-0.37,0.25 -0.37,0.5l0,0q0,0.25 0.06,0.37q0.06,0.12 0.06,0.37zm-40.05,8.43l0,0q0.25,-0.74 0.37,-1.17q0.13,-0.44 0.13,-0.93l0,0q0,-0.75 -0.31,-1.68q-0.31,-0.93 -0.93,-2.66l0,0q-0.5,0.37 -0.5,1.61l0,0q0.62,1.73 0.68,3.04q0.06,1.3 0.56,1.79zm-1.61,1.24l0,0q0.12,-0.24 0.25,-0.49q0.12,-0.25 0.12,-0.5l0,0q0,-0.37 -0.37,-0.37l0,0q-0.13,0.12 -0.13,0.25l0,0q-0.12,0.12 -0.12,0.37l0,0q0,0.25 0.25,0.74zm-1.61,-8.18l0,0q-0.25,-0.25 -0.25,-0.37l0,0q-0.25,0.49 -0.25,0.62l0,0q0,0.12 0.06,0.18q0.06,0.07 0.06,0.19l0,0q0.25,-0.5 0.38,-0.62zm46.12,-12.65l0,0q-0.24,-0.12 -0.31,-0.25q-0.06,-0.12 -0.31,-0.12l0,0q-0.37,0 -0.37,0.25l0,0q0.13,0.25 0.19,0.31q0.06,0.06 0.18,0.31l0,0q0.38,-0.37 0.62,-0.5zm3.23,-35.83l0,0q0,-0.5 -0.13,-0.5l0,0q-0.12,0 -0.24,0.12l0,0q-0.13,0.13 -0.13,0.25l0,0l0.25,0.25q0,0 0.25,-0.12zm3.35,15.25l0,0q-0.25,0.25 -0.25,0.37l0,0l0.37,0.74q0.25,-0.24 0.25,-0.37l0,0q0,-0.25 0,-0.49q0,-0.25 -0.37,-0.25zm-51.96,26.41l-0.37,0.74q0.12,0 0.18,0.13q0.07,0.12 0.19,0.12l0,0q0.25,-0.25 0.25,-0.49l0,0q0,-0.25 -0.25,-0.5l0,0zm46.5,3.6l0,0.62l0.25,-0.25q0,-0.13 -0.25,-0.37l0,0zm-22.94,32.61l0.12,-0.13q0,0 -0.12,-0.24l0,0l0,-0.13q-0.5,0 -0.5,0.37l0,0q0,0.25 0.38,0.25l0,0q0,0 0.12,-0.12l0,0zm-17.98,-28.4l0.25,-0.25q0,-0.49 -0.37,-0.74l0,0l-0.25,0.25l0.37,0.74zm-12.03,1.61l0,0q-0.37,0 -0.37,0.13l0,0l0.25,0.25q0,-0.13 0.06,-0.19q0.06,-0.06 0.06,-0.19zm13.02,-18.1l0,0.12l0,-0.12zm5.09,-15.62l-0.13,0.12q0,-0.12 0.13,-0.12l0,0zm30.62,41.16l0,0q0,0.75 -0.37,0.75l0,0q-0.12,0 -0.12,-0.13l0,0q0,-0.12 -0.13,-0.24l0,0q0,-0.38 0.62,-0.38zm-2.23,1.24l0.25,0.25q-0.25,0.25 -0.37,0.25l0,0q-0.25,0 -0.25,-0.25l0,0q0,-0.25 0.37,-0.25l0,0zm-25.54,-46l0.12,-0.12q-0.25,0.12 -0.49,0.12l0,0q-0.38,0 -0.38,-0.37l0,0q0,0 0.25,-0.13l0,0q0.13,0.13 0.19,0.25q0.06,0.13 0.31,0.25l0,0zm-0.37,9.42l0.12,-0.12l-0.12,0.12zm30.13,7.57l-0.13,-0.13q0,0.25 -0.24,0.75l0,0q-0.25,-0.5 -0.25,-0.5l0,0q0,-0.25 0.25,-0.25l0,0q0.24,0 0.37,0.13l0,0zm23.56,6.82l0,0q0.99,-1.12 1.8,-2.36q0.8,-1.24 1.3,-2.73l0,0q0.37,-1.24 1.3,-2.17q0.93,-0.93 1.92,-1.73q0.99,-0.81 1.8,-1.61q0.81,-0.81 1.18,-1.8l0,0q1.36,-1.37 2.73,-2.98q1.36,-1.61 3.47,-2.48l0,0q1.24,-0.49 2.11,-1.49q0.86,-0.99 2.35,-0.99l0,0q2.36,0 5.33,0.87q2.98,0.87 5.58,2.36q2.61,1.48 4.34,3.59q1.74,2.11 1.74,4.59l0,0q0,0.25 -0.06,0.62q-0.06,0.37 -0.06,0.62l0,0q0,0.62 0.06,1.18q0.06,0.56 0.06,1.18l0,0q0,2.35 -1.74,3.59l0,0q-0.99,0.5 -1.48,1.68q-0.5,1.17 -1.24,2.04l0,0q-0.62,0.62 -1.24,1.24q-0.62,0.62 -1.12,1.61l0,0q-0.5,1 -1.98,2.55q-1.49,1.55 -3.6,2.97q-2.11,1.43 -4.65,2.48q-2.54,1.06 -5.15,1.06l0,0q-1.36,0 -2.6,-0.25q-1.24,-0.25 -2.6,-0.25l0,0q-1.74,0 -2.11,1.98q-0.37,1.99 -0.37,3.48l0,0q0,2.1 0.12,4.83q0.12,2.73 0.62,5.21q0.5,2.48 1.43,4.22q0.93,1.73 2.66,1.73l0,0q1.37,0 2.92,-0.87q1.55,-0.86 2.54,-1.73l0,0q5.08,-4.09 9.98,-8.06q4.9,-3.97 9.73,-8.31l0,0q0.5,-0.5 1.68,-1.67q1.18,-1.18 2.6,-2.42q1.43,-1.24 3.04,-2.17q1.61,-0.93 3.1,-0.93l0,0q0.62,0 1.3,0.31q0.68,0.31 0.68,1.05l0,0q0,0.62 -0.62,1.18q-0.62,0.56 -1.42,1.05q-0.81,0.5 -1.61,0.93q-0.81,0.44 -1.31,0.81l0,0q-1.98,1.61 -3.34,2.98l0,0q-1.37,1.24 -2.36,2.29q-0.99,1.05 -0.99,1.55l0,0q0,0.74 -0.5,1.86q-0.49,1.12 -1.49,1.12l0,0q-1.36,0.62 -2.35,1.86q-0.99,1.24 -1.86,2.54q-0.87,1.3 -1.68,2.35q-0.8,1.06 -1.55,1.31l0,0q-0.74,0.24 -2.48,1.98q-1.73,1.74 -3.65,3.72q-1.93,1.98 -3.66,3.53q-1.74,1.55 -2.48,1.55l0,0q-0.75,0 -1.24,-0.37l0,0q-0.62,0.37 -1.18,0.75q-0.56,0.37 -1.18,0.74l0,0q-3.59,-0.37 -6.2,-0.87q-2.6,-0.49 -4.59,-3.35l0,0q-0.49,-1.11 -1.11,-1.48l0,0q-0.75,-0.38 -1.43,-1.31q-0.68,-0.93 -1.18,-1.86q-0.49,-0.93 -0.74,-1.73q-0.25,-0.81 -0.25,-0.93l0,0q0,-0.37 0.13,-0.81q0.12,-0.43 0.12,-0.93l0,0q0,-0.87 -0.68,-1.61q-0.68,-0.74 -0.68,-1.49l0,0q0,-0.25 0.18,-0.62q0.19,-0.37 0.19,-0.74l0,0q0,-0.62 -0.25,-1.18q-0.25,-0.56 -0.25,-1.18l0,0q0,-0.49 0.31,-0.99q0.31,-0.5 0.31,-0.99l0,0q0,-0.62 -0.43,-1.37q-0.44,-0.74 -0.44,-1.48l0,0q0,-0.87 0,-2.3q0,-1.42 0.13,-2.91q0.12,-1.49 0.43,-2.85q0.31,-1.37 0.93,-2.11l0,0q1.24,-1.61 1.49,-4.16q0.25,-2.54 1.61,-4.52l0,0q-0.49,0.74 -0.49,1.36l0,0q0,0.37 0.24,0.62l0,0q0.13,-0.12 0.25,-0.12q0.13,0 0.13,-0.37l0,0q0,-0.5 -0.25,-1.49zm11.78,6.2l0,0q1.61,-0.25 4.21,-1.06q2.61,-0.8 5.03,-2.23q2.41,-1.42 4.15,-3.59q1.74,-2.17 1.74,-5.15l0,0q0,-1.61 -0.56,-3.6q-0.56,-1.98 -2.42,-1.98l0,0q-3.1,0 -5.77,2.11q-2.66,2.11 -4.65,4.9q-1.98,2.79 -3.16,5.51q-1.18,2.73 -1.18,3.97l0,0q0,0.62 0.56,0.75q0.56,0.12 2.05,0.37zm48.98,51.21l0,0q-0.75,1.49 -2.17,1.98q-1.43,0.5 -2.05,0.5l0,0q-0.25,0 -1.42,-0.12q-1.18,-0.13 -1.8,-0.75l0,0q-4.59,-1.36 -6.08,-4.46q-1.49,-3.1 -1.49,-7.44l0,0q0,-4.84 0.62,-9.67q0.62,-4.84 0.62,-9.55l0,0q0,-1.12 -0.06,-2.23q-0.06,-1.12 -0.06,-2.24l0,0q0,-1.36 0.06,-2.72q0.06,-1.37 0.68,-2.73l0,0q0.25,-0.5 0.25,-0.99l0,0q0,-0.5 -0.12,-0.87q-0.13,-0.37 -0.13,-0.75l0,0q0,-4.58 1.18,-9.05q1.18,-4.46 1.18,-8.43l0,0q-0.12,-0.37 -0.12,-1.12l0,0q0,-1.73 0.62,-3.72q0.62,-1.98 0.62,-4.09l0,0q0,-1.73 0.68,-3.47q0.68,-1.74 0.68,-3.47l0,0q0.37,-6.7 2.36,-14.08q1.98,-7.37 3.72,-14.44l0,0q0.37,-1.61 1.11,-3.66q0.75,-2.05 1.49,-4.22q0.74,-2.17 1.24,-4.21q0.5,-2.05 0.5,-3.78l0,0q0,-1 0.12,-2.42q0.12,-1.43 1.74,-1.43l0,0q3.84,0 5.7,1.12q1.86,1.11 1.86,4.34l0,0q0,0.25 -0.06,0.49q-0.06,0.25 -0.06,0.5l0,0q-0.87,4.22 -1.93,8.18q-1.05,3.97 -2.29,8.06l0,0q-0.12,1.12 -0.68,2.55q-0.56,1.42 -1.12,2.97q-0.56,1.55 -1.05,3.04q-0.5,1.49 -0.5,2.48l0,0q0,0.5 0.13,0.93q0.12,0.43 0.12,0.93l0,0q0,0.99 -0.43,2.17q-0.44,1.18 -1,2.48q-0.55,1.3 -0.99,2.6q-0.43,1.31 -0.43,2.42l0,0q0,0.87 0.25,1.74q0.24,0.87 0.24,1.73l0,0q0,0.87 -0.55,1.62q-0.56,0.74 -0.56,1.61l0,0q0,0.49 0.12,0.74l0,0q0,1.12 -0.87,3.29q-0.86,2.17 -0.86,5.64l0,0q0,1.74 0.99,1.86l0,0q0.87,0 1.61,-0.5q0.74,-0.49 1.43,-1.17q0.68,-0.69 1.36,-1.37q0.68,-0.68 1.43,-1.05l0,0q0.49,-0.25 1.3,-1.61q0.8,-1.37 2.04,-2.11l0,0q1.74,-1.12 3.17,-2.17q1.42,-1.06 3.03,-1.92q1.62,-0.87 3.66,-1.43q2.05,-0.56 5.15,-0.56l0,0q1.24,0 3.1,0.56q1.86,0.56 3.47,1.92q1.61,1.37 2.79,3.54q1.18,2.17 1.18,5.27l0,0q0,1.98 -0.37,4.4q-0.38,2.42 -0.38,3.78l0,0q0.25,1.24 0.25,1.74l0,0q0,1.11 -0.12,2.41q-0.13,1.31 -0.37,2.55q-0.25,1.24 -0.56,2.23q-0.31,0.99 -0.81,1.36l0,0q-0.74,0.87 -0.93,2.17q-0.18,1.3 -0.37,2.73q-0.19,1.43 -0.5,2.67q-0.31,1.24 -1.05,1.98l0,0q-0.62,0.62 -0.93,1.36q-0.31,0.75 -0.56,1.62q-0.25,0.86 -0.62,1.86q-0.37,0.99 -1.11,2.1l0,0q-1.12,2.73 -3.23,5.15q-2.11,2.42 -4.77,4.28q-2.67,1.86 -5.58,2.91q-2.92,1.06 -5.77,1.06l0,0q-1.73,0 -3.35,-0.25q-1.61,-0.25 -3.34,-0.25l0,0q-1,0 -1.12,1.24q-0.12,1.24 -0.12,2.23l0,0q0,0.99 0.06,1.99q0.06,0.99 0.18,1.98l0,0q0,1.24 0.62,2.29q0.62,1.06 0.62,2.17l0,0q0,0.62 -0.18,1.68q-0.19,1.05 -0.31,1.3zm1.36,-47.86l0,0q-0.37,1.98 -0.43,3.53q-0.06,1.55 -1.8,2.79l0,0q-0.62,0.25 -0.62,1.98q0,1.74 -0.12,2.86l0,0q0.62,1.24 0.62,2.97l0,0q0,1.12 -0.31,2.3q-0.31,1.17 -0.31,2.29l0,0q0,0.5 0.24,0.99l0,0q0.5,1.37 0.56,2.54q0.06,1.18 0.37,2.05q0.31,0.87 1.24,1.43q0.93,0.55 3.29,0.55l0,0q2.6,0 5.64,-0.93q3.04,-0.93 5.83,-2.72q2.79,-1.8 4.96,-4.41q2.17,-2.6 2.91,-5.82l0,0q0,-1.12 0.62,-2.05q0.62,-0.93 0.62,-2.05l0,0q0,-0.86 -0.12,-1.86q-0.12,-0.99 -0.12,-1.98l0,0q0,-1.74 1.05,-3.16q1.05,-1.43 1.05,-2.42l0,0q0,-0.74 -0.31,-1.55q-0.31,-0.81 -0.31,-1.67l0,0q0,-1 0.13,-1.93q0.12,-0.93 0.12,-1.92l0,0q0,-1.36 -0.18,-3.28q-0.19,-1.93 -0.69,-3.72q-0.49,-1.8 -1.24,-3.04q-0.74,-1.24 -1.86,-1.24l0,0q-0.62,0 -1.3,0.37q-0.68,0.37 -1.3,0.37l0,0q-1.24,0 -1.98,0.44q-0.75,0.43 -1.31,1.05q-0.55,0.62 -1.11,1.18q-0.56,0.56 -1.3,0.68l0,0q-0.5,0.25 -1.06,1.18q-0.56,0.93 -1.24,2.17q-0.68,1.24 -1.61,2.54q-0.93,1.3 -2.17,2.05l0,0q0,0.12 -0.62,1.05q-0.62,0.93 -1.61,2.11q-0.99,1.18 -2.11,2.35q-1.12,1.18 -2.11,1.93zm42.04,18.22l0,-3.72q1.73,-0.37 1.86,-1.86l0,0q0,-3.1 0.99,-6.13q0.99,-3.04 2.11,-5.89l0,0q1.11,-2.86 2.29,-6.14q1.18,-3.29 4.4,-8l0,0q1.24,-1.86 2.36,-3.84q1.12,-1.99 2.48,-3.6q1.36,-1.61 3.41,-2.67q2.05,-1.05 5.27,-1.05l0,0q4.34,0 6.82,1.74q2.48,1.73 4.59,4.58l0,0q1.24,-0.62 2.29,-1.61q1.06,-0.99 2.11,-1.98q1.05,-0.99 2.17,-1.92q1.12,-0.93 2.6,-1.55l0,0q1.62,-0.62 2.86,-1.8q1.24,-1.18 3.59,-1.18l0,0q0.99,0 2.17,0.31q1.18,0.31 2.17,1.12q0.99,0.8 1.61,2.17q0.62,1.36 0.62,3.59l0,0q0,2.98 -0.55,6.26q-0.56,3.29 -1.24,6.7q-0.69,3.41 -1.24,6.88q-0.56,3.47 -0.56,6.95l0,0q0,1.36 -0.99,3.22q-1,1.86 -1,3.84l0,0q0,4.34 -0.62,8.87q-0.62,4.53 -0.62,8.87l0,0q0,1.48 0.07,2.91q0.06,1.43 0.06,2.79l0,0q0,0.62 -0.06,1.3q-0.07,0.68 -0.07,1.3l0,0q0,1.49 1,2.48l0,0q-0.25,1 -0.25,1.62l0,0q0,0.24 0.25,0.99q0.24,0.74 0.49,1.61q0.25,0.87 0.56,1.55q0.31,0.68 0.43,0.68l0,0q0.75,0 1.55,-1.49q0.81,-1.48 1.49,-3.47q0.68,-1.98 1.18,-4.03q0.5,-2.04 0.5,-3.04l0,0q0.99,-3.59 1.98,-7q0.99,-3.41 2.23,-6.76l0,0q0.13,-0.99 0.81,-1.36q0.68,-0.38 0.93,-1.62l0,0q0.49,-1.73 0.68,-3.22q0.19,-1.49 0.5,-2.85q0.31,-1.37 0.93,-2.54q0.62,-1.18 1.98,-2.42l0,0q0.37,-0.25 0.56,-0.75q0.18,-0.49 0.31,-0.86l0,0q0.37,-1.24 1.11,-2.55q0.75,-1.3 1.74,-2.35q0.99,-1.06 2.11,-1.74q1.11,-0.68 2.11,-0.68l0,0q0.62,0 1.67,0.43q1.05,0.44 1.05,1.43l0,0q0,0.37 -0.24,0.62l0,0q-0.38,0.5 -1.55,2.11q-1.18,1.61 -2.48,3.53q-1.31,1.92 -2.36,3.97q-1.05,2.05 -1.05,3.53l0,0q-0.38,2.86 -1.55,5.4q-1.18,2.54 -1.8,5.27l0,0q-0.62,2.6 -1.24,5.7q-0.62,3.1 -1.86,5.46l0,0q-0.62,0.99 -0.5,2.29q0.13,1.3 -0.87,2.54l0,0q-0.74,1.37 -0.86,4.03q-0.13,2.67 -0.13,4.65l0,0q-0.25,1.99 -1.3,3.29q-1.05,1.3 -1.67,2.79l0,0q-0.75,1.74 -2.61,1.98q-1.86,0.25 -3.22,0.25l0,0q-2.36,0 -3.72,-1.24q-1.37,-1.24 -2.98,-2.73l0,0q-0.99,-0.86 -0.93,-1.79q0.06,-0.93 -0.43,-1.18l0,0q-1.37,-1.24 -1.49,-2.79q-0.12,-1.55 -0.25,-3.16l0,0q0,-1 0.06,-1.86q0.07,-0.87 0.07,-1.86l0,0q0,-1.62 -0.93,-2.36q-0.93,-0.74 -0.93,-2.11l0,0q0,-7.31 0.62,-15.93q0.62,-8.62 1.11,-16.56l0,0q0.13,-1.86 1.06,-3.47q0.93,-1.61 0.93,-2.6l0,0q-0.13,-0.5 -0.13,-0.99q0,-0.5 0,-1l0,0q0,-3.22 0.13,-4.77q0.12,-1.55 0.37,-2.29q0.25,-0.75 0.56,-1.12q0.31,-0.37 0.8,-1.24l0,0q0,-1.12 -0.31,-2.11q-0.31,-0.99 -0.43,-1.98l0,0q-0.87,0.25 -1.55,0.37q-0.68,0.12 -1.43,0.25l0,0q-0.74,0.12 -0.99,0.68q-0.25,0.56 -0.43,1.18q-0.19,0.62 -0.62,1.11q-0.44,0.5 -1.55,0.5l0,0q-0.62,1.49 -1.12,2.42q-0.5,0.93 -1.74,1.55l0,0q-0.12,0 -0.86,0.62q-0.75,0.62 -1.62,1.49q-0.86,0.86 -1.61,1.73q-0.74,0.87 -0.87,1.24l0,0q-0.24,1.12 -0.37,2.11q-0.12,0.99 -0.43,1.74q-0.31,0.74 -0.87,1.24q-0.56,0.49 -1.67,0.86l0,0q-0.38,0.13 -1.24,1.74q-0.87,1.61 -1.99,3.91q-1.11,2.29 -2.35,4.83q-1.24,2.54 -2.11,4.53l0,0q-2.36,4.21 -3.66,6.51q-1.3,2.29 -2.36,3.41q-1.05,1.11 -2.29,1.3q-1.24,0.19 -3.47,0.19l0,0q-3.1,0 -5.89,-1.99q-2.79,-1.98 -2.79,-5.95l0,0q-0.25,-0.62 -0.19,-1.36q0.06,-0.75 -1.67,-1l0,0zm33.73,-34.1l0,0q-0.62,-0.24 -1.55,-0.49q-0.93,-0.25 -1.55,-0.25l0,0q-1.37,0 -2.61,0.74l0,0q-2.97,1.99 -5.45,5.09q-2.48,3.1 -4.53,6.69q-2.05,3.6 -3.41,7.51q-1.36,3.9 -2.11,7.37l0,0q0,0.87 0.75,0.87l0,0q0.12,0 1.3,-1.42q1.18,-1.43 2.6,-3.29q1.43,-1.86 2.79,-3.78q1.37,-1.92 1.99,-3.04l0,0q0.62,-0.99 1.42,-2.05q0.81,-1.05 1.8,-1.92l0,0q1.98,-1.61 3.35,-3.72q1.36,-2.11 3.47,-3.72l0,0q0.37,-0.74 0.87,-1.36l0,0q0.37,-0.62 0.68,-1.24q0.31,-0.62 0.31,-1.12l0,0q0,-0.25 -0.06,-0.43q-0.06,-0.19 -0.06,-0.44zm49.84,15.01l0,0q-0.12,-1.61 -0.74,-1.61l0,0q-0.25,0 -0.5,0.06q-0.24,0.06 -0.62,0.06l0,0q-0.37,0 -0.74,-0.74q-0.37,-0.75 -0.62,-1.74q-0.25,-0.99 -0.37,-1.98q-0.13,-1 -0.13,-1.62l0,0q0.13,0 0.25,-0.12l0,0q0,0.12 -0.12,0.25l0,0q0,0 0.12,-0.25l0,0q-0.87,0.87 -1.36,1.43q-0.5,0.55 -0.5,1.3l0,0q0,0.74 0.87,1.8q0.87,1.05 0.87,1.92l0,0q0,0.37 -0.93,1.42q-0.93,1.06 -0.93,2.79l0,0q0,0.62 0.06,1.31q0.06,0.68 0.06,1.3l0,0q0,0.87 -0.18,1.55q-0.19,0.68 -0.93,1.05l0,0l0,0.13q0,-0.75 -0.31,-1q-0.31,-0.24 -0.75,-0.37q-0.43,-0.12 -0.74,-0.25q-0.31,-0.12 -0.31,-0.49l0,0q0,-0.62 0.87,-0.93q0.86,-0.31 0.86,-1.06l0,0q0,-0.62 -0.62,-1.11q-0.62,-0.5 -0.62,-0.87l0,0q0,-0.25 0.07,-0.5q0.06,-0.24 0.06,-0.49l0,0q0,-0.99 -0.19,-1.86q-0.18,-0.87 -0.18,-1.86l0,0q0,-0.62 0.18,-1.37q0.19,-0.74 0.19,-1.48l0,0q0,-0.5 -0.06,-1.06q-0.07,-0.56 -0.07,-1.18l0,0q0,-1.73 0.31,-3.53q0.31,-1.8 1.31,-3.53l0,0q0.24,-0.5 0.24,-1l0,0q0,-0.62 -0.37,-1.05q-0.37,-0.43 -0.37,-1.05l0,0q0,-0.38 0.06,-0.75q0.06,-0.37 0.06,-0.74l0,0q0,-1.37 -1.48,-1.37l0,0q-0.62,0 -0.81,0.25q-0.19,0.25 -0.43,0.5l0,0q-1.37,0 -2.36,0.56q-0.99,0.55 -2.05,1.24q-1.05,0.68 -2.54,1.24q-1.49,0.55 -3.84,0.55l0,0q-0.5,0 -1.86,-0.24q-1.37,-0.25 -2.73,-0.81q-1.36,-0.56 -2.48,-1.49q-1.12,-0.93 -1.12,-2.29l0,0q0,-0.5 0.56,-0.81q0.56,-0.31 1.37,-0.43q0.8,-0.13 1.61,-0.19q0.8,-0.06 1.42,-0.18l0,0q1.99,-0.38 3.85,-1.55q1.86,-1.18 2.85,-1.18l0,0q0.12,0 0.87,-0.56q0.74,-0.56 1.86,-1.3q1.11,-0.75 2.66,-1.43q1.55,-0.68 3.41,-0.93l0,0q1.24,-0.25 1.93,-1.73q0.68,-1.49 1.05,-3.54q0.37,-2.04 0.5,-4.28q0.12,-2.23 0.12,-3.96l0,0q0,-0.87 -0.06,-1.68q-0.06,-0.8 -0.19,-1.67l0,0q1.12,-2.11 2.23,-3.41q1.12,-1.3 3.6,-1.3l0,0q3.1,0 4.09,2.1q0.99,2.11 0.99,6.08l0,0q0,1.36 -0.18,2.48q-0.19,1.12 -0.81,1.49l0,0q0.13,-0.13 0.37,-0.13l0,0q0,0 -0.12,0.25l0,0q0,-0.12 -0.06,-0.18q-0.06,-0.07 -0.06,-0.19l0,0q0.86,0.62 0.99,1.55q0.12,0.93 1.11,1.3l0,0q1.49,-0.62 4.53,-1.86q3.04,-1.24 5.89,-1.24l0,0q0.62,0 1.36,-0.49q0.75,-0.5 1.49,-1.06q0.75,-0.56 1.43,-1.05q0.68,-0.5 1.3,-0.5l0,0q0.62,0 1.05,0.81q0.44,0.8 1.06,0.8l0,0q0.37,0 0.62,-0.37q0.25,-0.37 0.43,-0.74q0.19,-0.37 0.56,-0.75q0.37,-0.37 0.99,-0.37l0,0q1.86,0 2.61,0.75q0.74,0.74 0.99,1.67q0.25,0.93 0.31,1.67q0.06,0.75 0.56,0.75l0,0q0.24,0 0.49,-0.37l0,0q0.37,0.74 0.37,1.24l0,0q0,0.37 -0.37,0.86q-0.37,0.5 -0.87,1q-0.49,0.49 -0.99,0.86q-0.49,0.38 -0.62,0.38l0,0q-0.25,0 -0.99,-0.38q-0.74,-0.37 -1.24,-0.37l0,0q-0.37,0 -0.93,0.44q-0.56,0.43 -1.18,0.43l0,0q-0.25,0 -0.62,-0.06q-0.37,-0.06 -0.62,-0.06l0,0q-0.87,0 -1.36,0.37l0,0q-2.98,1.86 -5.4,2.29q-2.41,0.44 -5.51,1.06l0,0q0,0 -1.24,0.68q-1.24,0.68 -2.92,1.61q-1.67,0.93 -3.1,1.98q-1.42,1.06 -1.8,1.8l0,0q0.13,0.25 0.13,0.87l0,0q0,0.62 -0.31,1.3q-0.31,0.68 -0.31,1.3l0,0q0,0.38 0.12,0.5l0,0q-0.25,2.36 -0.49,4.59q-0.25,2.23 -0.5,4.59l0,0q0,1.36 -0.81,2.54q-0.8,1.18 -0.8,2.54l0,0q0,2.23 -0.19,3.35q-0.18,1.11 -0.56,3.1zm-2.97,-10.79l0,0q0,-0.12 0.06,-0.19q0.06,-0.06 0.06,-0.18l0,0q0,-0.13 -0.25,-0.13l0,0q-0.12,0 -0.12,0.38l0,0q0,0 0.25,0.12zm0.62,-5.46l0,0q0,0 -0.13,0.25l0,0q0,0.37 0.25,0.37l0,0l0.25,-0.24q0,-0.38 -0.37,-0.38zm0,22.45l-0.13,0.12q0.25,0.25 0.62,0.25l0,0q0.5,0 0.87,-0.12q0.37,-0.13 0.87,-0.13l0,0q-0.37,1.24 -0.87,2.17q-0.49,0.93 -0.49,2.05l0,0q0,0.49 0.12,0.99q0.12,0.5 0.12,0.99l0,0q0,4.34 -0.55,8.31q-0.56,3.97 -0.56,8.06l0,0q0,0.99 0.68,1.61q0.68,0.62 0.68,1.61l0,0q0,0.62 -0.74,1.12q-0.75,0.5 -0.75,1.49l0,0q0,0.25 0.13,0.87q0.12,0.62 0.49,0.86l0,0q1,0.62 1.06,1.74q0.06,1.12 0.06,2.36q0,1.24 0.31,2.1q0.31,0.87 1.8,0.87l0,0q0.74,0 1.8,-1.18q1.05,-1.17 2.23,-2.85q1.18,-1.67 2.23,-3.47q1.05,-1.8 1.8,-3.16l0,0q2.11,-3.97 4.65,-7.44q2.54,-3.47 5.14,-7.19l0,0q0.25,0.74 0.38,1.17q0.12,0.44 0.12,0.81l0,0q0,0.62 -0.37,1.18q-0.37,0.56 -1.37,1.55l0,0q-0.37,2.23 -0.37,4.46l0,0q0,2.11 0.37,4.22q0.38,2.11 0.38,3.97l0,0q0,1.48 -0.44,2.35q-0.43,0.87 -0.99,1.37q-0.56,0.49 -1.12,0.99q-0.55,0.49 -0.68,1.24l0,0q-0.12,0.74 -0.06,1.98q0.06,1.24 -0.43,1.24l0,0q-0.25,0 -0.5,-0.18q-0.25,-0.19 -0.37,-0.19l0,0q-1.49,0 -1.86,0.25q-0.37,0.25 -0.62,1.61l0,0q0,0.99 -0.81,1.24q-0.8,0.25 -1.05,1.24l0,0q0,0.25 -0.62,0.87q-0.62,0.62 -1.3,1.24q-0.69,0.62 -1.31,1.18q-0.62,0.55 -0.74,0.55l0,0q-0.25,0 -0.37,-0.06q-0.13,-0.06 -0.37,-0.06l0,0q-0.25,0 -0.69,0.12q-0.43,0.13 -0.43,0.38l0,0q-0.25,0.74 -0.93,1.17q-0.68,0.44 -1.43,0.69q-0.74,0.24 -1.42,0.37q-0.68,0.12 -1.06,0.12l0,0q-2.48,0 -4.34,-1.67q-1.86,-1.68 -1.86,-2.79l0,0q0,-0.5 0.13,-0.87l0,0q0,-0.99 -0.44,-1.98q-0.43,-1 -0.99,-2.05q-0.56,-1.05 -0.99,-1.98q-0.43,-0.93 -0.43,-1.68l0,0q0,-0.25 0.06,-0.62q0.06,-0.37 0.06,-0.62l0,0q0,-0.12 -0.25,-0.8q-0.25,-0.69 -0.49,-1.55q-0.25,-0.87 -0.5,-1.68q-0.25,-0.8 -0.25,-1.42l0,0q0,-0.13 0.44,-0.93q0.43,-0.81 0.93,-1.8q0.49,-0.99 0.93,-2.11q0.43,-1.12 0.43,-1.98l0,0q0,-0.38 -0.06,-0.75q-0.06,-0.37 -0.06,-0.74l0,0q0,-1.37 0.8,-2.42q0.81,-1.05 0.81,-2.05l0,0q-0.25,-0.24 -0.37,-0.55q-0.13,-0.31 -0.5,-0.31l0,0q-0.37,0 -0.68,0.62q-0.31,0.62 -0.62,1.3q-0.31,0.68 -0.62,1.3q-0.31,0.62 -0.68,0.62l0,0q-0.25,0 -0.56,-0.25q-0.31,-0.25 -0.31,-0.49l0,0q0.37,-0.62 0.56,-1.62q0.18,-0.99 0.37,-1.92q0.18,-0.93 0.43,-1.61q0.25,-0.68 0.75,-0.68l0,0q0.37,0 0.74,0.43q0.37,0.44 0.99,0.44l0,0q0.37,0 0.99,-0.56q0.62,-0.56 0.62,-1.43l0,0q0,-0.62 -1.24,-1.11l0,0l-0.12,0q0.87,-1.24 0.87,-2.73l0,0q0,-0.37 -0.06,-0.68q-0.07,-0.31 -0.07,-0.69l0,0q0,-0.37 0.07,-0.74q0.06,-0.37 0.55,-0.62l0,0q0.25,0 0.38,0.81q0.12,0.8 0.12,2.17l0,0q0,0.74 -0.06,1.55q-0.06,0.8 -0.06,1.79l0,0q0,2.36 0.31,4.28q0.31,1.92 1.3,1.92l0,0q0.25,0 0.49,-0.62q0.25,-0.62 0.25,-0.99l0,0q0,-0.25 -0.06,-0.43q-0.06,-0.19 -0.06,-0.44l0,0q0,-0.99 0.43,-1.73q0.44,-0.75 0.44,-1.61l0,0q0,-1 -0.62,-1.8q-0.62,-0.81 -0.62,-1.43l0,0q0,-0.37 0.74,-1.55q0.74,-1.18 0.74,-2.42l0,0q0,-0.37 -0.12,-0.74q-0.12,-0.37 -0.12,-0.74l0,0q0,-0.87 0.18,-1.68q0.19,-0.8 0.19,-1.67l0,0zm-2.98,22.81l-0.37,2.24q0,0.37 0.25,0.37l0,0q1.11,0 1.55,-1.18q0.43,-1.18 0.43,-1.92l0,0q0,-0.5 -0.18,-1.49q-0.19,-0.99 -0.56,-0.99l0,0q-0.99,0.49 -0.99,1.3q0,0.81 -0.13,1.67l0,0zm18.23,13.15l0,0q0.62,0 0.74,-0.06q0.13,-0.07 0.13,-0.81l0,0q0,-0.99 -1.12,-0.99l0,0q-0.62,0 -0.99,0.87l0,0q0,0.74 0.43,0.74q0.44,0 0.81,0.25zm1.12,-5.09l0,0q-0.25,-0.24 -0.56,-0.55q-0.31,-0.31 -0.56,-0.31l0,0q-0.62,0 -0.62,0.86l0,0q0,0.25 0.74,0.75l0,0q0.5,0 1,-0.75zm2.85,-7.19l0,0q0,-0.87 -0.25,-0.87l0,0q-0.37,0 -0.37,0.38l0,0q0,0.62 0.37,0.62l0,0q0.12,0 0.12,-0.07q0,-0.06 0.13,-0.06zm-6.57,14.88l0,0q0,-0.12 -0.25,-0.37l0,0q-0.13,0 -0.37,0.25l0,0q0,0.25 0,0.49q0,0.25 0.24,0.25l0,0q0.38,0 0.38,-0.62zm3.47,-13.27l-0.37,0.75q0.24,0.25 0.24,0.25l0,0q0.13,-0.25 0.19,-0.31q0.06,-0.07 0.19,-0.31l0,0q0,-0.13 -0.13,-0.19q-0.12,-0.06 -0.12,-0.19l0,0zm-13.77,-31.49l-0.12,-0.13q0.62,1.24 0.62,1.99l0,0q0,0.87 -0.5,1.42q-0.49,0.56 -1.05,1q-0.56,0.43 -0.99,0.93q-0.44,0.49 -0.44,1.11l0,0l0.13,-0.12q-0.37,0.25 -0.75,0.56q-0.37,0.31 -0.62,0.31l0,0q-0.74,0 -0.74,-0.62l0,0q0,-1.12 0,-2.24q0,-1.11 0.5,-2.1l0,0q0.24,0.37 0.55,0.55q0.31,0.19 0.56,0.44l0,0q0.37,-2.11 0.99,-2.42q0.62,-0.31 1.86,-0.68l0,0zm24.8,8.06l0,0q0.75,-0.5 1.18,-1.3q0.44,-0.81 0.93,-1.62q0.5,-0.8 0.99,-1.36q0.5,-0.56 1.49,-0.56l0,0q0.5,0 0.5,0.37l0,0q0,1.49 -0.81,3.54q-0.8,2.04 -2.17,2.04l0,0q-0.62,0 -1.11,-0.43q-0.5,-0.43 -1,-0.68zm27.53,-24.8l0,0q-0.37,0 -0.74,-0.19q-0.37,-0.18 -0.37,-0.8l0,0q0,-1.37 1.17,-2.17q1.18,-0.81 2.55,-0.93l0,0q0.12,0 0.37,0.12q0.25,0.12 0.25,0.37l0,0q0,2.11 -0.62,2.54q-0.62,0.44 -2.61,1.06zm-16.99,14.63l0,0q-0.49,-0.5 -0.49,-1.24l0,0q0,-0.37 0.37,-0.99q0.37,-0.62 0.99,-0.62l0,0q0.87,0 0.87,0.87l0,0q0,0.37 -0.68,1.17q-0.68,0.81 -1.06,0.81zm-45.13,14.26l0,0q0.25,0.62 0.49,0.87q0.25,0.25 0.25,0.74l0,0q0,0.5 -0.37,0.62l0,0q-0.37,0 -0.37,-0.56q0,-0.55 0,-1.67zm42.03,-10.91l-0.74,0.37q-0.25,-0.5 -0.25,-0.74l0,0q0.13,-0.38 0.5,-0.38l0,0q0.62,0 0.62,0.38l0,0q0,0.24 -0.13,0.37l0,0zm-10.16,13.89l0,0q0.99,0 0.99,0.49l0,0q0,0.62 -0.87,0.62l0,0q-0.99,0 -0.99,-0.49l0,0q0,-0.62 0.87,-0.62zm21.94,-27.53l0,0q-0.12,-0.25 -0.24,-0.37q-0.13,-0.13 -0.13,-0.25l0,0q0,-0.62 0.62,-0.62l0,0q0.5,0 0.5,0.62l0,0q0,0.25 -0.13,0.49q-0.12,0.25 -0.37,0.25l0,0q-0.12,0 -0.12,-0.06q0,-0.06 -0.13,-0.06zm-2.97,2.11l0,0q0.62,-0.62 0.87,-0.62l0,0q0.49,0 0.86,0.49l0,0q0,0.5 -0.49,0.5l0,0q-0.25,0 -0.62,-0.19q-0.37,-0.18 -0.62,-0.18zm0,0l-0.13,-0.25q-0.12,0.37 -0.24,0.99q-0.13,0.62 -0.5,0.62l0,0q-0.37,0 -0.37,-0.25l0,0q0,-0.25 0.43,-0.56q0.44,-0.31 0.81,-0.55l0,0zm-19.72,30.38l0,0q0,0 -0.25,0.24l0,0q0,-0.12 -0.06,-0.18q-0.06,-0.06 -0.06,-0.19l0,0q0,-0.12 0.12,-0.12q0.13,0 0.13,-0.13l0,0q0.12,0.13 0.12,0.38zm-28.77,-10.54l0,0q0,0.86 -0.74,0.86l0,0q-0.12,0 -0.25,-0.18q-0.12,-0.19 -0.37,-0.31l0,0q0.25,-0.25 0.68,-0.25q0.44,0 0.68,-0.12zm1,-1.37l0,0q-0.13,0.5 -0.38,0.81q-0.24,0.31 -0.49,0.68l0,0l-0.13,-0.12q0.25,-0.38 0.5,-0.69q0.25,-0.31 0.5,-0.68zm-1.12,8.93l0.12,-0.12l-0.12,0l0.25,0q-0.13,0.12 -0.25,0.12l0,0zm47.86,-25.79l0,0q1,-1.12 1.8,-2.36q0.81,-1.24 1.3,-2.73l0,0q0.38,-1.24 1.31,-2.17q0.93,-0.93 1.92,-1.73q0.99,-0.81 1.8,-1.61q0.8,-0.81 1.17,-1.8l0,0q1.37,-1.37 2.73,-2.98q1.37,-1.61 3.47,-2.48l0,0q1.24,-0.49 2.11,-1.49q0.87,-0.99 2.36,-0.99l0,0q2.35,0 5.33,0.87q2.98,0.87 5.58,2.36q2.6,1.48 4.34,3.59q1.74,2.11 1.74,4.59l0,0q0,0.25 -0.07,0.62q-0.06,0.37 -0.06,0.62l0,0q0,0.62 0.06,1.18q0.07,0.56 0.07,1.18l0,0q0,2.35 -1.74,3.59l0,0q-0.99,0.5 -1.49,1.68q-0.49,1.17 -1.24,2.04l0,0q-0.62,0.62 -1.24,1.24q-0.62,0.62 -1.11,1.61l0,0q-0.5,1 -1.99,2.55q-1.49,1.55 -3.59,2.97q-2.11,1.43 -4.65,2.48q-2.55,1.06 -5.15,1.06l0,0q-1.36,0 -2.6,-0.25q-1.24,-0.25 -2.61,-0.25l0,0q-1.73,0 -2.11,1.98q-0.37,1.99 -0.37,3.48l0,0q0,2.1 0.13,4.83q0.12,2.73 0.62,5.21q0.49,2.48 1.42,4.22q0.93,1.73 2.67,1.73l0,0q1.36,0 2.91,-0.87q1.55,-0.86 2.54,-1.73l0,0q5.09,-4.09 9.99,-8.06q4.89,-3.97 9.73,-8.31l0,0q0.5,-0.5 1.67,-1.67q1.18,-1.18 2.61,-2.42q1.42,-1.24 3.04,-2.17q1.61,-0.93 3.1,-0.93l0,0q0.62,0 1.3,0.31q0.68,0.31 0.68,1.05l0,0q0,0.62 -0.62,1.18q-0.62,0.56 -1.43,1.05q-0.8,0.5 -1.61,0.93q-0.8,0.44 -1.3,0.81l0,0q-1.98,1.61 -3.35,2.98l0,0q-1.36,1.24 -2.35,2.29q-1,1.05 -1,1.55l0,0q0,0.74 -0.49,1.86q-0.5,1.12 -1.49,1.12l0,0q-1.36,0.62 -2.36,1.86q-0.99,1.24 -1.86,2.54q-0.86,1.3 -1.67,2.35q-0.81,1.06 -1.55,1.31l0,0q-0.74,0.24 -2.48,1.98q-1.74,1.74 -3.66,3.72q-1.92,1.98 -3.66,3.53q-1.73,1.55 -2.48,1.55l0,0q-0.74,0 -1.24,-0.37l0,0q-0.62,0.37 -1.17,0.75q-0.56,0.37 -1.18,0.74l0,0q-3.6,-0.37 -6.2,-0.87q-2.61,-0.49 -4.59,-3.35l0,0q-0.5,-1.11 -1.12,-1.48l0,0q-0.74,-0.38 -1.42,-1.31q-0.68,-0.93 -1.18,-1.86q-0.5,-0.93 -0.74,-1.73q-0.25,-0.81 -0.25,-0.93l0,0q0,-0.37 0.12,-0.81q0.13,-0.43 0.13,-0.93l0,0q0,-0.87 -0.69,-1.61q-0.68,-0.74 -0.68,-1.49l0,0q0,-0.25 0.19,-0.62q0.18,-0.37 0.18,-0.74l0,0q0,-0.62 -0.24,-1.18q-0.25,-0.56 -0.25,-1.18l0,0q0,-0.49 0.31,-0.99q0.31,-0.5 0.31,-0.99l0,0q0,-0.62 -0.44,-1.37q-0.43,-0.74 -0.43,-1.48l0,0q0,-0.87 0,-2.3q0,-1.42 0.12,-2.91q0.13,-1.49 0.44,-2.85q0.31,-1.37 0.93,-2.11l0,0q1.24,-1.61 1.49,-4.16q0.24,-2.54 1.61,-4.52l0,0q-0.5,0.74 -0.5,1.36l0,0q0,0.37 0.25,0.62l0,0q0.12,-0.12 0.25,-0.12q0.12,0 0.12,-0.37l0,0q0,-0.5 -0.25,-1.49zm11.78,6.2l0,0q1.62,-0.25 4.22,-1.06q2.6,-0.8 5.02,-2.23q2.42,-1.42 4.16,-3.59q1.73,-2.17 1.73,-5.15l0,0q0,-1.61 -0.56,-3.6q-0.55,-1.98 -2.41,-1.98l0,0q-3.1,0 -5.77,2.11q-2.67,2.11 -4.65,4.9q-1.98,2.79 -3.16,5.51q-1.18,2.73 -1.18,3.97l0,0q0,0.62 0.56,0.75q0.56,0.12 2.04,0.37z" id="SvgjsPath15932"/>
    </svg>
}

export default LoaderApp