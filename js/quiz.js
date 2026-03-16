// Quiz System for GTO Course Platform

const QUIZ_DATA = {
    'module-1': {
        'lesson-1': {
            title: 'What is AI Automation & Why It Matters',
            questions: [
                {
                    question: 'What is the primary benefit of AI automation?',
                    options: ['Faster email response', 'Eliminating repetitive tasks', 'Better calendar management', 'More meetings'],
                    correct: 1
                },
                {
                    question: 'What does "zero-cost" philosophy mean?',
                    options: ['Everything is free', 'Use free tier tools strategically', 'No tools needed', 'Only paid tools'],
                    correct: 1
                },
                {
                    question: 'Which task is BEST suited for AI automation?',
                    options: ['Strategic decisions', 'Repetitive email responses', 'Creative brainstorming', 'Personal relationships'],
                    correct: 1
                },
                {
                    question: 'What percentage of work day can automation reclaim?',
                    options: ['10%', '25%', '40%', '60%'],
                    correct: 2
                },
                {
                    question: 'What is the first step in AI automation?',
                    options: ['Buy expensive tools', 'Identify repetitive tasks', 'Hire a team', 'Build custom software'],
                    correct: 1
                }
            ],
            passThreshold: 4 // 80% = 4/5 correct
        },
        'lesson-2': {
            title: 'The Zero-Cost Tech Stack',
            questions: [
                {
                    question: 'Which is NOT a zero-cost AI tool?',
                    options: ['Ollama', 'Claude', 'n8n', 'Zapier Pro'],
                    correct: 3
                },
                {
                    question: 'What is the advantage of local LLM?',
                    options: ['Faster internet', 'No API costs', 'Better accuracy', 'More features'],
                    correct: 1
                },
                {
                    question: 'Which tool handles workflow automation?',
                    options: ['Ollama', 'n8n', 'Firebase', 'Stripe'],
                    correct: 1
                },
                {
                    question: 'What is the free tier limit for most AI tools?',
                    options: ['Unlimited', '50-100 requests/day', '1000 requests/month', '1 request/hour'],
                    correct: 1
                },
                {
                    question: 'Which storage solution is free for small courses?',
                    options: ['AWS S3', 'Firebase Storage', 'Dropbox Pro', 'Box Business'],
                    correct: 1
                }
            ],
            passThreshold: 4
        },
        'lesson-3': {
            title: 'Your First AI Conversation',
            questions: [
                {
                    question: 'What is "context" in AI conversation?',
                    options: ['The weather', 'Background information', 'The time of day', 'Your location'],
                    correct: 1
                },
                {
                    question: 'What makes a good AI prompt?',
                    options: ['Vague instructions', 'Specific + clear', 'Short only', 'Long only'],
                    correct: 1
                },
                {
                    question: 'What is "temperature" in AI settings?',
                    options: ['Computer heat', 'Creativity level', 'Speed setting', 'Memory size'],
                    correct: 1
                },
                {
                    question: 'What should you do if AI gives wrong answer?',
                    options: ['Give up', 'Rephrase prompt', 'Buy better tool', 'Ask human'],
                    correct: 1
                },
                {
                    question: 'What is "few-shot prompting"?',
                    options: ['Asking once', 'Giving examples', 'Using images', 'Speaking aloud'],
                    correct: 1
                }
            ],
            passThreshold: 4
        },
        'lesson-4': {
            title: 'Memory & Context Systems',
            questions: [
                {
                    question: 'Why is memory important for AI?',
                    options: ['Faster processing', 'Consistent responses', 'Less storage', 'Better graphics'],
                    correct: 1
                },
                {
                    question: 'What is "context window"?',
                    options: ['Screen size', 'Memory limit', 'Time window', 'File size'],
                    correct: 1
                },
                {
                    question: 'Which provides persistent memory?',
                    options: ['RAM', 'Vector database', 'Cache', 'Cookies'],
                    correct: 1
                },
                {
                    question: 'What is "embedding"?',
                    options: ['Video format', 'Text representation', 'Image filter', 'Audio codec'],
                    correct: 1
                },
                {
                    question: 'When should you clear AI memory?',
                    options: ['Never', 'New topic/session', 'Every hour', 'Daily'],
                    correct: 1
                }
            ],
            passThreshold: 4
        },
        'lesson-5': {
            title: 'Module 1 Project: Your First Automation',
            questions: [
                {
                    question: 'What is the goal of Module 1 project?',
                    options: ['Build complex system', 'Complete first automation', 'Write documentation', 'Take a quiz'],
                    correct: 1
                },
                {
                    question: 'Which comes first in automation?',
                    options: ['Deploy', 'Test', 'Identify task', 'Buy tools'],
                    correct: 2
                },
                {
                    question: 'What should you automate first?',
                    options: ['Complex workflows', 'Simple repetitive task', 'Everything at once', 'Nothing'],
                    correct: 1
                },
                {
                    question: 'How do you test automation?',
                    options: ['Assume it works', 'Run manually first', 'Ask someone else', 'Skip testing'],
                    correct: 1
                },
                {
                    question: 'What indicates automation success?',
                    options: ['Cost', 'Time saved', 'Complexity', 'Features'],
                    correct: 1
                }
            ],
            passThreshold: 4
        }
    },
    'module-2': {
        'lesson-1': {
            title: 'AI Platform Installation',
            questions: [
                {
                    question: 'What is Ollama?',
                    options: ['Cloud service', 'Local LLM runner', 'Web framework', 'Database'],
                    correct: 1
                },
                {
                    question: 'Which command installs Ollama?',
                    options: ['install ollama', 'ollama install', 'brew install ollama', 'ollama setup'],
                    correct: 2
                },
                {
                    question: 'What is the first model to pull?',
                    options: ['largest', 'llama3.2:3b', 'newest', 'most expensive'],
                    correct: 1
                },
                {
                    question: 'Where does Ollama store models?',
                    options: ['Downloads folder', '~/.ollama', 'Desktop', 'Documents'],
                    correct: 1
                },
                {
                    question: 'How do you verify installation?',
                    options: ['Restart computer', 'ollama --version', 'Check email', 'Run test'],
                    correct: 1
                }
            ],
            passThreshold: 4
        }
        // ... more lessons (abbreviated for brevity - full quiz data in production)
    }
    // ... modules 3-6 (same structure)
};

