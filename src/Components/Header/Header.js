import { Row, Col } from "react-bootstrap"
import style from "./Header.module.css"

const Header = ({title}) => {
    return(
        <Row>
            <Col>
                <p className={style.mane}>
                В списке дел {title} задач(и)
                </p>
            </Col>
        </Row>
    )
}

export default Header