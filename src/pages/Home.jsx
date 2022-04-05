import { useEffect, useState } from 'react'
import { getRecords } from '../services/records-api'

export default function Home() {
    
    const [data, setData] = useState([])

    useEffect(() => {
        getRecords().then(res => setData(res.data))
    }, [])

    return (
        <div>
            <h1>Records</h1>
            <div id = 'container'>
                {
                    data.map((e, i ) => {
                        return (
                            <div key = {i}>
                                <a href = {`/${e._id}`}><h2>{e.title}</h2></a>
                                <img src = {e.cover} />
                                <h2>{e.artist}</h2>
                                <h2>{e.year}</h2>
                                <h2>{e.genre}</h2>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}