import React from 'react';
import CountDown from './Game/CountDown';
import YouTube from 'react-youtube';
import Score from './Game/Score';
import SkipBtn from './Game/SkipBtn';
import Answer from './Game/Answer';
import ValidateBtn from './Game/ValidateBtn';
import Result from './Game/Result';
import './Game.css';
import Title from './Home/Title';
import { arrThemes } from '../data/Playlists';
import EndGame from './Game/EndGame';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wasItGoodAnswer: false,
      turn: 0,
      theme: '',
      class_parent: 'game-parent',
      fakeDiv: 'fake-div',
      numberCount: 'Go',
      isPlaying: false,
      classCount: 'default',
      videoId: '',
      opts: {
        playerVars: {
          autoplay: 1,
          start: 0,
          enablejsapi: 1,
          origin: 'http://localhost:3000'
        }
      },
      answer: '',
      possibleAnswers: [],
      answerState: false,
      scoreTemp: 0,
      score: 0,
      currentSong: '',
      currentPic: '',
      currentAuthor: '',
      currentYear: '',
      skipAnswer: false,
      isGameOver: false
    };
    this.changeSong = this.changeSong.bind(this);
    this._onPlay = this._onPlay.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSkip = this.handleSkip.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }

  componentDidMount() {
    setTimeout(() => this.setState({ class_parent: 'fullvh' }), 100);
    this.setState({ theme: this.props.match.params.theme });
  }

  changeSong() {
    if (this.state.numberCount === 'End') {
      this.setState({ isGameOver: true, answerState: false });
    }

    if (this.state.numberCount === 'Go' || this.state.numberCount === 'Next') {
      this.setState({ answerState: false, turn: this.state.turn + 1 });

      const { theme, turn } = this.state;
      let activeArr = arrThemes.filter(el => theme === Object.keys(el)[0]);
      activeArr = activeArr[0];
      activeArr = Object.values(activeArr)[0];
      activeArr = activeArr[turn];
      this.setState({
        answer: '',
        possibleAnswers: activeArr.answers,
        currentSong: activeArr.name,
        currentPic: activeArr.pic,
        currentAuthor: activeArr.author,
        currentYear: activeArr.year
      });

      this.setState({
        fakeDiv: 'fake-div-loading',
        numberCount: 'Loading',
        videoId: activeArr.url,
        classCount: 'loading'
      });
    }
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.setVolume(100);
  }

  _onPlay() {
    this.setState({
      fakeDiv: 'fake-div-playing',
      numberCount: 30,
      isPlaying: true,
      classCount: 'playing'
    });
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID); // jsp vraiment mais apparemment faut le garder dans l'exemple de l'horloge que j'ai cannibalisé
  }

  tick() {
    if (this.state.answerState === true && typeof this.state.numberCount !== 'number') {
      clearInterval(this.timerID);
      this.setState({ classCount: 'default' });
      this.setState({ score: this.state.scoreTemp + this.state.score }); //cumulation du score
    } else {
      this.state.isPlaying && this.state.numberCount > 0 // si le props startCount défini dans Game.js...
        ? this.state.numberCount <= 1 || this.state.numberCount === 'Next' // true : si le state number est inférieur ou égal à 0...
          ? this.handleSkip()
          : // true : ne pas toucher
            this.setState({ numberCount: this.state.numberCount - 1 }) // false : nombre - 1
        : this.setState({ numberCount: this.state.numberCount });
      this.setState({ scoreTemp: parseInt(this.state.numberCount) || 0 }); //memorise le compteur pour le score et mets 0 si string au lieu de number
    } // false : ne pas toucher
  }

  handleChange(event) {
    this.setState({ answer: event.target.value });
  }

  handleSkip(event) {
    if (
      this.state.numberCount === 'Next' ||
      this.state.numberCount === 'Loading' ||
      this.state.turn === 0
    ) {
      return;
    } else {
      if (this.state.turn === 10) {
        this.setState({
          answerState: true,
          numberCount: 'End',
          skipAnswer: false,
          wasItGoodAnswer: false,
          classCount: 'default'
        });
        this.setState({ scoreTemp: 0 });
      } else {
        this.setState({
          answerState: true,
          numberCount: 'Next',
          skipAnswer: false,
          wasItGoodAnswer: false,
          classCount: 'default'
        });
        this.setState({ scoreTemp: 0 });
      }
    }
  }

  handleSubmit(event) {
    for (let i = 0; i < this.state.possibleAnswers.length; i++) {
      if (this.state.answer === this.state.possibleAnswers[i]) {
        this.setState({ answerState: true, wasItGoodAnswer: true });
        if (this.state.turn === 10) {
          this.setState({
            numberCount: 'End',
            classCount: 'default'
          });
        } else {
          this.setState({ numberCount: 'Next', classCount: 'default' });
        }

        document.getElementById('input-answer').classList.add('goodAnswer');
        setTimeout(function() {
          document.getElementById('input-answer').classList.remove('goodAnswer');
        }, 1000);
      } else {
      }
    }
    if (this.state.answerState === false) {
      document.getElementById('input-answer').classList.add('wrongAnswer');
      setTimeout(function() {
        document.getElementById('input-answer').classList.remove('wrongAnswer');
      }, 1000);
    }
  }
  handleEnter() {
    this.handleSubmit();
    this.changeSong();
  }

  render() {
    return (
      <div className={this.state.class_parent}>
        <Title theme={this.state.theme} />
        <EndGame
          toggleEnd={this.state.isGameOver}
          nickname={this.props.match.params.nickname}
          score={this.state.score}
        />
        <Result
          isGood={this.state.wasItGoodAnswer}
          name={this.state.currentSong}
          author={this.state.currentAuthor}
          year={this.state.currentYear}
          picture={this.state.currentPic}
          toggle={this.state.answerState}
        />

        <div className="fake-div-parent">
          {/*fake divs importantes pour l'anim du loading*/}

          <div className={this.state.fakeDiv}></div>

          <CountDown
            onClick={() => this.changeSong('ZHapXKq0yOY')}
            className={this.state.classCount}
            number={this.state.numberCount}
          />
        </div>

        <div className="landscape-mode">
          <Answer
            parentMethodAnswer={this.handleChange}
            parentAnswer={this.state.answer}
            onKeyPressed={this.handleEnter}
          />

          <div className="row">
            <SkipBtn parentMethodSkip={this.handleSkip} />

            <ValidateBtn
              parentMethodValidate={this.handleSubmit}
              parentAnswer={this.state.answer}
              onKeyPressed={this.handleEnter}
            />
          </div>
        </div>

        <p className="nick">{this.props.match.params.nickname}</p>

        <Score
          transferSkipAnswer={this.state.skipAnswer}
          transferScore={this.state.score}
          transferAnswerState={this.state.answerState}
          transferTurnSong={this.state.turn}
        />

        <YouTube
          className="yt-hidden"
          videoId={this.state.videoId}
          opts={this.state.opts}
          onReady={this._onReady}
          onPlay={this._onPlay}
        />
      </div>
    );
  }
}

export default Game;
