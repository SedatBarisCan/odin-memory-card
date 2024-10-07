export default function Header({ score, bestScore }) {





    return (
        <header className="header">
            <div className="header-left">
                <h1 className="title">Pokemon Memory Game</h1>
                <p className="description">Get points by clicking on an image but don't click on any more than once!</p>
            </div>
            <div className="header-right">
                <h5>Score:{score}</h5>
                <h5>Best Score:{bestScore}</h5>
            </div>
        </header>
    )
}