import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { updateRecord, getRecord } from '../services/records-api'

export default function Edit() {

    const navigate = useNavigate()
    const { id } = useParams()
    const [data, setData] = useState({})

    useEffect(() => {
        getRecord(id).then(res => setData(res.data))
    }, [])

    const updRecord = e => {
        e.preventDefault()
        const record = {
            title: e.target.title.value,
            cover: e.target.cover.value,
            artist: e.target.artist.value,
            year: e.target.year.value,
            genre: e.target.genre.value
        }
        updateRecord(id, record)
        navigate(`/${id}`)
    }

    return (
        <div>
            <form onSubmit = {updRecord}>
                <input type = 'text' name = 'title' defaultValue = {data.title}/>
                <input type = 'text' name = 'cover' defaultValue = {data.cover}/>
                <input type = 'text' name = 'artist' defaultValue = {data.artist}/>
                <input type = 'number' name = 'year' defaultValue = {data.year}/>
                <input type = 'text' name = 'genre' defaultValue = {data.genre}/>
                <input type = 'submit' />
            </form>
        </div>
    )
}