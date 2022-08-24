class LeftSide extends React.Component {
    render() {
        return(
        <aside id="word">
                <a>   DASHBOARD      </a>
                <a>   WIDGET         </a>
                <a>   REVIEWS        </a>
                <a>   CUSTOMERS      </a>
                <a>   ONLINE ANALYSIS</a>
                <a>   SETTINGS       </a>                
        </aside>
        )
    }
}

class Reviews extends React.Component {
    render() {
        return <section id="reviewBox">
                    <section id="word">REVIEWS <section id="num">1,281</section>
                    </section>
                </section>;
    }
}
class AvgRating extends React.Component {
    render() {
        return <section id="avgBox">
                    <section id="word">AVERAGE RATINGS <section id="num">4.6</section>
                    </section>
                </section>;
    }
}
class Sentiment extends React.Component {
    render() {
        return <section id="sentimentBox">
                    <section id="word">SENTIMENT ANALYSIS<section id="senNum">960 122 321</section>
                    </section>;
                </section>
    }
}
class WebVisitors extends React.Component {
    render() {
        return <section id="large">
            WEBSITE VISITORS <section id="num">821</section>
            <div>  </div>
        </section>
    }
}

class App extends React.Component {
    render() {
        return (
            <div id="app">
                <LeftSide />
                <div id="container">
                <div id="top">
                    <Reviews />
                    <AvgRating />
                    <Sentiment />
                </div>
                <WebVisitors />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('main'));

//run with: http-server -o