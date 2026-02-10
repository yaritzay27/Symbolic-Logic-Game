// Questions Data
const OPERATOR_SYMBOLS = {
    NOT: "∼",
    DOT: "⋅",
    WEDGE: "∨",
    HORSESHOE: "⊃",
    TRIPLE_BAR: "≡",
    NOT_WFF: "✘"
};

const OPERATOR_LABELS = {
    NOT: "Not",
    DOT: "And",
    WEDGE: "Or",
    HORSESHOE: "Cond.",
    TRIPLE_BAR: "Bicond.",
    NOT_WFF: "Not WFF"
};

const ALL_QUESTIONS = [
    // EASY
    { formula: "A ⋅ B", correctOperator: "DOT", explanation: "The dot (⋅) is the only operator, conjoining A and B.", difficulty: "easy" },
    { formula: "A ∨ B", correctOperator: "WEDGE", explanation: "The wedge (∨) is the only operator, disjoining A and B.", difficulty: "easy" },
    { formula: "∼A", correctOperator: "NOT", explanation: "The tilde (∼) negates A and is the sole operator.", difficulty: "easy" },
    { formula: "A ⊃ B", correctOperator: "HORSESHOE", explanation: "The horseshoe (⊃) is the only operator: if A then B.", difficulty: "easy" },
    { formula: "A ≡ B", correctOperator: "TRIPLE_BAR", explanation: "The triple bar (≡) is the only operator: A if and only if B.", difficulty: "easy" },
    { formula: "∼B", correctOperator: "NOT", explanation: "The tilde (∼) negates B and is the sole operator.", difficulty: "easy" },
    { formula: "B ⋅ C", correctOperator: "DOT", explanation: "The dot (⋅) conjoins B and C as the only operator.", difficulty: "easy" },
    { formula: "C ∨ D", correctOperator: "WEDGE", explanation: "The wedge (∨) disjoins C and D as the only operator.", difficulty: "easy" },
    { formula: "D ⊃ A", correctOperator: "HORSESHOE", explanation: "The horseshoe (⊃) forms the conditional D ⊃ A.", difficulty: "easy" },
    { formula: "B ≡ C", correctOperator: "TRIPLE_BAR", explanation: "The triple bar (≡) creates a biconditional between B and C.", difficulty: "easy" },
    { formula: "∼D", correctOperator: "NOT", explanation: "The tilde (∼) negates D. It is the only operator present.", difficulty: "easy" },
    { formula: "E ⋅ F", correctOperator: "DOT", explanation: "The dot (⋅) conjoins E and F as the sole operator.", difficulty: "easy" },
    { formula: "C ⊃ D", correctOperator: "HORSESHOE", explanation: "The horseshoe (⊃) is the only operator: if C then D.", difficulty: "easy" },
    { formula: "A ∨ C", correctOperator: "WEDGE", explanation: "The wedge (∨) disjoins A and C as the sole operator.", difficulty: "easy" },
    { formula: "D ≡ E", correctOperator: "TRIPLE_BAR", explanation: "The triple bar (≡) creates a biconditional between D and E.", difficulty: "easy" },

    // MEDIUM
    { formula: "(A ⋅ B) ∨ C", correctOperator: "WEDGE", explanation: "The dot is inside parentheses. The wedge (∨) outside has the widest scope.", difficulty: "medium" },
    { formula: "∼(A ∨ B)", correctOperator: "NOT", explanation: "The tilde (∼) negates the entire disjunction, governing the whole formula.", difficulty: "medium" },
    { formula: "A ⊃ (B ⋅ C)", correctOperator: "HORSESHOE", explanation: "The dot is inside parentheses. The horseshoe (⊃) connects A to the group.", difficulty: "medium" },
    { formula: "(A ∨ B) ⋅ (C ∨ D)", correctOperator: "DOT", explanation: "Both wedges are inside parentheses. The dot (⋅) between the groups has the widest scope.", difficulty: "medium" },
    { formula: "(A ⊃ B) ≡ (C ⊃ D)", correctOperator: "TRIPLE_BAR", explanation: "Both horseshoes are inside parentheses. The triple bar (≡) connects them.", difficulty: "medium" },
    { formula: "∼A ⋅ B", correctOperator: "DOT", explanation: "The tilde only negates A. The dot (⋅) connects ∼A and B with wider scope.", difficulty: "medium" },
    { formula: "A ∨ (B ⊃ C)", correctOperator: "WEDGE", explanation: "The horseshoe is inside parentheses. The wedge (∨) outside has the widest scope.", difficulty: "medium" },
    { formula: "(A ⋅ B) ⊃ C", correctOperator: "HORSESHOE", explanation: "The dot is inside parentheses. The horseshoe (⊃) connects (A ⋅ B) to C.", difficulty: "medium" },
    { formula: "∼(A ⊃ B)", correctOperator: "NOT", explanation: "The tilde (∼) negates the entire conditional, governing the whole formula.", difficulty: "medium" },
    { formula: "(A ≡ B) ∨ C", correctOperator: "WEDGE", explanation: "The triple bar is inside parentheses. The wedge (∨) outside has the widest scope.", difficulty: "medium" },
    { formula: "A ⋅ (B ≡ C)", correctOperator: "DOT", explanation: "The triple bar is inside parentheses. The dot (⋅) has the widest scope.", difficulty: "medium" },
    { formula: "(A ∨ B) ⊃ (C ⋅ D)", correctOperator: "HORSESHOE", explanation: "Both the wedge and dot are inside parentheses. The horseshoe (⊃) between them has the widest scope.", difficulty: "medium" },
    { formula: "∼A ∨ ∼B", correctOperator: "WEDGE", explanation: "Both tildes negate their respective letters. The wedge (∨) connects the two negations.", difficulty: "medium" },
    { formula: "(A ⋅ B) ≡ C", correctOperator: "TRIPLE_BAR", explanation: "The dot is inside parentheses. The triple bar (≡) connects (A ⋅ B) to C.", difficulty: "medium" },
    { formula: "A ⊃ ∼B", correctOperator: "HORSESHOE", explanation: "The tilde only negates B. The horseshoe (⊃) connects A to ∼B with wider scope.", difficulty: "medium" },

    // HARD
    { formula: "[(A ⋅ B) ∨ C] ⊃ D", correctOperator: "HORSESHOE", explanation: "The horseshoe (⊃) is outside all brackets, giving it the widest scope.", difficulty: "hard" },
    { formula: "∼{[(P ∨ Q) ⋅ R] ≡ S}", correctOperator: "NOT", explanation: "The tilde (∼) applies to everything in the braces.", difficulty: "hard" },
    { formula: "{[A ⊃ (B ⋅ C)] ∨ D} ⋅ E", correctOperator: "DOT", explanation: "The dot (⋅) connects the entire expression in braces with E.", difficulty: "hard" },
    { formula: "[(X ≡ Y) ⊃ Z] ∨ W", correctOperator: "WEDGE", explanation: "The wedge (∨) is outside the brackets, making it the main operator.", difficulty: "hard" },
    { formula: "∼[A ⋅ (B ⊃ C)]", correctOperator: "NOT", explanation: "The tilde (∼) negates the entire bracketed expression.", difficulty: "hard" },
    { formula: "[(A ∨ B) ⋅ C] ≡ D", correctOperator: "TRIPLE_BAR", explanation: "The triple bar (≡) is outside the brackets, making it the main operator.", difficulty: "hard" },
    { formula: "{A ⊃ [(B ⋅ C) ∨ D]} ≡ E", correctOperator: "TRIPLE_BAR", explanation: "The triple bar (≡) is outside all grouping symbols, giving it the widest scope.", difficulty: "hard" },
    { formula: "∼(A ⋅ B) ∨ (C ⊃ D)", correctOperator: "WEDGE", explanation: "The tilde only negates the first group. The wedge (∨) connects the two main parts.", difficulty: "hard" },
    { formula: "[A ∨ (B ≡ C)] ⊃ ∼D", correctOperator: "HORSESHOE", explanation: "The horseshoe (⊃) connects the bracketed group to ∼D at the highest level.", difficulty: "hard" },
    { formula: "[(∼A ⊃ B) ⋅ C] ∨ (D ≡ E)", correctOperator: "WEDGE", explanation: "The bracket group and parenthesized biconditional are connected by the wedge (∨) at the highest level.", difficulty: "hard" },
    { formula: "∼A ⊃ (B ∨ C)", correctOperator: "HORSESHOE", explanation: "The tilde only negates A. The horseshoe (⊃) connects ∼A to the grouped disjunction.", difficulty: "hard" },
    { formula: "(A ∨ ∼B) ≡ (∼C ⋅ D)", correctOperator: "TRIPLE_BAR", explanation: "Both sides are in parentheses. The triple bar (≡) between the groups has the widest scope.", difficulty: "hard" },
    { formula: "[(A ⊃ B) ≡ C] ∨ [∼D ⋅ (E ⊃ F)]", correctOperator: "WEDGE", explanation: "Both bracket groups have nested operators. The wedge (∨) between them has the widest scope.", difficulty: "hard" },
    { formula: "∼(A ∨ B) ⋅ ∼(C ∨ D)", correctOperator: "DOT", explanation: "Each tilde negates its own parenthesized disjunction. The dot (⋅) between them has the widest scope.", difficulty: "hard" },
    { formula: "[(A ⋅ B) ⊃ C] ≡ [(D ∨ E) ⊃ F]", correctOperator: "TRIPLE_BAR", explanation: "Both bracket groups are conditionals. The triple bar (≡) connecting them has the widest scope.", difficulty: "hard" },

    // EXTRA HARD (Well-formed)
    { formula: "{[(A ⊃ B) ⋅ C] ∨ D} ≡ [∼E ⊃ (F ⋅ A)]", correctOperator: "TRIPLE_BAR", explanation: "The left brace group and right bracket group are connected by the triple bar (≡) at the highest level.", difficulty: "extra_hard" },
    { formula: "∼{(A ≡ B) ∨ [(C ⋅ D) ⊃ ∼E]}", correctOperator: "NOT", explanation: "The outermost tilde (∼) negates the entire braced expression.", difficulty: "extra_hard" },
    { formula: "[(A ∨ B) ⊃ (C ⋅ D)] ∨ [∼E ≡ F]", correctOperator: "WEDGE", explanation: "Both bracket groups have nested operators. The wedge (∨) between them has the widest scope.", difficulty: "extra_hard" },
    { formula: "{[∼A ⋅ (B ⊃ C)] ≡ D} ⊃ (E ∨ F)", correctOperator: "HORSESHOE", explanation: "The left brace group and the right parenthesized disjunction are connected by the horseshoe (⊃).", difficulty: "extra_hard" },
    { formula: "∼∼(A ⋅ B)", correctOperator: "NOT", explanation: "The outermost tilde (∼) negates the entire rest of the formula. Double negation means the first tilde is the main operator.", difficulty: "extra_hard" },
    { formula: "[(A ⊃ B) ⋅ (C ⊃ D)] ≡ [(E ∨ F) ⋅ (A ≡ B)]", correctOperator: "TRIPLE_BAR", explanation: "Both bracket groups are conjunctions of conditionals. The triple bar (≡) between them has the widest scope.", difficulty: "extra_hard" },
    { formula: "∼[(A ⋅ B) ⊃ (C ∨ D)] ∨ E", correctOperator: "WEDGE", explanation: "The tilde negates only the bracketed conditional. The wedge (∨) connects that negation to E at the highest level.", difficulty: "extra_hard" },
    { formula: "{[(A ∨ B) ⋅ ∼C] ⊃ D} ⋅ {E ≡ [(F ⊃ A) ∨ B]}", correctOperator: "DOT", explanation: "Both brace groups have deeply nested operators. The dot (⋅) between them has the widest scope.", difficulty: "extra_hard" },
    { formula: "[∼(A ≡ B) ⋅ (C ⊃ D)] ⊃ ∼(E ∨ F)", correctOperator: "HORSESHOE", explanation: "The bracket group on the left and the negated disjunction on the right are connected by the horseshoe (⊃).", difficulty: "extra_hard" },
    { formula: "∼{[(A ⊃ B) ∨ C] ⋅ [∼D ≡ (E ⋅ F)]}", correctOperator: "NOT", explanation: "The outermost tilde (∼) negates the entire braced expression containing all other operators.", difficulty: "extra_hard" },
    { formula: "[(A ⋅ ∼B) ⊃ (C ∨ D)] ⋅ [∼E ⊃ (F ≡ A)]", correctOperator: "DOT", explanation: "Both bracket groups are conditionals. The dot (⋅) between them has the widest scope.", difficulty: "extra_hard" },
    { formula: "{(A ∨ B) ≡ [∼C ⋅ (D ⊃ E)]} ∨ ∼F", correctOperator: "WEDGE", explanation: "The brace group and ∼F are connected by the wedge (∨) at the highest level.", difficulty: "extra_hard" },

    // EXTRA HARD (Not well-formed)
    { formula: "A ⋅ ∨ B", correctOperator: "NOT_WFF", explanation: "Two binary operators (⋅ and ∨) appear in a row with no operand between them. This is not a well-formed formula.", difficulty: "extra_hard" },
    { formula: "(A ⋅ B", correctOperator: "NOT_WFF", explanation: "The opening parenthesis is never closed. Unmatched grouping symbols make this not a well-formed formula.", difficulty: "extra_hard" },
    { formula: "A B ⊃ C", correctOperator: "NOT_WFF", explanation: "Two proposition letters (A and B) appear in a row with no operator between them. This is not a well-formed formula.", difficulty: "extra_hard" },
    { formula: "⊃ A ⋅ B", correctOperator: "NOT_WFF", explanation: "The horseshoe (⊃) is a binary operator but appears at the start with nothing on the left. This is not a well-formed formula.", difficulty: "extra_hard" },
    { formula: "(A ∨ B) ⋅", correctOperator: "NOT_WFF", explanation: "The dot (⋅) is a binary operator but has no right operand. This is not a well-formed formula.", difficulty: "extra_hard" },
    { formula: "A ≡ ≡ B", correctOperator: "NOT_WFF", explanation: "Two triple bars (≡) appear with no operand between them. This is not a well-formed formula.", difficulty: "extra_hard" },
    { formula: "((A ⊃ B) ⋅ C))", correctOperator: "NOT_WFF", explanation: "There is an extra closing parenthesis with no matching opening parenthesis. This is not a well-formed formula.", difficulty: "extra_hard" },
    { formula: "∼", correctOperator: "NOT_WFF", explanation: "The tilde (∼) appears alone with nothing to negate. A bare operator is not a well-formed formula.", difficulty: "extra_hard" },
];