class QuizSystem {
    constructor() {
        this.currentQuiz = null;
        this.selectedAnswers = [];
        this.submitted = false;
    }

    // Load quiz for lesson
    loadQuiz(moduleId, lessonId) {
        const moduleQuiz = QUIZ_DATA[moduleId];
        if (!moduleQuiz) {
            console.error('Module not found:', moduleId);
            return null;
        }

        const lessonQuiz = moduleQuiz[lessonId];
        if (!lessonQuiz) {
            console.error('Lesson quiz not found:', lessonId);
            return null;
        }

        this.currentQuiz = lessonQuiz;
        this.selectedAnswers = new Array(lessonQuiz.questions.length).fill(null);
        this.submitted = false;

        return lessonQuiz;
    }

    // Render quiz questions
    renderQuiz(container, moduleId, lessonId) {
        const quiz = this.loadQuiz(moduleId, lessonId);
        if (!quiz) {
            container.innerHTML = '<p>Quiz not available for this lesson.</p>';
            return;
        }

        let html = `
            <div class="quiz-questions">
                <h4>${quiz.title} - Knowledge Check</h4>
                <p style="color: var(--gray); margin-bottom: 24px;">Answer all ${quiz.questions.length} questions. Pass: ${quiz.passThreshold}/${quiz.questions.length} correct (80%)</p>
        `;

        quiz.questions.forEach((q, qIndex) => {
            html += `
                <div class="quiz-question" data-question="${qIndex}">
                    <h4>${qIndex + 1}. ${q.question}</h4>
                    <div class="quiz-options">
            `;

            q.options.forEach((option, oIndex) => {
                html += `
                    <div class="quiz-option" data-question="${qIndex}" data-option="${oIndex}" onclick="quizSystem.selectOption(${qIndex}, ${oIndex})">
                        ${option}
                    </div>
                `;
            });

            html += `
                    </div>
                </div>
            `;
        });

        html += `
                <button class="btn-submit" id="submit-quiz-btn" onclick="quizSystem.submitQuiz()">Submit Quiz</button>
            </div>
        `;

        container.innerHTML = html;
    }

