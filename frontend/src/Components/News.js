import React from 'react'
import './News.css'

function News() {
    return (
        <div className='news-container'>
            <h className='news-title'>Updates for You</h>
            <div className='news-data'>
                <div className='news-empty'></div>
                <div>
                    <h1 className='news-subtitle'>Competitions</h1>
                    <div>
                        <div className='news-competition-event'>
                            <p>Competion-1</p>
                            <p>Tech Quiz Challenge: Test your technical knowledge with rapid-fire rounds of quizzes on trending technologies and engineering concepts.</p>
                        </div>
                        <div className='news-competition-event'>
                            <p>Competion-2</p>
                            <p>Code Sprint: Solve coding problems in record time and compete against the best programmers on campus.</p>
                        </div>
                        <div className='news-competition-event'>
                            <p>Competion-3</p>
                            <p>Creative Writing Contest: Pen down your thoughts on given prompts in a short, compelling piece of writing.</p>
                        </div>
                        <div className='news-competition-event'>
                            <p>Competion-4</p>
                            <p>Idea Pitch Battle: Present your startup or project idea in one minute to impress the judges.</p>
                        </div>
                        <div className='news-competition-event'>
                            <p>Competion-5</p>
                            <p>Debate Duel: Engage in intense one-on-one debates on contemporary topics and show your argumentation skills.</p>
                        </div>
                    </div>
                </div>
                <div className='news-empty'></div>
                <div>
                    <h1 className='news-subtitle'>Online Quiz</h1>
                    <div>
                        <div className='news-quiz-event'>
                            <p>Quiz-1</p>
                            <p>Tech Titans Trivia: Test your knowledge of groundbreaking technologies and innovators.</p>
                        </div>
                        <div className='news-quiz-event'>
                            <p>Quiz-2</p>
                            <p>Brainwave Blitz: Quickfire questions to challenge your logic and reasoning skills.</p>
                        </div>
                        <div className='news-quiz-event'>
                            <p>Quiz-3</p>
                            <p>Decode the Code: A thrilling quiz on programming, languages, and algorithms.
                            </p>
                        </div>
                        <div className='news-quiz-event'>
                            <p>Quiz-4</p>
                            <p>Sci-Fi Showdown: Dive into the world of science fiction and facts.</p>
                        </div>
                        <div className='news-quiz-event'>
                            <p>Quiz-5</p>
                            <p>Engineer’s Escape Room: Solve puzzles and riddles to unlock engineering concepts and ideas.</p>
                        </div>
                    </div>
                </div>
                <div className='news-empty'></div>
            </div>
        </div>
    )
}

export default News