// Utility functions
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function getQuestionsByDifficulty(difficulty) {
    return ALL_QUESTIONS.filter(q => q.difficulty === difficulty);
}

function getGrade(score, total) {
    const pct = total > 0 ? (score / total) * 100 : 0;
    if (pct >= 90) return { label: "Outstanding!", message: "You have an excellent grasp of logical operators." };
    if (pct >= 70) return { label: "Great Job!", message: "You understand most logical connectives well." };
    if (pct >= 50) return { label: "Good Effort!", message: "Keep practicing to strengthen your understanding." };
    return { label: "Keep Learning!", message: "Review the operators and try again. You'll improve!" };
}

// Game State
const state = {
    difficulty: "easy",
    gameState: "start", // "start" | "playing" | "results"
    questions: [],
    currentIndex: 0,
    score: 0,
    totalAnswered: 0,
    selected: null,
    showHint: false,
    answered: false
};

// Render functions
function render() {
    const app = document.getElementById('app');
    
    if (state.gameState === "start") {
    app.innerHTML = renderStartScreen();
    attachStartScreenListeners();
    } else if (state.gameState === "playing") {
    app.innerHTML = renderPlayingScreen();
    attachPlayingScreenListeners();
    } else {
    app.innerHTML = renderResultsScreen();
    attachResultsScreenListeners();
    }
}