    // Handle option selection
    selectOption(questionIndex, optionIndex) {
        if (this.submitted) return;

        // Remove previous selection for this question
        document.querySelectorAll(`[data-question="${questionIndex}"].quiz-option.selected`).forEach(el => {
            el.classList.remove('selected');
        });

        // Add new selection
        const optionEl = document.querySelector(`[data-question="${questionIndex}"][data-option="${optionIndex}"]`);
        if (optionEl) {
            optionEl.classList.add('selected');
            this.selectedAnswers[questionIndex] = optionIndex;
        }

        // Enable submit if all answered
        const allAnswered = this.selectedAnswers.every(a => a !== null);
        document.getElementById('submit-quiz-btn').disabled = !allAnswered;
    }

    // Submit and grade quiz
    async submitQuiz() {
        if (!this.currentQuiz || this.submitted) return;

        const userId = firebaseAuth.currentUser?.uid;
        if (!userId) {
            alert('Please log in to submit quiz');
            return;
        }

        // Calculate score
        let correct = 0;
        this.currentQuiz.questions.forEach((q, i) => {
            if (this.selectedAnswers[i] === q.correct) {
                correct++;
            }
        });

        const score = Math.round((correct / this.currentQuiz.questions.length) * 100);
        const passed = correct >= this.currentQuiz.passThreshold;

        // Save to Firestore
        await ProgressTracker.submitQuiz(
            window.currentModuleId || 'module-1',
            window.currentLessonId || 'lesson-1',
            score,
            passed
        );

        // Show results
        this.showResults(score, passed);
    }

    // Show results
    showResults(score, passed) {
        this.submitted = true;

        const resultDiv = document.getElementById('quiz-result');
        const resultTitle = document.getElementById('quiz-result-title');
        const resultText = document.getElementById('quiz-result-text');
        const retakeBtn = document.getElementById('quiz-retake-btn');
        const continueBtn = document.getElementById('quiz-continue-btn');

        resultDiv.style.display = 'block';
        resultDiv.className = `quiz-result ${passed ? 'pass' : 'fail'}`;

        if (passed) {
            resultTitle.textContent = `✅ Passed! ${score}%`;
            resultText.textContent = `Great job! You scored ${score}%. You can continue to the next lesson.`;
            retakeBtn.style.display = 'none';
            continueBtn.style.display = 'inline-block';
            continueBtn.onclick = () => {
                // Mark lesson complete
                ProgressTracker.completeLesson(window.currentModuleId, window.currentLessonId);
                // Go to next lesson
                document.getElementById('next-lesson').click();
            };
        } else {
            resultTitle.textContent = `❌ Needs Retake - ${score}%`;
            resultText.textContent = `You scored ${score}%. Need ${this.currentQuiz.passThreshold}/${this.currentQuiz.questions.length} to pass. Review the lesson and try again.`;
            retakeBtn.style.display = 'inline-block';
            retakeBtn.onclick = () => this.retakeQuiz();
            continueBtn.style.display = 'none';
        }

        // Mark all options
        this.currentQuiz.questions.forEach((q, qIndex) => {
            const selected = this.selectedAnswers[qIndex];
            const correct = q.correct;

            const options = document.querySelectorAll(`[data-question="${qIndex}"].quiz-option`);
            options.forEach((opt, oIndex) => {
                opt.classList.remove('selected', 'correct', 'incorrect');
                if (oIndex === correct) {
                    opt.classList.add('correct');
                } else if (oIndex === selected && selected !== correct) {
                    opt.classList.add('incorrect');
                }
            });
        });
    }

    // Retake quiz
    retakeQuiz() {
        this.selectedAnswers = new Array(this.currentQuiz.questions.length).fill(null);
        this.submitted = false;

        // Clear selections
        document.querySelectorAll('.quiz-option').forEach(el => {
            el.classList.remove('selected', 'correct', 'incorrect');
        });

        // Hide results
        document.getElementById('quiz-result').style.display = 'none';

        // Reset submit button
        document.getElementById('submit-quiz-btn').disabled = true;
    }
}

// Initialize
const quizSystem = new QuizSystem();
window.quizSystem = quizSystem;
