# ANTIGRAVITY.md - Chemistry Typing Game (One-Question One-Answer Remake)

## 1. Project Overview
**Goal**: Remake the existing "TypeQUIZ" into a "High School Chemistry Basic Q&A Typing Game".
**Target User**: High school students studying Chemistry Basics (Chapter 1: Composition of Matter).
**Usage Scene**: Rapid-fire review of terms and concepts.

## 2. Core Concept (MVP)
- **Genre**: Blind Typing Quiz (Question is shown, Answer is hidden until typed/mistyped).
- **Scope**: Chemistry Basics Chapter 1 (Matter Classification, Atomic Structure, Bonds).
- **Mechanics**:
    - **Time Limit**: 20s per question.
    - **HP System**: Mistype = Small Damage. Time Out = Large Damage. 0 HP = Game Over.
    - **Scoring**: Speed-based.
    - **Hints**: Answer revealed only on mistake.

## 3. Technology Stack
- **Frontend**: HTML5, Vanilla CSS, Vanilla JavaScript.
- **Assets**: Minimalistic UI (Character graphics removed as per request).

## 4. Current Step
- **Phase**: Refactoring & Content Replacement.
- **Next Logic**:
    1. Replace `database` with Chemistry Q&A.
    2. Remove Character Sprites.
    3. Implement Blind Typing Logic (Hide target).
    4. Implement 20s Timer & Damage Logic.
    5. Localize UI.
## 5. Upcoming Features
- **Ranking System**:
    - Backend: Firebase Firestore (Simple Auth).
    - Data: Name, Score.
    - Display: Top 3 on Title Screen.
    - Input: On Game Over / Clear.