function renderStartScreen() {
    const questionCount = getQuestionsByDifficulty(state.difficulty).length;
    const difficulties = ["easy", "medium", "hard", "extra_hard"];
    const difficultyLabels = {
    easy: "Easy",
    medium: "Medium",
    hard: "Hard",
    extra_hard: "Extra Hard"
    };
    const difficultyDescriptions = {
    easy: "Simple formulas with a single operator, e.g. A ⋅ B",
    medium: "Two-level formulas with parentheses, e.g. (A ⋅ B) ∨ C",
    hard: "Complex formulas with nested brackets and braces.",
    extra_hard: "Complex formulas plus some that are NOT well-formed. Can you spot the fakes?"
    };

    return `
    <div class="start-screen">
        <div class="hero">
        <div class="icon-box">📚</div>
        <h1>Logic Operator Game</h1>
        <p>
            Given a symbolic logic formula, identify the
            <span class="highlight">main operator</span>
            — the connective with the widest scope that governs the entire expression.
        </p>
        </div>

        <div class="card operators-card">
        <div class="card-content">
            <h3 class="section-title">Operators</h3>
            <div class="operators-grid">
            ${["NOT", "DOT", "WEDGE", "HORSESHOE", "TRIPLE_BAR"].map(op => `
                <div class="operator-item">
                <span class="operator-symbol">${OPERATOR_SYMBOLS[op]}</span>
                <span class="operator-label">${OPERATOR_LABELS[op]}</span>
                </div>
            `).join('')}
            </div>
        </div>
        </div>

        <div class="card difficulty-card">
        <div class="card-content">
            <h3 class="section-title">Difficulty</h3>
            <div class="difficulty-options">
            ${difficulties.map(d => `
                <button class="difficulty-option ${d === state.difficulty ? 'selected' : ''}" data-difficulty="${d}">
                <div class="radio ${d === state.difficulty ? 'selected' : ''}">
                    ${d === state.difficulty ? '<div class="radio-dot"></div>' : ''}
                </div>
                <div>
                    <p class="difficulty-title">${difficultyLabels[d]}</p>
                    <p class="difficulty-desc">${difficultyDescriptions[d]}</p>
                </div>
                </button>
            `).join('')}
            </div>
        </div>
        </div>

        <button class="btn btn-primary btn-lg" id="start-button">
        ▶ Start Game (${questionCount} questions)
        </button>
    </div>
    `;
}

