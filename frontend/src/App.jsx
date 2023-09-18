import hng from '../public/hng.jpg';


export default function App() {
  let date = new Date();
    date.getDay();
  
  const currentDayOfTheWeek = new Intl.DateTimeFormat(["en"], {
    weekday: "long" 
}).format(date);

const currentUTCTime = date.toUTCString().slice(16);  
  return (
    <main>
        <h1 data-testid="slackUserName"  ><span>Slack Name: </span> vincent6</h1>
        <img 
          data-testid="slackDisplayImage"
          alt="vincent6"            
          src={hng}
          className='w-40 h-50 rounded-xl hover:scale-105'
        />
        <p data-testid="currentDayOfTheWeek"><span>Current Day Of the Week: </span> 
          {currentDayOfTheWeek}
        </p>

        <p data-testid="currentUTCTime"><span>Current UTC time: </span> {currentUTCTime} </p>

        <p data-testid="myTrack"><span>Track: </span> FrontEnd</p>

        <a 
          data-testid="githubURL" 
          href="https://github.com/vince4559/hngx_1" 
          target="_blank">
            Github URL
        </a>
      </main>
  )
}