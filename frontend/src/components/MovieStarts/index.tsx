import { ReactComponent as StarFull } from 'assets/img/start-full.svg';
import { ReactComponent as StarHalf } from 'assets/img/start-half.svg';
import { ReactComponent as StarEmpty } from 'assets/img/start-empty.svg';
import './styles.css';

function MovieStarts() {

    return (
        <div className="dsmovie-stars-container">
            <StarFull />
            <StarFull />
            <StarFull />
            <StarHalf />
            <StarEmpty />
        </div>
    );
}

export default MovieStarts;