function renderPlayingScreen() {
    const question = state.questions[state.currentIndex];
    const isCorrect = state.selected === question.correctOperator;
    const operators = state.difficulty === "extra_hard" 
    ? ["NOT", "DOT", "WEDGE", "HORSESHOE", "TRIPLE_BAR", "NOT_WFF"]
    : ["NOT", "DOT", "WEDGE", "HORSESHOE", "TRIPLE_BAR"];
    const gridClass = state.difficulty === "extra_hard" ? "extra-hard" : "";
    const isLast = state.currentIndex === state.questions.length - 1;
    const progress = (state.currentIndex + 1) / state.questions.length * 100;

    return `
    <div>
        <button class="btn btn-sm" id="back-button" style="background: transparent; color: var(--muted-foreground); gap: 0.375rem;">
        ← Back to Menu
        </button>
    </div>

    <div class="game-header">
        <div class="title-row">
        <div class="title-icon">📚</div>
        <div class="title-text">
            <h1>Logic Operator Game</h1>
            <p>Identify the main logical operator</p>
        </div>
        </div>

        <div class="stats-row">
        <div class="difficulty-pills">
            ${["easy", "medium", "hard", "extra_hard"].map(d => {
            const labels = { easy: "Easy", medium: "Medium", hard: "Hard", extra_hard: "Extra Hard" };
            const activeClass = d === state.difficulty ? `active-${d.replace('_', '-')}` : '';
            return `<button class="difficulty-pill ${activeClass}" data-difficulty="${d}" ${state.gameState === "playing" ? 'disabled' : ''}>${labels[d]}</button>`;
            }).join('')}
        </div>
        <div class="divider"></div>
        <div class="stat">
            <span class="stat-icon">🏆</span>
            <span><span class="stat-value">${state.score}</span><span class="stat-muted"> / ${state.totalAnswered}</span></span>
        </div>
        <div class="divider"></div>
        <div class="stat">
            <span class="stat-icon">🎯</span>
            <span class="stat-muted">Question <span class="stat-value">${state.currentIndex + 1}</span> of ${state.questions.length}</span>
        </div>
        </div>

        <div class="progress">
        <div class="progress-bar" style="width: ${progress}%"></div>
        </div>
    </div>

    <div class="question-container">
        <div class="card formula-card">
        <div class="card-content">
            <p class="formula">${question.formula}</p>
        </div>
        </div>

        ${!state.answered ? `
        <button class="btn btn-outline" id="hint-button" style="align-self: flex-start; gap: 0.5rem;">
            💡 ${state.showHint ? 'Hide Hint' : 'Show Hint'}
        </button>
        ` : ''}

        ${state.showHint && !state.answered ? `
        <div class="card hint-card">
            <div class="card-content">
            <p class="hint-text">
                <span class="emphasis">Tip:</span>
                The main operator is the one with the <span class="emphasis">widest scope</span>
                — it is the last operator you would evaluate. Look for the operator that is
                <span class="emphasis">outside</span> all parentheses, brackets, and braces.
                ${state.difficulty === "extra_hard" ? 'Also check whether the formula is well-formed: every binary operator needs two operands, every tilde needs something to negate, and all grouping symbols must be matched.' : ''}
            </p>
            </div>
        </div>
        ` : ''}

        <div class="operators-buttons ${gridClass}">
        ${operators.map(op => {
            let btnClass = "operator-btn";
            if (state.answered && op === question.correctOperator) {
            btnClass += " correct";
            } else if (state.answered && op === state.selected && !isCorrect) {
            btnClass += " incorrect";
            }
            return `
            <button class="${btnClass}" data-operator="${op}" ${state.answered ? 'disabled' : ''}>
                <span class="operator-btn-symbol">${OPERATOR_SYMBOLS[op]}</span>
                <span class="operator-btn-label">${OPERATOR_LABELS[op]}</span>
            </button>
            `;
        }).join('')}
        </div>

        ${state.answered ? `
        <div class="card feedback-card ${isCorrect ? 'correct' : 'incorrect'}">
            <div class="card-content">
            <div class="feedback-content">
                <div class="feedback-icon ${isCorrect ? 'correct' : 'incorrect'}">
                ${isCorrect ? '✓' : '✗'}
                </div>
                <div>
                <p class="feedback-title ${isCorrect ? 'correct' : 'incorrect'}">
                    ${isCorrect ? 'Correct!' : 'Not quite.'}
                </p>
                <p class="feedback-text">${question.explanation}</p>
                ${!isCorrect ? `
                    <p class="feedback-answer">
                    The correct answer was
                    <span class="answer">${OPERATOR_SYMBOLS[question.correctOperator]} (${OPERATOR_LABELS[question.correctOperator]})</span>
                    </p>
                ` : ''}
                </div>
            </div>
            <div class="feedback-actions">
                <button class="btn btn-primary" id="next-button" style="gap: 0.5rem;">
                ${isLast ? 'See Results' : 'Next Question'} →
                </button>
            </div>
            </div>
        </div>
        ` : ''}
    </div>
    `;
}

