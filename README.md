# Logic Operator Game

An interactive web-based game designed to help students practice identifying the **main logical operator** in symbolic logic formulas. The game focuses on understanding **operator scope**, **grouping symbols**, and **well-formed formulas (WFFs)** through increasing levels of difficulty.

---

## Purpose

This game was created as a learning tool for students studying **symbolic logic**. Players are shown a logical formula and must choose the operator with the **widest scope**.

The game reinforces:
- How parentheses, brackets, and braces affect scope  
- The difference between unary and binary operators  
- How to recognize formulas that are **not well-formed**

---

## How to Play

1. Select a difficulty level from the start screen.
2. A logical formula will appear.
3. Choose the operator that has the **widest scope** (the “main operator”).
4. Immediate feedback is provided after each choice.
5. Continue until all questions in the round are completed.
6. View your final score and performance summary.

A **hint button** is available if you need guidance during a question.

---

## Operators Used

| Symbol | Name | Description |
|------|------|------------|
| ∼ | Not | Negation |
| ⋅ | And | Conjunction |
| ∨ | Or | Disjunction |
| ⊃ | Conditional | If…then |
| ≡ | Biconditional | If and only if |
| ✘ | Not WFF | Formula is not well-formed |

---

## Difficulty Levels

- **Easy**  
  Simple formulas with one operator  
  Example: `A ⋅ B`

- **Medium**  
  Two-level formulas using parentheses  
  Example: `(A ⋅ B) ∨ C`

- **Hard**  
  Nested formulas using parentheses, brackets, and braces  
  Example: `[(A ⋅ B) ∨ C] ⊃ D`

- **Extra Hard**  
  Deeply nested formulas **plus** formulas that are *not well-formed*  
  Example: `A ⋅ ∨ B`

---

## Features

- Progressive difficulty system
- Immediate visual feedback (correct / incorrect)
- Hint system for learning support
- Progress bar and score tracking
- Final results summary with performance feedback
- Responsive design (desktop and mobile friendly)

---

## Tech Stack

- **HTML** – structure  
- **CSS** – styling and layout  
- **JavaScript** – game logic and state management  
