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
                <label>Title: </label>
                <input type = 'text' name = 'title'/><br/>
                <label>Cover Art: </label>
                <input type = 'url' name = 'cover'/><br/>
                <label>Artist: </label>
                <input type = 'text' name = 'artist'/><br/>
                <label>Year: </label>
                <input type = 'number' name = 'year'/><br/>
                <label>Genre: </label>
                <input type = 'text' name = 'genre'/><br/>
                <input type = 'submit'/>
            </form>
        </div>
    )
}