function renderResultsScreen() {
    const pct = state.questions.length > 0 ? Math.round((state.score / state.questions.length) * 100) : 0;
    const grade = getGrade(state.score, state.questions.length);
    const difficultyLabels = { easy: "Easy", medium: "Medium", hard: "Hard", extra_hard: "Extra Hard" };
    const nextDifficulty = { easy: "medium", medium: "hard", hard: "extra_hard", extra_hard: null };
    const next = nextDifficulty[state.difficulty];

    return `
    <div>
        <button class="btn btn-sm" id="back-button" style="background: transparent; color: var(--muted-foreground); gap: 0.375rem;">
        ← Back to Menu
        </button>
    </div>

    <div class="game-header">
        <div class="title-row">
        <div class="title-icon">📚</div>
        <div class="title-text">
            <h1>Logic Operator Game</h1>
            <p>Identify the main logical operator</p>
        </div>
        </div>

        <div class="stats-row">
        <div class="difficulty-pills">
            ${["easy", "medium", "hard", "extra_hard"].map(d => {
            const labels = { easy: "Easy", medium: "Medium", hard: "Hard", extra_hard: "Extra Hard" };
            const activeClass = d === state.difficulty ? `active-${d.replace('_', '-')}` : '';
            return `<button class="difficulty-pill ${activeClass}" data-difficulty-change="${d}">${labels[d]}</button>`;
            }).join('')}
        </div>
        <div class="divider"></div>
        <div class="stat">
            <span class="stat-icon">🏆</span>
            <span><span class="stat-value">${state.score}</span><span class="stat-muted"> / ${state.totalAnswered}</span></span>
        </div>
        <div class="divider"></div>
        <div class="stat">
            <span class="stat-icon">🎯</span>
            <span class="stat-muted">Question <span class="stat-value">${state.currentIndex + 1}</span> of ${state.questions.length}</span>
        </div>
        </div>

        <div class="progress">
        <div class="progress-bar" style="width: 100%"></div>
        </div>
    </div>

    <div class="card results-card">
        <div class="results-content">
        <div class="trophy-icon">🏆</div>
        <div>
            <h2 class="results-grade">${grade.label}</h2>
            <p class="results-message">${grade.message}</p>
        </div>
        <div class="score-display">
            <div class="score-numbers">
            <span class="score-main">${state.score}</span>
            <span class="score-total">/ ${state.questions.length}</span>
            </div>
            <p class="score-percent">${pct}% correct</p>
        </div>
        <div class="results-actions">
            <button class="btn btn-outline" id="restart-button" style="gap: 0.5rem;">
            ↻ Play Again (${difficultyLabels[state.difficulty]})
            </button>
            ${next ? `
            <button class="btn btn-primary" data-difficulty-change="${next}" style="gap: 0.5rem;">
                Try ${difficultyLabels[next]} →
            </button>
            ` : ''}
        </div>
        </div>
    </div>
    `;
}

