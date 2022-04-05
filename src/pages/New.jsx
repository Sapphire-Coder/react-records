import { useNavigate } from 'react-router-dom'
import { createRecord } from '../services/records-api'

export default function New() {
    
    const navigate = useNavigate()

    const newRecord = e => {
        e.preventDefault()
        const record = {
            title: e.target.title.value,
            cover: e.target.cover.value,
            artist: e.target.artist.value,
            year: e.target.year.value,
            genre: e.target.genre.value
        }
        createRecord(record)
        navigate('/')
    }

    return (
        <div>
            <form onSubmit = {newRecord}>
                <input type = 'text' name = 'title' />
                <input type = 'url' name = 'cover' />
                <input type = 'text' name = 'artist' />
                <input type = 'number' name = 'year' />
                <input type = 'text' name = 'genre' />
                <input type = 'submit' />
            </form>
        </div>
    )
}