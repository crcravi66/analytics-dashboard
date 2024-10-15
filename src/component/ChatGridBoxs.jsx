// import Chart from './Chart'

import { cartTitles } from '../datas/data'
import { Link } from 'react-router-dom'
import LineChart from './LineChart'

const ChatGridBoxs = () => {

    return (
        <>
            <section className='chart-grid'>
                {cartTitles.map((data) => (
                    <Link key={data.id} to={`/analytics-dashboard/chart/${data.id}`} className="chart-link">
                        <div className="chart-container">
                            <div className="chart-title">{data.title}</div>
                            <div className="main-chat-box">
                                <div className="main-chat-box2">
                                    <LineChart data={data.data} options={data.options} chartType={data.chartType} />
                                </div>
                            </div>
                        </div>
                    </Link>
                ))
                }
            </section>
        </>
    )
}

export default ChatGridBoxs