// Event listeners
function attachStartScreenListeners() {
    document.querySelectorAll('[data-difficulty]').forEach(btn => {
    btn.addEventListener('click', (e) => {
        state.difficulty = e.currentTarget.dataset.difficulty;
        render();
    });
    });

    document.getElementById('start-button').addEventListener('click', () => {
    const questions = getQuestionsByDifficulty(state.difficulty);
    state.questions = shuffleArray(questions);
    state.currentIndex = 0;
    state.score = 0;
    state.totalAnswered = 0;
    state.gameState = "playing";
    state.selected = null;
    state.showHint = false;
    state.answered = false;
    render();
    });
}

function attachPlayingScreenListeners() {
    const backBtn = document.getElementById('back-button');
    if (backBtn) {
    backBtn.addEventListener('click', () => {
        state.gameState = "start";
        state.score = 0;
        state.totalAnswered = 0;
        state.currentIndex = 0;
        render();
    });
    }

    const hintBtn = document.getElementById('hint-button');
    if (hintBtn) {
    hintBtn.addEventListener('click', () => {
        state.showHint = !state.showHint;
        render();
    });
    }

    document.querySelectorAll('[data-operator]').forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (state.answered) return;
        const operator = e.currentTarget.dataset.operator;
        state.selected = operator;
        state.answered = true;
        const correct = operator === state.questions[state.currentIndex].correctOperator;
        if (correct) state.score++;
        state.totalAnswered++;
        render();
    });
    });

    const nextBtn = document.getElementById('next-button');
    if (nextBtn) {
    nextBtn.addEventListener('click', () => {
        if (state.currentIndex < state.questions.length - 1) {
        state.currentIndex++;
        state.selected = null;
        state.showHint = false;
        state.answered = false;
        render();
        } else {
        state.gameState = "results";
        render();
        }
    });
    }
}

function attachResultsScreenListeners() {
    const backBtn = document.getElementById('back-button');
    if (backBtn) {
    backBtn.addEventListener('click', () => {
        state.gameState = "start";
        state.score = 0;
        state.totalAnswered = 0;
        state.currentIndex = 0;
        render();
    });
    }

    const restartBtn = document.getElementById('restart-button');
    if (restartBtn) {
    restartBtn.addEventListener('click', () => {
        const questions = getQuestionsByDifficulty(state.difficulty);
        state.questions = shuffleArray(questions);
        state.currentIndex = 0;
        state.score = 0;
        state.totalAnswered = 0;
        state.gameState = "playing";
        state.selected = null;
        state.showHint = false;
        state.answered = false;
        render();
    });
    }

    document.querySelectorAll('[data-difficulty-change]').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const newDifficulty = e.currentTarget.dataset.difficultyChange;
        state.difficulty = newDifficulty;
        const questions = getQuestionsByDifficulty(newDifficulty);
        state.questions = shuffleArray(questions);
        state.currentIndex = 0;
        state.score = 0;
        state.totalAnswered = 0;
        state.gameState = "playing";
        state.selected = null;
        state.showHint = false;
        state.answered = false;
        render();
    });
    });
}

// Initialize
render();