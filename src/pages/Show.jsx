import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { deleteRecord, getRecord } from '../services/records-api'

export default function Show() {
    
    const navigate = useNavigate()
    const { id } = useParams()
    const [data, setData] = useState({})
    
    useEffect(() => {
        getRecord(id).then(res => setData(res.data))
    }, [])

    const delRecord = () => {
        deleteRecord(id)
        navigate('/')
    }

    return (
        <div id = 'shPage'>
            <h1>{data.title}</h1>
            <img src = {data.cover} />
            <h2>Artist: {data.artist}</h2>
            <h2>Year: {data.year}</h2>
            <h2>Genre: {data.genre}</h2>
            <button onClick = {delRecord}>Delete</button> <br/>
            <button onClick={() => navigate(`/${id}/edit`)}>Edit</button>
        </div>
    )
}