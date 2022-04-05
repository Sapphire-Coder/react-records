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
                                <h2>{e.title}</h2>
                                <h2>{e.cover}</h2>
                                <img src = {`${e.cover}.jpg`} />
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