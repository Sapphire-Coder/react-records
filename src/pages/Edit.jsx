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
                <label>Title: </label>
                <input type = 'text' name = 'title' defaultValue = {data.title}/><br/>
                <label>Cover Art: </label>
                <input type = 'text' name = 'cover' defaultValue = {data.cover}/><br/>
                <label>Artist: </label>
                <input type = 'text' name = 'artist' defaultValue = {data.artist}/><br/>
                <label>Year: </label>
                <input type = 'number' name = 'year' defaultValue = {data.year}/><br/>
                <label>Genre: </label>
                <input type = 'text' name = 'genre' defaultValue = {data.genre}/><br/>
                <input type = 'submit' />
            </form>
        </div>
    )
}